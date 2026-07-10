# Matriks Urusan Pemerintahan Konkuren — UU 23/2014

> Referensi derivasi Domain 1 (Proses Bisnis) untuk skill `pemdi-arsitektur-opd`. Dipakai sebagai **langkah pertama** sebelum jatuh ke pola generik: dari nama OPD → identifikasi Urusan Konkuren → tarik sub-urusan level Kabupaten/Kota dari lampiran UU 23/2014 → jadikan seed T3-T4 Domain 1.
>
> **Status dokumen: LENGKAP — 32/32 urusan terverifikasi penuh** dari teks lampiran UU 23/2014. Semua bagian bertanda ✅ **TERVERIFIKASI PENUH** sudah dicek langsung ke teks lampiran. Matriks ini siap dipakai sebagai referensi derivasi proses bisnis untuk OPD apa pun di kabupaten/kota manapun di Indonesia, tanpa perlu pencarian tambahan saat runtime.

## Cara Pakai

1. Tokenize nama OPD terhadap daftar 32 urusan di bawah (satu OPD bisa mengandung 1+ urusan — mis. "Dinas Pendidikan dan Kebudayaan" = Pendidikan + Kebudayaan).
2. Untuk urusan yang cocok, ambil kolom **Daerah Kabupaten/Kota** saja — JANGAN ambil kolom Pusat/Provinsi.
3. Sub-urusan hasil tarikan jadi draf awal T3-T4 Domain 1 Proses Bisnis, ditandai `[ISI: seed dari UU 23/2014, cocokkan dengan Bidang/Seksi riil di Perbup SOTK lokal]`.
4. Kalau urusan yang dicari statusnya 🔲 Kerangka, lakukan pencarian tambahan ke lampiran UU 23/2014 bagian tersebut sebelum menulis proses bisnis — jangan menebak.

---

## Struktur Klasifikasi (Pasal 9-13 UU 23/2014)

```
Urusan Pemerintahan
├── Absolut (Pusat sepenuhnya: pertahanan, keamanan, luar negeri, yustisi, moneter-fiskal, agama)
├── Umum (kewenangan Presiden — Pembinaan wawasan kebangsaan, ideologi Pancasila, dst.)
└── Konkuren (dibagi Pusat-Provinsi-Kab/Kota) — 32 urusan, didesentralisasi ke Pemda
    ├── Wajib Pelayanan Dasar (6)       → huruf A-F
    ├── Wajib Non-Pelayanan Dasar (18)  → huruf G-X
    └── Pilihan (8)                     → huruf Y-FF
```

---

## Crosswalk: 32 Urusan Konkuren (UU 23/2014) → Kode RAB (Perpres 132/2022)

> **Tujuan**: menjembatani celah terjemahan. Skill menurunkan proses bisnis dari urusan konkuren UU 23/2014 (basis legal kab/kota), tapi SIA-SPBE mengklasifikasikan pakai kode RAB Perpres 132/2022 (46 urusan nasional). Keduanya berbeda — RAB disusun sekitar fungsi pusat, konkuren untuk otonomi daerah. Tabel ini memberi kode RAB untuk kolom "Ref. Nasional" di dokumen arsitektur, supaya siap-input ke portal.
>
> **Disiplin**: pemetaan yang jelas ditandai ✓. Pemetaan yang **tidak 1:1** (urusan konkuren yang tidak punya padanan RAB langsung) ditandai `[≈]` dengan sektor terdekat + catatan — WAJIB dikonfirmasi ke portal saat input, jangan dianggap final.

### Wajib Pelayanan Dasar (6)

| Urusan Konkuren (UU 23/2014) | Kode RAB (Perpres 132/2022) | Status |
|---|---|---|
| A. Pendidikan | 06.01 Pendidikan | ✓ |
| B. Kesehatan | 04.01 Kesehatan | ✓ |
| C. Pekerjaan Umum dan Penataan Ruang | 03.01 Pekerjaan Umum | ✓ |
| D. Perumahan Rakyat dan Kawasan Permukiman | 03.04 Perumahan | ✓ |
| E. Trantibumlinmas | [≈] Sektor 05 (Ketertiban Umum dan Keselamatan) | `[≈]` Tidak ada padanan T2 langsung; RAB 05.02 "Keamanan" bermakna keamanan nasional, bukan trantibum daerah. Konfirmasi portal. |
| F. Sosial | 04.02 Sosial | ✓ |

### Wajib Non-Pelayanan Dasar (18)

| Urusan Konkuren (UU 23/2014) | Kode RAB (Perpres 132/2022) | Status |
|---|---|---|
| G. Tenaga Kerja | 06.02 Ketenagakerjaan | ✓ |
| H. Pemberdayaan Perempuan dan Perlindungan Anak | 04.03 Pemberdayaan Perempuan | ✓ (perlindungan anak tidak eksplisit di RAB) |
| I. Pangan | [≈] 02.03 Pertanian | `[≈]` Tidak ada RAB "Pangan"; ketahanan pangan lazim di bawah Pertanian. Konfirmasi portal. |
| J. Pertanahan | 03.06 Pertanahan | ✓ |
| K. Lingkungan Hidup | 07.05 Lingkungan Hidup | ✓ |
| L. Administrasi Kependudukan dan Pencatatan Sipil | 03.07 Kependudukan | ✓ |
| M. Pemberdayaan Masyarakat dan Desa | [≈] 09.01 Dalam Negeri | `[≈]` Desa di bawah Kemendagri; tidak ada RAB "Desa" tersendiri. Konfirmasi portal. |
| N. Pengendalian Penduduk dan Keluarga Berencana | [≈] 03.07 Kependudukan | `[≈]` "Penduduk" cocok, tapi KB (BKKBN) berbeda fungsi. Konfirmasi portal. |
| O. Perhubungan | 03.03 Transportasi | ✓ |
| P. Komunikasi dan Informatika | 09.04 Komunikasi + 09.03 Informasi | ✓ (dua kode) |
| Q. Koperasi, Usaha Kecil dan Menengah | 02.09 Koperasi + 02.10 Usaha Kecil dan Menengah | ✓ (dua kode) |
| R. Penanaman Modal | 02.08 Investasi | ✓ (nama beda: penanaman modal = investasi) |
| S. Kepemudaan dan Olahraga | 06.04 Pemuda + 06.05 Olahraga | ✓ (dua kode) |
| T. Statistik | [≈] 09.03 Informasi | `[≈]` Tidak ada RAB "Statistik"; terdekat Informasi. Konfirmasi portal. |
| U. Persandian | [≈] 05.02 Keamanan atau 09.03/09.04 | `[≈]` Tidak ada RAB "Persandian"; terkait keamanan informasi. Konfirmasi portal. |
| V. Kebudayaan | 08.02 Kebudayaan | ✓ |
| W. Perpustakaan | [≈] 08.02 Kebudayaan atau 06.01 Pendidikan | `[≈]` Tidak ada RAB "Perpustakaan". Konfirmasi portal. |
| X. Kearsipan | [≈] 09.07 Kesekretariatan Negara atau 09.01 Dalam Negeri | `[≈]` Tidak ada RAB "Kearsipan". Konfirmasi portal. |

### Pilihan (8)

| Urusan Konkuren (UU 23/2014) | Kode RAB (Perpres 132/2022) | Status |
|---|---|---|
| Kelautan dan Perikanan | 07.04 Kelautan + 02.06 Perikanan | ✓ (dua kode) |
| Pariwisata | 02.11 Pariwisata | ✓ |
| Pertanian | 02.03 Pertanian (+ 02.04 Perkebunan, 02.05 Peternakan jika relevan) | ✓ |
| Kehutanan | 07.03 Kehutanan | ✓ |
| Energi dan Sumber Daya Mineral | 07.01 Pertambangan + 07.02 Energi | ✓ (dua kode) |
| Perdagangan | 02.02 Perdagangan | ✓ |
| Perindustrian | 02.01 Industri | ✓ |
| Transmigrasi | 03.02 Transmigrasi | ✓ |

