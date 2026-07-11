# Template Gaya Dokumen Formal Arsitektur Pemdi OPD

> Acuan gaya tunggal untuk output `.docx` resmi skill `pemdi-arsitektur-opd`.
> Semua nilai di sini tercermin di objek `STYLE` pada `assets/render_pemdi_docx.js`.
> Ubah gaya cukup di satu tempat itu; berkas ini adalah dokumentasi kontraknya.

## 1. Struktur Wajib Dokumen

Urutan bagian, tidak boleh berubah:

1. **Sampul** (tanpa nomor halaman). Blok: nama pemerintah kabupaten, provinsi, garis aksen, judul besar "DOKUMEN ARSITEKTUR PEMERINTAHAN DIGITAL (PEMDI)", subjudul "TINGKAT PERANGKAT DAERAH", nama OPD (besar), dasar hukum Perbup, catatan kerangka SPBE dan SIA-SPBE. Slot logo opsional di atas nama pemerintah.
2. **Kata Pengantar** (halaman bernomor mulai 1). Empat paragraf baku, diakhiri blok tanda tangan kanan (Kandangan, tahun; tim penyusun; nama OPD).
3. **Daftar Isi** sebagai tabel dua kolom tanpa garis (judul | nomor halaman rata-kanan) dengan nomor halaman akurat.
4. **Isi**: Identitas Dokumen, Catatan Pembuka (jika ada), lalu BAB I sampai penutup (enam domain).

## 2. Token Gaya (design tokens)

| Token | Nilai | Pemakaian |
|---|---|---|
| Warna aksen (navy) | `#1F3864` | Judul, garis sampul, header tabel, entri BAB di daftar isi |
| Warna arsir baris genap | `#F2F5FB` | Baris tabel selang-seling |
| Warna penanda | `#C00000` | Teks dalam backtick: `[ISI:]`, `[TERVALIDASI:]`, `[USULAN CLAUDE:]` |
| Warna sekunder (abu) | `#595959` | Subjudul sampul, footer, catatan kecil |
| Font isi | Times New Roman | Paragraf, sel tabel |
| Font judul/heading | Arial | Semua heading, header tabel, blok sampul |
| Ukuran isi | 11 pt | Paragraf |
| Ukuran tabel | 9 pt | Sel dan header tabel |
| Ukuran heading | 14 / 12 / 11 pt | BAB / subbagian / sub-sub |
| Ukuran halaman | A4 (11906 x 16838 DXA) | Semua |
| Margin | 2 cm (1134 DXA) semua sisi | Semua |
| Lebar konten | 9638 DXA | Lebar tabel dan tab stop daftar isi |

## 3. Aturan Formatting (keras, bukan saran)

1. **Tanpa em dash dan en dash.** Generator otomatis mengganti " — " jadi ", " dan sisanya jadi "-". Tetap tulis markdown tanpa em/en dash agar hasil bersih.
2. **Penanda status diberi warna merah**, bukan sekadar teks biasa, supaya butir terbuka (`[ISI:]`) mudah ditemukan pembaca. Ditulis dalam backtick di markdown.
3. **Nomor halaman daftar isi wajib akurat**, dihasilkan lewat dua-lintasan (render, ekstrak, isi ulang), bukan Word TOC field yang kosong sampai F9. Fallback ke TOC field hanya jika toolchain render tidak tersedia.
4. **Sampul tidak bernomor**; penomoran halaman mulai dari 1 pada Kata Pengantar.
5. **Tabel**: header navy teks putih tebal, baris genap diarsir, border abu tipis di semua sisi, lebar kolom dibagi rata dari lebar konten.
6. **Heading BAB** diberi garis bawah navy tipis; subbagian tidak.

## 4. Konvensi Markdown Sumber (agar generator memetakan benar)

Generator membaca markdown sebagai sumber kebenaran. Markdown yang dihasilkan skill harus mengikuti konvensi ini:

- `# ` judul dokumen (satu, diabaikan generator, dipakai konteks).
- Blok judul: `## NAMA OPD` lalu `### KABUPATEN ...`, diikuti tabel metadata identitas, semuanya sebelum `## CATATAN` atau `## BAB` pertama. Generator memperlakukan blok ini sebagai bahan sampul dan Identitas Dokumen, bukan isi.
- Baris metadata `Dasar Struktur` memuat Perbup dalam **tebal**; generator menariknya untuk sampul dan kata pengantar.
- `## ` untuk BAB dan bagian utama (masuk daftar isi, level 1).
- `### ` untuk subbagian; yang diawali pola angka `x.y` masuk daftar isi (level 2), yang tidak, tidak.
- `#### ` untuk sub-sub (tidak masuk daftar isi).
- Tabel pipa standar dengan baris pemisah `|---|`.
- List `- ` dan `1. `; **tebal**; backtick untuk penanda status.

## 5. Metadata yang Bisa Diturunkan Otomatis vs Perlu Config

Generator menurunkan sendiri: nama OPD (dari `## ` pertama), dasar hukum Perbup (dari baris `Dasar Struktur`), kabupaten (dari teks "Kabupaten ..."), tahun (tahun berjalan).

Perlu `config.json` hanya jika ingin menimpa: `opd_name`, `perbup_line`, `perbup_title`, `kabupaten`, `provinsi`, `year`, `logo_path` (path PNG/JPG lambang daerah), `tim_penyusun`.
