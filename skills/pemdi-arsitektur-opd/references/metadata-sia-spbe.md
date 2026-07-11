# Metadata Resmi SIA-SPBE — Selaraskan Output dengan Portal arsitektur.spbe.go.id

> Daftar metadata resmi per domain arsitektur, ditarik dari Manual Book SIA-SPBE (portal `arsitektur.spbe.go.id`, tempat Pemda wajib mendokumentasikan arsitektur secara formal). Dipakai di Langkah 3 Mode PEMETAAN agar dokumen arsitektur yang dihasilkan skill **mengisi field yang sama** dengan yang diminta portal — sehingga bisa langsung disalin/diinput ke SIA-SPBE tanpa mengarang ulang.
>
> **Tujuan**: output skill bukan sekadar "bagus dibaca manusia", tapi "siap masuk portal resmi". Setiap domain di dokumen arsitektur sebaiknya menyertakan kolom/atribut metadata sesuai daftar di bawah.
>
> **Catatan sumber dan kelengkapan (hasil audit + verifikasi gambar teliti)**: ditarik dari teks manual (OCR) dan diperiksa terhadap screenshot form di PDF resmi (137 halaman). Temuan penting soal kelengkapan:
> - **Nama field: lengkap dan terverifikasi** untuk semua domain (Proses Bisnis, Data, Layanan, Aplikasi, Infrastruktur 12 objek, Keamanan 7 objek, Peta Strategi). Ini solid.
> - **Nilai/opsi enumerasi: TIDAK tersedia di manual ini.** Verifikasi teliti (teks + rasterisasi halaman form 33, 38, 41, 43, 99) menunjukkan manual hanya menampilkan **nama field** di panel metadata dan popup "Select attribute" — **tidak pernah menampilkan dropdown nilai yang terbuka**. Nilai enumerasi (mis. pilihan Sifat Data, Jenis Data, Basis Aplikasi, Tipe Lisensi, Government Cloud, Klasifikasi Tier) hanya ada di dropdown portal langsung, bukan di manual. Semua ditandai [ISI: verifikasi ke portal].
> - **Aturan (ditegakkan ketat)**: jangan mengarang nama field maupun nilai. Nilai enumerasi WAJIB diverifikasi ke portal SIA-SPBE langsung sebelum ditulis sebagai fakta — pengetahuan umum tentang klasifikasi data pemerintah TIDAK boleh diklaim sebagai "nilai resmi SIA".

## Prinsip Pemetaan ke Struktur SIA-SPBE

SIA-SPBE mengatur arsitektur dalam struktur berjenjang (Referensi Arsitektur per domain, disingkat RAB/RAL/RAD/RAA/RAI/RAK Level 1 sampai 7). Skill tidak perlu meniru mekanisme portal (drag-drop, BPMN, dsb) — cukup **mengisi metadata substantifnya** supaya praktisi tinggal menyalin. Tiap objek arsitektur punya minimal atribut **ID** dan **Uraian/Deskripsi**, plus atribut khusus per domain.

Singkatan referensi arsitektur (untuk kolom Ref. Nasional):
- **RAB** = Referensi Arsitektur Proses **B**isnis (Sektor/Urusan/Fungsi/Sub-Fungsi)
- **RAL** = Referensi Arsitektur **L**ayanan
- **RAD** = Referensi Arsitektur **D**ata dan Informasi
- **RAA** = Referensi Arsitektur **A**plikasi (Umum/Khusus)
- **RAI** = Referensi Arsitektur **I**nfrastruktur
- **RAK** = Referensi Arsitektur **K**eamanan

---

## Domain 1 — Proses Bisnis (RAB)

**Metadata per objek proses bisnis:**
- ID
- Uraian/Deskripsi
- RAB Level 4, 5, 6, 7 (jika ada — penjabaran lebih rinci di bawah Fungsi/Sub-Fungsi)

**Catatan untuk skill**: proses bisnis sudah kita susun dengan jenis [I]/[M]/[P] dan SIPOC. Untuk keselarasan SIA-SPBE, pastikan tiap proses punya **ID** (mis. PB-01) dan **Uraian** ringkas. Klasifikasi Inti/Manajemen/Pendukung adalah tambahan metodologis kita (Permenpan 19/2018) yang memperkaya, bukan menggantikan, metadata SIA.

---

## Domain 3 — Layanan (RAL)

**Metadata inti per objek layanan** (paling kaya di antara semua domain):
- ID
- Tujuan
- Fungsi
- Kementerian/Lembaga terkait
- Urusan Pemerintahan terkait
- Target Layanan
- Metode Layanan
- **Potensi Manfaat**
- **Potensi Ekonomi**
- RAL Level 4, 5, 6, 7 (jika ada)

**Metadata detail layanan** (via diagram Service Collaboration):
- Unit Pelaksana
- **Potensi Risiko**
- **Mitigasi Risiko**

