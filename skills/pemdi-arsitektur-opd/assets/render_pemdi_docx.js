#!/usr/bin/env node
/*
 * render_pemdi_docx.js — Renderer dokumen formal Arsitektur Pemdi OPD.
 *
 * Pakai:
 *   node render_pemdi_docx.js <input.md> <output.docx> [config.json]
 *
 * Menghasilkan .docx resmi: sampul, kata pengantar, daftar isi (tabel judul|nomor
 * dengan nomor halaman akurat via dua-lintasan), nomor halaman footer, tabel berformat.
 *
 * Daftar Isi memakai TABEL dua kolom tanpa garis (bukan tab/PositionalTab): nomor
 * halaman ada di sel rata-kanan tersendiri sehingga selalu terender di LibreOffice
 * untuk semua panjang judul. Lihat catatan di fungsi daftarIsi().
 *
 * Sumber kebenaran tetap markdown. Skrip ini hanya me-render. Jalankan ulang
 * kapan pun markdown berubah.
 *
 * config.json (semua opsional; kalau kosong diturunkan dari dokumen):
 *   { "opd_name", "perbup_line", "perbup_title", "kabupaten", "provinsi",
 *     "year", "logo_path", "tim_penyusun" }
 *
 * Dependensi: node + paket `docx`. Untuk nomor halaman akurat: `soffice`
 * (LibreOffice) + `pdftotext` (poppler). Kalau keduanya tidak ada, skrip
 * fallback ke Word TOC field (pengguna tekan F9 di Word untuk mengisi nomor).
 *
 * Konvensi markdown yang didukung: # judul; ## BAB/bagian; ### subbagian
 * (yang diawali angka x.y masuk daftar isi); #### sub-sub; tabel pipa; list
 * - dan 1.; **tebal**; `penanda` (dirender merah, mis. [ISI:], [TERVALIDASI:]);
 * --- diabaikan. Blok judul (## NAMA OPD + ### KABUPATEN + tabel metadata) di
 * atas "## BAB"/"## CATATAN" pertama dianggap sampul+identitas, bukan isi.
 */

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, BorderStyle, AlignmentType, PageBreak, Footer, PageNumber,
  ShadingType, TableLayoutType,
  NumberFormat, VerticalAlign, ImageRun, TableOfContents
} = require('docx');

// ---------- config & CLI ----------
const [,, IN, OUT, CFG] = process.argv;
if (!IN || !OUT) {
  console.error('Pakai: node render_pemdi_docx.js <input.md> <output.docx> [config.json]');
  process.exit(1);
}
const md = fs.readFileSync(IN, 'utf8');
const cfg = CFG && fs.existsSync(CFG) ? JSON.parse(fs.readFileSync(CFG, 'utf8')) : {};

// ---------- style tokens (satu tempat, ubah di sini untuk seluruh dokumen) ----------
const STYLE = {
  navy: '1F3864', navyLight: 'F2F5FB', redmark: 'C00000', grey: '595959',
  bodyFont: 'Times New Roman', headFont: 'Arial',
  bodySize: 22, tableSize: 18, // half-points
  contentW: 9638, // A4, margin 2cm
  pageW: 11906, pageH: 16838, margin: 1134
};

