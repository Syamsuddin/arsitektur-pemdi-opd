---
name: pemdi-arsitektur-opd
description: >-
  Menyusun Arsitektur Pemdi/SPBE (SPBE versi 3.0 per Permenpan RB 8/2026)
  tingkat Perangkat Daerah (OPD), universal untuk kabupaten/kota manapun,
  bisa dimulai dari OPD mana saja tanpa urutan tertentu. WAJIB dipakai
  setiap kali pengguna minta memetakan/menyusun arsitektur SPBE atau Pemdi
  untuk sebuah Dinas/Badan/Kecamatan; menyintesis peta arsitektur lintas-OPD
  tingkat Pemda; mengoreksi atau memvalidasi dokumen arsitektur yang sudah
  ada; menyusun arsitektur To-be dan Katalog Gap (perencanaan); atau
  menyiapkan bahan Peta Rencana SPBE/Pemdi, GARI-Daerah. Pemicu:
  'susun arsitektur SPBE/Pemdi [OPD]', 'petakan 6 domain untuk [OPD]',
  'buat sintesis arsitektur Pemda', 'koreksi dokumen arsitektur [OPD]
  berdasarkan info baru', 'susun To-be dan katalog gap [OPD]', 'buat
  arsitektur ideal/perencanaan [OPD]' — bahkan tanpa kata 'skill' atau
  'arsitektur' eksplisit, selama konteksnya pemetaan atau perencanaan
  proses bisnis, data, layanan, aplikasi, infrastruktur, dan keamanan
  pemerintah daerah.
---

# Pemdi Arsitektur OPD

Skill untuk menyusun Arsitektur Pemdi (istilah resmi Permenpan RB 8/2026, menggantikan evaluasi "Arsitektur SPBE" — tapi kerangka 6 domain Perpres 132/2022 tetap jadi fondasi teknis, per prinsip "SPBE versi 3.0": evolusi, bukan penggantian total) untuk Perangkat Daerah tingkat kabupaten/kota. Dirancang agar **Pemda-agnostik** (bisa dipakai untuk kabupaten/kota manapun) dan **order-agnostic** (OPD pertama yang dipetakan boleh apa saja).

## Empat Mode Eksplisit

Setiap permintaan masuk ke salah satu dari empat mode berikut. BASELINE (memuat referensi nasional) tidak lagi jadi mode terpisah — ia melebur otomatis di awal tiap mode (lihat "Langkah Otomatis" di bawah).

| Mode | Kapan Dipakai |
|---|---|
| **PEMETAAN** | Pengguna minta susun/petakan arsitektur (As-is, kondisi sekarang) untuk satu OPD tertentu |
| **SINTESIS** | Pengguna minta gulung beberapa OPD yang sudah dipetakan jadi kerangka utuh Pemda |
| **KOREKSI** | Ada informasi baru (regulasi asli, sistem yang ditemukan, fakta lapangan) yang berpotensi mengoreksi dokumen yang sudah ada |
| **PERENCANAAN** | Pengguna minta susun arsitektur To-be (kondisi ideal) dan Katalog Gap untuk OPD yang As-is-nya sudah ada. Mengubah skill dari pendokumentasi jadi alat perencanaan. |

Kalau permintaan pengguna ambigu antara mode, PEMETAAN adalah default paling aman. **PERENCANAAN mensyaratkan As-is sudah ada** — kalau belum, jalankan PEMETAAN dulu.

---

## Langkah Otomatis (di awal SETIAP mode)

Sebelum mengerjakan permintaan, jalankan diam-diam (tanpa perlu dinarasikan ke pengguna sebagai "langkah setup"):

1. **Tentukan nama Pemda.** Kalau belum jelas dari konteks percakapan, tanyakan singkat.
2. **Cari Dosir yang sudah ada.** Periksa `/mnt/user-data/uploads` untuk file `dosir.json` (atau dokumen arsitektur OPD yang diunggah pengguna). Kalau ada, baca — itu status kerja Pemda sejauh ini. Kalau tidak ada, mulai Dosir baru di working directory memakai `assets/dosir-template.json` sebagai kerangka. **Penting soal persistensi**: direktori kerja di-reset antar-sesi, jadi Dosir TIDAK bertahan otomatis. Mekanismenya unggah-ulang (lihat Langkah 5): di akhir sesi Dosir disajikan sebagai file untuk pengguna simpan, di awal sesi berikutnya pengguna mengunggahnya kembali. Kalau pengguna belum pernah punya Dosir (Pemda/OPD pertama), ini wajar — mulai baru.
3. Referensi nasional (`references/referensi-nasional.md`, `references/regulasi-pemdi-2026.md`) sudah statis dan sama untuk semua Pemda — tidak perlu dibuat ulang, cukup dibaca saat dibutuhkan di Mode PEMETAAN.

---

## Mode PEMETAAN — Menyusun Satu OPD

### Langkah 1: Identifikasi Tipe OPD, lalu Turunkan ke Proses Bisnis

Ini langkah **paling penting dan paling sering dilewatkan** — jangan langsung lompat ke pola generik.

**1.0. Tentukan tipe OPD lebih dulu (menentukan jalur derivasi).**
Tidak semua OPD memetakan ke urusan konkuren. Klasifikasikan dulu (dasar: PP 18/2016):
- **Dinas** (unsur pelaksana urusan konkuren, mis. Dinas Pendidikan, Dinas Kesehatan) → lanjut ke **1a-1b** (jalur matriks urusan).
- **Non-Dinas** — Badan penunjang (Bappeda/Bapperida=perencanaan, Bakeuda/BPKAD=keuangan, BKPSDM=kepegawaian, Balitbang=litbang), Sekretariat Daerah/Bagian, Sekretariat DPRD, Inspektorat, Kecamatan, atau Kesbangpol (pemerintahan umum) → **JANGAN cari di matriks urusan**. Baca `references/tipe-opd-non-dinas.md`, ambil proses bisnis dari bagian yang sesuai sebagai draf Domain 1, lalu **lompat ke Langkah 2**.

