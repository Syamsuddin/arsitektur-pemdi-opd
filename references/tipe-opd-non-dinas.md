# Tipe OPD Non-Dinas — Jembatan untuk OPD di Luar Urusan Konkuren

> Referensi derivasi Domain 1 untuk OPD yang **bukan** tipe Dinas. Dipakai di Langkah 1.0 Mode PEMETAAN saat OPD yang dipetakan tidak memetakan ke 32 urusan konkuren UU 23/2014.
>
> **Mengapa referensi ini ada.** `matriks-urusan-uu23-2014.md` hanya menutup OPD tipe **Dinas** (unsur pelaksana urusan konkuren). Sebuah kabupaten/kota punya beberapa tipe OPD lain yang tugasnya bukan urusan konkuren, melainkan fungsi penunjang/staf/pengawasan/kewilayahan/pemerintahan umum. Untuk tipe-tipe ini, "tokenize nama OPD terhadap 32 urusan" menghasilkan nihil. Referensi ini memberi jalur turunan proses bisnis yang benar.

## Dasar Klasifikasi (PP 18/2016 tentang Perangkat Daerah)

Perangkat Daerah kabupaten/kota terdiri dari tipe-tipe berikut. Hanya **Dinas** yang memetakan ke urusan konkuren:

| Tipe OPD | Unsur | Dasar Tugas | Jalur Derivasi |
|---|---|---|---|
| **Dinas** | Pelaksana urusan konkuren | 32 urusan UU 23/2014 | `matriks-urusan-uu23-2014.md` + `matriks-proses-bisnis.md` |
| **Badan** | Penunjang urusan | Fungsi penunjang (PP 18/2016 Pasal 47) | Referensi ini, bagian Penunjang |
| **Sekretariat Daerah** | Staf | Koordinasi & perumusan kebijakan | Referensi ini, bagian Staf |
| **Sekretariat DPRD** | Staf pelayanan DPRD | Pelayanan administrasi & keuangan DPRD | Referensi ini, bagian Staf |
| **Inspektorat** | Pengawas | Pengawasan internal (APIP) | Referensi ini, bagian Pengawasan |
| **Kecamatan** | Kewilayahan | Koordinasi wilayah + pelimpahan kewenangan bupati | Referensi ini, bagian Kewilayahan |
| **Kesbangpol** (kasus khusus) | Pemerintahan umum | Urusan pemerintahan umum (Pasal 25 UU 23/2014) | Referensi ini, bagian Pemerintahan Umum |

**Cara identifikasi tipe (Langkah 1.0)**: dari nama OPD. "Dinas ..." biasanya Dinas (cek apakah nama memuat urusan konkuren). "Badan ..." biasanya penunjang (Bapperida/Bappeda=perencanaan, Bakeuda/BPKAD/BKAD=keuangan, BKPSDM/BKD=kepegawaian, Balitbang=litbang). "Sekretariat Daerah/Bagian ..." = staf. "Inspektorat" = pengawas. "Kecamatan ..." = kewilayahan. "Badan/Kantor Kesatuan Bangsa dan Politik" = pemerintahan umum. Catatan: nomenklatur bervariasi antar-daerah, dan satu Badan bisa menggabungkan fungsi (mis. keuangan + pendapatan). Selalu konfirmasi lewat Perbup SOTK (Langkah 2).

---

# BAGIAN PENUNJANG (tipe Badan)

Fungsi penunjang urusan pemerintahan (PP 18/2016 Pasal 47): perencanaan, keuangan, kepegawaian, pendidikan-pelatihan, penelitian-pengembangan. Ini **bukan** urusan konkuren — jangan cari di matriks urusan.

## Perencanaan (Bappeda / Bapperida / Bappelitbangda)

**Level 0:** Inti = penyusunan dokumen perencanaan daerah + pengendalian-evaluasi; Manajemen = koordinasi perencanaan lintas-OPD; Pendukung = TU. Sering menyatu dengan Litbang (Bapperida = Perencanaan + Riset dan Inovasi Daerah).

| Proses Bisnis | Jenis | Supplier → Customer (titik integrasi) |
|---|---|---|
| Penyusunan RPJPD, RPJMD, RKPD | [I] | seluruh OPD (usulan Renstra/Renja) → seluruh OPD (acuan) |
| Pengendalian & evaluasi pelaksanaan rencana pembangunan | [I] | seluruh OPD (realisasi) → kepala daerah |
| Reviu & verifikasi Renstra/Renja OPD agar selaras RPJMD | [I] | seluruh OPD → seluruh OPD |
| Pengelolaan data perencanaan (via SIPD) | [P] | seluruh OPD → SIPD (Kemendagri) |
| Kelitbangan & inovasi daerah (jika + Litbang) | [I] | OPD/masyarakat → repositori inovasi |
| Koordinasi & sinkronisasi DAK/dana transfer | [M] | OPD teknis + Bakeuda → OPD teknis |