// ---------- derive cover fields ----------
function deriveMeta() {
  const lines = md.split('\n');
  const h2 = lines.find(l => l.startsWith('## '));
  const opd_name = cfg.opd_name || (h2 ? h2.slice(3).trim() : 'PERANGKAT DAERAH');
  // perbup dari baris metadata "Dasar Struktur" (ambil teks tebal pertama)
  let perbup_line = cfg.perbup_line || '';
  if (!perbup_line) {
    const row = lines.find(l => /dasar struktur/i.test(l));
    if (row) { const m = row.match(/\*\*(.+?)\*\*/); if (m) perbup_line = m[1].trim(); }
  }
  const kabRow = lines.find(l => /Kabupaten [A-Z]/.test(l));
  const kabMatch = kabRow && kabRow.match(/Kabupaten [A-Z][A-Za-z ]+?(?=\b(?:Provinsi|\||$))/);
  return {
    opd_name,
    perbup_line: perbup_line || '[ISI: dasar hukum]',
    perbup_title: cfg.perbup_title || 'tentang Kedudukan, Susunan Organisasi, Tugas dan Fungsi, serta Tata Kerja Perangkat Daerah',
    kabupaten: cfg.kabupaten || (kabMatch ? kabMatch[0].trim() : 'Kabupaten Hulu Sungai Selatan'),
    provinsi: cfg.provinsi || 'Provinsi Kalimantan Selatan',
    year: cfg.year || new Date().getFullYear(),
    logo_path: cfg.logo_path || null,
    tim_penyusun: cfg.tim_penyusun || 'Tim Penyusun Arsitektur Pemdi'
  };
}
const META = deriveMeta();