Cara cepat: nama "Dinas ..." yang memuat urusan konkuren = Dinas. "Badan ...", "Inspektorat", "Kecamatan ...", "Sekretariat ...", "Bagian ...", "Kesbangpol" = non-Dinas. Kalau ragu, cek `tipe-opd-non-dinas.md` tabel klasifikasi. Nomenklatur bervariasi antar-daerah — konfirmasi lewat Perbup di Langkah 2.

**1a. (Dinas saja) Identifikasi urusan dan sub-urusan (legitimasi legal):**
1. Baca `references/matriks-urusan-uu23-2014.md`. **Baca selektif** — hanya bagian urusan yang relevan dengan OPD ini (pakai `grep`/`view` range), tidak perlu 32 urusan sekaligus.
2. Tokenize nama OPD terhadap ke-32 urusan yang terdaftar. OPD gabungan (mis. "Dinas Pendidikan dan Kebudayaan") wajar mengandung lebih dari satu urusan — proses semua yang cocok.
3. Untuk urusan yang cocok, tarik sub-urusan kolom **Kabupaten/Kota** (JANGAN kolom Provinsi/Pusat). Seluruh 32 urusan sudah terverifikasi penuh di matriks — tidak perlu pencarian tambahan.
4. Untuk mengisi kolom **Ref. Nasional** (kode RAB yang diminta SIA-SPBE), pakai **Crosswalk** di bagian akhir `matriks-urusan-uu23-2014.md` — ia memetakan tiap urusan konkuren ke kode RAB Perpres 132/2022 (mis. Perdagangan → 02.02). Untuk 8 urusan bertanda `[≈]` (Trantibumlinmas, Pangan, PMD, KB, Statistik, Persandian, Perpustakaan, Kearsipan), tulis kandidat + tandai perlu konfirmasi portal — jangan anggap final.

**1b. Turunkan sub-urusan ke proses bisnis konkret (Domain 1):**
1. Baca `references/matriks-proses-bisnis.md` — cari urusan yang sama untuk mendapat daftar proses bisnis konkret (Level 1) turunannya.
2. Baca `references/metodologi-probis.md` untuk kerangka penyusunan: klasifikasikan tiap proses jadi **[I] Inti / [M] Manajemen / [P] Pendukung**, dan gunakan **SIPOC** (Supplier/Customer sebuah proses seringkali OPD lain = titik integrasi).
3. Untuk urusan yang di matriks proses bisnis masih **🟡 NORMATIF SAJA** (belum ada dokumen tervalidasi), pakai proses bisnis kandidat yang ada tapi tandai `[ISI: normatif dari UU, perlu validasi lapangan]`.
4. **Prioritaskan proses Inti** untuk rekomendasi digitalisasi/integrasi nanti di Domain 4 — proses Inti melayani pengguna eksternal dan memberi nilai pelayanan; proses Pendukung (kepegawaian/keuangan internal) penting tapi bukan pembeda.
5. Kalau menemukan proses bisnis empiris baru yang belum ada di matriks proses bisnis, tambahkan (ubah 🟡→✅ untuk urusan yang jadi tervalidasi) — matriks ini aset kumulatif.

### Langkah 2: Cari Regulasi SOTK Riil

Sebelum default ke model generik:
1. **Kalau pengguna praktisi daerah, tawarkan lebih dulu**: "Jika Anda punya Perbup/Perwali SOTK OPD ini, unggah saja — lebih akurat daripada hasil pencarian." Perbup yang diunggah langsung mengalahkan hasil pencarian.
2. `web_search`: `"Peraturan Bupati/Wali Kota [nama Pemda] [nama OPD] struktur organisasi tugas fungsi"`.
3. Kalau ketemu Perbup/Perwali spesifik — pakai sebagai dasar Bidang/Seksi riil, tandai **[TERVALIDASI: Perbup .../...]**.
4. **Kalau pencarian nihil dan tidak ada unggahan** — jangan langsung jatuh ke model generik. Tanyakan struktur Bidang/Seksi ke pengguna dulu (mereka sering tahu). Baru kalau pengguna juga tidak tahu, bangun dari seed Langkah 1 + pola umum, tandai **[ISI: model generik berbasis pola umum + urusan konkuren, perlu validasi Perbup SOTK lokal]**.
5. Cek juga apakah ada reformasi SOTK terbaru (banyak Pemda pasca-2025 mengganti Perbup omnibus lama dengan Perbup individual per-OPD — jangan asumsikan regulasi lama masih berlaku tanpa cek). **Penting**: kalau menemukan Perbup SOTK yang lama, JANGAN langsung berhenti — cek apakah Perbup itu sudah dicabut/diganti (mis. pola Perbup omnibus dicabut lalu diganti Perbup individual per-OPD). Struktur dari Perbup lama mungkin sudah usang. Kalau versi terbaru tidak ditemukan, pakai yang ada tapi tandai [ISI: perlu cek apakah sudah berubah pasca-reformasi SOTK].

### Langkah 3: Susun 6 Domain

Ikuti kerangka `references/referensi-nasional.md` untuk tiap domain. **Selaraskan metadata dengan SIA-SPBE**: baca `references/metadata-sia-spbe.md` dan sertakan field metadata resmi per domain (minimal ID + Uraian tiap objek, plus atribut khusus domain) supaya output bisa langsung diinput ke portal `arsitektur.spbe.go.id`. Isi field yang bisa diturunkan dari analisis; tandai `[ISI:]` untuk field teknis yang butuh data lapangan (jangan mengarang).