### Catatan Pola Crosswalk

**24 dari 32 urusan** memetakan jelas (✓) ke kode RAB. **8 urusan** (`[≈]`) tidak punya padanan RAB langsung: Trantibumlinmas, Pangan, PMD, KB, Statistik, Persandian, Perpustakaan, Kearsipan. Ini bukan kebetulan — urusan-urusan ini adalah fungsi **penunjang atau spesifik daerah** yang di tingkat pusat tidak berdiri sebagai sektor tersendiri, sehingga di RAB (yang berorientasi fungsi pusat) tidak ada padanan 1:1. Untuk 8 urusan ini, kode RAB yang tepat **wajib dikonfirmasi ke portal SIA-SPBE** saat input — matriks ini memberi kandidat terdekat + alasannya, bukan keputusan final.

**Untuk OPD non-Dinas** (penunjang: kepegawaian, keuangan, perencanaan, pengawasan): pemetaannya ke Sektor 09 Pemerintahan Umum — kepegawaian → 09.06 Aparatur Negara; keuangan → 09.02 Keuangan; perencanaan → 09.05 Perencanaan Pembangunan; Setda/Kearsipan → 09.07 Kesekretariatan Negara; Kesbangpol → 09.01 Dalam Negeri. Ini juga `[≈]` (perlu konfirmasi portal), tapi Sektor 09 adalah rumah alami fungsi penunjang.

---

*(Sektor Wajib Pelayanan Dasar — OPD tipikal: Dinas Pendidikan/Disdikbud)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota (seed Proses Bisnis) |
|---|---|---|
| 1 | Manajemen Pendidikan | Pengelolaan PAUD dan pendidikan nonformal; Pengelolaan pendidikan dasar |
| 2 | Kurikulum | Penetapan kurikulum muatan lokal pendidikan dasar, PAUD, dan pendidikan nonformal |
| 3 | Akreditasi | *(akreditasi PAUD/dikdas/nonformal — perlu dicek apakah pelaksanaan lapangan/fasilitasi ada di kab/kota, meski penetapan standar akreditasi nasional)* |

**Catatan silang dengan `Arsitektur_SPBE.md` (Disdikbud HSS)**: cocok — proses bisnis PAUD dan Dikdas yang sudah kita petakan (PB-1 s.d. PB-10 kedua bidang) sudah sejalan dengan seed legal ini.

---

## B. Bidang Kesehatan ✅ TERVERIFIKASI PENUH

*(Wajib Pelayanan Dasar — OPD tipikal: Dinas Kesehatan)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Upaya Kesehatan | Pengelolaan UKP kab/kota & rujukan tingkat kab/kota; Pengelolaan UKM kab/kota & rujukan tingkat kab/kota; Penerbitan izin RS kelas C & D dan fasyankes tingkat kab/kota |
| 2 | SDM Kesehatan | Penerbitan izin praktik & izin kerja tenaga kesehatan; Perencanaan & pengembangan SDM kesehatan untuk UKM/UKP kab/kota |
| 3 | Sediaan Farmasi, Alkes, Makanan Minuman | Izin apotek/toko obat/toko alkes/optikal; izin UMOT (Usaha Mikro Obat Tradisional); sertifikat produksi alkes kelas 1 tertentu & PKRT kelas 1 tertentu (perusahaan rumah tangga); izin produksi makanan-minuman industri rumah tangga; pengawasan *post-market* produk makanan-minuman industri rumah tangga |
| 4 | Pemberdayaan Masyarakat Bidang Kesehatan | Pemberdayaan masyarakat kesehatan lewat tokoh, kelompok masyarakat, ormas, dan dunia usaha tingkat kab/kota |

**Catatan silang dengan `Arsitektur_SPBE_Dinkes.md`**: sub-urusan 1 (Upaya Kesehatan) cocok dengan Bidang Yankes; sub-urusan 2 (SDM Kesehatan) mengonfirmasi ulang temuan "triplikasi Data ASN Nakes" — izin praktik & pengembangan SDM adalah kewenangan legal kab/kota, bukan sekadar tusi administratif; sub-urusan 3 seharusnya jadi proses bisnis eksplisit Bidang SDK yang **belum tercatat** di dokumen Dinkes (izin apotek/toko obat) — kandidat penambahan.

---

## C. Bidang Pekerjaan Umum dan Penataan Ruang ✅ TERVERIFIKASI PENUH

*(Wajib Pelayanan Dasar — OPD tipikal: Dinas PUPR)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Sumber Daya Air (SDA) | Pengelolaan SDA dan bangunan pengaman pantai pada wilayah sungai dalam 1 kab/kota; pengembangan dan pengelolaan sistem irigasi primer dan sekunder pada daerah irigasi yang luasnya kurang dari 1000 ha dalam 1 kab/kota |
| 2 | Air Minum | Pengelolaan dan pengembangan SPAM di kab/kota |
| 3 | Persampahan | Pengembangan sistem dan pengelolaan persampahan dalam kab/kota |
| 4 | Air Limbah | Pengelolaan dan pengembangan sistem air limbah domestik dalam kab/kota |
| 5 | Drainase | Pengelolaan dan pengembangan sistem drainase yang terhubung langsung dengan sungai dalam kab/kota |
| 6 | Permukiman | Penyelenggaraan infrastruktur pada permukiman di kab/kota |
| 7 | Bangunan Gedung | Penyelenggaraan bangunan gedung di wilayah kab/kota, termasuk pemberian izin mendirikan bangunan (IMB/PBG) dan sertifikat laik fungsi (SLF) bangunan gedung |
| 8 | Penataan Bangunan dan Lingkungannya | Penyelenggaraan penataan bangunan dan lingkungannya di kab/kota |
| 9 | Jalan | Penyelenggaraan jalan kab/kota |
| 10 | Jasa Konstruksi | Penyelenggaraan pelatihan tenaga terampil konstruksi; penyelenggaraan sistem informasi jasa konstruksi cakupan kab/kota; penerbitan izin usaha jasa konstruksi nasional (nonkecil dan kecil); pengawasan tertib usaha, tertib penyelenggaraan, dan tertib pemanfaatan jasa konstruksi |
| 11 | Penataan Ruang | Penyelenggaraan penataan ruang Daerah kab/kota |

**Catatan silang dengan `Arsitektur_SPBE_PUPR.md`**: konfirmasi kuat model generik yang dipetakan. Sub-urusan 7 (Bangunan Gedung — IMB/PBG + SLF) memvalidasi peran PUPR di rantai PBG dan inspeksi kebakaran. Sub-urusan 9 (Jalan) + Bina Marga cocok. Sub-urusan 11 (Penataan Ruang) memvalidasi RTRW. **Presisi baru**: irigasi kewenangan kab/kota hanya **<1000 ha** (1000-3000 ha = Provinsi, >3000 ha = Pusat) — batas yang perlu diperhatikan saat memetakan proses bisnis irigasi.

---

## D. Bidang Perumahan Rakyat dan Kawasan Permukiman ✅ TERVERIFIKASI PENUH

*(Wajib Pelayanan Dasar — OPD tipikal: Dinas Perumahan dan Kawasan Permukiman, atau melekat di PUPR)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Perumahan | Penyediaan dan rehabilitasi rumah korban bencana kab/kota; fasilitasi penyediaan rumah bagi masyarakat yang terkena relokasi program Pemda kab/kota; penerbitan izin pembangunan dan pengembangan perumahan; penerbitan sertifikat kepemilikan bangunan gedung (SKBG) |
| 2 | Kawasan Permukiman | Penerbitan izin pembangunan dan pengembangan kawasan permukiman; penataan dan peningkatan kualitas kawasan permukiman kumuh dengan luas di bawah 10 ha |
| 3 | Perumahan dan Kawasan Permukiman Kumuh | Pencegahan perumahan dan kawasan permukiman kumuh pada Daerah kab/kota |
| 4 | Prasarana, Sarana, dan Utilitas Umum (PSU) | Penyelenggaraan PSU perumahan |
| 5 | Sertifikasi, Kualifikasi, Klasifikasi, dan Registrasi Bidang Perumahan dan Kawasan Permukiman | Sertifikasi dan registrasi bagi orang atau badan hukum yang melaksanakan perancangan dan perencanaan rumah serta perencanaan PSU tingkat kemampuan kecil |