**Catatan untuk skill**: ini gap terbesar di output kita — selama ini Domain 3 hanya mencatat jenis (Publik/Administrasi) + kanal. SIA-SPBE meminta jauh lebih banyak. Field yang paling menambah nilai: **Target Layanan** (siapa yang dilayani), **Metode Layanan** (cara/kanal), **Potensi Manfaat & Ekonomi** (dampak), dan **Potensi Risiko + Mitigasi** (yang beririsan dengan Prinsip Batasi Digitalisasi kita — untuk data sensitif, Potensi Risiko dan Mitigasi jadi sangat relevan). Isi `[ISI:]` untuk yang belum tervalidasi.

---

## Domain 2 — Data dan Informasi (RAD)

**Metadata per objek data:**
- ID
- Uraian
- Tujuan
- **Sifat Data** ([ISI: nilai enumerasi tidak tercantum di manual — verifikasi dropdown di portal. Klasifikasi data pemerintah umumnya terbuka/terbatas/rahasia, tapi nilai persis SIA belum dikonfirmasi])
- **Jenis Data** ([ISI: verifikasi ke portal])
- **Validitas Data** ([ISI: verifikasi ke portal])
- **Penghasil Data / Produsen Data**
- **Penanggung Jawab Data / Wali Data**
- Informasi yang terkait
- **Interoperabilitas**
- RAD Level 4, 5, 6, 7 (jika ada)

**Catatan untuk skill**: ini menyempurnakan Temuan 4 (Domain 2 sebagai turunan proses bisnis). Konsep **Produsen Data** dan **Wali Data** persis SIPOC yang sudah kita pakai — Produsen = yang menghasilkan (proses/OPD sumber), Wali Data = penanggung jawab (owner). Tinggal dipetakan ke istilah resmi. **Sifat Data** beririsan langsung dengan Prinsip Batasi Digitalisasi (data sensitif = sifat tertutup/terbatas). **Interoperabilitas** menandai apakah data dibagi-pakai lintas OPD (titik integrasi).

---

## Domain 4 — Aplikasi (RAA)

**Metadata per objek aplikasi:**
- ID
- Uraian/Deskripsi
- Fungsi
- **Luaran** (output aplikasi)
- **Basis Aplikasi** ([ISI: nilai enumerasi tidak tercantum di manual — umumnya web/mobile/desktop, verifikasi di portal])
- **Tipe Lisensi Aplikasi** ([ISI: verifikasi di portal — umumnya berbayar/gratis atau proprietary/open source])
- **Basis Data** (jenis DBMS)

**Catatan untuk skill**: klasifikasi (A) Umum / (B) Khusus K-L / (C) Khusus Pemda yang sudah kita pakai (dari `matriks-aplikasi-spbe.md`) melengkapi metadata ini — masuk sebagai bagian dari Uraian/Fungsi. Field baru yang perlu ditambahkan: **Luaran**, **Basis Aplikasi**, **Tipe Lisensi**, **Basis Data**. Untuk aplikasi nasional (Umum/Khusus K-L), field teknis ini sering `[ISI:]` karena dikelola pusat; untuk Aplikasi Khusus Pemda, bisa diisi dari pengetahuan lokal.

---

## Domain 5 — Infrastruktur (RAI)

**Metadata per objek infrastruktur** (SIA-SPBE mendaftar minimal 12 jenis objek — domain dengan objek terbanyak):

| No | Objek Infrastruktur | Metadata Atribut |
|---|---|---|
| 1 | **Komputasi Awan** | ID, Uraian/Deskripsi, Tipe Government Cloud, Status Kepemilikan, Nama Pemilik, Biaya Layanan |
| 2 | **Perangkat Keras Server** | ID, Uraian/Deskripsi, Jenis Penggunaan Server, Status Kepemilikan, Nama Pemilik, Kapasitas Memori, Jenis Teknologi Prosesor, Kapasitas Penyimpanan |
| 3 | **Perangkat Keras Periferal** | ID, Uraian/Deskripsi, Tipe Periferal |
| 4 | **Perangkat Keras Media Penyimpanan** | ID, Uraian/Deskripsi, Status Kepemilikan, Nama Pemilik, Kapasitas Penyimpanan, Metode Akses Data Sharing |
| 5 | **Perangkat Keras Jaringan** | ID, Uraian/Deskripsi, Tipe Network/Communication Device, Status Kepemilikan, Nama Pemilik |
| 6 | **Perangkat Keras Keamanan** | ID, Uraian/Deskripsi, Tipe Security Device, Status Kepemilikan, Nama Pemilik |
| 7 | **Perangkat Lunak Platform (Sistem Operasi)** | ID, Uraian/Deskripsi, Jenis Sistem Operasi, Jenis Lisensi, Nama Pemilik, Validitas Lisensi Perangkat Lunak |
| 8 | **Perangkat Lunak Platform (Sistem Database)** | ID, Uraian/Deskripsi, Jenis Sistem Database, Jenis Lisensi, Nama Pemilik, Validitas Lisensi Perangkat Lunak |
| 9 | **Perangkat Lunak Platform (Sistem Utilitas)** | ID, Uraian/Deskripsi, Jenis Sistem Utilitas, Jenis Lisensi, Nama Pemilik, Validitas Lisensi Perangkat Lunak |
| 10 | **Jaringan Intra Pemerintah** | ID, Uraian/Deskripsi, Jenis Jaringan, Status Kepemilikan, Nama Pemilik, Tipe Media Jaringan |
| 11 | **Sistem Penghubung Layanan Pemerintah** | ID, Uraian/Deskripsi, Jenis Sistem Penghubung, Nama Pemilik |
| 12 | **Fasilitas Komputasi** | ID, Bandwidth Intranet, Bandwidth Internet, Lokasi, Kepemilikan, **Klasifikasi Tier**, Sistem Pengamanan |

