# Pola Integrasi Berpasangan

> Daftar pasangan tipe OPD dengan pola titik integrasi data yang sudah terbukti berulang di lebih dari satu Pemda/konteks — bukan spesifik satu kabupaten, karena berasal dari desain sistem nasional yang sama di seluruh Indonesia (Dapodik, SIASN, SIPD, SATUSEHAT, dst berlaku nasional). Dipakai di Langkah 4 Mode PEMETAAN: independen dari urutan pemetaan OPD.

## Cara Pakai

Untuk OPD yang baru dipetakan, cek baris mana yang melibatkan tipe OPD ini:
- Kalau OPD pasangannya **belum** dipetakan di Dosir → catat status `"diprediksi"`.
- Kalau OPD pasangannya **sudah** dipetakan → catat status `"dikonfirmasi"`, tulis catatan analisis eksplisit.

Tabel ini juga **dokumen hidup** — tambahkan baris baru setiap kali pola baru ditemukan dan terbukti (bukan cuma dugaan satu kali).

## Tabel Pola

| OPD Tipe A | OPD Tipe B | Pola yang Diprediksi | Sumber Awal Ditemukan |
|---|---|---|---|
| Dinas Pendidikan | BKPSDM | Data ASN Guru terduplikasi (Dapodik vs SIMPEG/SIRWAN lokal) | HSS |
| Dinas Kesehatan | BKPSDM | Data ASN Nakes terduplikasi (SISDMK/SATUSEHAT SDMK vs SIMPEG lokal) | HSS |
| Bagian Organisasi (Setda) | BKPSDM | Anjab/ABK, Standar Kompetensi Jabatan, Data Disiplin/GDD | HSS |
| Bappeda/Bapperida | OPD manapun dengan Sarpras fisik (Disdikbud, Dinkes, dll) | Usulan-Realisasi-Reviu DAK Fisik | HSS |
| Bappeda/Bapperida | Dinas PU/PUPR | RTRW vs Perencanaan Infrastruktur/Kewilayahan | HSS |
| Bappeda/Bapperida | Seluruh OPD | Verifikasi Renstra OPD agar selaras RPJMD | HSS |
| Dinas PU/PUPR | OPD manapun dengan bangunan gedung (Disdikbud, Dinkes) | Eksekusi teknis rehab bangunan — PU pelaksana teknis, OPD pemilik pengusul-pemantau | HSS (koreksi PUPR→Disdikbud) |
| BKPSDM | Bakeuda/BPKAD | Rekonsiliasi Nilai TPP vs Realisasi Pembayaran Gaji | HSS |
| Bakeuda/BPKAD | Inspektorat | Reviu RKA, Reviu LKPD sebelum audit BPK eksternal | HSS |
| Bappeda + OPD Sarpras + Bakeuda | Inspektorat | Reviu DAK — titik keempat setelah usul-laksana-realisasi | HSS |
| Dukcapil | **Semua OPD** | Verifikasi NIK — fondasi identitas universal, biasanya lewat Perjanjian Kerja Sama Pemanfaatan Data | HSS |
| Inspektorat | **Semua OPD** | Reviu horizontal read-only | HSS |
| Dinas Sosial | Dinas Pendidikan | Data disabilitas (siswa ABK vs penerima layanan rehabilitasi sosial) | HSS |
| Dinas Sosial | Dinas Pendidikan | Rujukan KIP/PIP dari data DTKS | HSS |
| Dinas Sosial | Kesbangpol/Bakesbangpol | Rehabilitasi NAPZA (Dinsos) vs Pencegahan/P4GN (Kesbangpol) | HSS |
| Dinas Sosial | Dinas Kesehatan | Pembiayaan Kesehatan/PBI JK — verifikasi DTKS (Dinsos) vs kepesertaan aktif (Dinkes) | HSS |
| Dinas Kesehatan | Dinas Pendidikan | Data gizi balita/stunting (Dinkes) vs data usia PAUD (Disdikbud) | HSS |
| DPMD | Bakeuda/BPKAD | Pengelolaan Keuangan Desa vs Transfer Dana Desa/ADD | HSS |
| Kecamatan | Dukcapil | Pengantar dokumen kependudukan berjenjang (RT/RW-Desa-Kecamatan-Dukcapil) | HSS |
| Kecamatan | Kesbangpol/Bakesbangpol | FKDM tingkat kecamatan vs tingkat kabupaten | HSS |
| Diskominfo | Bagian Organisasi | Pengaduan masyarakat (SP4N-LAPOR) sebagai data kepuasan/kinerja | HSS |
| DPMPTSP (khususnya MPP) | Dukcapil, Bakeuda, OPD manapun yang jadi peserta MPP | MPP menyatukan lokasi, bukan otomatis data — titik integrasi backend jadi kandidat modul konkret | HSS |
| Dinas Perhubungan | Bakeuda/BPKPD | **Rekonsiliasi retribusi (parkir, uji KIR) ke pendapatan daerah — sisi PAD, arah TERBALIK dari TPP (uang masuk, bukan keluar)** | HSS (uji coba Dishub) |
| Dinas Perhubungan | DPMPTSP + PUPR | Andalalin (analisis dampak lalu lintas) sebagai prasyarat PBG | HSS (uji coba Dishub) |
| Dinas Perhubungan | PUPR | Perlengkapan jalan (rambu/marka/APILL) vs kondisi jalan — objek fisik sama | HSS (uji coba Dishub) |