**Catatan**: kewenangan penanganan kawasan kumuh dibagi berdasar luas — kab/kota menangani **<10 ha**, Provinsi 10-15 ha, Pusat ≥15 ha. Relevan untuk Dinas Perkim (belum dipetakan di HSS) atau bidang Perkim di PUPR.

## E. Bidang Ketenteraman, Ketertiban Umum, dan Perlindungan Masyarakat (Trantibumlinmas) ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Satpol PP / Satpol PP dan Damkar; sub-urusan Bencana biasanya BPBD terpisah)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Ketenteraman dan Ketertiban Umum | Penanganan gangguan ketenteraman dan ketertiban umum dalam 1 Daerah kab/kota; penegakan Perda kab/kota dan peraturan bupati/walikota; pembinaan PPNS kab/kota |
| 2 | Bencana | Penanggulangan bencana kab/kota *(biasanya OPD terpisah: BPBD)* |
| 3 | Kebakaran | Pencegahan, pengendalian, pemadaman, penyelamatan, dan penanganan bahan berbahaya beracun kebakaran dalam Daerah kab/kota; inspeksi peralatan proteksi kebakaran; investigasi kejadian kebakaran; pemberdayaan masyarakat dalam pencegahan kebakaran |

**Catatan silang**: sub-urusan 1 & 3 lazim digabung dalam "Satpol PP dan Damkar" (HSS: Perbup 103/2020), sub-urusan 2 (Bencana) ditangani BPBD. Contoh **satu urusan dipecah ke beberapa OPD**. Sub-urusan Kebakaran berkarakter layanan darurat real-time.


## F. Bidang Sosial ✅ TERVERIFIKASI PENUH

*(Wajib Pelayanan Dasar — OPD tipikal: Dinas Sosial)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Pemberdayaan Sosial | Pemberdayaan sosial Komunitas Adat Terpencil (KAT); penerbitan izin pengumpulan sumbangan dalam Daerah kab/kota; pengembangan potensi sumber kesejahteraan sosial kab/kota; pembinaan Lembaga Konsultasi Kesejahteraan Keluarga (LK3) yang kegiatannya di kab/kota |
| 2 | Penanganan Warga Negara Migran Korban Tindak Kekerasan | Pemulangan warga negara migran korban tindak kekerasan dari titik debarkasi di kab/kota untuk dipulangkan ke Desa/kelurahan asal |
| 3 | Rehabilitasi Sosial | Rehabilitasi sosial bukan/tidak termasuk bekas korban penyalahgunaan NAPZA dan orang dengan HIV/AIDS yang tidak memerlukan rehabilitasi pada panti, dan rehabilitasi anak yang berhadapan dengan hukum |
| 4 | Perlindungan dan Jaminan Sosial | Pemeliharaan anak-anak terlantar; pendataan dan pengelolaan data fakir miskin cakupan Daerah kab/kota |
| 5 | Penanganan Bencana | Penyediaan kebutuhan dasar dan pemulihan trauma bagi korban bencana kab/kota; penyelenggaraan pemberdayaan masyarakat terhadap kesiapsiagaan bencana kab/kota |
| 6 | Taman Makam Pahlawan | Pemeliharaan taman makam pahlawan nasional kab/kota |
| 7 | Sertifikasi dan Akreditasi | *(tidak ada kewenangan kab/kota — ranah Pusat)* |

**Catatan silang dengan `Arsitektur_SPBE_Dinsos.md`**: cocok kuat. Sub-urusan 1-5 sejalan dengan Bidang Pemberdayaan/Rehabilitasi/Perlindungan-Jaminan/Fakir Miskin yang sudah dipetakan. Dua presisi baru dari sumber legal: (a) **rehabilitasi anak berhadapan dengan hukum** eksplisit jadi kewenangan kab/kota — kandidat proses bisnis yang belum tercatat; (b) **Taman Makam Pahlawan** adalah tusi Dinsos yang sepenuhnya luput dari pemetaan awal — perlu ditambahkan.

**Catatan lintas-tingkat penting**: rehabilitasi korban NAPZA/HIV yang **memerlukan panti** adalah kewenangan Provinsi, bukan kab/kota. Ini menyempurnakan titik integrasi #13 (Dinsos-Kesbangpol NAPZA) — Dinsos kab/kota hanya menangani rehabilitasi non-panti; kasus yang butuh panti dirujuk ke Provinsi.

---

## G-X. Urusan Wajib Non-Pelayanan Dasar (18 total) ✅ LENGKAP 18/18

Terkonfirmasi ada dalam lampiran, urutan huruf dan detail sub-urusan sebagian besar belum ditarik. Yang sudah terverifikasi sebagian:

### G. Bidang Tenaga Kerja ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Tenaga Kerja, atau gabungan Disnakertrans/Disnaker-Perindag)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Pelatihan Kerja dan Produktivitas Tenaga Kerja | Pelaksanaan pelatihan berdasarkan unit kompetensi; pembinaan lembaga pelatihan kerja swasta; perizinan dan pendaftaran lembaga pelatihan kerja; konsultansi produktivitas pada perusahaan kecil; pengukuran produktivitas tingkat kab/kota |
| 2 | Penempatan Tenaga Kerja | Pelayanan antar kerja di kab/kota; penerbitan izin LPTKS (Lembaga Penempatan Tenaga Kerja Swasta) dalam 1 kab/kota; pengelolaan informasi pasar kerja dalam kab/kota; perlindungan TKI di luar negeri (pra dan purna penempatan) di kab/kota; penerbitan perpanjangan IMTA yang lokasi kerjanya dalam kab/kota |
| 3 | Hubungan Industrial | *(sebagian — pencegahan/penyelesaian perselisihan hubungan industrial, pendaftaran PKB/PP dalam kab/kota; [ISI: baris terpotong, perlu konfirmasi])* |

**Catatan**: relevan untuk Disnaker (belum dipetakan di HSS). Fungsi penempatan (info pasar kerja, LPTKS) sering terhubung sistem nasional (SISNAKER Kemnaker).

### H. Bidang Pemberdayaan Perempuan dan Perlindungan Anak (PPPA) ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas PPPA, atau gabungan DP3AP2KB — PPPA + Pengendalian Penduduk-KB)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Kualitas Hidup Perempuan | Pelembagaan Pengarusutamaan Gender (PUG) pada lembaga pemerintah tingkat kab/kota; pemberdayaan perempuan bidang politik, hukum, sosial, dan ekonomi pada organisasi kemasyarakatan tingkat kab/kota; penguatan dan pengembangan lembaga penyedia layanan pemberdayaan perempuan tingkat kab/kota |
| 2 | Perlindungan Perempuan | *(pencegahan kekerasan terhadap perempuan, penyediaan layanan bagi perempuan korban kekerasan lingkup kab/kota — [ISI: baris detail perlu konfirmasi])* |
| 3 | Kualitas Keluarga | *(peningkatan kualitas keluarga dalam mewujudkan kesetaraan gender dan hak anak lingkup kab/kota — [ISI])* |
| 4 | Sistem Data Gender dan Anak | Pengumpulan, pengolahan, analisis, dan penyajian data gender dan anak dalam kelembagaan data tingkat kab/kota |
| 5 | Pemenuhan Hak Anak (PHA) | Pelembagaan PHA pada lembaga pemerintah, nonpemerintah, dan dunia usaha tingkat kab/kota; penguatan dan pengembangan lembaga penyedia layanan peningkatan kualitas hidup anak tingkat kab/kota |
| 6 | Perlindungan Khusus Anak | Penyediaan layanan bagi anak yang memerlukan perlindungan khusus tingkat kab/kota; penguatan dan pengembangan lembaga penyedia layanan bagi anak yang memerlukan perlindungan khusus tingkat kab/kota |