1. **Proses Bisnis** — mulai dari proses bisnis konkret hasil Langkah 1b, kelompokkan ke Bidang/Seksi hasil Langkah 2. Awali dengan **pengelompokan Level 0** (daftar ringkas mana proses Inti, Manajemen, Pendukung), lalu rinci per-Bidang (setara Level 1). Sertakan kolom jenis [I]/[M]/[P] dan kolom Ref. Nasional (Sektor/Urusan T1-T2). Metadata SIA: ID, Uraian tiap proses. Tandai proses lintas-Bidang/lintas-OPD sebagai fungsi silang.
2. **Data & Informasi** — **diturunkan sistematis dari Domain 1, bukan diisi bebas**. Data adalah output proses bisnis: ambil kolom output/data kunci tiap proses (dari matriks proses bisnis). Kepemilikan dan titik integrasi data sudah teridentifikasi lewat **SIPOC** di Langkah 1b: Supplier = **Produsen Data** (data masuk dari OPD lain, titik integrasi hulu); Customer/owner = **Wali Data** (penanggung jawab). Metadata SIA: ID, Uraian, Sifat Data (terbuka/terbatas/tertutup — beririsan Prinsip Batasi Digitalisasi), Produsen Data, Wali Data, Interoperabilitas (dibagi-pakai lintas OPD?). Sertakan Ref. Nasional (Data Pokok/Tematik T1-T2).
3. **Layanan SPBE** — klasifikasi Publik (G2C) vs Administrasi (G2G), kanal saat ini (Aplikasi Umum/Khusus K-L/lokal/manual). Baca `references/matriks-aplikasi-spbe.md` untuk aplikasi yang menjalankan tiap layanan. Metadata SIA (domain layanan paling kaya): ID, Tujuan, Fungsi, Urusan terkait, **Target Layanan**, **Metode Layanan**, **Potensi Manfaat**, **Potensi Risiko + Mitigasi** (untuk data sensitif, ini menampung analisis batasi-digitalisasi).
4. **Aplikasi SPBE** — aplikasi yang menjalankan tiap layanan, status (sudah ada/gap). Klasifikasikan dengan terminologi resmi (Perpres 132/2022): **(A) Aplikasi Umum** (ditetapkan MenPANRB, berbagi pakai), **(B) Aplikasi Khusus K/L** (sektoral vertikal, hulu integrasi ke kementerian), **(C) Aplikasi Khusus Pemda** (aset lokal, kandidat Hub SPL). Lihat `references/matriks-aplikasi-spbe.md`. Metadata SIA: ID, Uraian, Fungsi, Luaran, Basis Aplikasi, Tipe Lisensi, Basis Data (untuk aplikasi K/L sering [ISI:]). Jangan mengarang nama/status aplikasi — tandai `[ISI:]` kalau tidak yakin.
5. **Infrastruktur SPBE** — lokasi hosting (PDN nasional vs Data Center lokal). Metadata SIA yang relevan di tingkat arsitektur: ID, Uraian, **Status Kepemilikan** (milik/sewa/berbagi pakai), Nama Pemilik. Detail teknis (kapasitas, prosesor) biasanya [ISI:] — jangan paksakan spesifikasi yang tidak diketahui.
6. **Keamanan SPBE** — petakan ke **7 objek keamanan resmi SIA** (Standar-Prosedur-Regulasi, Edukasi Kesadaran, Identifikasi Kerentanan, Peningkatan, Penanganan Insiden, Audit, Kelaikan — lihat `metadata-sia-spbe.md`), bukan tabel risiko-kontrol bebas. **Terapkan Prinsip Batasi Digitalisasi (lihat bawah) di sini secara eksplisit** — paling cocok masuk objek 1 (Standar/Prosedur/Regulasi) dan tercermin di Sifat Data (Domain 2).

### Langkah 4: Cek Pola Integrasi Berpasangan

1. Baca `references/pola-integrasi-pasangan.md`.
2. Untuk tiap baris yang melibatkan tipe OPD ini, cek Dosir: apakah OPD pasangannya sudah dipetakan?
   - Kalau **belum** → catat titik integrasi di Dosir dengan status `"diprediksi"`.
   - Kalau **sudah** → catat dengan status `"dikonfirmasi"`, dan tulis catatan analisis eksplisit di dokumen yang menjelaskan titik temunya.
3. **Ini juga arah baliknya**: sebelum menyelesaikan pemetaan, cek apakah OPD yang baru ini mengoreksi asumsi di dokumen OPD lain yang sudah ada (pola PUPR-mengoreksi-Disdikbud yang pernah terjadi). Kalau ya, laporkan eksplisit ke pengguna dan tawarkan perbaikan dokumen lama.

### Langkah 5: Simpan dan Perbarui Dosir

1. Tulis dokumen OPD (format markdown 6 domain + catatan analisis). Markdown mengikuti konvensi di `assets/template-gaya-dokumen.md` bagian 4 (blok judul `## NAMA OPD` + `### KABUPATEN ...`, tabel identitas dengan baris `Dasar Struktur` yang memuat Perbup dalam **tebal**, penanda status dalam backtick) agar sampul dan daftar isi terisi otomatis.
1b. **Render ke Word resmi.** Setelah markdown 6 domain jadi, render jadi `.docx` resmi dengan satu langkah:
   `node assets/render_pemdi_docx.js <dokumen>.md <dokumen>.docx`
   Sajikan `.docx` sebagai **deliverable utama** via `present_files`, dan simpan `.md` sebagai sumber yang bisa dirender ulang. **Markdown tetap satu-satunya sumber kebenaran; docx adalah artefak turunan** yang selalu bisa dibangun ulang dari `.md` (jangan mengedit docx terpisah). Generator menurunkan nama OPD, dasar hukum Perbup, kabupaten, dan tahun secara otomatis dari markdown; `config.json` opsional hanya untuk menimpa (termasuk `logo_path` lambang daerah). Untuk nomor halaman daftar isi yang akurat generator memakai LibreOffice (`soffice`) + `pdftotext` (dua-lintasan); kalau toolchain itu tidak tersedia, generator otomatis fallback ke Word TOC field (pengguna tekan Ctrl+A lalu F9 di Word untuk mengisi nomor) — tetap docx valid, hanya nomor tidak otomatis terisi saat dibuka.