**Catatan untuk skill**: selama ini Domain 5 kita cuma "PDN vs Data Center lokal" — SIA-SPBE jauh lebih rinci (12 objek). Untuk tingkat arsitektur OPD (bukan inventaris teknis), yang paling relevan dan mudah diisi: **Status Kepemilikan/Kepemilikan** (milik/sewa/berbagi pakai PDN) dan **Nama Pemilik** di hampir semua objek. Objek 10-12 penting untuk konteks integrasi: **Sistem Penghubung Layanan Pemerintah** adalah SPLP yang sering dibahas (kandidat Hub SPL); **Fasilitas Komputasi** dengan **Klasifikasi Tier** relevan untuk Pemda yang punya Data Center sendiri. Detail teknis (kapasitas, bandwidth, prosesor) biasanya `[ISI:]` dan diisi tim infrastruktur. Jangan memaksakan spesifikasi teknis yang tidak diketahui.

---

## Domain 6 — Keamanan (RAK)

**Tujuh objek keamanan resmi** (ini menggantikan pendekatan naratif "risiko + kontrol" kita dengan struktur baku):

| No | Objek Keamanan | Metadata Atribut |
|---|---|---|
| 1 | **Standar, Prosedur, dan Regulasi Keamanan** | ID, Uraian/Deskripsi, Tanggal Mulai Penerapan, Tanggal Akhir Penerapan |
| 2 | **Edukasi Kesadaran Keamanan** | ID, Uraian/Deskripsi, Tanggal Kegiatan |
| 3 | **Identifikasi Kerentanan Keamanan** | ID, Uraian/Deskripsi, Tanggal Kegiatan |
| 4 | **Peningkatan Keamanan** | ID, Uraian/Deskripsi, Tanggal Kegiatan, Nilai Kematangan |
| 5 | **Penanganan Insiden Keamanan** | ID, Uraian/Deskripsi, Tanggal Kegiatan, Nilai Kematangan |
| 6 | **Audit Keamanan** | ID, Hasil Audit Keamanan, Jenis Audit Keamanan, Tanggal Kegiatan, Tindak Lanjut Audit Keamanan |
| 7 | **Kelaikan Keamanan** | ID, Tanggal Kegiatan |

**Catatan untuk skill**: SIA-SPBE menstrukturkan keamanan sebagai 7 program/objek, bukan tabel risiko-kontrol bebas. Untuk keselarasan, Domain 6 sebaiknya memetakan analisis keamanan kita ke tujuh objek ini. **Prinsip Batasi Digitalisasi** kita paling cocok masuk ke objek 1 (Standar/Prosedur/Regulasi — kebijakan membatasi akses) dan tercermin di **Sifat Data** (Domain 2). **Nilai Kematangan** (objek 4-5) nyambung ke Indeks Pemdi. Banyak field tanggal/kegiatan akan `[ISI:]` di tahap arsitektur awal.

---

## Domain Tata Kelola — Peta Strategi (untuk Usulan C nanti)

Dicatat di sini untuk kelengkapan; implementasi penuh di usulan berikutnya. Objek Peta Strategi: **Visi, Misi, Tujuan, Sasaran Strategis, Indikator Sasaran Strategis (IKU)**. Metadata IKU: Nilai IKU Target, Nilai IKU Realisasi, Satuan IKU. Tiap IKU dipetakan ke proses bisnis pendukung (KPI allocation). Ini jembatan arsitektur ke kinerja/SAKIP.

---

## Cara Pakai (Langkah 3 PEMETAAN)

Saat menyusun tiap domain, sertakan kolom metadata sesuai daftar di atas. Prioritas pengisian:
1. **Selalu isi**: ID + Uraian/Deskripsi (semua domain), plus atribut yang bisa diturunkan dari analisis yang sudah ada (mis. Produsen/Wali Data dari SIPOC; Urusan terkait dari matriks urusan; Klasifikasi aplikasi dari matriks aplikasi).
2. **Isi jika diketahui**: field substantif seperti Target Layanan, Metode Layanan, Sifat Data, Potensi Risiko/Mitigasi.
3. **Tandai `[ISI:]`**: field teknis rinci yang butuh data lapangan (kapasitas server, tanggal kegiatan keamanan, biaya layanan) — jangan mengarang.

Format praktis: tabel per domain dengan kolom metadata, atau daftar atribut per objek. Yang penting field-nya **selaras nama resmi SIA-SPBE** supaya bisa langsung dipindahkan ke portal. Ini mengubah output skill dari dokumen naratif jadi bahan input formal.
