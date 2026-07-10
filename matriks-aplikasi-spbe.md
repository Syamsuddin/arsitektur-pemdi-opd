# Matriks Aplikasi SPBE — Klasifikasi Umum/Khusus per Urusan

> Referensi derivasi Domain 3 (Layanan) dan Domain 4 (Aplikasi) untuk skill `pemdi-arsitektur-opd`. Mengatalogkan aplikasi yang menjalankan layanan pemerintahan, diklasifikasi menurut terminologi resmi **Perpres 95/2018 jo. Perpres 132/2022**: Aplikasi Umum vs Aplikasi Khusus.
>
> **Tujuan utama: disiplin anti-fabrikasi.** Nama sistem dan status resminya (Umum vs Khusus, pemilik, dasar hukum) mudah tertukar atau salah ingat. Matriks ini mengunci fakta yang sudah diverifikasi, dan menandai tegas yang perlu cek versi/status terkini. **Jangan mengarang nama aplikasi atau statusnya** — kalau tidak ada di matriks dan tidak yakin, tandai `[ISI: verifikasi nama/status aplikasi]`.

## Klasifikasi Resmi (Perpres 132/2022, Referensi Arsitektur Aplikasi)

Domain Aplikasi SPBE dibagi **2 kategori di tingkat nasional**:

### 1. Aplikasi Umum (kode 01) — berbagi pakai horizontal
Aplikasi yang **fungsinya sama dan standar**, digunakan **berbagi pakai** (shared) oleh Instansi Pusat dan/atau Pemda. **Ditetapkan Menteri PANRB** lewat Keputusan Menteri. Dua sub-lapisan:
- **01.01 Aplikasi Umum Layanan Publik** (G2C) — mendukung pelayanan publik
- **01.02 Aplikasi Umum Administrasi Pemerintahan** (G2G) — mendukung administrasi

**Dibatasi 8 bidang** (amanat Perpres 95/2018): perencanaan, penganggaran, pengadaan barang/jasa, akuntabilitas kinerja, pemantauan-evaluasi, kearsipan, kepegawaian, pengaduan pelayanan publik.

### 2. Aplikasi Khusus (kode 02) — vertikal, kebutuhan khusus
Aplikasi yang dibangun/dikembangkan/dikelola oleh Instansi Pusat atau Pemda **tertentu** untuk kebutuhan khusus yang bukan kebutuhan instansi lain. Dipakai **vertikal** dalam satu instansi/sektor. Dua sub-lapisan:
- **02.01 Aplikasi Khusus Misi Tertentu** — mendukung misi tertentu (sesuai UU/darurat, jangka waktu tertentu)
- **02.02 Aplikasi Khusus Fungsi Tertentu** — mendukung fungsi khusus instansi tertentu

**Penting untuk pemetaan Pemda**: dari sudut pandang Pemda kabupaten/kota, aplikasi terbagi jadi tiga secara praktis:
- **(A) Aplikasi Umum** — resmi ditetapkan MenPANRB, wajib dipakai berbagi pakai (Srikandi, SP4N-LAPOR!, SPSE, SI-ASN)
- **(B) Aplikasi Khusus milik Kementerian/Lembaga (sektoral)** — Aplikasi Khusus Fungsi Tertentu milik K/L teknis (Dapodik, SATUSEHAT, SIINas, dll); Pemda wajib pakai tapi tidak memiliki/mengembangkan; ini **hulu integrasi vertikal** ke kementerian
- **(C) Aplikasi Khusus milik Pemda** — dibangun sendiri oleh Pemda untuk kebutuhan lokal (mis. SIRWAN, e-Kinerja HSS, portal Satu Data lokal)

Klasifikasi (A)/(B)/(C) ini yang dipakai di kolom matriks di bawah. Catatan: (B) dan (C) sama-sama "Aplikasi Khusus" secara Perpres, tapi dibedakan berdasar pemilik karena implikasi integrasinya beda (B = hulu vertikal ke K/L; C = aset lokal yang bisa diintegrasikan via Hub SPL).

## Cara Pakai (Domain 3-4 Mode PEMETAAN)