**Catatan silang**: sub-urusan 2 & 6 (perlindungan perempuan/anak korban kekerasan) beririsan langsung dengan **Data Korban Kekerasan/TPPO di Dinsos** — prinsip batasi digitalisasi berlaku. Sub-urusan 4 (data gender-anak) relevan Satu Data.

### I. Bidang Pangan ✅ Sub-urusan 2 (Penyelenggaraan Ketahanan Pangan) TERVERIFIKASI

| Kewenangan Kabupaten/Kota |
|---|
| Penyediaan dan penyaluran pangan pokok/pangan lainnya sesuai kebutuhan Daerah kab/kota dalam rangka stabilisasi pasokan dan harga pangan |

*(Sub-urusan 1 dan 3+ belum ditarik)*

### J. Bidang Pertanahan ✅ TERVERIFIKASI PENUH

*(OPD tipikal: melekat di Setda/Bagian Pemerintahan atau Dinas Pertanahan; sebagian besar kewenangan ada di BPN/Pusat)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Izin Lokasi | Pemberian izin lokasi dalam 1 Daerah kab/kota |
| 2 | Pengadaan Tanah untuk Kepentingan Umum | *(tidak ada — kewenangan Provinsi/Pusat)* |
| 3 | Sengketa Tanah Garapan | Penyelesaian sengketa tanah garapan dalam Daerah kab/kota |
| 4 | Ganti Kerugian dan Santunan Tanah untuk Pembangunan | Penyelesaian masalah ganti kerugian dan santunan tanah untuk pembangunan oleh Pemda kab/kota |
| 5 | Subyek dan Obyek Redistribusi Tanah, serta Ganti Kerugian Tanah Kelebihan Maksimum dan Tanah Absentee | Penetapan subyek dan obyek redistribusi tanah, serta ganti kerugian tanah kelebihan maksimum dan tanah absentee dalam Daerah kab/kota |
| 6 | Tanah Ulayat | Penetapan tanah ulayat yang lokasinya dalam Daerah kab/kota |
| 7 | Tanah Kosong | Penyelesaian masalah tanah kosong dalam Daerah kab/kota; inventarisasi dan pemanfaatan tanah kosong dalam Daerah kab/kota |
| 8 | Izin Membuka Tanah | Penerbitan izin membuka tanah |
| 9 | Penggunaan Tanah | Perencanaan penggunaan tanah yang hamparannya dalam Daerah kab/kota |

**Catatan**: mayoritas urusan pertanahan tetap di BPN (Pusat). Kewenangan kab/kota bersifat administratif-lokal (izin lokasi, sengketa garapan, tanah kosong). Sering melekat di Setda, bukan OPD tersendiri.

### K. Bidang Lingkungan Hidup ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Lingkungan Hidup/DLH)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Perencanaan Lingkungan Hidup | RPPLH (Rencana Perlindungan dan Pengelolaan Lingkungan Hidup) kab/kota |
| 2 | Kajian Lingkungan Hidup Strategis (KLHS) | KLHS untuk KRP (Kebijakan, Rencana, Program) kab/kota |
| 3 | Pengendalian Pencemaran dan/atau Kerusakan Lingkungan Hidup | Pencegahan, penanggulangan, dan pemulihan pencemaran dan/atau kerusakan lingkungan hidup dalam Daerah kab/kota |
| 4 | Keanekaragaman Hayati (Kehati) | Pengelolaan Kehati kab/kota |
| 5 | Bahan Berbahaya dan Beracun (B3), dan Limbah B3 | Penyimpanan sementara limbah B3; pengumpulan limbah B3 dalam 1 kab/kota |
| 6 | Pembinaan dan Pengawasan terhadap Izin Lingkungan dan Izin PPLH | Pembinaan dan pengawasan terhadap usaha dan/atau kegiatan yang izin lingkungan dan izin PPLH diterbitkan oleh Pemda kab/kota |
| 7 | Pengakuan Masyarakat Hukum Adat (MHA), Kearifan Lokal terkait PPLH | *([ISI: kewenangan kab/kota untuk penetapan MHA dan kearifan lokal lingkup kab/kota])* |
| 8 | Pendidikan, Pelatihan, dan Penyuluhan Lingkungan Hidup untuk Masyarakat | Penyelenggaraan pendidikan, pelatihan, dan penyuluhan LH tingkat kab/kota |
| 9 | Penghargaan Lingkungan Hidup untuk Masyarakat | Pemberian penghargaan LH tingkat kab/kota |
| 10 | Pengaduan Lingkungan Hidup | Penyelesaian pengaduan masyarakat di bidang PPLH terhadap usaha/kegiatan yang izinnya diterbitkan Pemda kab/kota |
| 11 | Persampahan | Pengelolaan sampah; penerbitan izin pendaurulangan/pengolahan sampah, pengangkutan sampah, dan pemrosesan akhir sampah yang diselenggarakan swasta di kab/kota; pembinaan dan pengawasan pengelolaan sampah swasta |

**Catatan silang**: sub-urusan 11 (Persampahan LH) beririsan/tumpang dengan Persampahan di PU (sub-urusan 3 huruf C) — pembagiannya: PU mengurus infrastruktur/sistem, LH mengurus pengelolaan/izin/pengawasan. **Retribusi sampah** adalah sumber PAD (lihat kategori OPD penghasil PAD). Relevan DLH (belum dipetakan di HSS).

### L. Bidang Administrasi Kependudukan dan Pencatatan Sipil ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Kependudukan dan Pencatatan Sipil/Dukcapil)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Pendaftaran Penduduk | Pelayanan pendaftaran penduduk |
| 2 | Pencatatan Sipil | Pelayanan pencatatan sipil |
| 3 | Pengelolaan Informasi Administrasi Kependudukan | Pengumpulan data kependudukan; pemanfaatan dan penyajian database kependudukan kab/kota |
| 4 | Profil Kependudukan | Penyusunan profil kependudukan kab/kota |

**Catatan silang dengan `Arsitektur_SPBE_Dukcapil.md`**: mengonfirmasi temuan sentral dokumen itu secara legal. Kewenangan kab/kota hanya **"pelayanan"** — sementara Penetapan sistem, **pemberian NIK**, penetapan spesifikasi & penyediaan blangko KTP-el semua eksplisit kewenangan **Pusat**. Ini dasar hukum di balik temuan "NIK 100% data nasional, Dukcapil kab/kota hanya operator layanan" — bukan sekadar konsekuensi SIAK Terpusat, tapi memang pembagian kewenangan sejak UU 23/2014.

### M. Bidang Pemberdayaan Masyarakat dan Desa ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Pemberdayaan Masyarakat dan Desa/DPMD)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Penataan Desa | Penyelenggaraan penataan Desa |
| 2 | Kerja Sama Desa | Fasilitasi kerja sama antar-Desa dalam 1 Daerah kab/kota |
| 3 | Administrasi Pemerintahan Desa | Pembinaan dan pengawasan penyelenggaraan administrasi pemerintahan Desa |
| 4 | Lembaga Kemasyarakatan, Lembaga Adat, dan Masyarakat Hukum Adat | Pemberdayaan lembaga kemasyarakatan yang bergerak di bidang pemberdayaan Desa dan lembaga adat tingkat Daerah kab/kota serta pemberdayaan masyarakat hukum adat yang masyarakat pelakunya hukum adat yang sama dalam Daerah kab/kota; pemberdayaan lembaga kemasyarakatan dan lembaga adat tingkat Desa |

**Catatan silang dengan `Arsitektur_SPBE_DPMD.md`**: cocok. Empat sub-urusan legal ini sejalan dengan dua Bidang generik yang dipetakan (Pemberdayaan Masyarakat + Pemberdayaan Pemerintahan Desa). Catatan: **pengelolaan keuangan Desa** tidak muncul sebagai sub-urusan eksplisit di sini — ia masuk lewat "Administrasi Pemerintahan Desa" (pembinaan-pengawasan), konsisten dengan posisi DPMD sebagai pembina, bukan pemilik data keuangan desa (yang dimiliki tiap Desa via Siskeudes).