## Kategori Khusus: OPD Penghasil PAD (Pendapatan Asli Daerah)

Mayoritas OPD hanya membelanjakan anggaran (sisi belanja). Sebagian OPD **menghasilkan pendapatan** (sisi PAD) lewat retribusi/pajak — pola integrasi ke Bakeuda/BPKPD-nya **arahnya terbalik** (uang masuk ke kas daerah, bukan keluar). OPD tipikal penghasil PAD:
- **Dinas Perhubungan**: retribusi parkir, retribusi uji KIR
- **DPMPTSP**: retribusi perizinan tertentu
- **Bakeuda/BPKPD sendiri**: pajak daerah (PBB, BPHTB, pajak hotel-restoran, dst)
- **Dinas Kesehatan (BLUD)**: pendapatan layanan RSUD/Puskesmas (tapi via mekanisme BLUD, bukan retribusi biasa)
- **[ISI: Dinas Pariwisata (retribusi wisata), Dinas Perdagangan (retribusi pasar), Dinas Lingkungan (retribusi sampah) — kandidat saat OPD ini dipetakan]**

Saat memetakan OPD penghasil PAD, tandai eksplisit titik integrasi "sisi pendapatan" ke Bakeuda — risikonya (kebocoran PAD) beda dari titik integrasi sisi belanja (mis. TPP), dan sering luput karena peta integrasi cenderung fokus ke aliran belanja.

**Petunjuk deteksi: keberadaan UPTD sering menandai fungsi teknis penghasil PAD.** Contoh dari HSS: UPTD Metrologi Legal (Disdag — retribusi tera), UPTD Parkir (Dishub — retribusi parkir), UPTD Pengujian Kendaraan Bermotor (Dishub — retribusi KIR). Saat menemukan UPTD di Perbup SOTK, cek apakah ia menjalankan fungsi teknis yang menghasilkan retribusi — kalau ya, itu titik integrasi PAD ke Bakeuda yang perlu ditandai. Satu OPD bisa punya beberapa UPTD penghasil PAD (Disdag: pasar + metrologi; Dishub: parkir + KIR) — artinya PAD "padat" dengan beberapa aliran retribusi ke Bakeuda.

Tabel pola titik integrasi OPD penghasil PAD (dari uji coba):

| OPD | Sumber PAD | Titik Integrasi |
|---|---|---|
| Dinas Perhubungan | Retribusi parkir (UPTD Parkir), retribusi uji KIR (UPTD PKB) | Bakeuda (2 aliran pendapatan) |
| Dinas Perdagangan | Retribusi pasar, retribusi tera (UPTD Metrologi), TDG | Bakeuda (3 aliran pendapatan) + SIHAPOK untuk harga bapok |
| DPMPTSP | Retribusi perizinan tertentu | Bakeuda |
| Dinas Pariwisata | Retribusi wisata | Bakeuda |
| DLH | Retribusi sampah | Bakeuda |

## Kategori Khusus: OPD Layanan Darurat / Operasional Real-Time

Sebagian OPD menjalankan **layanan darurat** yang bernilai pada kecepatan-respons (menit), bukan proses administratif (hari). Karakternya berbeda tajam dari OPD administratif maupun penghasil PAD, dan memerlukan perlakuan Domain 3-6 yang khas:
- **Satpol PP-Damkar** (fungsi Damkar): respons kebakaran, penyelamatan (rescue)
- **BPBD**: penanggulangan bencana
- **Dinas Kesehatan** (fungsi tertentu): layanan gawat darurat, ambulans/PSC 119
- **[ISI: OPD lain dengan fungsi darurat saat dipetakan]**