1. Untuk tiap proses bisnis/layanan OPD (dari matriks proses bisnis), cari aplikasi yang menjalankannya di matriks ini.
2. Tandai klasifikasinya: (A) Umum, (B) Khusus K/L, atau (C) Khusus Pemda.
3. Untuk (B), catat sebagai titik integrasi vertikal ke kementerian pemilik.
4. Kalau layanan belum ada aplikasinya → gap → kandidat pembangunan (biasanya jadi Aplikasi Khusus Pemda, atau modul Hub SPL).
5. Kalau aplikasi tidak ada di matriks ini dan tidak yakin namanya/statusnya → `[ISI: verifikasi nama/status aplikasi]`. Jangan mengarang.

---

# BAGIAN A — APLIKASI UMUM (ditetapkan MenPANRB, lintas semua OPD)

Aplikasi ini dipakai **hampir semua OPD**, bukan spesifik satu urusan. Diverifikasi dari Perpres 95/2018 + Keputusan Menteri PANRB.

| Aplikasi | Bidang | Jenis | Pemilik/Penetap | Dasar Hukum | Catatan |
|---|---|---|---|---|---|
| **SRIKANDI** (Sistem Informasi Kearsipan Dinamis Terintegrasi) | Kearsipan | Umum Adm (G2G) | ANRI; ditetapkan MenPANRB | Kepmen PANRB 679/2020 | Wajib semua instansi; menggantikan aplikasi kearsipan lokal. [ISI: cek versi terkini — ada SRIKANDI Live] |
| **SP4N-LAPOR!** (Layanan Aspirasi dan Pengaduan Online Rakyat) | Pengaduan pelayanan publik | Umum Publik (G2C) | KemenPANRB/KSP/Ombudsman | Perpres 95/2018 | Kanal pengaduan nasional; relevan Diskominfo + Bagian Organisasi |
| **SPSE** (Sistem Pengadaan Secara Elektronik) | Pengadaan barang/jasa | Umum Adm (G2G) | LKPP | Perpres 95/2018 | Dikelola via LPSE daerah; relevan Bagian PBJ/Setda |
| **SI-ASN** (Sistem Informasi ASN) | Kepegawaian | Umum Adm (G2G) | BKN; ditetapkan MenPANRB | Perpres 95/2018 | Relevan BKPSDM. [ISI: cek relasi dengan SIASN BKN & modul turunannya] |
| [ISI: Aplikasi Umum bidang perencanaan] | Perencanaan | Umum Adm | [ISI: verifikasi — kandidat SIPD-RI Kemendagri untuk perencanaan-penganggaran daerah] | [ISI] | SIPD sering jadi tulang punggung perencanaan-keuangan daerah |
| [ISI: Aplikasi Umum bidang akuntabilitas kinerja] | Akuntabilitas kinerja | Umum Adm | [ISI: verifikasi — kandidat e-SAKIP/aplikasi SAKIP nasional] | [ISI] | Relevan Bagian Organisasi/SAKIP |

**Catatan status**: hanya 8 bidang yang boleh jadi Aplikasi Umum. Empat yang jelas sudah ditetapkan: Srikandi, SP4N-LAPOR!, SPSE, SI-ASN. Bidang perencanaan/penganggaran/akuntabilitas/monev **[ISI: perlu verifikasi aplikasi resmi terkini yang ditetapkan MenPANRB — lanskap ini berubah, jangan asumsikan]**.

**SIPD (Sistem Informasi Pemerintahan Daerah)**: perlu perhatian khusus. SIPD milik Kemendagri (dasar: Permendagri 70/2019 jo. 90/2019) adalah tulang punggung perencanaan-penganggaran-keuangan daerah. Statusnya **[ISI: verifikasi apakah SIPD masuk kategori Aplikasi Umum resmi atau Aplikasi Khusus Kemendagri]** — secara fungsi ia berbagi pakai lintas Pemda, tapi kepemilikan di Kemendagri. Ini contoh area abu-abu klasifikasi yang perlu dicek, bukan diasumsikan.

