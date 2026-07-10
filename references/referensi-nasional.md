# Referensi Arsitektur SPBE Nasional — Kerangka 6 Domain

> Referensi kerangka nasional untuk penyusunan Arsitektur SPBE/Pemdi tingkat Perangkat Daerah, berlaku untuk kabupaten/kota manapun. Statis dan universal.
> Sumber utama: Perpres 95/2018 (SPBE) dan Perpres 132/2022 (Arsitektur SPBE Nasional 2020-2024).
> **Catatan validitas:** Perpres 132/2022 secara eksplisit berlaku untuk periode 2020-2024. Per Juli 2026 belum ditemukan revisi resmi pengganti untuk periode berikutnya dalam penelusuran awal — perlu verifikasi langsung ke KemenPANRB/Komdigi sebelum dijadikan rujukan final. Kerangka evaluasi kematangan sudah bergeser ke Permenpan 8/2026 (lihat `regulasi-pemdi-2026.md`), tapi domain teknis (6 domain di bawah) tetap merujuk Perpres 132/2022.

---

## 1. Definisi Inti

**Arsitektur SPBE** = kerangka dasar yang mendeskripsikan integrasi 5 elemen — proses bisnis, data & informasi, aplikasi, infrastruktur, keamanan — untuk menghasilkan layanan SPBE yang terpadu. Merupakan penerapan *Enterprise Architecture* dengan kekhasan Indonesia (**id.EA**).

**3 lingkup penerapan** (berjenjang):
1. Arsitektur SPBE Nasional — ditetapkan Presiden (Perpres)
2. Arsitektur SPBE Instansi Pusat — ditetapkan pimpinan instansi, mengacu ke nasional
3. Arsitektur SPBE Pemerintah Daerah — ditetapkan Kepala Daerah, mengacu ke nasional, berlaku 5 tahun, direviu di paruh waktu & tahun terakhir

**2 komponen wajib** di setiap lingkup:
- **Referensi Arsitektur** — kamus/klasifikasi baku (Tingkat 1-2 ditetapkan nasional)
- **Domain Arsitektur** — substansi konkret (Tingkat 3-4 didefinisikan sendiri oleh Instansi Pusat/Pemda, wajib direlasikan ke Tingkat 1-2)

## 2. Mengapa Arsitektur Ini Ada (Latar Belakang)

- Indeks SPBE nasional 2020: **2,26** (skala 5, level "Cukup")
- Rata-rata Pemda: **2,14** — jauh di bawah Instansi Pusat (2,90)
- **59%** instansi (pusat+daerah) masih di bawah predikat "Baik" (<2,60)
- Diagnosis: penerapan SPBE berjalan **silo** — sistem, data, dan server dibangun sendiri-sendiri tanpa saling terhubung → duplikasi anggaran TIK dan sistem tumpang tindih
- Arsitektur SPBE Nasional dibuat untuk memaksa keterpaduan lintas Instansi Pusat dan Pemda

## 3. Kerangka Kerja SPBE (posisi Arsitektur di antara komponen lain)

```
Visi dan Misi SPBE
       ↓
Tujuan dan Sasaran SPBE
       ↓
   ARSITEKTUR SPBE  ← (Referensi Arsitektur + Domain Arsitektur + Metadata Arsitektur)
       ↓
   Manajemen SPBE
       ↓
   Tata Kelola SPBE
```

Arsitektur adalah 1 dari 10 unsur SPBE (rencana induk, arsitektur, peta rencana, rencana anggaran, proses bisnis, data, infrastruktur, aplikasi, keamanan, layanan) — semua diikat oleh Tata Kelola SPBE.

## 4. Peta 6 Domain × 6 Referensi

| Referensi Arsitektur | Domain Arsitektur | Kelompok |
|---|---|---|
| Ref. Proses Bisnis | Domain Proses Bisnis | 🔴 Layanan Digital Terintegrasi |
| Ref. Data & Informasi | Domain Data & Informasi | 🔴 Layanan Digital Terintegrasi |
| Ref. Layanan SPBE | Domain Layanan SPBE | 🔴 Layanan Digital Terintegrasi |
| Ref. Aplikasi SPBE | Domain Aplikasi SPBE | 🔵 Dukungan TIK Terintegrasi |
| Ref. Infrastruktur SPBE | Domain Infrastruktur SPBE | 🔵 Dukungan TIK Terintegrasi |
| Ref. Keamanan SPBE | Domain Keamanan SPBE | 🔵 Dukungan TIK Terintegrasi |