2. Perbarui Dosir: tambahkan OPD ke `opd_terpetakan`, perbarui `titik_integrasi` (prediksi/dikonfirmasi), tambahkan fakta baru ke `fakta_tervalidasi` atau `isi_terbuka`, isi `prinsip_batasi_digitalisasi` jika OPD ini menyentuh data sensitif.
3. **Sajikan Dosir yang diperbarui sebagai file** (`dosir.json`) via `present_files`, dengan pesan singkat bahwa pengguna sebaiknya menyimpannya dan mengunggahnya lagi di sesi berikutnya agar status kumulatif (prediksi titik integrasi, koreksi OPD lama) tetap terjaga. Ini pengganti persistensi otomatis yang tidak tersedia antar-sesi. Dosir dijaga **ringkas** — fokus pada `opd_terpetakan`, `titik_integrasi`, `fakta_tervalidasi`, `isi_terbuka`, `prinsip_batasi_digitalisasi`, `koreksi_metodologis_log`; detail 6 domain hidup di dokumen arsitektur masing-masing, tidak diduplikasi ke Dosir.

---

## Mode SINTESIS

1. Baca seluruh entri `opd_terpetakan` dan `titik_integrasi` di Dosir Pemda ini.
2. Susun dokumen sintesis: ringkasan eksekutif, tabel cakupan OPD, katalog titik integrasi (kelompokkan tematik), temuan sentral berulang, dan peta jalan prioritas.
3. **Jangan mengulang detail 6 domain per-OPD** — sintesis adalah level lebih tinggi (pola lintas-OPD), bukan ringkasan tiap dokumen.
4. Sertakan bagian eksplisit **"Peta Data Sensitif Pemda"** dari `prinsip_batasi_digitalisasi` di Dosir: daftar OPD/kategori data yang direkomendasikan dibatasi digitalisasinya beserta alasan. Ini output bernilai bagi pengambil keputusan (mana yang JANGAN buru-buru didigitalkan).
5. Sertakan bagian eksplisit untuk `isi_terbuka` (item yang masih perlu validasi) supaya pengguna tahu apa yang belum solid.
6. Kalau `koreksi_metodologis_log` berisi entri, ringkas jadi bagian "Riwayat Koreksi" — menunjukkan bagaimana pemahaman berevolusi (membangun kepercayaan, bukan disembunyikan).

---

## Mode KOREKSI

1. Terima informasi baru dari pengguna (bisa berupa fakta lapangan, dokumen resmi, atau koreksi langsung).
2. Cek Dosir: OPD/klaim mana yang terdampak?
3. **Verifikasi dulu** (web_search/web_fetch) sebelum menerima klaim sebagai benar — termasuk klaim dari pengguna sendiri kalau bisa diverifikasi silang ke sumber primer.
4. Revisi dokumen yang terdampak, dan **catat koreksinya secara eksplisit** di dokumen (jangan diam-diam menghapus jejak kesalahan lama) — ini pola yang terbukti membangun kepercayaan sepanjang pengembangan skill ini.
5. **Tulis entri ke `koreksi_metodologis_log` di Dosir**: tanggal, klaim lama, klaim baru, dipicu oleh (OPD baru / pertanyaan pengguna / verifikasi regulasi), dokumen terdampak. Ini jejak audit metodologis, bukan sekadar catatan di satu dokumen.
6. Perbarui `fakta_tervalidasi` dengan fakta baru, dan sajikan Dosir terbaru sebagai file (seperti Langkah 5 PEMETAAN).

---

## Mode PERENCANAAN (To-be dan Katalog Gap)

Mode ini mengubah skill dari **pendokumentasi kondisi sekarang** jadi **alat perencanaan**. Dipakai setelah As-is sebuah OPD sudah dipetakan (via PEMETAAN). Baca `references/kerangka-tobe-gap.md` untuk metodologi lengkap sebelum menjalankan.

**Prasyarat**: As-is OPD harus sudah ada (dari Dosir/dokumen yang diunggah). Kalau belum, jalankan PEMETAAN dulu — jangan menyusun To-be di atas As-is yang belum ada.

### Kaidah Inti: Disiplin Tiga Kategori

To-be dan Gap disusun dari tiga jenis isi yang **wajib dibedakan tegas**. Ini jantung mode PERENCANAAN — mencampurnya berarti skill mengarang keputusan yang seharusnya dibuat manusia.

1. **Gap Teramati (skill isi sendiri).** Kesenjangan yang terlihat langsung dari analisis As-is — bersumber fakta, jadi sah disajikan tanpa bertanya. Contoh: "rekonsiliasi X ke Y masih manual", "sistem A belum tersinkron ke B nasional". Ambil dari catatan analisis tiap domain di dokumen As-is.
2. **Rujukan Normatif (skill sodorkan).** Kondisi standar menurut aturan yang belum terpenuhi di As-is — bersumber regulasi, jadi sah disajikan sebagai acuan. Contoh: aplikasi umum wajib yang belum dipakai, integrasi via SPLP yang belum ada, indikator Indeks Pemdi yang belum terpenuhi. Silang ke `matriks-aplikasi-spbe.md`, `referensi-nasional.md`, `regulasi-pemdi-2026.md`.
3. **Keputusan Kebijakan (WAJIB tanya, dengan usulan bertanda).** Prioritas periode, target waktu, penanggung jawab, keselarasan RPJMD, dan apa yang akan dibelanjakan. Ini **bukan wewenang skill** — ini keputusan pimpinan. Tanyakan dengan pertanyaan **terbuka dan netral** (jangan ya/tidak yang menggiring), dan **selalu sertakan usulan rekomendasi** dari analisis terbaik.