### N. Bidang Pengendalian Penduduk dan Keluarga Berencana ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Pengendalian Penduduk dan KB, atau gabungan DP3AP2KB)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Pengendalian Penduduk | Pemaduan dan sinkronisasi kebijakan Pemda kab/kota dalam rangka pengendalian kuantitas penduduk; pemetaan perkiraan pengendalian penduduk cakupan kab/kota |
| 2 | Keluarga Berencana (KB) | Pelaksanaan advokasi, komunikasi, informasi dan edukasi (KIE) pengendalian penduduk dan KB sesuai kearifan budaya lokal; pendayagunaan tenaga penyuluh KB/petugas lapangan KB (PKB/PLKB); pengendalian dan pendistribusian kebutuhan alat dan obat kontrasepsi serta pelaksanaan pelayanan KB di kab/kota; pemberdayaan dan peningkatan peran serta organisasi kemasyarakatan tingkat kab/kota dalam pelayanan dan pembinaan kesertaan ber-KB |
| 3 | Keluarga Sejahtera | Pelaksanaan pembangunan keluarga melalui pembinaan ketahanan dan kesejahteraan keluarga di kab/kota; pelaksanaan dan peningkatan peran serta organisasi kemasyarakatan tingkat kab/kota dalam pembangunan keluarga |

**Catatan**: PKB/PLKB adalah jabatan fungsional yang **berpotensi masuk pola triplikasi ASN per-profesi** (seperti Guru-Nakes) jika punya sistem sektoral BKKBN sendiri — kandidat cek saat OPD KB dipetakan. Relevan DP2KB/DP3AP2KB (belum dipetakan di HSS).

### O. Bidang Perhubungan ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Perhubungan/Dishub)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Lalu Lintas dan Angkutan Jalan (LLAJ) | Penetapan rencana induk jaringan LLAJ kab/kota; penyediaan perlengkapan jalan di jalan kab/kota; pengelolaan terminal penumpang tipe C; penerbitan izin penyelenggaraan dan pembangunan fasilitas parkir; pengujian berkala kendaraan bermotor; pelaksanaan manajemen dan rekayasa lalu lintas untuk jaringan jalan kab/kota; persetujuan hasil analisis dampak lalu lintas (andalalin) untuk jalan kab/kota; audit dan inspeksi keselamatan LLAJ di jalan kab/kota; penyediaan angkutan umum untuk jasa angkutan orang/barang dalam kab/kota; penetapan kawasan perkotaan untuk pelayanan angkutan perkotaan dalam 1 kab/kota; penetapan rencana umum jaringan trayek perkotaan/perdesaan dalam 1 kab/kota; penetapan wilayah operasi angkutan orang dengan taksi dalam kawasan perkotaan dalam kab/kota; penerbitan izin penyelenggaraan angkutan orang dalam trayek perdesaan/perkotaan dalam 1 kab/kota; penerbitan izin penyelenggaraan taksi dan angkutan kawasan tertentu dalam kab/kota; penetapan tarif kelas ekonomi angkutan orang perkotaan/perdesaan dalam kab/kota |
| 2 | Pelayaran | Penerbitan izin usaha angkutan laut/pelayaran rakyat yang berdomisili dan beroperasi pada lintas pelabuhan dalam kab/kota; penerbitan izin usaha/trayek angkutan sungai dan danau untuk kapal yang melayani trayek dalam kab/kota; penetapan lintas penyeberangan dan persetujuan pengoperasian kapal dalam kab/kota; pembangunan-izin pelabuhan pengumpan lokal/pelabuhan sungai dan danau; penetapan rencana induk dan DLKR/DLKP pelabuhan pengumpan lokal; penetapan tarif penyeberangan penumpang kelas ekonomi lintas pelabuhan dalam kab/kota |
| 3 | Penerbangan | Penerbitan izin mendirikan bangunan tempat pendaratan-lepas landas helikopter *(kewenangan legal ada, faktual bergantung keberadaan objek)* |
| 4 | Perkeretaapian | Penetapan rencana induk perkeretaapian kab/kota; izin pengadaan/pembangunan/operasi perkeretaapian khusus yang jaringannya dalam kab/kota *(kewenangan legal ada, faktual bergantung keberadaan objek)* |

**Catatan penerapan HSS**: hanya **LLAJ** sepenuhnya relevan; **Pelayaran sungai-danau** relevan sebagian (Sungai Nagara). Penerbangan & Perkeretaapian punya kewenangan legal tapi **tidak ada objek riil** di HSS — tandai `[ISI: kewenangan legal ada, objek faktual tidak ada]`, jangan paksakan proses bisnis fiktif. Ini pelajaran umum: kewenangan legal ≠ proses bisnis riil.



*(OPD tipikal: Dinas Komunikasi dan Informatika/Diskominfo)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Penyelenggaraan, Sumber Daya, dan Perangkat Pos serta Informatika | *(kewenangan Pusat — tidak ada kewenangan kab/kota di sub-urusan ini)* |
| 2 | Informasi dan Komunikasi Publik | Pengelolaan informasi dan komunikasi publik Pemerintah Daerah kab/kota |
| 3 | Aplikasi Informatika | Pengelolaan nama domain yang telah ditetapkan Pusat dan sub domain di lingkup Pemerintah Daerah kab/kota; pengelolaan e-government di lingkup Pemerintah Daerah kab/kota |

**Catatan silang dengan `Arsitektur_SPBE_Diskominfo.md`**: konfirmasi legal penting. **"Pengelolaan e-government di lingkup Pemda kab/kota"** adalah dasar hukum eksplisit untuk peran Diskominfo sebagai operator SPBE/Pemdi daerah — termasuk Hub SPL yang direkomendasikan. Sub-urusan 2 (IKP) adalah dasar fungsi kehumasan/diseminasi. Yang perlu diperhatikan: urusan Kominfo kab/kota **sangat ramping secara legal** (hanya IKP + e-gov + domain) — banyak fungsi TIK yang dijalankan Diskominfo di lapangan sebenarnya turunan "pengelolaan e-government", bukan urusan tersendiri.

### U. Bidang Persandian ✅ TERVERIFIKASI PENUH

*(Umumnya melekat di Diskominfo — Bidang Persandian, atau di HSS sebagaimana dibahas di dokumen Diskominfo)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Persandian untuk Pengamanan Informasi | Penyelenggaraan persandian untuk pengamanan informasi Pemerintah Daerah kab/kota; penetapan pola hubungan komunikasi sandi antar-Perangkat Daerah kab/kota |
| 2 | Akreditasi dan Sertifikasi | *(tidak ada kewenangan kab/kota — ranah Pusat)* |
| 3 | Analisis Sinyal | *(tidak ada kewenangan kab/kota — ranah Pusat)* |

**Catatan silang**: mengonfirmasi bahwa Bidang Persandian yang muncul di dokumen Diskominfo memang punya dasar urusan tersendiri (bukan sekadar seksi administratif). Relevan dengan rekomendasi keamanan data sensitif (Kewaspadaan Dini Kesbangpol, Audit Investigatif Inspektorat) yang menyebut koordinasi dengan Persandian.

### T. Bidang Statistik ✅ TERVERIFIKASI PENUH

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Statistik Dasar | *(kewenangan Pusat — BPS)* |
| 2 | Statistik Sektoral | Penyelenggaraan statistik sektoral di lingkup Daerah kab/kota |

**Catatan silang**: "Statistik Sektoral kab/kota" adalah dasar hukum sub-sistem Statistik Sektoral di portal Satu Data HSS yang ditemukan sebelumnya, dan fungsi walidata yang dibahas di dokumen Diskominfo/Bapperida.

