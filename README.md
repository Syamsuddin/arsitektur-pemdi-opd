# pemdi-arsitektur-opd

![Arsitektur Pemdi](assets/banner-skill.png)

**Skill Claude untuk menyusun Arsitektur SPBE/Pemdi tingkat Perangkat Daerah (OPD), universal untuk seluruh kabupaten/kota di Indonesia.**

Selaras dengan dasar hukum terbaru — UU 23/2014 (Pemerintahan Daerah), Perpres 132/2022 (Arsitektur SPBE Nasional), dan Permenpan RB 8/2026 (Indeks Pemdi) — skill ini memetakan **6 domain arsitektur** satu Perangkat Daerah.

[![Made for Claude](https://img.shields.io/badge/Made%20for-Claude-D97757?logo=anthropic&logoColor=white)](https://claude.ai)
[![Claude Skill](https://img.shields.io/badge/Claude-Skill-8A63D2?logo=anthropic&logoColor=white)](https://claude.ai)
![Version](https://img.shields.io/badge/version-1.3.0-blue)
![License: MIT](https://img.shields.io/badge/license-MIT-green)
![SPBE / Pemdi](https://img.shields.io/badge/SPBE-Pemdi-0A66C2)
![Pemerintah Daerah](https://img.shields.io/badge/Pemerintah-Daerah-critical)
![Bahasa](https://img.shields.io/badge/lang-Indonesia-red)
![Status](https://img.shields.io/badge/status-active-brightgreen)

---

## Daftar Isi

1. [Tentang Skill Ini](#tentang-skill-ini)
2. [Untuk Siapa](#untuk-siapa)
3. [Konteks: Beban Kerja Nyata ASN Pemkab](#konteks-beban-kerja-nyata-asn-pemkab)
4. [Apa yang Dihasilkan](#apa-yang-dihasilkan)
5. [Fitur Utama](#fitur-utama)
6. [Cakupan dan Batasan](#cakupan-dan-batasan)
7. [Arsitektur Skill](#arsitektur-skill)
8. [Prasyarat dan Instalasi](#prasyarat-dan-instalasi)
9. [Cara Penggunaan](#cara-penggunaan)
10. [Prinsip Desain](#prinsip-desain)
11. [Dasar Regulasi](#dasar-regulasi)
12. [Riwayat Versi](#riwayat-versi)
13. [Keterbatasan yang Diketahui](#keterbatasan-yang-diketahui)
14. [Lisensi](#lisensi)
15. [Kontak](#kontak)
16. [Atribusi](#atribusi)

---

## Tentang Skill Ini

Setiap pemerintah kabupaten/kota wajib menyusun Arsitektur SPBE (kini disebut Pemdi) untuk memetakan proses bisnis, data, layanan, aplikasi, infrastruktur, dan keamanan secara terpadu. Dalam praktiknya, tugas ini seringkali jatuh pada punggung staf pelaksana atau pejabat fungsional yang merangkap, dengan tenggat waktu pendek dan kejelasan persyaratan minimal.

Skill ini menjadi pendamping penyusunan tersebut. Ia sudah memuat kerangka regulasi nasional, matriks urusan pemerintahan, metodologi proses bisnis, dan struktur metadata resmi portal arsitektur nasional. Tujuannya membantu menyelesaikan dokumen lebih cepat, tetap selaras dengan standar, dan transparan tentang bagian mana yang masih memerlukan validasi lapangan.

Tujuan utamanya sederhana: mempercepat penyusunan dokumen arsitektur OPD, menjaganya tetap selaras dengan regulasi dan format portal nasional, serta jujur membedakan mana yang sudah pasti dan mana yang masih perlu dikonfirmasi.

## Untuk Siapa

Skill ini ditujukan untuk praktisi transformasi digital pemerintah daerah, antara lain tim SPBE/Pemdi Diskominfo, Bagian Organisasi Setda, koordinator SPBE daerah, konsultan tata kelola pemerintahan, dan auditor yang mempertanyakan arsitektur eksisting.

Skill bersifat Pemda-agnostik: tidak terikat pada satu kabupaten/kota tertentu, sehingga dapat dipakai di daerah manapun. Skill juga order-agnostic: pemetaan dapat dimulai dari OPD manapun tanpa urutan tertentu.

## Konteks: Beban Kerja Nyata ASN Pemkab

Di balik dokumen "Arsitektur SPBE" yang formal, ada realita meja kerja yang jarang ditulis di panduan resmi. Skill ini dirancang bukan dari ruang kelas kebijakan, tapi dari pengamatan langsung terhadap kondisi lapangan:

- **Tugas ini sering "menempel" pada jabatan yang bukan aslinya.** Penyusun Arsitektur SPBE/Pemdi di banyak OPD adalah staf pelaksana atau pejabat fungsional yang merangkap jadi admin/operator SPBE, dengan beban kerja utama yang sudah penuh.
- **Tenggat datang mendadak, biasanya menjelang evaluasi.** Penyusunan sering dikebut dalam hitungan hari menjelang penilaian Indeks SPBE/Pemdi oleh Kemenpan RB, kunjungan tim evaluator, atau permintaan kepala daerah.
- **Diskominfo harus menagih ke puluhan OPD dengan pemahaman yang timpang.** Tim SPBE Diskominfo kerap merangkap wasit sekaligus pemadam kebakaran: mengumpulkan input dari Dinas, Badan, Kecamatan, harus memahami lalu memvalidasi, sering kali berhadapan dengan resistensi atau ketidakpahaman.
- **Mutasi dan rotasi ASN menghapus jejak institusional.** Ketika penyusun lama dimutasi atau pensiun, dokumen dan pemahaman konteksnya sering ikut hilang, dan penyusun baru mulai dari nol lagi. Mekanisme pewarisan pengetahuan minim.
- **Dokumen sering berakhir jadi salin-tempel tahun lalu.** Tanpa kerangka yang konsisten, cara tercepat menghadapi tenggat adalah menyalin dokumen tahun sebelumnya lalu mengganti tanggal, yang berisi data kadaluarsa atau tidak akurat.
- **Bahasa regulasi dan bahasa kantor sering tidak nyambung.** Dasar hukum (UU 23/2014, PP 18/2016) ditulis dalam bahasa legal-normatif yang tidak otomatis bisa dipetakan ke nama bidang/seksi/aplikasi di lapangan.

Skill ini tidak menghapus tanggung jawab substansi ASN penyusun. Ia memindahkan waktu mereka dari "mulai dari kertas kosong dan bingung format resmi" ke "meninjau, memvalidasi data lapangan, dan mengambil keputusan".

## Apa yang Dihasilkan

Untuk satu OPD, skill menyusun dokumen arsitektur yang mencakup enam domain:

1. **Proses Bisnis** — tugas dan proses kerja OPD, diklasifikasikan Inti, Manajemen, dan Pendukung, lengkap dengan pemetaan titik integrasi ke OPD lain (metode SIPOC).
2. **Data dan Informasi** — data yang dikelola, produsen dan wali datanya, serta sifat keterbukaannya.
3. **Layanan SPBE** — layanan yang diberikan, klasifikasi publik atau administrasi, dan kanal penyampaiannya.
4. **Aplikasi SPBE** — aplikasi yang dipakai, diklasifikasikan sebagai Aplikasi Umum, Aplikasi Khusus Kementerian/Lembaga, atau Aplikasi Khusus Pemda.
5. **Infrastruktur SPBE** — lokasi hosting dan status kepemilikan perangkat pendukung.
6. **Keamanan SPBE** — risiko dan kontrol, dipetakan ke tujuh objek keamanan resmi.

Setiap domain diisi mengikuti nama field metadata resmi portal SIA-SPBE, sehingga hasilnya dapat langsung dipakai sebagai bahan input ke portal `arsitektur.spbe.go.id`.

## Fitur Utama

- **Klasifikasi tipe OPD otomatis.** Skill membedakan OPD tipe Dinas (pelaksana urusan konkuren) dari OPD non-Dinas (Badan penunjang, Sekretariat, Inspektorat, Kecamatan, Kesbangpol) dan memilih jalur derivasi sesuai jenisnya.
- **Matriks urusan lengkap.** Seluruh 32 urusan pemerintahan konkuren UU 23/2014 sudah terverifikasi dan siap dipakai.
- **Crosswalk ke kode nasional.** Tiap urusan konkuren dipetakan ke kode Referensi Arsitektur Proses Bisnis (RAB) Perpres 132/2022, menutup celah terjemahan antara basis legal daerah dan klasifikasi portal nasional.
- **Keselarasan metadata portal.** Output mengisi nama field resmi per domain sesuai Manual SIA-SPBE.
- **Memori kerja lintas-OPD (Dosir).** Skill menyimpan status kumulatif pemetaan seluruh OPD dalam satu Pemda, termasuk prediksi titik integrasi antar-OPD.
- **Perencanaan To-be dan Katalog Gap.** Skill dapat menyusun kondisi ideal dan kesenjangan, dengan disiplin membedakan gap yang teramati dari fakta, rujukan normatif dari aturan, dan keputusan kebijakan.
- **Disiplin anti-fabrikasi.** Data yang belum tervalidasi ditandai dengan penanda `[ISI: ...]`, bukan diisi dengan tebakan. Dalam perencanaan, usulan skill yang belum dikonfirmasi ditandai `[USULAN CLAUDE, belum dikonfirmasi: ...]` — berbeda tegas dari `[ISI:]`.

## Cakupan dan Batasan

Agar harapan tepat, berikut yang dilakukan dan yang tidak dilakukan skill ini.

**Yang dilakukan:**

- Menyusun arsitektur As-is (kondisi saat ini) untuk satu OPD atau menyintesis lintas-OPD tingkat Pemda.
- Menyusun arsitektur To-be (kondisi ideal) dan Katalog Gap sebagai alat perencanaan, dengan disiplin membedakan gap teramati, rujukan normatif, dan keputusan kebijakan.
- Menurunkan proses bisnis dari urusan pemerintahan secara metodologis.
- Mengisi struktur metadata resmi sebagai bahan input portal.
- Menandai secara jujur bagian yang perlu data lapangan.

**Yang tidak dilakukan (per versi ini):**

- Belum menyusun Peta Strategi dan Peta Rencana penuh (domain Tata Kelola). Bahan mentahnya (objek Kegiatan dari Katalog Gap) sudah disiapkan, tetapi penyusunan Visi/Misi/Sasaran/IKU belum diimplementasikan.
- Tidak menghasilkan diagram visual (BPMN, ArchiMate). Output berupa dokumen teks terstruktur.
- Tidak menggantikan verifikasi lapangan. Nomor peraturan, spesifikasi teknis, dan nilai yang bersifat lokal tetap harus dikonfirmasi oleh pengguna.

## Arsitektur Skill

Skill terdiri dari satu berkas instruksi utama, sembilan berkas referensi, dan satu templat.

```
pemdi-arsitektur-opd/
├── SKILL.md                          Instruksi utama dan alur kerja empat mode
├── README.md                         Berkas ini
├── CLAUDE.md                         Panduan penulisan untuk Claude Code
├── references/
│   ├── referensi-nasional.md         Kerangka 6 domain + tabel RAB berkode (Perpres 132/2022)
│   ├── matriks-urusan-uu23-2014.md   32 urusan konkuren + crosswalk ke kode RAB
│   ├── matriks-proses-bisnis.md      Jembatan sub-urusan ke proses bisnis konkret
│   ├── metodologi-probis.md          Kerangka penyusunan proses bisnis (Permenpan 19/2018)
│   ├── matriks-aplikasi-spbe.md      Klasifikasi aplikasi Umum dan Khusus
│   ├── pola-integrasi-pasangan.md    Pola titik integrasi antar-OPD
│   ├── tipe-opd-non-dinas.md         Jalur derivasi untuk OPD non-Dinas
│   ├── metadata-sia-spbe.md          Nama field metadata resmi per domain (portal SIA-SPBE)
│   ├── regulasi-pemdi-2026.md        Permenpan 8/2026 (Indeks Pemdi)
│   └── kerangka-tobe-gap.md          Metodologi To-be dan Katalog Gap (Mode PERENCANAAN)
└── assets/
    ├── dosir-template.json           Templat memori kerja lintas-OPD
    └── banner-skill.png              Gambar banner skill
```

### Empat Mode Kerja

- **PEMETAAN** menyusun arsitektur As-is satu OPD dari awal.
- **SINTESIS** menggabungkan hasil pemetaan banyak OPD menjadi gambaran tingkat Pemda, termasuk katalog titik integrasi dan peta data sensitif.
- **KOREKSI** memperbaiki dokumen yang sudah ada ketika muncul informasi baru, sambil mencatat riwayat koreksinya secara transparan.
- **PERENCANAAN** menyusun arsitektur To-be dan Katalog Gap di atas As-is yang sudah ada, mengubah skill dari pendokumentasi menjadi alat perencanaan strategis.

### Alur Mode PEMETAAN

1. **Langkah 1.0 — Klasifikasi tipe OPD.** Menentukan apakah OPD bertipe Dinas atau non-Dinas, karena keduanya memakai jalur derivasi berbeda.
2. **Langkah 1a/1b (Dinas)** menurunkan urusan konkuren ke proses bisnis konkret, atau **jalur non-Dinas** mengambil proses bisnis dari referensi tipe OPD penunjang.
3. **Langkah 2 — Regulasi SOTK riil.** Mencari Peraturan Bupati/Wali Kota tentang struktur organisasi OPD, atau meminta pengguna mengunggahnya, untuk mendapat struktur bidang dan seksi yang sebenarnya.
4. **Langkah 3 — Susun enam domain.** Menyusun keenam domain dengan mengisi nama field metadata resmi SIA-SPBE dan mengisi kolom referensi nasional dari crosswalk.
5. **Langkah 4 — Pola integrasi.** Mengidentifikasi titik integrasi antar-OPD berdasarkan kesamaan data atau proses.
6. **Langkah 5 — Dosir.** Memperbarui memori kerja dan menyajikannya sebagai berkas untuk disimpan pengguna di sesi berikutnya.

### Mekanisme Dosir (Memori Kerja Lintas-Sesi)

Dosir adalah berkas ringkas JSON yang menyimpan status kumulatif: OPD yang sudah dipetakan, titik integrasi, fakta tervalidasi, dan catatan koreksi metodologis. Karena setiap sesi percakapan dimulai dari nol, persistensi bergantung pada pola unggah-ulang: pengguna menyimpan Dosir di akhir sesi, lalu mengunggahnya kembali di sesi berikutnya untuk melanjutkan.

## Prasyarat dan Instalasi

Skill ini dapat dipasang dengan dua cara: mengunggah berkas `.skill` melalui Claude.ai atau Claude Desktop, atau menarik langsung repositori GitHub ke `~/.claude/skills/` untuk Claude Code (CLI).

### Cara 1 — Claude.ai / Claude Desktop (berkas `.skill`)

Unggah berkas `pemdi-arsitektur-opd.skill` melalui pengaturan skill pada akun Claude Anda. Setelah terpasang, skill akan aktif secara otomatis ketika permintaan Anda berkaitan dengan penyusunan arsitektur SPBE/Pemdi.

Ketersediaan menu pemasangan skill dapat berbeda menurut jenis paket akun. Jika menu tidak muncul, fitur mungkin perlu diaktifkan lebih dulu oleh admin workspace Anda.

### Cara 2 — Claude Code (CLI), langsung dari GitHub

Untuk memasang skill ini di Claude Code lengkap dengan seluruh berkas referensi, `clone` repositori GitHub lalu salin isinya ke direktori skill milik Claude Code:

```bash
# 1. Clone repositori ke lokasi sementara
git clone https://github.com/Syamsuddin/arsitektur-pemdi-opd.git /tmp/arsitektur-pemdi-opd

# 2. Buat direktori skill tujuan (jika belum ada)
mkdir -p ~/.claude/skills/pemdi-arsitektur-opd

# 3. Salin seluruh berkas (SKILL.md, README.md, references/, assets/), kecuali metadata git
rsync -a --exclude='.git' --exclude='.DS_Store' /tmp/arsitektur-pemdi-opd/ ~/.claude/skills/pemdi-arsitektur-opd/

# 4. Bersihkan berkas sementara
rm -rf /tmp/arsitektur-pemdi-opd
```

Setelah langkah di atas, direktori `~/.claude/skills/pemdi-arsitektur-opd/` akan berisi `SKILL.md`, `CLAUDE.md`, `README.md`, `LICENSE`, seluruh sembilan berkas di `references/`, dan `assets/` (termasuk `banner-skill.png`).

Untuk memperbarui ke versi terbaru di kemudian hari, ulangi keempat langkah tersebut; isi direktori skill akan ditimpa dengan versi terbaru dari GitHub.

## Cara Penggunaan

**Memetakan satu OPD.** Sebutkan nama Pemda dan OPD dalam permintaan biasa. Contoh:

> Tolong susun Arsitektur Pemdi untuk Dinas Perhubungan Kabupaten Hulu Sungai Selatan.

**Meningkatkan akurasi.** Jika memiliki Peraturan Bupati/Wali Kota tentang SOTK OPD tersebut, unggah ke percakapan. Struktur asli akan dipakai menggantikan pola umum.

**Menggabungkan hasil.** Setelah beberapa OPD dipetakan, unggah Dosir lalu minta sintesis:

> Buat sintesis arsitektur tingkat Pemda dari semua OPD yang sudah saya petakan.

**Mengoreksi dokumen.** Ketika ada informasi baru:

> Ada info baru, Dinas ini ternyata dipecah menjadi dua. Tolong perbaiki dokumennya.

**Menyimpan Dosir.** Di akhir setiap sesi, simpan berkas Dosir yang diberikan skill. Unggah kembali di sesi berikutnya agar riwayat pemetaan dan prediksi integrasi tetap terjaga.

**Melengkapi penanda ISI.** Perhatikan tanda `[ISI: ...]` pada dokumen hasil. Tanda ini menunjukkan bagian yang membutuhkan data lapangan asli, misalnya nomor peraturan terbaru atau spesifikasi teknis aplikasi yang dipakai di OPD Anda.

## Prinsip Desain

Empat prinsip menjadi ciri khas skill ini.

**Jujur di atas lengkap.** Skill lebih memilih menandai `[ISI: ...]` daripada mengisi dengan tebakan yang terdengar meyakinkan. Nilai enumerasi metadata yang tidak dapat diverifikasi dari sumber resmi tidak dimunculkan.

**Legitimasi legal didahulukan.** Untuk OPD Dinas, matriks urusan konkuren UU 23/2014 menjadi dasar utama, bukan pola generik dari pengalaman. Ketika keduanya berbeda, dasar legal menang, dan perbedaan dicatat sebagai temuan.

**Batasi digitalisasi.** Skill tidak mengasumsikan semua hal harus didigitalkan. Untuk data sensitif seperti data intelijen, kewaspadaan dini, atau audit investigatif, skill merekomendasikan pembatasan atau pengelolaan offline.

**Transparansi koreksi.** Ketika terjadi kesalahan atau pemahaman berkembang, koreksi dicatat secara eksplisit, bukan dihapus diam-diam. Riwayat koreksi justru dipertahankan untuk membangun kepercayaan dan pembelajaran institusional.

## Dasar Regulasi

- **UU 23/2014** tentang Pemerintahan Daerah (32 urusan konkuren).
- **Perpres 95/2018** tentang SPBE.
- **Perpres 132/2022** tentang Arsitektur SPBE Nasional (kerangka 6 domain, Referensi Arsitektur Proses Bisnis).
- **Permenpan 19/2018** tentang penyusunan proses bisnis pemerintahan.
- **Permenpan 8/2026** tentang Indeks Pemdi (kerangka evaluasi kematangan).
- **PP 18/2016** tentang Perangkat Daerah (klasifikasi tipe OPD).
- **Manual dan Pedoman Teknis SIA-SPBE** (portal `arsitektur.spbe.go.id`) sebagai acuan metadata per domain.

## Riwayat Versi

- **v1.3.0** — Mode PERENCANAAN: penyusunan arsitektur To-be dan Katalog Gap dengan disiplin tiga kategori (gap teramati, rujukan normatif, keputusan kebijakan) dan kaidah usulan bertanda `[USULAN CLAUDE, belum dikonfirmasi: ...]`.
- **v1.2.2** — Crosswalk 32 urusan konkuren ke kode RAB Perpres 132/2022, dan pelengkapan kode urusan dua-bagian pada tabel RAB.
- **v1.2.1** — Verifikasi metadata dari PDF resmi bergambar: infrastruktur dilengkapi menjadi 12 objek, disertai koreksi anti-fabrikasi atas nilai enumerasi yang sempat tercatat tanpa sumber resmi.
- **v1.2** — Keselarasan output dengan metadata resmi SIA-SPBE per domain.
- **v1.1** — Sepuluh perbaikan pasca-review, termasuk penambahan jalur OPD non-Dinas dan penegasan mekanisme Dosir unggah-ulang.
- **v1.0** — Versi awal: tiga mode, matriks 32 urusan, metodologi proses bisnis, kerangka enam domain.

## Keterbatasan yang Diketahui

- **Peta Strategi dan Peta Rencana penuh belum tersedia.** Mode PERENCANAAN sudah menghasilkan To-be dan Katalog Gap, tetapi penyusunan Peta Strategi (Visi/Misi/Sasaran/IKU) dan Peta Rencana penuh ada di roadmap versi mendatang.
- **Nilai enumerasi metadata belum lengkap.** Nama field metadata resmi sudah lengkap untuk semua domain, tetapi daftar nilai pilihannya sebagian masih perlu diverifikasi langsung di portal SIA-SPBE.
- **Delapan urusan pada crosswalk perlu konfirmasi portal.** Trantibumlinmas, Pangan, Pemberdayaan Masyarakat dan Desa, Keluarga Berencana, Statistik, Persandian, Perpustakaan, dan Kearsipan tidak memiliki rekam portal SIA-SPBE resmi per 2026.
- **Persistensi Dosir bergantung pada pengguna.** Kesinambungan antar-sesi mengandalkan pengguna menyimpan dan mengunggah ulang Dosir; tidak ada penyimpanan server otomatis.

## Lisensi

Dirilis di bawah **Lisensi MIT**. Anda bebas menggunakan, menyalin, memodifikasi, dan mendistribusikan skill ini, termasuk untuk keperluan komersial, dengan tetap menyertakan pemberitahuan hak cipta dan lisensi.

Lihat berkas `LICENSE` untuk teks lengkap.

## Kontak

**Penyusun:** Syamsuddin, S.Pd, MM, GCIO  
**Email:** syamsuddin.ideris@gmail.com  
**Lokasi:** Pemkab Hulu Sungai Selatan, Provinsi Kalimantan Selatan, Indonesia 71271

Untuk pertanyaan teknis, saran perbaikan, atau laporan bug, hubungi melalui email di atas atau buka issue di repositori GitHub ini.

## Atribusi

Dikembangkan oleh Syamsuddin melalui PT Nusa Smart Teknologi (NUSTEK), Kandangan, Hulu Sungai Selatan, Kalimantan Selatan.

Skill ini bersifat universal dan tidak memuat data spesifik satu Pemda pada berkas referensinya. Contoh yang muncul dalam pengembangan bersifat ilustratif dan tetap memerlukan verifikasi lapangan sebelum digunakan sebagai dasar keputusan.

---

**Terima kasih telah menggunakan skill ini. Semoga mempercepat dan meningkatkan kualitas penyusunan Arsitektur SPBE/Pemdi di daerah Anda.**