### Kaidah "Usulan Bertanda" (Aturan Keras)

Untuk kategori 3, setiap pertanyaan **wajib menyertakan opsi rekomendasi** hasil analisis terbaik skill. Lalu:
- Kalau pengguna **menjawab**, pakai jawabannya (keputusan final).
- Kalau pengguna **diam atau minta skill lanjut saja**, pakai rekomendasi TAPI tandai `[USULAN CLAUDE, belum dikonfirmasi: ...]` — **JANGAN** dikunci sebagai keputusan final, dan **JANGAN** dibiarkan kosong `[ISI:]`.

Ini menjaga tiga hal sekaligus: dokumen tetap utuh dan bisa dipakai (tidak ada lubang), kepengarangan tetap jujur (pembaca tahu mana keputusan resmi vs usulan skill), dan beban ringan (pengguna yang setuju cukup membiarkan, yang tidak tinggal ganti). **Alasannya penting**: To-be jadi dasar belanja TIK daerah. Skill yang mengunci keputusan kebijakan secara diam-diam berarti membuat keputusan investasi atas nama pejabat yang tidak menjawab — itu risiko terbesar fitur ini, dan usulan bertanda mencegahnya.

### Alur PERENCANAAN

1. **Baca As-is** OPD dari Dosir/dokumen. Kalau tidak ada, hentikan dan jalankan PEMETAAN dulu.
2. **Ekstrak Gap Teramati (kategori 1)** dari catatan analisis tiap domain As-is. Sajikan sebagai temuan, bukan pertanyaan.
3. **Ekstrak Rujukan Normatif (kategori 2)** — bandingkan As-is dengan standar (aplikasi umum wajib, SPLP, Indeks Pemdi). Sajikan sebagai acuan.
4. **Cek keputusan kebijakan tingkat Pemda yang sudah ada di Dosir** (`keputusan_kebijakan_pemda`). Kalau arah RPJMD/plafon anggaran sudah dijawab di OPD sebelumnya, **jangan tanya ulang** — warisi. Ini mencegah pertanyaan berulang saat memetakan banyak OPD.
5. **Ajukan pertanyaan kebijakan (kategori 3)** yang belum terjawab, masing-masing dengan usulan rekomendasi. Pertanyaan terbuka dan netral. Batasi jumlahnya — hanya yang benar-benar keputusan, bukan yang bisa diturunkan dari kategori 1-2.
6. **Susun Arsitektur To-be**: tiap objek diberi status `new` (baru) atau `upgrade` (pengembangan dari yang ada), mengikuti konvensi SIA-SPBE. Isi dari jawaban pengguna (final) atau usulan bertanda (belum dikonfirmasi).
7. **Turunkan Katalog Gap**: pasangan objek **Gap** (kesenjangan) dan **Kegiatan** (penutup gap), dengan target, penanggung jawab, dan keselarasan RPJMD. Gap yang dikeluarkan dari prioritas dicatat sebagai "ditunda", bukan dihapus.
8. **Ringkasan konfirmasi akhir**: sebelum finalisasi, sajikan daftar ringkas semua isian `[USULAN CLAUDE, belum dikonfirmasi]` dalam satu tempat, supaya pengguna bisa meninjau/menerima/mengoreksi sekaligus.
9. **Perbarui Dosir**: simpan To-be, Katalog Gap, dan `keputusan_kebijakan_pemda` (untuk diwarisi OPD lain). Sajikan sebagai file.

### Catatan Jembatan ke Peta Rencana

Objek **Kegiatan** di Katalog Gap adalah bahan mentah Peta Rencana SPBE (Tata Kelola). Mode ini menyiapkannya, tapi penyusunan Peta Strategi + Peta Rencana penuh (Visi/Misi/Sasaran/IKU/Program) adalah pengembangan lanjutan yang belum diimplementasikan — tandai sebagai lingkup berikutnya, jangan dikarang.

---

## Disiplin Wajib (Aturan Keras — Bukan Saran)

1. **Selalu coba cari Perbup/regulasi riil OPD spesifik dulu** sebelum jatuh ke model generik (lihat Langkah 2 PEMETAAN).
2. **Pisahkan tegas klaim "mandat regulasi nasional" vs "praktik umum lintas-Pemda".** Setiap klaim tentang siapa berwenang atas apa harus eksplisit menyebut sumbernya: pasal spesifik regulasi, atau "pola umum, perlu konfirmasi lokal". Jangan pernah menyandarkan pola observasi ke regulasi yang tidak benar-benar menyatakannya — verifikasi dengan membaca teks aslinya, bukan mengandalkan ingatan atau ringkasan sumber sekunder semata.
3. **Setiap Mode PEMETAAN baru wajib menjalankan Langkah 4** (cek koreksi ke OPD lama) — jangan cuma menambah temuan baru tanpa mengecek dampak ke dokumen lama.
4. **Matriks Urusan Konkuren (legitimasi legal) didahulukan di atas pola generik dari pengalaman/dokumen arsitektur lain.** Kalau keduanya tersedia dan berbeda, matriks legal menang — tapi catat perbedaannya sebagai temuan, jangan diam-diam dipilih salah satu. (Berlaku untuk OPD tipe Dinas; untuk tipe non-Dinas lihat Langkah 1.0 dan `tipe-opd-non-dinas.md`.)
5. **Klasifikasikan tiap proses bisnis sebagai Inti/Manajemen/Pendukung** (per `metodologi-probis.md`), dan prioritaskan proses **Inti** untuk digitalisasi/integrasi. Jangan perlakukan semua proses bisnis setara — proses inti (melayani pengguna eksternal) adalah pembeda pelayanan; proses pendukung (internal) bukan.
6. **Proses bisnis hasil derivasi adalah DRAF berbasis dokumen (informasi sekunder), bukan fakta final.** Permenpan 19/2018 menekankan informasi primer (wawancara penanggung jawab proses) sebagai sumber utama. Skill bekerja dari dokumen, jadi tandai proses bisnis (terutama yang 🟡 normatif) sebagai perlu validasi lapangan — konsisten disiplin anti-fabrikasi.
7. **Data sensitif tidak otomatis didigitalkan penuh** — lihat Prinsip Batasi Digitalisasi.
8. **Di Mode PERENCANAAN, jangan pernah mengunci keputusan kebijakan (kategori 3) sebagai final tanpa jawaban pengguna.** Pakai usulan bertanda `[USULAN CLAUDE, belum dikonfirmasi: ...]`. Bedakan tegas dari gap teramati (kategori 1) dan rujukan normatif (kategori 2) yang boleh diisi skill karena bersumber fakta/aturan.
9. Ikuti disiplin anti-fabrikasi umum: `[ISI:]` untuk yang belum tervalidasi, tanpa em/en dash, tanpa mengarang nomor Perbup/regulasi yang tidak benar-benar ditemukan.
10. **Output final Langkah 5 adalah `.docx` resmi lewat `assets/render_pemdi_docx.js`, bukan markdown telanjang**, agar konsisten dengan seluruh dokumen arsitektur OPD (sampul, kata pengantar, daftar isi bernomor, nomor halaman). Markdown yang disusun harus mengikuti konvensi di `assets/template-gaya-dokumen.md` (blok judul, tabel identitas dengan baris `Dasar Struktur`, penanda status dalam backtick) supaya sampul dan daftar isi terisi otomatis. Markdown tetap sumber kebenaran; docx adalah turunan yang selalu bisa dibangun ulang.