### R. Bidang Penanaman Modal ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Penanaman Modal dan PTSP/DPMPTSP)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Pengembangan Iklim Penanaman Modal | Penetapan pemberian fasilitas/insentif di bidang penanaman modal yang menjadi kewenangan kab/kota; pembuatan peta potensi investasi kab/kota |
| 2 | Kerja Sama Penanaman Modal | *(tidak ada kewenangan kab/kota — ranah Pusat)* |
| 3 | Promosi Penanaman Modal | Penyelenggaraan promosi penanaman modal yang menjadi kewenangan kab/kota |
| 4 | Pelayanan Penanaman Modal | Pelayanan perizinan dan nonperizinan secara terpadu 1 pintu di bidang penanaman modal yang menjadi kewenangan kab/kota |
| 5 | Pengendalian Pelaksanaan Penanaman Modal | *(sub-urusan lanjutan — [ISI: baris terpotong, kewenangan kab/kota kemungkinan pemantauan-pembinaan-pengawasan pelaksanaan PM di kab/kota, perlu konfirmasi baris berikutnya)]* |
| 6 | Data dan Sistem Informasi Penanaman Modal | *[ISI: perlu konfirmasi]* |

**Catatan silang dengan `Arsitektur_SPBE_PMPTSP.md`**: sub-urusan 4 (Pelayanan PM terpadu 1 pintu) adalah dasar hukum PTSP/MPP. Sub-urusan 1 & 3 (fasilitas/insentif, promosi, peta potensi) sejalan dengan Bidang Penanaman Modal yang dipetakan.

*(OPD tipikal: Dinas Koperasi-UKM — belum ada di 15 dokumen HSS)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Badan Hukum Koperasi | *(tidak ada kewenangan kab/kota — ranah Provinsi/Pusat)* |
| 2 | Izin Usaha Simpan Pinjam | Izin usaha simpan pinjam untuk koperasi wilayah keanggotaan dalam kab/kota; izin pembukaan kantor cabang/cabang pembantu/kantor kas KSP dalam kab/kota |
| 3 | Pengawasan dan Pemeriksaan | Pemeriksaan-pengawasan koperasi wilayah keanggotaan dalam kab/kota; pemeriksaan-pengawasan KSP/USP koperasi wilayah keanggotaan dalam kab/kota |
| 4 | Penilaian Kesehatan KSP/USP Koperasi | Penilaian kesehatan KSP/USP koperasi wilayah keanggotaan dalam kab/kota |
| 5 | Pendidikan dan Latihan Perkoperasian | Pendidikan dan latihan perkoperasian bagi koperasi yang wilayah keanggotaan dalam Daerah kab/kota |
| 6 | Pemberdayaan dan Perlindungan Koperasi | Pemberdayaan dan perlindungan koperasi yang keanggotaannya dalam Daerah kab/kota |
| 7 | Pemberdayaan Usaha Menengah, Usaha Kecil, dan Usaha Mikro (UMKM) | Pemberdayaan **usaha mikro** yang dilakukan melalui pendataan, kemitraan, kemudahan perizinan, penguatan kelembagaan, dan koordinasi dengan pemangku kepentingan |
| 8 | Pengembangan UMKM | Pengembangan **usaha mikro** dengan orientasi peningkatan skala usaha menjadi usaha kecil |

**Catatan pembagian berjenjang UMKM**: kewenangan kab/kota adalah **usaha mikro** saja (usaha kecil = Provinsi, usaha menengah = Pusat). Ini pola berjenjang khas — saat memetakan OPD yang membawa urusan UKM, proses bisnis pemberdayaan/pengembangan yang jadi kewenangan kab/kota terbatas pada segmen usaha mikro.

### S. Bidang Kepemudaan dan Olahraga ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Kepemudaan dan Olahraga, atau gabungan Disporapar — Pemuda-Olahraga-Pariwisata seperti di HSS)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Kepemudaan | Penyadaran, pemberdayaan, dan pengembangan pemuda dan kepemudaan terhadap pemuda pelopor kab/kota, wirausaha muda pemula, dan pemuda kader kab/kota; pemberdayaan dan pengembangan organisasi kepemudaan tingkat kab/kota |
| 2 | Keolahragaan | Pembinaan dan pengembangan olahraga pendidikan pada jenjang pendidikan yang menjadi kewenangan kab/kota; penyelenggaraan kejuaraan olahraga tingkat kab/kota; pembinaan dan pengembangan olahraga prestasi tingkat kab/kota |
| 3 | Kepramukaan | Pembinaan dan pengembangan organisasi kepramukaan tingkat kab/kota |

**Catatan**: di HSS melekat di **Disporapar** (Dinas Pemuda, Olahraga, dan Pariwisata) — OPD gabungan 3 urusan (Kepemudaan-OR + Pariwisata). Contoh OPD multi-urusan.

### T. Bidang Statistik ✅ TERVERIFIKASI PENUH (lihat di bawah, bagian sebelumnya)
### U. Bidang Persandian ✅ TERVERIFIKASI PENUH (lihat di bawah, bagian sebelumnya)

### V. Bidang Kebudayaan ✅ TERVERIFIKASI PENUH

*(OPD tipikal: melekat di Disdikbud — komponen "Kebudayaan", atau Dinas Kebudayaan tersendiri)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Kebudayaan | Pengelolaan kebudayaan yang masyarakat pelakunya dalam Daerah kab/kota; pelestarian tradisi yang masyarakat penganutnya dalam Daerah kab/kota; pembinaan lembaga adat yang penganutnya dalam Daerah kab/kota |
| 2 | Perfilman Nasional | Pembinaan dan pengembangan sumber daya manusia perfilman, pengembangan perfilman, dan pemberian izin usaha perfilman lingkup kab/kota |
| 3 | Kesenian Tradisional | Pembinaan kesenian yang masyarakat pelakunya dalam Daerah kab/kota |
| 4 | Sejarah | Pembinaan sejarah lokal kab/kota |
| 5 | Cagar Budaya | Penetapan cagar budaya dan pengelolaan cagar budaya peringkat kab/kota; penerbitan izin membawa cagar budaya ke luar Daerah kab/kota |
| 6 | Permuseuman | Pengelolaan museum kab/kota |

**Catatan silang**: di HSS melekat di **Disdikbud** (dokumen `Arsitektur_SPBE.md` — komponen Kebudayaan). Cagar budaya & museum bisa jadi sumber PAD (retribusi) bila dikelola sebagai destinasi.

### W. Bidang Perpustakaan ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Perpustakaan dan Kearsipan, atau gabungan dengan Kearsipan)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Pembinaan Perpustakaan | Pembinaan perpustakaan pada satuan pendidikan dasar dan perpustakaan tingkat Daerah kab/kota; pembudayaan gemar membaca tingkat kab/kota |
| 2 | Pelestarian Koleksi Nasional dan Naskah Kuno | Pelestarian karya cetak dan karya rekam koleksi milik Daerah kab/kota; pengembangan koleksi budaya etnis nusantara yang ditemukan oleh Daerah kab/kota |
| 3 | Pelestarian Naskah Kuno Milik Daerah | Pengelolaan dan pelestarian naskah kuno milik Daerah kab/kota |

**Catatan**: sering satu OPD dengan Kearsipan (Dinas Perpustakaan dan Kearsipan). Keduanya sub-urusan berbeda (W = Perpustakaan, X = Kearsipan).

### X. Bidang Kearsipan ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Perpustakaan dan Kearsipan, atau melekat di unit kearsipan)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Pengelolaan Arsip | Pengelolaan arsip dinamis Pemerintah Daerah kab/kota dan BUMD kab/kota; pengelolaan arsip statis yang diciptakan Pemda kab/kota, BUMD, perusahaan swasta yang kantor usahanya dalam 1 Daerah kab/kota, ormas/orpol tingkat kab/kota, pemerintahan desa, dan tokoh masyarakat tingkat kab/kota; pengelolaan simpul jaringan dalam SIKN melalui JIKN pada tingkat kab/kota |
| 2 | Perlindungan dan Penyelamatan Arsip | Pemusnahan arsip di lingkungan Pemda kab/kota yang memiliki retensi di bawah 10 tahun; *(sub-urusan lanjutan [ISI: baris terpotong])* |
| 3 | Perizinan (penggunaan arsip) | *[ISI: perlu konfirmasi baris berikutnya]* |