**Titik integrasi kunci**: Bappeda beririsan **seluruh OPD** (perencanaan universal), dan khususnya OPD dengan sarpras fisik (usulan DAK). Data perencanaan-penganggaran mengalir lewat SIPD.

## Keuangan (Bakeuda / BPKAD / BPKPD / BKAD)

**Level 0:** Inti = penyusunan-penatausahaan APBD, pengelolaan kas, aset/BMD; jika + pendapatan (Bapenda menyatu): pemungutan pajak daerah. Manajemen = kebijakan keuangan; Pendukung = TU.

| Proses Bisnis | Jenis | Supplier → Customer |
|---|---|---|
| Penyusunan & penatausahaan APBD | [I] | seluruh OPD (RKA) → seluruh OPD (DPA) |
| Pengelolaan kas & pembayaran (SP2D) | [I] | seluruh OPD → seluruh OPD/pihak ketiga |
| Pengelolaan aset/Barang Milik Daerah (BMD) | [I] | seluruh OPD → seluruh OPD |
| Pembayaran gaji & TPP ASN | [I] | BKPSDM (data kinerja/nilai TPP) → ASN |
| Pemungutan pajak daerah (jika + pendapatan) | [I] | wajib pajak → kas daerah (PAD) |
| Rekonsiliasi penerimaan retribusi OPD | [I] | OPD penghasil PAD (Dishub, Disdag, dll) → kas daerah |
| Penyusunan LKPD | [M] | seluruh OPD → BPK (via Inspektorat reviu) |

**Titik integrasi kunci**: Bakeuda beririsan **seluruh OPD** (sisi belanja: APBD-DPA-SP2D) + **BKPSDM** (gaji/TPP) + **OPD penghasil PAD** (sisi pendapatan, arah terbalik) + **Inspektorat** (reviu LKPD). Lihat kategori OPD penghasil PAD di `pola-integrasi-pasangan.md`.

## Kepegawaian (BKPSDM / BKD / BKPP)

**Level 0:** Inti = pengadaan-mutasi-pengembangan-penilaian ASN; Manajemen = kebijakan kepegawaian; Pendukung = TU. Sering + Pengembangan SDM (Diklat).

| Proses Bisnis | Jenis | Supplier → Customer |
|---|---|---|
| Pengadaan/rekrutmen ASN (CPNS/PPPK) | [I] | pelamar → BKN (SIASN) |
| Mutasi, promosi, kepangkatan | [I] | ASN/OPD → BKN (SIASN) |
| Pengembangan kompetensi (diklat, sertifikasi) | [I] | ASN → ASN/OPD |
| Penilaian kinerja ASN (SKP/e-Kinerja) | [I] | OPD (data kinerja) → Bakeuda (dasar TPP) |
| Pengelolaan disiplin & kode etik | [I] | OPD → ASN (data semi-sensitif) |
| Pengelolaan data kepegawaian (SIMPEG lokal + SIASN) | [P] | seluruh OPD → BKN + Bakeuda |

**Titik integrasi kunci**: BKPSDM beririsan **seluruh OPD** (data ASN penempatan) + **Bakeuda** (kinerja→TPP/gaji) + **BKN** (SIASN, hulu vertikal) + **Bagian Organisasi** (Anjab/ABK, SKJ). Data ASN adalah kandidat "Satu Data ASN" (lihat `pola-integrasi-pasangan.md`). Waspadai triplikasi: SIMPEG lokal vs SIASN vs sistem sektoral (Dapodik untuk guru, SISDMK untuk nakes).

## Penelitian dan Pengembangan (Balitbang, jika berdiri sendiri)

**Level 0:** Inti = kelitbangan, inovasi daerah, pengelolaan hasil riset untuk kebijakan. Sering menyatu ke Bapperida.

| Proses Bisnis | Jenis | Supplier → Customer |
|---|---|---|
| Penyelenggaraan kelitbangan daerah | [I] | OPD/akademisi → kebijakan daerah |
| Pengelolaan inovasi daerah (repositori, IGA) | [I] | OPD/masyarakat → Kemendagri (indeks inovasi) |
| Fasilitasi HKI & difusi inovasi | [I] | inovator → masyarakat |

---

# BAGIAN STAF (Sekretariat Daerah dan Bagian; Sekretariat DPRD)

## Sekretariat Daerah (Setda) dan Bagian-Bagiannya

Setda adalah unsur staf yang mengoordinasikan perumusan kebijakan dan pelayanan administratif. Dipecah ke banyak Bagian; tiap Bagian punya fungsi berbeda. Petakan **per Bagian**, bukan Setda utuh.