---

## Prinsip Batasi Digitalisasi (Checklist Domain 6 Keamanan)

Default untuk OPD layanan publik adalah "makin digital makin baik, lalu diamankan". **Prinsip ini terbalik untuk kategori data berikut** — begitu proses bisnis atau data OPD masuk kategori ini, rekomendasi default adalah **membatasi** akses digital, bukan memperluasnya:

- Data investigasi, intelijen, atau kewaspadaan dini (tipikal: Inspektorat, Kesbangpol/Bakesbangpol)
- Data korban kekerasan, TPPO, atau kejahatan lain
- Data kesehatan jiwa atau rehabilitasi NAPZA
- Data biometrik atau identitas sangat sensitif tanpa kebutuhan operasional jelas

Kalau kategori ini muncul, tulis eksplisit di Domain 6 kenapa digitalisasi dibatasi (bukan cuma bilang "sensitif" tanpa penjelasan) — pola yang sudah dipakai konsisten di seluruh dokumen HSS (Kesbangpol, Inspektorat, Dinsos).

---

## Referensi (baca sesuai kebutuhan, jangan muat semua di awal)

**Panduan baca selektif.** Total referensi cukup besar; jangan baca semua utuh untuk satu pemetaan. Untuk PEMETAAN satu OPD Dinas: baca bagian urusan terkait di `matriks-urusan-uu23-2014.md` (pakai `grep`/`view` range, bukan 32 urusan), bagian urusan terkait di `matriks-proses-bisnis.md`, `metodologi-probis.md` (pendek, sekali baca cukup), dan bagian relevan `pola-integrasi-pasangan.md`. Untuk OPD non-Dinas: `tipe-opd-non-dinas.md` bagian yang sesuai. Baca `matriks-aplikasi-spbe.md` saat sampai Domain 3-4. `referensi-nasional.md` dibaca untuk kerangka domain saat dibutuhkan. Matriks urusan dan proses bisnis **boleh dibaca per-bagian**, tidak wajib utuh.