- **Kelompok merah** (Proses Bisnis + Data & Informasi + Layanan) → menjawab *layanan apa* yang dihasilkan pemerintah
- **Kelompok biru** (Aplikasi + Infrastruktur + Keamanan) → menjawab *teknologi apa* yang menopangnya
- Data & Informasi = jembatan: lahir dari Proses Bisnis, disimpan di Infrastruktur, diakses lewat Aplikasi

Pola struktur tingkat per domain (kecuali disebutkan lain): **Tingkat 1 → Tingkat 2 → Tingkat 3 → Tingkat 4**, dengan **T1-T2 baku nasional**, **T3-T4 didefinisikan Instansi Pusat/Pemda**.

---

## 5. Daftar Lengkap Tingkat 1-2 (Konteks Pusat / Kamus Baku Nasional)

### 5.1 Referensi Arsitektur Proses Bisnis — 9 Sektor → 46 Urusan (dengan kode)

| Sektor (T1) | Urusan Pemerintahan (T2) dengan kode |
|---|---|
| 01. Pertahanan dan Luar Negeri | 01.01 Pertahanan; 01.02 Hubungan Luar Negeri |
| 02. Ekonomi dan Industri | 02.01 Industri; 02.02 Perdagangan; 02.03 Pertanian; 02.04 Perkebunan; 02.05 Peternakan; 02.06 Perikanan; 02.07 Badan Usaha Milik Negara; 02.08 Investasi; 02.09 Koperasi; 02.10 Usaha Kecil dan Menengah; 02.11 Pariwisata |
| 03. Pembangunan Kewilayahan | 03.01 Pekerjaan Umum; 03.02 Transmigrasi; 03.03 Transportasi; 03.04 Perumahan; 03.05 Pembangunan Kawasan atau Daerah; 03.06 Pertanahan; 03.07 Kependudukan |
| 04. Perlindungan Sosial dan Kesehatan | 04.01 Kesehatan; 04.02 Sosial; 04.03 Pemberdayaan Perempuan |
| 05. Ketertiban Umum dan Keselamatan | 05.01 Hukum; 05.02 Keamanan; 05.03 Hak Asasi Manusia |
| 06. Pendidikan dan Tenaga Kerja | 06.01 Pendidikan; 06.02 Ketenagakerjaan; 06.03 Ilmu Pengetahuan dan Teknologi; 06.04 Pemuda; 06.05 Olahraga |
| 07. Lingkungan dan Sumber Daya Alam | 07.01 Pertambangan; 07.02 Energi; 07.03 Kehutanan; 07.04 Kelautan; 07.05 Lingkungan Hidup |
| 08. Budaya dan Agama | 08.01 Agama; 08.02 Kebudayaan |
| 09. Pemerintahan Umum | 09.01 Dalam Negeri; 09.02 Keuangan; 09.03 Informasi; 09.04 Komunikasi; 09.05 Perencanaan Pembangunan; 09.06 Aparatur Negara; 09.07 Kesekretariatan Negara |

> **Penting**: daftar RAB (46 urusan nasional) ini **berbeda** dari 32 urusan konkuren UU 23/2014 yang jadi basis kewenangan kab/kota. RAB disusun sekitar fungsi pemerintah pusat; konkuren disusun untuk otonomi daerah. Untuk memetakan OPD kab/kota (basis konkuren) ke kode RAB (yang diminta SIA-SPBE), lihat **Crosswalk** di `matriks-urusan-uu23-2014.md`.

### 5.2 Referensi Arsitektur Data & Informasi — 10 Data Pokok → 50 Data Tematik

Struktur T1-09 mencerminkan 1:1 struktur Sektor/Urusan di atas (setiap Urusan punya "Data [nama urusan]" pasangannya). Tambahan khusus domain data:

| Data Pokok (T1) | Data Tematik (T2) |
|---|---|
| 01-09 | *(paralel dengan Proses Bisnis — Data Kesehatan, Data Sosial, Data Pendidikan, dst.)* |
| **10. Data Pendukung Umum** | Data Kebijakan Pemerintah; Data Manajemen Kegiatan; Data Kewilayahan; Data Dukung Lainnya |

*(4 tematik tambahan di Data Pokok 10 inilah yang membuat totalnya 50, bukan 46 seperti Proses Bisnis.)*

### 5.3 Referensi Arsitektur Layanan SPBE — 2 Domain → 54 Area