| Bagian (contoh) | Proses Bisnis Inti | Jenis | Titik Integrasi |
|---|---|---|---|
| **Bagian Organisasi** | Penataan kelembagaan, Anjab/ABK, ketatalaksanaan, SAKIP, RB, pelayanan publik (SP4N-LAPOR koordinasi) | [I] | BKPSDM (Anjab/ABK, SKJ); seluruh OPD (SAKIP, SOP) |
| **Bagian Hukum** | Penyusunan produk hukum daerah (Perda/Perbup), bantuan hukum, dokumentasi hukum (JDIH), harmonisasi | [I] | seluruh OPD (legal drafting); Satpol PP (penegakan) |
| **Bagian Pemerintahan** | Koordinasi penyelenggaraan pemerintahan, batas wilayah, kerja sama daerah, LPPD | [I] | Kecamatan; seluruh OPD (LPPD) |
| **Bagian Pengadaan Barang/Jasa (UKPBJ)** | Pengelolaan pengadaan (via SPSE), pembinaan penyedia | [I] | seluruh OPD → LKPP (SPSE) |
| **Bagian Perekonomian/SDA** | Koordinasi kebijakan ekonomi, BUMD, SDA | [M] | Dinas ekonomi terkait |
| **Bagian Protokol & Komunikasi Pimpinan (Prokopim)** | Keprotokolan, komunikasi pimpinan, dokumentasi kegiatan KDH | [P] | Diskominfo (diseminasi) |
| **Bagian Umum** | Ketatausahaan, rumah tangga, aset Setda | [P] | Bakeuda (aset) |

**Catatan**: nomenklatur dan jumlah Bagian bervariasi. Selalu cek Perbup SOTK Setda untuk daftar Bagian riil. Bagian Organisasi sering jadi koordinator Domain Proses Bisnis dalam penyusunan arsitektur SPBE (praktik umum, bukan mandat Perpres).

## Sekretariat DPRD

**Level 0:** Inti = fasilitasi tugas & fungsi DPRD (rapat, risalah, produk hukum inisiatif), pengelolaan keuangan-administrasi DPRD; Pendukung = TU.

| Proses Bisnis | Jenis | Titik Integrasi |
|---|---|---|
| Fasilitasi rapat & persidangan DPRD | [I] | DPRD |
| Penyusunan risalah & dokumentasi | [I] | DPRD; Bagian Hukum (Perda) |
| Pengelolaan keuangan & administrasi DPRD | [I] | Bakeuda |
| Fasilitasi aspirasi masyarakat (reses) | [I] | masyarakat → DPRD |

---

# BAGIAN PENGAWASAN (Inspektorat)

**Level 0:** Inti = pengawasan internal (audit, reviu, evaluasi, pemeriksaan); Manajemen = perencanaan pengawasan (PKPT); Pendukung = TU. Sebagai APIP, bersifat lintas-OPD read-only.

| Proses Bisnis | Jenis | Supplier → Customer |
|---|---|---|
| Audit (kinerja, keuangan, tujuan tertentu) | [I] | seluruh OPD → kepala daerah/APIP |
| Reviu (LKPD, RKA, DAK, laporan kinerja) | [I] | Bakeuda + seluruh OPD → validasi sebelum audit BPK |
| Evaluasi SAKIP/AKIP OPD | [I] | seluruh OPD → Bagian Organisasi |
| Penanganan pengaduan & pemeriksaan khusus | [I] | pengadu/KDH → hasil pemeriksaan |
| Pengawalan pembangunan (probity audit) | [I] | OPD pelaksana → OPD pelaksana |

**Titik integrasi kunci**: Inspektorat beririsan **seluruh OPD** (pengawasan horizontal read-only) + **Bakeuda** (reviu LKPD/RKA). **Prinsip batasi digitalisasi berlaku**: data audit investigatif dan pemeriksaan khusus bersifat sensitif — akses terbatas, bukan diperluas. Tulis eksplisit di Domain 6.

---

# BAGIAN KEWILAYAHAN (Kecamatan)

**Level 0:** Inti = pelayanan administratif terpadu (PATEN) + koordinasi kewilayahan + pelimpahan sebagian kewenangan bupati; Pendukung = TU. Kelurahan (jika ada) di bawah Kecamatan.

| Proses Bisnis | Jenis | Supplier → Customer |
|---|---|---|
| Pelayanan Administrasi Terpadu Kecamatan (PATEN) | [I] | masyarakat → masyarakat (izin/nonizin dilimpahkan) |
| Pengantar dokumen kependudukan (berjenjang) | [I] | RT/RW/desa → Dukcapil |
| Koordinasi penyelenggaraan pemerintahan kecamatan | [I] | desa/kelurahan → Bagian Pemerintahan |
| Pembinaan & pengawasan desa/kelurahan | [I] | desa → DPMD |
| Koordinasi trantibum & pemberdayaan wilayah | [I] | Satpol PP + masyarakat → wilayah |
| Fasilitasi Musrenbang kecamatan | [I] | desa/masyarakat → Bappeda |