Perlakuan khusus untuk OPD layanan darurat:
- **Domain 3 (Layanan)**: prioritas response time, kandidat nomor darurat terpadu (112/command center)
- **Domain 5 (Infrastruktur)**: komunikasi operasional (radio, GPS armada, sebaran pos) lebih kritis dari komputasi; konektivitas ke wilayah terpencil menentukan response time
- **Domain 6 (Keamanan)**: prioritas bergeser dari kerahasiaan ke **ketersediaan (availability)** — sistem harus selalu hidup saat darurat; redundansi dan uptime lebih penting dari kontrol akses
- **Data**: bersifat real-time, bukan periodik — kandidat integrasi ke command center, bukan kompilasi berkala

## Catatan: Satu Urusan Bisa Dipecah ke Beberapa OPD

Selain OPD gabungan (satu OPD = beberapa urusan, mis. Disdikbud = Pendidikan + Kebudayaan), berlaku juga sebaliknya: **satu urusan bisa dipecah ke beberapa OPD**. Contoh: Trantibumlinmas (huruf E) dipecah jadi Satpol PP-Damkar (sub-urusan Tibum + Kebakaran) dan BPBD (sub-urusan Bencana). Saat memetakan, jangan asumsikan satu urusan = satu OPD; cek Perbup SOTK untuk tahu pembagian riil di Pemda tersebut.

## Catatan: Kombinasi Urusan dalam OPD adalah Pilihan Lokal (asimetri antar-daerah)

Pembagian dan penggabungan urusan ke OPD **tidak bisa diprediksi dari nama urusan** — ini pilihan lokal yang bervariasi antar-daerah. Contoh dari HSS: Tenaga Kerja + Koperasi-UKM + Perindustrian **digabung** jadi satu dinas (Disnaker-Kop-UKM-Perind, Perbup 83/2020), tapi Perdagangan **dipisah** jadi dinas sendiri (Perbup 94/2020). Ini kebalikan pola umum "Disperindag" (Perdagangan+Perindustrian bersama). Daerah lain bisa memilih kombinasi berbeda. **Aturan**: selalu cek Perbup SOTK riil sebelum berasumsi kombinasi urusan.

**Konsekuensi OPD gabungan multi-urusan = multi-hulu integrasi vertikal.** Makin banyak urusan digabung dalam satu OPD, makin banyak sistem nasional/kementerian yang jadi titik integrasi. Contoh: Disnaker-Kop-UKM-Perind punya tiga hulu vertikal berbeda (SISNAKER-Kemnaker, SIINas-Kemenperin, ODS-Kementerian Koperasi). Saat memetakan OPD gabungan, identifikasi sistem nasional untuk tiap urusan secara terpisah.

## Catatan: Data yang Secara Alami Tersentuh Banyak OPD (kandidat Satu Data tematik)

Beberapa jenis data secara alami disentuh beberapa OPD sekaligus, sehingga rawan terfragmentasi/duplikasi — kandidat kuat untuk "Satu Data tematik" tingkat kabupaten:

| Data | OPD yang Menyentuh | Titik Integrasi |
|---|---|---|
| Data UMKM/usaha mikro | Diskop-UKM (pemberdayaan) + DPMPTSP (NIB/izin) + Disdag (pemasaran) | Satu Data UMKM |
| Data kemiskinan (DTKS) | Dinsos (pemilik) + Dinkes (PBI-JK) + Disdikbud (PIP) + DPMD (desa) | Hub DTKS |
| Data ASN | BKPSDM (pemilik) + tiap OPD (penempatan) + Bakeuda (gaji/TPP) | Integrasi SIMPEG |
| Data spasial/wilayah | Bapperida (RTRW) + PUPR (infrastruktur) + Pertanahan + semua OPD | Satu Peta/Geoportal |

Saat memetakan OPD yang menyentuh salah satu data ini, tandai sebagai kandidat Satu Data tematik, bukan sekadar titik integrasi berpasangan.

## Catatan Penting

Status **"sumber awal ditemukan: HSS"** tidak berarti pola ini eksklusif HSS — pola-pola ini muncul karena sistem nasional (Dapodik, SIASN, SIPD, dst.) berlaku sama di seluruh Indonesia, jadi struktur duplikasi/integrasinya kemungkinan besar berulang di Pemda manapun. Tapi validasi konkret (apakah pola ini benar-benar terjadi, dan detailnya) tetap perlu dicek per-Pemda — tabel ini memprediksi **di mana kemungkinan besar ada titik integrasi**, bukan memastikan detailnya tanpa verifikasi.

Kalau skill ini dipakai di Pemda lain dan menemukan pola baru yang tidak ada di tabel, tambahkan baris baru dengan sumber Pemda yang bersangkutan — tabel ini akan makin kaya lintas-Pemda seiring waktu.