| Domain Layanan (T1) | Area Layanan (T2) |
|---|---|
| Layanan Publik (G2C/G2B) | 45 area — mengikuti seluruh urusan pemerintahan yang bersentuhan langsung dengan masyarakat/dunia usaha, plus area gabungan (Kenegaraan, Ekonomi, Perizinan dan Akreditasi, Pemerintahan Daerah, dll.) |
| Layanan Administrasi Pemerintahan (G2G/G2E) | 9 area — Dalam Negeri, Keuangan, Perencanaan Pembangunan Nasional, Aparatur Negara, Kesekretariatan Negara, Dukungan Operasional Organisasi, Akuntabilitas Kinerja, Organisasi dan Tata Kelola, Data & Informasi Pemerintahan |

### 5.4 Referensi Arsitektur Aplikasi SPBE — 2 Domain → 4 Area

| Domain Aplikasi (T1) | Area Aplikasi (T2) |
|---|---|
| Aplikasi Umum (shared services, wajib bagi-pakai) | Aplikasi Umum Layanan Publik; Aplikasi Umum Administrasi Pemerintahan |
| Aplikasi Khusus (dipakai vertikal, instansi tertentu) | Aplikasi Khusus Misi Tertentu; Aplikasi Khusus Fungsi Tertentu |

> **Catatan klasifikasi:** aplikasi yang dibangun sendiri oleh suatu Pemda untuk kebutuhan lokal (mis. aplikasi kepegawaian lokal, portal layanan daerah, sistem informasi internal OPD) termasuk kategori **Aplikasi Khusus Pemda**, bukan Aplikasi Umum. Aplikasi Umum hanya yang ditetapkan Menteri PANRB untuk dipakai berbagi pakai lintas instansi (lihat `matriks-aplikasi-spbe.md`).

### 5.5 Referensi Arsitektur Infrastruktur SPBE — semua 3 tingkat baku nasional

| Domain Infrastruktur (T1) | Kategori (T2) |
|---|---|
| Fasilitas Komputasi | Pusat Data Nasional; Pusat Komputasi; Pusat Kendali |
| Sistem Integrasi | Jaringan Intra Pemerintah; Sistem Penghubung Layanan (SPL) Pemerintah |
| Platform | Kerangka Infrastruktur & Aplikasi; Komputasi Awan (IaaS/PaaS/SaaS + BdaaS + SecaaS) |

### 5.6 Referensi Arsitektur Keamanan SPBE — semua 2 tingkat baku nasional

| Domain Keamanan (T1) | Area Keamanan (T2) |
|---|---|
| Standar Keamanan; Penerapan Keamanan; Kelaikan Keamanan | Terhadap Data & Informasi; Terhadap Aplikasi SPBE; Terhadap Infrastruktur SPBE |

Program kerja keamanan minimal mencakup: edukasi kesadaran, identifikasi kerentanan, peningkatan keamanan, penanganan insiden, audit keamanan (1x/tahun untuk aplikasi umum & infrastruktur nasional; 1x/2tahun untuk aplikasi khusus Pusat/Pemda).

---

## 6. Keterkaitan Nasional ↔ Instansi Pusat ↔ Pemda (pola berulang di semua domain)

- **T1 & T2** → ditetapkan nasional, jadi kamus baku yang sama untuk semua
- **T3 & T4** → didefinisikan sendiri oleh Instansi Pusat/Pemda, wajib direlasikan ke T1-T2 di atasnya

Analog dengan pola cascading kinerja SAKIP (RPJMN → RPJMD → Renstra OPD) — bedanya objek yang di-cascade di sini adalah klasifikasi proses bisnis, data, layanan, dan aplikasi, bukan indikator kinerja.

**[KOREKSI]** Pasal 4 Perpres 132/2022 hanya mengatur bahwa "Penerapan dan pengelolaan Arsitektur SPBE Pemerintah Daerah diselenggarakan oleh kepala daerah, **koordinator SPBE Pemerintah Daerah**, dan/atau tim koordinasi SPBE Pemerintah Daerah" — **satu koordinator/tim generik**, tanpa memecah domain ke OPD tertentu (Bagian Organisasi/Bappeda/Diskominfo). Dicek langsung ke teks Perpres 132/2022: kata "Bappeda", "organisasi dan tata laksana", dan "Sekretariat Daerah" **tidak muncul sama sekali** di seluruh lampirannya. Mekanisme pembagian tanggung jawab yang benar-benar diatur Perpres ini adalah **"Wali Layanan"** (Pasal 1 angka 8) — instansi pusat (mis. Menteri Keuangan untuk data keuangan negara, Kepala BRIN untuk data geospasial) yang bertanggung jawab atas Aplikasi Umum nasional, bukan pembagian domain antar-OPD di tingkat kabupaten/kota.