**Titik integrasi kunci**: Kecamatan beririsan **Dukcapil** (pengantar kependudukan) + **DPMD** (pembinaan desa) + **Bagian Pemerintahan** (koordinasi) + **Bappeda** (Musrenbang) + **Satpol PP** (Satlinmas, trantibum). Template Kecamatan berlaku untuk semua kecamatan di satu Pemda dengan variasi pelimpahan kewenangan.

---

# BAGIAN PEMERINTAHAN UMUM (Kesbangpol)

**Kasus khusus.** Kesbangpol menjalankan **urusan pemerintahan umum** (Pasal 25 UU 23/2014) — kewenangan Presiden yang dilimpahkan ke kepala daerah, **bukan** urusan konkuren. Karena itu tidak ada di 32 urusan matriks.

**Level 0:** Inti = pembinaan ideologi/wawasan kebangsaan, kewaspadaan dini, penanganan konflik, pembinaan ormas/politik; Pendukung = TU.

| Proses Bisnis | Jenis | Supplier → Customer |
|---|---|---|
| Pembinaan wawasan kebangsaan & ketahanan ideologi Pancasila | [I] | — → masyarakat |
| Pembinaan ketahanan ekonomi, sosial, budaya, agama | [I] | — → masyarakat |
| **Kewaspadaan dini & penanganan konflik sosial** (FKDM, tim terpadu) | [I] | intelijen/masyarakat → tim terpadu |
| Pembinaan organisasi kemasyarakatan (ormas) | [I] | ormas → Kesbangpol |
| Fasilitasi politik dalam negeri (parpol, pemilu) | [I] | parpol → Kesbangpol; Satpol PP (pengamanan) |
| Pencegahan penyalahgunaan NAPZA (P4GN) | [I] | — → masyarakat; Dinsos (rehabilitasi) |

**Titik integrasi kunci**: Kesbangpol beririsan **Kecamatan** (FKDM tingkat kecamatan) + **Satpol PP** (pengamanan, Linmas pemilu) + **Dinsos** (rehabilitasi NAPZA). **Prinsip batasi digitalisasi berlaku kuat**: data kewaspadaan dini, intelijen, dan pemetaan konflik bersifat sangat sensitif — default membatasi akses digital, bukan memperluas. Tulis eksplisit di Domain 6.

---

## Ringkasan Penggunaan

Setelah mengidentifikasi tipe OPD di Langkah 1.0:
- **Dinas** → jalur Langkah 1a-1b (matriks urusan + matriks proses bisnis). Referensi ini tidak dipakai.
- **Non-Dinas** → ambil proses bisnis dari bagian yang sesuai di referensi ini sebagai draf Domain 1, lalu lanjutkan Langkah 2 (cari Perbup SOTK riil untuk struktur Bidang/Bagian), Langkah 3 (6 domain), Langkah 4 (pola integrasi), Langkah 5 (Dosir) seperti biasa.
- Proses bisnis di referensi ini sebagian besar **empiris** (tervalidasi di dokumen arsitektur nyata untuk tipe OPD ini) dan sebagian **normatif** (turunan PP 18/2016). Untuk yang belum tervalidasi di Pemda tertentu, tandai `[ISI: perlu validasi lapangan]`.
- Sama seperti Dinas: satu OPD non-Dinas bisa menggabungkan fungsi (Bapperida = perencanaan + litbang; Bakeuda + pendapatan). Cek Perbup untuk kombinasi riil.

## Karakter Khas OPD Penunjang (catatan dari pemetaan)

Dua pola yang konsisten muncul saat memetakan OPD penunjang, berguna untuk dikenali:

1. **Proses inti melayani pengguna internal, bukan publik.** Berbeda dari Dinas (proses inti melayani masyarakat/G2C), proses inti OPD penunjang melayani ASN dan OPD lain (G2G). Tetap diklasifikasikan Inti karena itu aliran nilai utamanya, tapi implikasi digitalisasinya beda: fokus efisiensi tata kelola internal, bukan layanan publik. Layanan G2C hanya muncul di titik tertentu (mis. pengadaan CPNS/PPPK di BKPSDM melayani pelamar).

2. **OPD penunjang saling terkait erat membentuk rantai tata kelola internal.** Output satu OPD penunjang sering jadi input OPD penunjang lain: perencanaan (Bappeda) → penganggaran (Bakeuda) → pelaksanaan → pengawasan (Inspektorat); dan kinerja ASN (BKPSDM) → TPP (Bakeuda). Saat memetakan satu OPD penunjang, hampir selalu ada titik integrasi ke OPD penunjang lain. Perencanaan-Keuangan-Kepegawaian-Pengawasan adalah kuartet yang saling menyuplai data.