// ---------- helpers ----------
const sanitize = t => t.replace(/ [—–] /g, ', ').replace(/[—–]/g, '-');
function parseInline(text, base = {}) {
  text = sanitize(text); const runs = []; let i = 0;
  const push = (s, e = {}) => { if (s) runs.push(new TextRun({ text: s, font: STYLE.bodyFont, ...base, ...e })); };
  while (i < text.length) {
    if (text.startsWith('**', i)) { const e = text.indexOf('**', i + 2); if (e !== -1) { runs.push(new TextRun({ text: text.slice(i + 2, e), bold: true, font: STYLE.bodyFont, ...base })); i = e + 2; continue; } }
    if (text[i] === '`') { const e = text.indexOf('`', i + 1); if (e !== -1) { runs.push(new TextRun({ text: text.slice(i + 1, e), color: STYLE.redmark, font: STYLE.bodyFont, ...base })); i = e + 1; continue; } }
    let nx = text.length; const b = text.indexOf('**', i); const c = text.indexOf('`', i);
    if (b !== -1) nx = Math.min(nx, b); if (c !== -1) nx = Math.min(nx, c);
    push(text.slice(i, nx)); i = nx;
  }
  return runs.length ? runs : [new TextRun({ text: '', font: STYLE.bodyFont, ...base })];
}
const stripInline = t => sanitize(t).replace(/\*\*/g, '').replace(/`/g, '');

// ---------- markdown -> blocks ----------
function parseBlocks() {
  const lines = md.split('\n'); const blocks = [];
  let firstBody = lines.findIndex(l => /^## (CATATAN|BAB )/.test(l));
  if (firstBody === -1) firstBody = lines.findIndex((l, i) => l.startsWith('## ') && i > 0 && !lines.slice(0, i).some(x => x.startsWith('## ')) ? false : l.startsWith('## '));
  if (firstBody === -1) firstBody = 0;
  const front = lines.slice(0, firstBody);
  const introTable = front.filter(l => l.trim().startsWith('|'));
  if (introTable.length) { blocks.push({ type: 'h2', text: 'IDENTITAS DOKUMEN', toc: true, level: 1 }); blocks.push(parseTable(introTable)); }
  let i = firstBody;
  while (i < lines.length) {
    const line = lines[i]; if (line === undefined) break; const t = line.trim();
    if (t === '' || t === '---') { i++; continue; }
    if (line.startsWith('#### ')) { blocks.push({ type: 'h4', text: line.slice(5).trim() }); i++; continue; }
    if (line.startsWith('### ')) { const x = line.slice(4).trim(); blocks.push({ type: 'h3', text: x, toc: /^\d+\.\d+/.test(stripInline(x)), level: 2 }); i++; continue; }
    if (line.startsWith('## ')) { blocks.push({ type: 'h2', text: line.slice(3).trim(), toc: true, level: 1 }); i++; continue; }
    if (t.startsWith('|')) { const tb = []; while (i < lines.length && lines[i].trim().startsWith('|')) { tb.push(lines[i]); i++; } blocks.push(parseTable(tb)); continue; }
    if (/^[-*] /.test(t)) { const it = []; while (i < lines.length && /^\s*[-*] /.test(lines[i])) { it.push(lines[i].replace(/^\s*[-*] /, '').trim()); i++; } blocks.push({ type: 'ul', items: it }); continue; }
    if (/^\d+\. /.test(t)) { const it = []; while (i < lines.length && /^\s*\d+\. /.test(lines[i])) { it.push(lines[i].replace(/^\s*\d+\.\s/, '').trim()); i++; } blocks.push({ type: 'ol', items: it }); continue; }
    blocks.push({ type: 'p', text: t }); i++;
  }
  return blocks;
}
function parseTable(tb) {
  const rows = tb.map(r => r.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim()));
  const clean = rows.filter(r => !r.every(c => /^:?-+:?$/.test(c)));
  return { type: 'table', headers: clean[0], rows: clean.slice(1) };
}

// ---------- docx elements ----------
function heading(text, level) {
  const size = { 1: 28, 2: 24, 3: 22 }[level] || 22;
  return new Paragraph({
    outlineLevel: level - 1, keepNext: true,
    spacing: { before: level === 1 ? 320 : 220, after: 120 },
    children: [new TextRun({ text: stripInline(text), bold: true, color: STYLE.navy, size, font: STYLE.headFont })],
    ...(level === 1 ? { border: { bottom: { color: STYLE.navy, size: 6, style: BorderStyle.SINGLE, space: 4 } } } : {})
  });
}
const body = text => new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { after: 120, line: 276 }, children: parseInline(text, { size: STYLE.bodySize }) });
const list = (items, ordered) => items.map((it, idx) => new Paragraph({
  alignment: AlignmentType.JUSTIFIED, spacing: { after: 80, line: 264 }, indent: { left: 460, hanging: 260 },
  children: [new TextRun({ text: ordered ? `${idx + 1}. ` : '•  ', size: STYLE.bodySize, font: STYLE.bodyFont }), ...parseInline(it, { size: STYLE.bodySize })]
}));
function table(headers, rows) {
  const n = headers.length, colW = Math.floor(STYLE.contentW / n), widths = Array(n).fill(colW), tW = colW * n;
  const bd = { style: BorderStyle.SINGLE, size: 4, color: '999999' };
  const borders = { top: bd, bottom: bd, left: bd, right: bd, insideHorizontal: bd, insideVertical: bd };
  const head = new TableRow({ tableHeader: true, children: headers.map((h, k) => new TableCell({
    width: { size: widths[k], type: WidthType.DXA }, shading: { type: ShadingType.CLEAR, fill: STYLE.navy, color: 'auto' },
    margins: { top: 40, bottom: 40, left: 80, right: 80 }, verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({ spacing: { after: 0, line: 240 }, children: [new TextRun({ text: stripInline(h), bold: true, color: 'FFFFFF', size: STYLE.tableSize, font: STYLE.headFont })] })]
  })) });
  const brows = rows.map((r, ri) => new TableRow({ children: Array.from({ length: n }, (_, k) => new TableCell({
    width: { size: widths[k], type: WidthType.DXA }, shading: ri % 2 ? { type: ShadingType.CLEAR, fill: STYLE.navyLight, color: 'auto' } : undefined,
    margins: { top: 30, bottom: 30, left: 80, right: 80 },
    children: [new Paragraph({ spacing: { after: 0, line: 232 }, children: parseInline(r[k] !== undefined ? r[k] : '', { size: STYLE.tableSize }) })]
  })) }));
  return new Table({ columnWidths: widths, width: { size: tW, type: WidthType.DXA }, layout: TableLayoutType.FIXED, borders, rows: [head, ...brows] });
}

// ---------- cover / front matter ----------
function cover() {
  const gap = (n = 1) => Array(n).fill(new Paragraph({ children: [] }));
  const C = (runs, opts = {}) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: runs, ...opts });
  const out = [...gap(2)];
  if (META.logo_path && fs.existsSync(META.logo_path)) {
    const ext = path.extname(META.logo_path).slice(1).toLowerCase();
    out.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new ImageRun({ type: ext === 'jpg' ? 'jpg' : ext, data: fs.readFileSync(META.logo_path), transformation: { width: 90, height: 120 } })] }));
  }
  out.push(
    C([new TextRun({ text: `PEMERINTAH ${META.kabupaten.toUpperCase()}`, bold: true, size: 26, font: STYLE.headFont, color: STYLE.navy })]),
    C([new TextRun({ text: META.provinsi.toUpperCase(), size: 22, font: STYLE.headFont, color: STYLE.grey })]),
    ...gap(3),
    new Paragraph({ alignment: AlignmentType.CENTER, border: { bottom: { color: STYLE.navy, size: 12, style: BorderStyle.SINGLE, space: 8 } }, children: [] }),
    ...gap(1),
    C([new TextRun({ text: 'DOKUMEN ARSITEKTUR', bold: true, size: 36, font: STYLE.headFont, color: STYLE.navy })], { spacing: { after: 60 } }),
    C([new TextRun({ text: 'PEMERINTAHAN DIGITAL (PEMDI)', bold: true, size: 36, font: STYLE.headFont, color: STYLE.navy })], { spacing: { after: 60 } }),
    C([new TextRun({ text: 'TINGKAT PERANGKAT DAERAH', size: 24, font: STYLE.headFont, color: STYLE.grey })]),
    ...gap(1),
    new Paragraph({ alignment: AlignmentType.CENTER, border: { top: { color: STYLE.navy, size: 12, style: BorderStyle.SINGLE, space: 8 } }, children: [] }),
    ...gap(2),
    C([new TextRun({ text: META.opd_name.toUpperCase(), bold: true, size: 40, font: STYLE.headFont, color: '000000' })]),
    ...gap(4),
    C([new TextRun({ text: 'Disusun berdasarkan', size: 20, font: STYLE.bodyFont, italics: true, color: STYLE.grey })], { spacing: { after: 40 } }),
    C([new TextRun({ text: META.perbup_line, size: 22, font: STYLE.bodyFont, bold: true })]),
    C([new TextRun({ text: META.perbup_title, size: 20, font: STYLE.bodyFont })]),
    ...gap(3),
    C([new TextRun({ text: 'Kerangka Enam Domain Arsitektur SPBE (Perpres 132/2022)', size: 20, font: STYLE.bodyFont, color: STYLE.grey })], { spacing: { after: 40 } }),
    C([new TextRun({ text: 'Bahan Masukan Sistem Informasi Arsitektur SPBE (SIA-SPBE)', size: 20, font: STYLE.bodyFont, color: STYLE.grey })]),
    new Paragraph({ children: [new PageBreak()] })
  );
  return out;
}
function kataPengantar() {
  const out = [heading('KATA PENGANTAR', 1)];
  const P = [
    `Dokumen Arsitektur Pemerintahan Digital (Pemdi) tingkat Perangkat Daerah ini disusun sebagai bagian dari upaya membangun keterpaduan penyelenggaraan Sistem Pemerintahan Berbasis Elektronik (SPBE) di lingkungan Pemerintah ${META.kabupaten}. Dokumen ini memetakan kondisi arsitektur ${META.opd_name} pada enam domain yang saling terkait, yaitu proses bisnis, data dan informasi, layanan, aplikasi, infrastruktur, dan keamanan, dengan mengacu pada kerangka Peraturan Presiden Nomor 132 Tahun 2022 tentang Arsitektur SPBE Nasional serta kerangka evaluasi kematangan Indeks Pemdi (Peraturan Menteri PANRB Nomor 8 Tahun 2026).`,
    `Penyusunan dokumen ini didasarkan pada sumber hukum primer, yaitu ${META.perbup_line}. Metadata setiap domain diselaraskan dengan field resmi Sistem Informasi Arsitektur SPBE (SIA-SPBE) agar dokumen dapat langsung dijadikan bahan masukan ke portal nasional.`,
    `Dokumen ini merupakan draf kondisi terkini (As-is) yang masih memerlukan validasi lapangan pada sejumlah butir teknis, yang ditandai secara terbuka di dalam naskah. Masukan dan koreksi dari seluruh pemangku kepentingan sangat diharapkan untuk penyempurnaan sebelum dokumen ditetapkan secara formal.`
  ];
  P.forEach(p => out.push(body(p)));
  out.push(new Paragraph({ spacing: { before: 360 }, alignment: AlignmentType.RIGHT, children: [new TextRun({ text: `Kandangan, ${META.year}`, size: STYLE.bodySize, font: STYLE.bodyFont })] }));
  out.push(new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { after: 40 }, children: [new TextRun({ text: META.tim_penyusun, size: STYLE.bodySize, font: STYLE.bodyFont })] }));
  out.push(new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: `${META.opd_name} ${META.kabupaten}`, size: STYLE.bodySize, font: STYLE.bodyFont, italics: true, color: STYLE.grey })] }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}
function daftarIsi(toc, pageMap, dynamic) {
  const out = [heading('DAFTAR ISI', 1)];
  if (dynamic) { out.push(new TableOfContents('Daftar Isi', { hyperlink: true, headingStyleRange: '1-3' })); out.push(new Paragraph({ children: [new PageBreak()] })); return out; }
  // Daftar Isi dibangun sebagai TABEL dua kolom tanpa garis (judul | nomor).
  // Alasan (hasil uji LibreOffice):
  //  - PositionalTab (w:ptab) RIGHT: LibreOffice tidak merender teks sesudahnya
  //    -> nomor halaman hilang, Daftar Isi tampak blank.
  //  - Tab-stop RIGHT + dot leader: nomor hilang untuk judul PANJANG (teks judul
  //    melewati posisi tab, tab jadi tak berfungsi).
  //  - Tabel dua kolom: nomor ada di sel sendiri (rata-kanan) -> terender andal
  //    untuk semua panjang judul. Di portrait A4 nomor jatuh ~530pt (aman render).
  const NOBD = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  const noBorders = { top: NOBD, bottom: NOBD, left: NOBD, right: NOBD, insideHorizontal: NOBD, insideVertical: NOBD };
  const numW = 760, titleW = STYLE.contentW - numW;
  const rows = toc.map(e => {
    const label = stripInline(e.text); const pg = pageMap ? String(pageMap[e.key] || '') : '';
    const sz = e.level === 1 ? 22 : 20; const clr = e.level === 1 ? STYLE.navy : '000000';
    return new TableRow({ children: [
      new TableCell({ width: { size: titleW, type: WidthType.DXA }, borders: noBorders,
        margins: { top: 30, bottom: 30, left: e.level === 2 ? 360 : 0, right: 60 },
        children: [new Paragraph({ spacing: { after: 0, line: 264 }, children: [new TextRun({ text: label, size: sz, bold: e.level === 1, font: STYLE.bodyFont, color: clr })] })] }),
      new TableCell({ width: { size: numW, type: WidthType.DXA }, borders: noBorders,
        margins: { top: 30, bottom: 30, left: 0, right: 0 },
        children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { after: 0, line: 264 }, children: [new TextRun({ text: pg, size: sz, bold: e.level === 1, font: STYLE.bodyFont, color: clr })] })] })
    ] });
  });
  out.push(new Table({ columnWidths: [titleW, numW], width: { size: STYLE.contentW, type: WidthType.DXA }, layout: TableLayoutType.FIXED, borders: noBorders, rows }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}
function bodyEls(blocks) {
  const out = [];
  for (const b of blocks) {
    if (b.type === 'h2') out.push(heading(b.text, 1));
    else if (b.type === 'h3') out.push(heading(b.text, 2));
    else if (b.type === 'h4') out.push(heading(b.text, 3));
    else if (b.type === 'p') out.push(body(b.text));
    else if (b.type === 'ul') list(b.items, false).forEach(p => out.push(p));
    else if (b.type === 'ol') list(b.items, true).forEach(p => out.push(p));
    else if (b.type === 'table') { out.push(table(b.headers, b.rows)); out.push(new Paragraph({ spacing: { after: 80 }, children: [] })); }
  }
  return out;
}

function buildDoc(blocks, toc, pageMap, dynamic) {
  const footer = new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], size: 18, font: STYLE.bodyFont, color: STYLE.grey })] })] });
  const pg = { size: { width: STYLE.pageW, height: STYLE.pageH }, margin: { top: STYLE.margin, bottom: STYLE.margin, left: STYLE.margin, right: STYLE.margin } };
  return new Document({
    creator: META.tim_penyusun, title: `Arsitektur Pemdi ${META.opd_name}`,
    features: dynamic ? { updateFields: true } : undefined,
    sections: [
      { properties: { page: pg }, children: cover() },
      { properties: { page: { ...pg, pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL } } }, footers: { default: footer },
        children: [...kataPengantar(), ...daftarIsi(toc, pageMap, dynamic), ...bodyEls(blocks)] }
    ]
  });
}

// ---------- toolchain detection ----------
function have(bin) { try { execSync(`command -v ${bin}`, { stdio: 'ignore' }); return true; } catch { return false; } }
const SOFFICE = ['soffice', 'libreoffice'].find(have);
const HAS_PDFTOTEXT = have('pdftotext');

// ---------- main ----------
async function main() {
  const blocks = parseBlocks();
  const toc = blocks.filter(b => b.toc).map((b, i) => ({ key: 'k' + i + '_' + stripInline(b.text).slice(0, 40), text: b.text, level: b.level }));

  if (!SOFFICE || !HAS_PDFTOTEXT) {
    console.warn('[peringatan] soffice/pdftotext tidak lengkap. Fallback ke Word TOC field (buka di Word lalu tekan Ctrl+A, F9 untuk isi nomor halaman).');
    const doc = buildDoc(blocks, toc, null, true);
    fs.writeFileSync(OUT, await Packer.toBuffer(doc));
    console.log('OK (fallback dynamic TOC):', OUT); return;
  }

  // pass 1: placeholder
  const tmp = path.join(path.dirname(OUT), '._pemdi_pass1');
  fs.writeFileSync(tmp + '.docx', await Packer.toBuffer(buildDoc(blocks, toc, null, false)));
  execSync(`${SOFFICE} --headless --convert-to pdf --outdir "${path.dirname(OUT)}" "${tmp}.docx"`, { stdio: 'ignore' });
  execSync(`pdftotext "${tmp}.pdf" "${tmp}.txt"`, { stdio: 'ignore' });

  // extract page numbers (printed page = 0-based PDF index; cover = index 0, unnumbered)
  const pages = fs.readFileSync(tmp + '.txt', 'utf8').split('\f').map(s => s.replace(/\s+/g, ' ').trim().toLowerCase());
  const pageMap = {};
  for (const e of toc) { const k = stripInline(e.text).replace(/\s+/g, ' ').trim().toLowerCase(); let f = ''; pages.forEach((p, i) => { if (p.includes(k)) f = i; }); pageMap[e.key] = f; }

  // pass 2: real numbers
  fs.writeFileSync(OUT, await Packer.toBuffer(buildDoc(blocks, toc, pageMap, false)));
  ['.docx', '.pdf', '.txt'].forEach(x => { try { fs.unlinkSync(tmp + x); } catch {} });
  console.log('OK (static TOC, nomor halaman akurat):', OUT);
}
main().catch(e => { console.error(e); process.exit(1); });