- `references/referensi-nasional.md` — Kerangka 6 domain, Sektor/Urusan (T1-T2), Data Pokok/Tematik, Layanan Publik/Administrasi, Aplikasi Umum/Khusus. Statis, sama untuk semua Pemda. Baca di Langkah 3 PEMETAAN.
- `references/matriks-urusan-uu23-2014.md` — Matriks Urusan Konkuren UU 23/2014, **lengkap 32/32 terverifikasi**. Baca di Langkah 1a PEMETAAN untuk legitimasi legal (sub-urusan kewenangan kab/kota) — **hanya untuk OPD tipe Dinas**. Baca selektif (bagian urusan terkait, bukan 32 sekaligus). Memuat **Crosswalk ke kode RAB Perpres 132/2022** untuk mengisi kolom Ref. Nasional (siap-input SIA-SPBE).
- `references/tipe-opd-non-dinas.md` — Jembatan derivasi proses bisnis untuk OPD **non-Dinas** (Badan penunjang, Setda/Bagian, Inspektorat, Kecamatan, Kesbangpol). Baca di Langkah 1.0 PEMETAAN saat OPD bukan Dinas. Dasar: PP 18/2016.
- `references/matriks-proses-bisnis.md` — Jembatan sub-urusan ke proses bisnis konkret (Level 1), dengan jenis Inti/Manajemen/Pendukung + SIPOC. Baca di Langkah 1b PEMETAAN untuk menurunkan sub-urusan jadi proses bisnis Domain 1. Dokumen hidup: ✅ empiris (ada dokumen HSS) vs 🟡 normatif (baru turunan UU).
- `references/metodologi-probis.md` — Kerangka Permenpan 19/2018 (Level 0/1/n, kriteria Inti/Pendukung, SIPOC, peta relasi/lintas fungsi). Baca saat menyusun Domain 1 untuk struktur metodologis yang benar.
- `references/matriks-aplikasi-spbe.md` — Katalog aplikasi SPBE dengan klasifikasi resmi Umum/Khusus (Perpres 132/2022) per urusan. Baca di Domain 3-4 PEMETAAN. Memuat banyak [ISI:] karena lanskap aplikasi cepat berubah — verifikasi sebelum menulis sebagai fakta, jangan mengarang nama/status aplikasi.
- `references/metadata-sia-spbe.md` — Daftar metadata resmi per domain dari Manual Book SIA-SPBE (portal `arsitektur.spbe.go.id`). Baca di Langkah 3 PEMETAAN agar output mengisi field yang sama dengan portal resmi — dokumen jadi siap-input, bukan cuma naratif.
- `references/kerangka-tobe-gap.md` — Metodologi lengkap Mode PERENCANAAN: disiplin tiga kategori (gap teramati, rujukan normatif, keputusan kebijakan), kaidah usulan bertanda, penyusunan To-be (status new/upgrade) dan Katalog Gap (Gap + Kegiatan). Baca sebelum menjalankan Mode PERENCANAAN.
- `references/regulasi-pemdi-2026.md` — Ringkasan Permenpan 8/2026 (Indeks Pemdi) dan pemetaannya ke 6 domain lama. Baca saat perlu menjelaskan terminologi Pemdi vs SPBE, atau menyusun bagian evaluasi/kematangan.
- `references/pola-integrasi-pasangan.md` — Daftar pasangan OPD dengan pola titik integrasi yang sudah terbukti berulang. Baca di Langkah 4 PEMETAAN.
- `assets/dosir-template.json` — Kerangka kosong Dosir Arsitektur Pemda, dipakai saat Pemda baru pertama kali diproses.
- `assets/render_pemdi_docx.js` — Generator output Word resmi (sampul, kata pengantar, daftar isi bernomor akurat dua-lintasan, nomor halaman, tabel navy berformat, penanda `[ISI:]` merah). Dipakai di Langkah 5 PEMETAAN untuk merender markdown 6 domain jadi `.docx`. CLI: `node assets/render_pemdi_docx.js <input.md> <output.docx> [config.json]`. Butuh Node + paket `docx`; untuk nomor halaman akurat butuh LibreOffice + Poppler (`pdftotext`), kalau tak ada fallback otomatis ke Word TOC field.
- `assets/template-gaya-dokumen.md` — Spesifikasi gaya output (design tokens, struktur wajib dokumen, konvensi markdown sumber). Acuan saat menyusun markdown agar generator memetakan sampul, identitas, dan daftar isi dengan benar.

## Kontrak Data: Dosir Arsitektur Pemda

Satu file `dosir.json` per Pemda, **ringkas** (bukan menyimpan detail 6 domain — itu di dokumen arsitektur masing-masing). Field utama:

```
pemda, kerangka_regulasi, opd_terpetakan[], titik_integrasi[], fakta_tervalidasi[], isi_terbuka[], prinsip_batasi_digitalisasi[], koreksi_metodologis_log[], keputusan_kebijakan_pemda{}, perencanaan_opd[]
```

Dua field terakhir (`keputusan_kebijakan_pemda`, `perencanaan_opd`) hanya terisi kalau Mode PERENCANAAN dipakai. `keputusan_kebijakan_pemda` menyimpan keputusan tingkat Pemda (RPJMD, anggaran) yang diwarisi ke semua OPD supaya tidak ditanya berulang.

**Persistensi (pola unggah-ulang, seperti Dosir Kinerja di suite sakip).** Direktori kerja di-reset antar-sesi, jadi Dosir tidak bertahan otomatis. Alurnya: di akhir tiap sesi, skill menyajikan Dosir sebagai file (`present_files`) untuk pengguna simpan; di awal sesi berikutnya, pengguna mengunggahnya ke `/mnt/user-data/uploads` dan skill membacanya. Untuk OPD/Pemda pertama, mulai dari template. Lihat `assets/dosir-template.json` untuk skema lengkap.

*(Catatan desain: jika skill selalu dipakai dalam satu Claude Project khusus per-kabupaten, pertimbangkan pendekatan alternatif "dokumen arsitektur sebagai memori" — skill membangun ulang Dosir dari dokumen OPD yang ada di project, tanpa file state terpisah. Pilihan saat ini adalah unggah-ulang karena paling robust lintas cara pemakaian.)*

---

## Versi dan Changelog

**Versi saat ini: v1.4.0**