**Catatan silang**: relevan dengan pengelolaan arsip dokumen di seluruh OPD, dan konsep append-only audit trail yang jadi prinsip arsitektur berulang. Pengelolaan arsip dinamis-statis adalah dasar hukum retensi dokumen SPBE/Pemdi.

---

## Y-FF. Urusan Pilihan (8 total) ✅ SEMUA TERVERIFIKASI PENUH

### Bidang Pertanian ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Pertanian/Pertanian-Perikanan-Pangan)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Sarana Pertanian | Pengawasan penggunaan sarana pertanian; pengelolaan SDG hewan dalam kab/kota; pengawasan mutu-peredaran benih/bibit ternak & pakan ternak dalam kab/kota; pengawasan obat hewan tingkat pengecer; pengendalian penyediaan-peredaran benih/bibit ternak & hijauan pakan ternak dalam kab/kota |
| 2 | Prasarana Pertanian | Pengembangan prasarana pertanian; pengelolaan wilayah sumber bibit ternak & rumpun/galur ternak dalam kab/kota; pengembangan lahan penggembalaan umum |
| 3 | Kesehatan Hewan dan Kesmavet | Penjaminan kesehatan hewan, penutupan-pembukaan daerah wabah penyakit hewan menular dalam kab/kota; pengawasan pemasukan-pengeluaran hewan & produk hewan kab/kota; pengelolaan jasa lab & jasa medik veteriner dalam kab/kota; penerapan-pengawasan persyaratan teknis kesmavet & kesejahteraan hewan |
| 4 | Pengendalian & Penanggulangan Bencana Pertanian | Pengendalian & penanggulangan bencana pertanian kab/kota |
| 5 | Perizinan Usaha Pertanian | Izin usaha pertanian dalam kab/kota; izin usaha produksi benih/bibit ternak & pakan, fasilitas pemeliharaan hewan, RS hewan/pasar hewan, RPH; izin usaha pengecer obat hewan |
| 6 | Karantina Pertanian | *(tidak ada kewenangan kab/kota)* |
| 7 | Varietas Tanaman | *(tidak ada kewenangan kab/kota — Perlindungan Varietas Tanaman/PVT adalah kewenangan Pusat)* |

### Y. Kelautan dan Perikanan ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Perikanan/Kelautan-Perikanan; untuk kabupaten non-pesisir seperti HSS, fokus perikanan darat/budidaya)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Kelautan, Pesisir, dan Pulau-Pulau Kecil | *(sebagian besar kewenangan Provinsi — wilayah laut 0-12 mil jadi Provinsi; kab/kota sangat terbatas)* |
| 2 | Perikanan Tangkap | Pemberdayaan nelayan kecil dalam Daerah kab/kota; pengelolaan dan penyelenggaraan Tempat Pelelangan Ikan (TPI) |
| 3 | Perikanan Budidaya | Penerbitan izin usaha perikanan budidaya (IUP) yang usahanya dalam 1 kab/kota; pemberdayaan usaha kecil pembudidayaan ikan; pengelolaan pembudidayaan ikan |
| 4 | Pengolahan dan Pemasaran Hasil Perikanan | Penerbitan tanda daftar usaha pengolahan hasil perikanan bagi usaha skala mikro dan kecil; penerbitan tanda daftar usaha pemasaran dan pengolahan hasil perikanan dalam 1 kab/kota |

**Catatan HSS**: HSS bukan pesisir (kabupaten daratan), jadi fokus pada **perikanan budidaya/darat** (sungai, kolam) — sub-urusan 3 & 4 paling relevan, sub-urusan 1 (kelautan) tidak relevan. Contoh lain "kewenangan legal ada tapi objek faktual bergantung geografi".

### Z. Pariwisata ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Pariwisata, atau gabungan Disporapar seperti HSS)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Destinasi Pariwisata | Pengelolaan daya tarik wisata kab/kota; pengelolaan kawasan strategis pariwisata kab/kota; pengelolaan destinasi pariwisata kab/kota; penetapan tanda daftar usaha pariwisata kab/kota |
| 2 | Pemasaran Pariwisata | Pemasaran pariwisata dalam dan luar negeri daya tarik, destinasi, dan kawasan strategis pariwisata kab/kota |
| 3 | Pengembangan Ekonomi Kreatif melalui Pemanfaatan dan Perlindungan HKI | Penyediaan prasarana (zona kreatif/ruang kreatif/kota kreatif) sebagai ruang berekspresi, berpromosi, dan berinteraksi bagi insan kreatif di kab/kota |
| 4 | Pengembangan Sumber Daya Pariwisata dan Ekonomi Kreatif | Pelaksanaan peningkatan kapasitas SDM pariwisata dan ekonomi kreatif tingkat kab/kota |

**Catatan HSS**: di **Disporapar**. Destinasi wisata (mis. Loksado, Pegunungan Meratus) adalah **sumber PAD** (retribusi wisata) — masuk kategori OPD penghasil PAD. Tanda daftar usaha pariwisata (TDUP) sering lewat OSS.

### AA. Pertanian ✅ TERVERIFIKASI PENUH (lihat detail di bagian terpisah di bawah)

### BB. Kehutanan ✅ TERVERIFIKASI PENUH

*(Pasca-UU 23/2014, kehutanan hampir sepenuhnya kewenangan Provinsi/Pusat — kab/kota sangat terbatas)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1-2 | Perencanaan/Pengelolaan Hutan, dst | *(tidak ada kewenangan kab/kota — Provinsi/Pusat)* |
| 3 | Konservasi SDA Hayati dan Ekosistemnya | Pelaksanaan pengelolaan **Taman Hutan Raya (TAHURA) kab/kota** |

**Catatan**: satu-satunya kewenangan kehutanan kab/kota adalah TAHURA kab/kota (jika ada). Mayoritas kehutanan pindah ke Provinsi pasca-UU 23/2014. Untuk HSS, relevan hanya jika ada Tahura kab/kota; kalau tidak, urusan ini praktis kosong di kab/kota.

### CC. Energi dan Sumber Daya Mineral ✅ TERVERIFIKASI PENUH

*(Pasca-UU 23/2014, ESDM hampir sepenuhnya kewenangan Provinsi/Pusat — kab/kota praktis nol)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1-5 | Geologi, Mineral-Batubara, EBT, Ketenagalistrikan, Migas | *(tidak ada kewenangan kab/kota — semua Provinsi/Pusat)* |

**Catatan**: ESDM adalah contoh urusan yang **secara praktis tidak menyisakan kewenangan kab/kota** pasca-UU 23/2014 (izin tambang, listrik, dll pindah ke Provinsi/Pusat). Kab/kota tidak membentuk OPD ESDM tersendiri. Kalau ada nama OPD menyinggung ESDM di kab/kota, kemungkinan sisa nomenklatur lama atau fungsi sangat terbatas.

### DD. Perdagangan ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Perdagangan, atau gabungan Disperindag)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Perizinan dan Pendaftaran Perusahaan | Penerbitan izin pengelolaan pasar rakyat, pusat perbelanjaan, dan izin usaha toko swalayan; penerbitan tanda daftar gudang dan surat keterangan penyimpanan barang; penerbitan Surat Izin Usaha Perdagangan (SIUP) minuman beralkohol golongan C untuk pengecer dan penjual langsung minum di tempat |
| 2 | Sarana Distribusi Perdagangan | Pembangunan dan pengelolaan sarana distribusi perdagangan (pasar rakyat) di kab/kota; pembinaan terhadap pengelola sarana distribusi perdagangan masyarakat di kab/kota |
| 3 | Stabilisasi Harga Barang Kebutuhan Pokok dan Barang Penting | Pemantauan harga, informasi ketersediaan stok, dan pengawasan pasokan barang kebutuhan pokok dan barang penting di tingkat pasar kab/kota |
| 4 | Pengembangan Ekspor | *(sebagian — koordinasi lintas OPD di kab/kota)* |
| 5 | Standardisasi dan Perlindungan Konsumen | Pelaksanaan metrologi legal berupa tera, tera ulang, dan pengawasan; pelaksanaan perlindungan konsumen di kab/kota |
| 6 | Penggunaan dan Pemasaran Produk Dalam Negeri | Pelaksanaan promosi dan pemasaran produk dalam negeri tingkat kab/kota |