**Pola pembagian berikut ini adalah praktik umum yang diamati di berbagai Pemda (bukan mandat eksplisit Perpres 132/2022)** — biasanya diatur lebih lanjut lewat Perkada/SOTK masing-masing daerah, karena selaras dengan tusi alami tiap unit:
- **Bagian Organisasi (Setda)** → lazim menjadi koordinator penyusunan Domain Proses Bisnis (selaras fungsi ketatalaksanaan)
- **Bappeda/Bapperida** → lazim menjadi koordinator Domain Data & Informasi (selaras fungsi perencanaan & Satu Data)
- **Diskominfo** → lazim menjadi koordinator Domain Infrastruktur, Aplikasi, Keamanan, dan Layanan SPBE (selaras fungsi TIK)

**Implikasi praktis**: pola ini tetap masuk akal dipakai sebagai kerangka kerja default, tapi harus dikutip sebagai "praktik umum lintas-Pemda" — **bukan** "sesuai Perpres 132/2022" — dan tetap perlu dikonfirmasi ke Perkada/SOTK aktual Pemda yang bersangkutan apakah pembagian koordinator ini yang benar-benar berlaku di sana.

## 7. Alat Bantu Resmi

- **SIA SPBE (Sistem Informasi Arsitektur) V-2** — portal wajib untuk menyusun & mengelola arsitektur secara nasional-terpadu. Kalau sebuah Pemda belum pernah input data ke SIA SPBE, artinya Arsitektur SPBE/Pemdi-nya belum terdokumentasi formal sesuai standar evaluasi RB — walau substansi sistemnya mungkin sudah berjalan.

## 8. Dasar Hukum Terkait (kronologis)

| Regulasi | Perihal |
|---|---|
| Perpres 95/2018 | SPBE (induk) |
| Perpres 132/2022 | Arsitektur SPBE Nasional 2020-2024 |
| SE Menteri PANRB 18/2022 | Keterpaduan Layanan Digital Nasional — wajib arsitektur & peta rencana SPBE per Desember 2022 |
| Permenpan-RB 19/2018 | Peta Proses Bisnis |
| Permenpan-RB 5/2020 | Pedoman Manajemen Risiko SPBE |
| Permenpan-RB 59/2020 | Pemantauan dan Evaluasi SPBE |
| Perpres 39/2019 | Satu Data Indonesia |
| Perpres 82/2023 | Percepatan Transformasi Digital dan Keterpaduan Layanan Digital Nasional |
| Komdigi 6/2025 | Standar Teknis dan Prosedur Pembangunan dan Pengembangan Aplikasi SPBE |
| Komdigi 5/2025 | Penyelenggara Sistem Elektronik Lingkup Publik |
| Komdigi 11/2025 | Juklak/Juknis Jabatan Fungsional Pengendali Sistem Elektronik & Data, Penata Kelola Informatika SPBE |
| BSSN 8/2024 | Standar dan Tata Cara Audit Keamanan SPBE |
| BRIN 1/2024 | Standar dan Tata Cara Audit Infrastruktur dan Aplikasi SPBE |
| BRIN 2/2024 | Pedoman Manajemen Pengetahuan SPBE |

---

## 9. Titik Kritis

1. **Gap regulasi periode 2025-2029** — Perpres 132/2022 secara eksplisit terikat periode 2020-2024. Perlu verifikasi apakah sudah ada revisi/pengganti resmi sebelum dijadikan rujukan tunggal. Kerangka evaluasi sudah bergeser ke Permenpan 8/2026 (Indeks Pemdi), tapi domain teknis 6 lapis tetap dari Perpres 132/2022.
2. **SIA SPBE sebagai bukti formal** — substansi sistem yang sudah berjalan di sebuah Pemda tidak otomatis berarti Arsitektur SPBE/Pemdi-nya formal; status formal tergantung apakah sudah terdaftar dan terdokumentasi di SIA SPBE.
3. **Aplikasi buatan Pemda = Aplikasi Khusus**: sistem yang dibangun sendiri oleh Pemda dipetakan ke Domain Aplikasi sebagai Aplikasi Khusus Pemda, direlasikan ke Referensi Layanan dan Data terkait. Ini bisa jadi bahan draf Arsitektur SPBE/Pemdi Pemda yang bersangkutan.
4. **Kaitan ke kesiapan AI**: dimensi kesiapan arsitektur SPBE (6 domain di atas) adalah prasyarat struktural sebelum bicara kesiapan AI daerah — layak dipertimbangkan sebagai salah satu aspek penilaian kematangan.

---

*Referensi kerangka nasional. Universal untuk kabupaten/kota manapun. Perlu update berkala mengikuti regulasi baru dari KemenPANRB/Komdigi.*