- **v1.4.0** — Output dokumen formal. Ditambahkan generator `assets/render_pemdi_docx.js` yang merender markdown 6 domain menjadi Word resmi (sampul, kata pengantar, daftar isi bernomor akurat via dua-lintasan render-ekstrak-isi ulang, nomor halaman, tabel navy berformat, penanda `[ISI:]`/`[TERVALIDASI:]`/`[USULAN CLAUDE:]` merah, tanpa em/en dash) plus `assets/template-gaya-dokumen.md` sebagai kontrak gaya (design tokens + konvensi markdown sumber). Langkah 5 PEMETAAN kini merender `.docx` sebagai deliverable utama; markdown tetap satu-satunya sumber kebenaran dan `.docx` adalah artefak turunan yang selalu bisa dibangun ulang. Nama OPD, dasar hukum Perbup, kabupaten, dan tahun diturunkan otomatis dari markdown; `config.json` opsional untuk menimpa (termasuk `logo_path`). Kalau LibreOffice/Poppler tak tersedia, generator fallback otomatis ke Word TOC field. Menutup celah konsistensi format antar dokumen OPD (sebagian dokumen sebelumnya keluar sebagai markdown telanjang, tidak setara Word resmi). Alur empat mode dan referensi domain tidak berubah.
- **v1.3.0** — Fitur perencanaan (Usulan A). Ditambahkan **Mode PERENCANAAN** (mode keempat) untuk menyusun Arsitektur To-be (kondisi ideal, status new/upgrade) dan Katalog Gap (Gap + Kegiatan), mengubah skill dari pendokumentasi As-is jadi alat perencanaan. Inti mode: **disiplin tiga kategori** — gap teramati (skill isi dari fakta As-is), rujukan normatif (skill sodorkan dari aturan), keputusan kebijakan (wajib tanya dengan usulan rekomendasi). Kaidah **usulan bertanda**: kalau pengguna diam atas pertanyaan kebijakan, skill pakai rekomendasi tapi tandai `[USULAN CLAUDE, belum dikonfirmasi: ...]` — tidak dikunci final (mencegah skill mengambil keputusan belanja TIK atas nama pejabat), tidak dibiarkan kosong (dokumen tetap utuh). Referensi baru `kerangka-tobe-gap.md`. Dosir ditambah `keputusan_kebijakan_pemda` (diwarisi lintas-OPD, hindari tanya berulang) dan `perencanaan_opd`. Peta Strategi + Peta Rencana penuh (Usulan C) tetap lingkup berikutnya.
- **v1.2.2** — Crosswalk urusan konkuren → RAB. Tabel RAB di `referensi-nasional.md` dilengkapi kode urusan dua-bagian (01.01-09.07, 46 urusan) dari teks Perpres 132/2022. Ditambahkan **Crosswalk 32 urusan konkuren UU 23/2014 → kode RAB** di `matriks-urusan-uu23-2014.md`: 24 urusan memetakan jelas (✓), 8 urusan tanpa padanan RAB langsung (Trantibumlinmas, Pangan, PMD, KB, Statistik, Persandian, Perpustakaan, Kearsipan) ditandai `[≈]` + kandidat terdekat + wajib konfirmasi portal. Menutup celah terjemahan antara basis legal (konkuren) dan klasifikasi SIA-SPBE (RAB). Langkah 1a diperbarui untuk mengisi kolom Ref. Nasional dari crosswalk.
- **v1.2.1** — Verifikasi metadata SIA-SPBE dari PDF resmi bergambar (137 hal). Infrastruktur dilengkapi dari 7 jadi **12 objek** (termasuk Sistem Database, Sistem Utilitas, Jaringan Intra Pemerintah, Sistem Penghubung Layanan Pemerintah/SPLP, Fasilitas Komputasi dengan Klasifikasi Tier) — ini terverifikasi dari tabel di gambar. **Koreksi anti-fabrikasi**: nilai enumerasi yang sempat dicatat di iterasi awal (Sifat Data, Basis Aplikasi, Tipe Lisensi, Government Cloud, Status Kepemilikan) DITARIK setelah verifikasi teliti — manual ternyata hanya menampilkan nama field, tidak pernah nilai dropdown terbuka. Semua nilai enumerasi kini ditandai [ISI: verifikasi ke portal]. Strategi baca: petunjuk teks/caption dulu, rasterisasi terarah hanya halaman form (bukan semua 137 halaman).
- **v1.2** — Keselarasan dengan SIA-SPBE (Usulan B pasca-analisis Manual Book SIA). Tambah referensi `metadata-sia-spbe.md` berisi daftar metadata resmi per domain dari portal `arsitektur.spbe.go.id`. Langkah 3 diperbarui: tiap domain mengisi field metadata resmi (ID, Uraian, plus atribut khusus domain seperti Target/Metode/Potensi Manfaat-Risiko untuk Layanan; Sifat Data/Produsen/Wali Data/Interoperabilitas untuk Data; Luaran/Basis Aplikasi/Lisensi/Basis Data untuk Aplikasi; Status Kepemilikan untuk Infrastruktur; 7 objek keamanan resmi untuk Keamanan). Output skill jadi siap-input ke portal, bukan cuma naratif. Prinsip Batasi Digitalisasi dipetakan ke Sifat Data + objek Standar/Prosedur/Regulasi Keamanan. Catatan: Usulan A (kerangka As-is/To-be/Katalog Gap) dan Usulan C (Peta Strategi + Peta Rencana) menyusul di iterasi berikutnya.
- **v1.1** — Perbaikan pasca-review mendalam. (1) Persistensi Dosir diperjelas jadi pola unggah-ulang (Dosir ringkas). (2) Tambah klasifikasi tipe OPD (Dinas vs non-Dinas) + referensi `tipe-opd-non-dinas.md` — matriks urusan hanya berlaku untuk Dinas. (3) Referensi nasional dibersihkan dari konten spesifik satu Pemda, jadi benar-benar universal. (4) Domain 2 (Data) jadi turunan sistematis proses bisnis + SIPOC, bukan isian bebas. (5) Penanda status matriks proses bisnis diperjelas (otoritatif di level baris). (6) Hapus rujukan "Katalog OPD" yang tak pernah ada. (7) SINTESIS menarik `prinsip_batasi_digitalisasi`; KOREKSI menulis `koreksi_metodologis_log`. (8) Panduan baca selektif untuk efisiensi. (9) Fallback saat pencarian Perbup gagal (tawarkan unggah Perbup / tanya pengguna). (10) Changelog ini. Catatan: bentuk Dosir dipilih Opsi A (unggah-ulang, pola sakip); jika skill akan selalu dipakai dalam satu Claude Project, pertimbangkan beralih ke pendekatan dokumen-sebagai-memori. **Jalur non-Dinas diuji end-to-end lewat uji coba BKPSDM HSS (dokumen ke-20) — berfungsi sesuai rancangan; ditambahkan catatan karakter khas OPD penunjang.**
- **v1.0** — Versi awal. Tiga mode (PEMETAAN/SINTESIS/KOREKSI), matriks urusan 32/32 UU 23/2014, matriks proses bisnis, metodologi Permenpan 19/2018, matriks aplikasi (Umum/Khusus), pola integrasi berpasangan, kerangka 6 domain Perpres 132/2022. Tervalidasi lewat 4 uji coba OPD (Dishub, Satpol PP-Damkar, Perdagangan, Disnaker-Kop-UKM-Perind).