---

# BAGIAN B — APLIKASI KHUSUS MILIK KEMENTERIAN/LEMBAGA (sektoral, per urusan)

Aplikasi Khusus Fungsi Tertentu milik K/L teknis. Pemda **wajib pakai untuk fungsi inti sektornya**, tapi tidak memiliki/mengembangkan. Tiap aplikasi = **hulu integrasi vertikal** ke kementerian pemilik. Diorganisir per urusan.

| Urusan | Aplikasi | Pemilik (K/L) | Fungsi | Catatan Status |
|---|---|---|---|---|
| Pendidikan | **Dapodik** (Data Pokok Pendidikan) | Kemendikbudristek | Data pokok sekolah, siswa, guru, sarpras | Wajib; basis DAK & BOS |
| Kesehatan | **SATUSEHAT** (dulu berkembang dari PeduliLindungi) | Kemenkes | Platform interoperabilitas data kesehatan | [ISI: cek cakupan terkini] |
| Kesehatan | **SISDMK** (Sistem Informasi SDM Kesehatan) | Kemenkes | Data tenaga kesehatan | Relevan triplikasi ASN nakes |
| Adminduk-Capil | **SIAK Terpusat** (Sistem Informasi Administrasi Kependudukan) | Kemendagri (Ditjen Dukcapil) | Database kependudukan, NIK | Terpusat; Pemda hanya operator layanan |
| Sosial | **SIKS-NG / DTKS** (Data Terpadu Kesejahteraan Sosial) | Kemensos | Data kemiskinan, penerima bansos | [ISI: cek nama sistem terkini — SIKS-NG] |
| Tenaga Kerja | **SISNAKER** | Kemnaker | Pasar kerja, pelatihan, pengawasan | Termasuk Karirhub, dll |
| Perindustrian | **SIINas** (Sistem Informasi Industri Nasional) | Kemenperin | Data industri, izin | Wajib pelaku industri |
| Penanaman Modal/Perizinan | **OSS-RBA** (Online Single Submission - Risk Based Approach) | Kementerian Investasi/BKPM | Perizinan berusaha terintegrasi | Wajib semua izin berusaha |
| PMD (Keuangan Desa) | **Siskeudes** (Sistem Keuangan Desa) | Kemendagri + BPKP | Pengelolaan keuangan desa | Dipakai tiap desa |
| PMD (Data Desa) | **[ISI: cek — kandidat SID/Prodeskel/IDM]** | Kemendagri/Kemendesa | Data desa, IDM | [ISI: verifikasi sistem terkini] |
| Koperasi | **[ISI: cek — kandidat ODS/SISKUM Kemenkop]** | Kementerian Koperasi | Data & izin koperasi | [ISI: verifikasi nama sistem] |
| Perencanaan-Keuangan Daerah | **SIPD** (Sistem Informasi Pemerintahan Daerah) | Kemendagri | Perencanaan, penganggaran, keuangan daerah | Lihat catatan SIPD di Bagian A |
| Kepegawaian (fungsi BKN) | **SIASN / e-Kinerja BKN** | BKN | Manajemen ASN, kinerja | Relevan BKPSDM; feeds TPP |
| Kearsipan | **JIKN** (Jaringan Informasi Kearsipan Nasional) | ANRI | Simpul jaringan kearsipan | Terkait Srikandi |
| Statistik | **[ISI: cek sistem statistik sektoral — mungkin via Satu Data/SDI]** | BPS/Bappenas | Statistik sektoral | Terkait Satu Data Indonesia |
| Pertanian | **[ISI: cek — kandidat Simluhtan untuk penyuluhan]** | Kementan | Data penyuluhan pertanian | Relevan triplikasi ASN penyuluh |
| Lingkungan Hidup | **[ISI: cek — kandidat AMDALNET/PTSP-LH]** | KLHK | Perizinan lingkungan | [ISI: verifikasi] |