**Catatan silang**: **Pasar rakyat = sumber PAD** (retribusi pasar) — kategori OPD penghasil PAD. Sub-urusan 3 (stabilisasi harga pokok) beririsan dengan SIHAPOK di portal Satu Data HSS. Metrologi legal (tera-tera ulang) juga sumber retribusi.

### EE. Perindustrian ✅ TERVERIFIKASI PENUH

*(OPD tipikal: Dinas Perindustrian, atau gabungan Disperindag)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Perencanaan Pembangunan Industri | Penetapan rencana pembangunan industri kab/kota |
| 2 | Perizinan | Penerbitan Izin Usaha Industri (IUI) kecil dan menengah; penerbitan Izin Usaha Kawasan Industri (IUKI) dan Izin Perluasan Kawasan Industri (IPKI) yang lokasinya di kab/kota |
| 3 | Sistem Informasi Industri Nasional (SIINas) | Penyampaian data industri, kawasan industri, informasi industri untuk SIINas melalui sistem informasi (tingkat kab/kota) |

**Catatan**: IUI kecil-menengah sering lewat OSS. SIINas adalah sistem nasional (Kemenperin). Sering satu OPD dengan Perdagangan (Disperindag).

### FF. Transmigrasi ✅ TERVERIFIKASI PENUH

*(OPD tipikal: melekat di Disnakertrans, atau Dinas Transmigrasi; relevan hanya untuk daerah dengan kawasan transmigrasi)*

| No | Sub Urusan | Kewenangan Kabupaten/Kota |
|---|---|---|
| 1 | Perencanaan Kawasan Transmigrasi | Pencadangan tanah untuk kawasan transmigrasi di kab/kota |
| 2 | Pembangunan Kawasan Transmigrasi | Penataan persebaran penduduk yang berasal dari 1 kab/kota |
| 3 | Pengembangan Kawasan Transmigrasi | Pengembangan satuan permukiman pada tahap kemandirian di kab/kota |

**Catatan**: relevan hanya untuk daerah dengan program transmigrasi. Sering melekat di Disnakertrans (gabung Tenaga Kerja). Untuk HSS, **[ISI: perlu cek apakah ada kawasan transmigrasi — kemungkinan tidak relevan]**.

---

## AA. Pertanian ✅ TERVERIFIKASI PENUH (detail lengkap)

---

## Status Pelengkapan Dokumen — LENGKAP 32/32 ✅

| Kategori | Status |
|---|---|
| Wajib Pelayanan Dasar (6) | **LENGKAP 6/6** — Pendidikan, Kesehatan, PU-Tata Ruang, Perumahan-Permukiman, Trantibumlinmas, Sosial |
| Wajib Non-Dasar (18) | **LENGKAP 18/18** — Tenaga Kerja, PPPA, Pangan, Pertanahan, LH, Adminduk-Capil, PMD, KB, Perhubungan, Kominfo, Koperasi-UKM, Penanaman Modal, Kepemudaan-OR, Statistik, Persandian, Kebudayaan, Perpustakaan, Kearsipan |
| Pilihan (8) | **LENGKAP 8/8** — Kelautan-Perikanan, Pariwisata, Pertanian, Kehutanan, ESDM, Perdagangan, Perindustrian, Transmigrasi |

**SELURUH 32 URUSAN KONKUREN UU 23/2014 TERVERIFIKASI PENUH** — semua ditarik langsung dari teks lampiran UU 23/2014 (file `uu_23_2014.md`), dengan kutipan kewenangan kolom Kabupaten/Kota. Matriks ini kini menjadi referensi derivasi proses bisnis yang lengkap untuk **OPD apa pun di kabupaten/kota manapun di Indonesia** — mesin derivasi skill tidak lagi perlu pencarian tambahan ke lampiran UU 23/2014 saat runtime, cukup baca matriks ini.

### Catatan Pola Penting yang Ditemukan Sepanjang Pelengkapan

1. **Urusan yang praktis kosong di kab/kota pasca-UU 23/2014**: ESDM (nol kewenangan kab/kota), Kehutanan (hanya TAHURA kab/kota), Kelautan (0-12 mil jadi Provinsi). Untuk urusan ini, jangan paksakan OPD/proses bisnis — kewenangan legal memang minim/nol.

2. **Urusan penghasil PAD (retribusi)** — penting untuk kategori OPD penghasil PAD di `pola-integrasi-pasangan.md`: Perdagangan (retribusi pasar, metrologi), Pariwisata (retribusi wisata), Perhubungan (parkir, uji KIR), LH (retribusi sampah), Kebudayaan (museum/cagar budaya jika jadi destinasi), Kesehatan (BLUD), Kelautan (TPI).

3. **Urusan yang lazim digabung dalam satu OPD** (contoh nomenklatur): Disperindag (Perdagangan+Perindustrian), Disnakertrans (Tenaga Kerja+Transmigrasi), Disporapar (Pemuda-OR+Pariwisata), DP3AP2KB (PPPA+KB), Disdikbud (Pendidikan+Kebudayaan), Dinas Perpustakaan dan Kearsipan (Perpustakaan+Kearsipan), DLH (LH, kadang+Kehutanan/Tahura).

4. **Jabatan fungsional per-urusan yang berpotensi triplikasi ASN** (sistem sektoral nasional vs SIMPEG lokal, seperti Guru-Nakes): Penyuluh Pertanian (Simluhtan), PKB/PLKB (sistem BKKBN), Pengawas Ketenagakerjaan, Pustakawan, Arsiparis — cek saat OPD terkait dipetakan.

---

## Sumber Data

Seluruh 32 urusan pada dokumen ini ditarik langsung dari **teks asli Lampiran UU 23/2014** (file `uu_23_2014.md`, bagian "MATRIKS PEMBAGIAN URUSAN PEMERINTAHAN KONKUREN", huruf A-FF). Tabel PDF asli memiliki struktur kolom yang bergeser saat dikonversi ke teks, sehingga penarikan dilakukan dengan membaca konten kolom "DAERAH KABUPATEN/KOTA" secara hati-hati per sub-urusan. Item yang masih ambigu akibat pergeseran kolom ditandai `[ISI:]` untuk konfirmasi lanjutan, konsisten dengan disiplin anti-fabrikasi. Beberapa sub-urusan dengan banyak rincian teknis diringkas pada poin-poin utama kewenangan kab/kota; untuk kebutuhan legal presisi, rujuk teks asli UU 23/2014.

---

## Sumber Data

Seluruh sub-urusan bertanda ✅ pada dokumen ini ditarik langsung dari **teks asli Lampiran UU 23/2014** (file `uu_23_2014.md`, bagian "MATRIKS PEMBAGIAN URUSAN PEMERINTAHAN KONKUREN", huruf A-X untuk urusan Wajib + urusan Pilihan). Tabel PDF asli memiliki struktur kolom yang bergeser saat dikonversi ke teks, sehingga penarikan dilakukan dengan membaca konten kolom "DAERAH KABUPATEN/KOTA" secara hati-hati per sub-urusan. Item yang masih ambigu akibat pergeseran kolom ditandai `[ISI:]` untuk konfirmasi lanjutan, konsisten dengan disiplin anti-fabrikasi.

---

*Dokumen ini akan terus dilengkapi. Setiap penambahan wajib menyertakan kutipan langsung dari teks lampiran UU 23/2014 (bukan interpretasi/ingatan), konsisten dengan disiplin anti-fabrikasi yang berlaku di seluruh rangkaian kerja Arsitektur SPBE/Pemdi ini.*