**Catatan penting**: kolom Aplikasi di atas mencampur yang sudah pasti (Dapodik, SIAK, OSS, Siskeudes, SIINas, SISNAKER — sering disebut & tervalidasi di dokumen HSS) dengan yang perlu verifikasi ([ISI:]). **Nama sistem sektoral sangat dinamis** — berganti nama, digabung, versi baru. Yang bertanda [ISI:] WAJIB dicek sebelum ditulis sebagai fakta. Ini matriks yang **paling sering perlu update** dari semua referensi skill.

---

# BAGIAN C — APLIKASI KHUSUS MILIK PEMDA (aset lokal, contoh dari HSS)

Aplikasi Khusus yang dibangun sendiri oleh Pemda untuk kebutuhan lokal. Ini **aset yang bisa diintegrasikan via Hub SPL**. Contoh dari HSS (tervalidasi di dokumen arsitektur):

| Aplikasi | OPD Pemilik | Fungsi | Catatan |
|---|---|---|---|
| **SIRWAN** | BKPSDM HSS | Kepegawaian lokal (sebelum/pelengkap SIASN) | Tervalidasi dok BKPSDM |
| **e-Kinerja HSS** | BKPSDM HSS | Hitung NCTK/NPK/TPP (beda dari e-Kinerja BKN) | Tervalidasi; feeds TPP |
| **Portal Satu Data HSS** (satudata.hulusungaiselatankab.go.id) | Diskominfo HSS | 7 sub-sistem: Satu NIK, E-Wali Data, Statistik Sektoral, Geoportal, Satu Peta, SIHAPOK, SIOPEN | Tervalidasi; kandidat basis Hub SPL |
| **SIHAPOK** (sub-sistem Satu Data) | Diskominfo/Disdag HSS | Sistem harga pokok/bapok | Terhubung ke Bidang Stabilisasi Harga Disdag |
| **MPP Digital HSS** | DPMPTSP HSS | Mal Pelayanan Publik digital (117 layanan/16 instansi) | Tervalidasi; 1 dari 22 MPP Digital nasional |

**Catatan**: aplikasi Khusus Pemda seperti ini adalah **kandidat utama integrasi via Hub SPL** — mereka aset lokal yang dimiliki penuh, jadi Pemda bebas mengintegrasikannya (beda dari Aplikasi Umum/K/L yang integrasinya bergantung pemilik pusat). Portal Satu Data HSS yang sudah punya 7 sub-sistem adalah fondasi Hub SPL yang sudah ada, bukan perlu dibangun dari nol.

---

## Ringkasan untuk Domain 4 (Aplikasi)

Saat memetakan Domain 4 sebuah OPD, klasifikasikan tiap aplikasi:
1. **(A) Aplikasi Umum** → wajib pakai, integrasi diatur pusat. Cek 4 yang pasti (Srikandi/SP4N-LAPOR!/SPSE/SI-ASN) + status SIPD.
2. **(B) Aplikasi Khusus K/L** → hulu integrasi vertikal ke kementerian. Ini fungsi inti sektor OPD. Verifikasi nama terkini kalau bertanda [ISI:].
3. **(C) Aplikasi Khusus Pemda** → aset lokal, kandidat integrasi Hub SPL. Gap layanan biasanya jadi kandidat aplikasi Khusus Pemda baru.

**Prinsip anti-duplikasi (Perpres 95/2018)**: kalau ada Aplikasi Umum untuk suatu fungsi, Pemda **tidak boleh** membangun aplikasi sejenis (mis. jangan bangun aplikasi kearsipan lokal kalau sudah ada Srikandi). Saat menemukan aplikasi Khusus Pemda yang fungsinya sama dengan Aplikasi Umum, tandai sebagai **kandidat migrasi/penyesuaian**, bukan dipertahankan.

**Disiplin anti-fabrikasi (penekanan ulang)**: matriks ini sengaja memuat banyak [ISI:] karena lanskap aplikasi pemerintah berubah cepat dan sebagian di luar cutoff pengetahuan. Lebih baik menandai [ISI: verifikasi] daripada menulis nama/status aplikasi yang salah tapi terdengar meyakinkan. Saat memetakan OPD nyata, verifikasi aplikasi via pencarian atau konfirmasi lapangan.
