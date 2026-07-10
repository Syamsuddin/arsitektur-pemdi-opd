# Matriks Proses Bisnis OPD — Jembatan Sub-Urusan ke Proses Bisnis Konkret

> Referensi derivasi Domain 1 tingkat operasional untuk skill `pemdi-arsitektur-opd`. Menjembatani **lompatan** dari sub-urusan legal (UU 23/2014, di `matriks-urusan-uu23-2014.md`) ke **proses bisnis konkret** yang bisa langsung dipetakan.
>
> **Struktur mengikuti Permenpan RB 19/2018** (lihat `metodologi-probis.md`): tiap proses bisnis ditandai jenisnya — **[I] Inti**, **[M] Manajemen**, **[P] Pendukung** — dan disertai analisis SIPOC ringkas (Supplier/Customer) untuk mengidentifikasi titik integrasi.

## Cara Pakai (Langkah 1 Mode PEMETAAN, setelah identifikasi urusan)

1. Dari matriks urusan, dapatkan sub-urusan kewenangan kab/kota untuk OPD ini.
2. Cari urusan yang sama di matriks proses bisnis ini → dapatkan daftar proses bisnis konkret (Level 1) turunannya.
3. Tandai jenis tiap proses (Inti/Manajemen/Pendukung) — **prioritaskan proses Inti** untuk rekomendasi digitalisasi/integrasi di Domain 4.
4. Cek kolom Supplier/Customer → kalau ada OPD lain, itu kandidat titik integrasi (silang ke `pola-integrasi-pasangan.md`).
5. Sesuaikan dengan Bidang riil dari Perbup SOTK. Tandai `[ISI:]` untuk proses yang belum bisa dikonfirmasi ada di Pemda ini.

## Sumber dan Batasan (jujur)

- **Perpres 132/2022 hanya menetapkan T1-T2 (Sektor/Urusan) nasional.** T3-T4 (Fungsi/Sub-Fungsi) secara eksplisit **diserahkan ke tiap Pemda** untuk didefinisikan sendiri. Jadi TIDAK ADA daftar proses bisnis resmi nasional yang tinggal disalin — matriks ini **dibangun**, bukan dikutip.
- **Dua sumber matriks ini**: (a) **empiris** — proses bisnis yang sudah tervalidasi di 17 dokumen arsitektur HSS + 2 uji coba; (b) **normatif-turunan** — proses bisnis yang diturunkan langsung dari sub-urusan UU 23/2014. Kolom "Sumber" menandai asalnya.
- **Ini dokumen hidup, tidak sekokoh matriks urusan.** Proses bisnis riil bervariasi antar-daerah dan berkembang (mis. IMB→PBG, PPDB→SPMB). Matriks ini memberi *kandidat kuat* proses bisnis, bukan daftar pasti. Validasi lapangan (wawancara, per Permenpan 19/2018 tahap 1) tetap diperlukan.
- **Penanda status ada di dua tingkat, dan yang otoritatif adalah tingkat baris.** Penanda ✅/🟡 pada **header urusan** hanya menunjukkan apakah urusan itu pernah muncul di dokumen arsitektur tervalidasi — ✅ berarti "ada dokumen terkait", 🟡 berarti "belum ada dokumen". Tapi status sebenarnya tiap **proses bisnis** ditentukan **kolom Sumber per baris**: `Empiris` (tervalidasi di dokumen nyata) vs `Normatif` (baru turunan UU, perlu validasi lapangan). Satu urusan ber-header ✅ tetap bisa memuat baris `Normatif` — jangan simpulkan sebuah proses bisnis "empiris" hanya dari header. Selalu cek kolom Sumber baris yang bersangkutan.

---

# BAGIAN A — URUSAN DENGAN DOKUMEN HSS TERVALIDASI (Empiris + Normatif)

## Pendidikan ✅ (rujuk: Arsitektur_SPBE.md — Disdikbud)

**Level 0 — Pengelompokan:**
- **Inti**: layanan pendidikan ke peserta didik & masyarakat (PPDB, pembelajaran, kelulusan)
- **Manajemen**: perencanaan pendidikan, penganggaran DAK, monev mutu
- **Pendukung**: kepegawaian guru (irisan BKPSDM), sarpras, ketatausahaan

**Level 1 — Proses Bisnis Konkret:**

| Sub-Urusan (UU 23/2014) | Proses Bisnis | Jenis | Supplier → Customer (titik integrasi) | Sumber |
|---|---|---|---|---|
| Manajemen Pendidikan (Dikdas) | Penerimaan Peserta Didik Baru (PPDB/SPMB) | [I] | Dukcapil (data NIK/KK) → sekolah | Empiris HSS |
| Manajemen Pendidikan (Dikdas) | Pengelolaan pembelajaran & data pokok (Dapodik) | [I] | sekolah → Kemendikbud (Dapodik nasional) | Empiris |
| Manajemen Pendidikan (Dikdas) | Penerbitan ijazah & legalisir | [I] | sekolah → masyarakat | Empiris |
| Manajemen Pendidikan (PAUD/Nonformal) | Pengelolaan PAUD & pendidikan nonformal | [I] | — → masyarakat | Normatif |
| Manajemen Pendidikan (Sarpras) | Usulan & pengelolaan DAK Fisik (rehab, pengadaan) | [M] | Bapperida (usulan) + PUPR (eksekusi teknis) → sekolah | Empiris (koreksi PUPR) |
| Manajemen Pendidikan (PTK) | Distribusi & pemerataan guru | [P] | BKPSDM (data ASN guru) → sekolah | Empiris (triplikasi ASN) |
| Kurikulum | Penetapan kurikulum muatan lokal | [I] | — → sekolah | Normatif |

**Catatan**: PPDB dan distribusi guru adalah dua proses inti yang sarat titik integrasi (Dukcapil, BKPSDM) — prioritas digitalisasi terintegrasi.

## Kesehatan ✅ (rujuk: Arsitektur_SPBE_Dinkes.md)

**Level 0:** Inti = layanan kesehatan (UKP/UKM, izin fasyankes); Manajemen = perencanaan-anggaran kesehatan; Pendukung = SDM kesehatan (irisan BKPSDM), farmasi-logistik.

| Sub-Urusan | Proses Bisnis | Jenis | Supplier → Customer | Sumber |
|---|---|---|---|---|
| Upaya Kesehatan | Pelayanan UKP & rujukan (Puskesmas/RSUD) | [I] | pasien → BPJS/Dinkes | Empiris |
| Upaya Kesehatan | Pelayanan UKM (promotif-preventif, imunisasi, gizi) | [I] | Dinkes → masyarakat | Empiris |
| Upaya Kesehatan | Penerbitan izin RS kelas C/D & fasyankes | [I] | pemohon → DPMPTSP (irisan perizinan) | Empiris |
| SDM Kesehatan | Penerbitan izin praktik nakes (SIP/SIK) | [I] | nakes → Dinkes | Normatif (baru dari UU) |
| SDM Kesehatan | Perencanaan & pengembangan SDM kesehatan | [P] | BKPSDM + SISDMK nasional → Dinkes | Empiris (triplikasi ASN) |
| Sediaan Farmasi | Izin apotek, toko obat, toko alkes, UMOT | [I] | pemohon → Dinkes/DPMPTSP | Normatif (luput di dok awal) |
| Sediaan Farmasi | Pengawasan post-market makanan-minuman IRT | [I] | Dinkes → pelaku usaha | Normatif |
| Pemberdayaan Masyarakat | Pemberdayaan kesehatan (Posyandu, UKBM) | [I] | Dinkes → masyarakat | Normatif |

**Catatan**: sub-urusan Sediaan Farmasi (izin apotek dll) adalah proses inti yang **belum tercatat di dokumen Dinkes awal** — kandidat penambahan, terkonfirmasi dari matriks urusan.

## Pekerjaan Umum dan Penataan Ruang ✅ (rujuk: Arsitektur_SPBE_PUPR.md)

**Level 0:** Inti = pembangunan-pemeliharaan infrastruktur + perizinan bangunan/ruang; Manajemen = perencanaan teknis; Pendukung = kepegawaian teknis, peralatan.

| Sub-Urusan | Proses Bisnis | Jenis | Supplier → Customer | Sumber |
|---|---|---|---|---|
| Jalan | Penyelenggaraan jalan kab/kota (bangun-pelihara) | [I] | Bapperida (anggaran) → masyarakat | Empiris |
| Bangunan Gedung | Penerbitan PBG (dulu IMB) & SLF | [I] | pemohon + Dishub (andalalin) + Damkar (proteksi) → DPMPTSP | Empiris (irisan multi-OPD) |
| Penataan Ruang | Penyelenggaraan penataan ruang (RTRW) | [I] | Bapperida → semua OPD (acuan spasial) | Empiris |
| SDA | Pengelolaan irigasi <1000 ha & pengaman sungai | [I] | — → petani/masyarakat | Normatif (batas <1000ha) |
| Air Minum | Pengelolaan & pengembangan SPAM | [I] | — → masyarakat (via PDAM/PUPR) | Normatif |
| Persampahan/Air Limbah/Drainase | Pengelolaan sistem (irisan DLH) | [I]/[P] | DLH (irisan) → masyarakat | Normatif |
| Jasa Konstruksi | Penerbitan IUJK & sistem informasi konstruksi | [I] | pelaku usaha → PUPR/OSS | Normatif |
| Bangunan Gedung (eksekusi) | Rehab bangunan OPD lain (mis. sekolah) | [I] | OPD pemilik (Disdikbud dll) → OPD pemilik | Empiris (koreksi PUPR) |

**Catatan**: PBG adalah proses inti dengan titik integrasi terbanyak (andalalin Dishub + proteksi kebakaran Damkar + lokasi via DPMPTSP) — pusat rantai perizinan pembangunan.

## Perhubungan ✅ (rujuk: Arsitektur_SPBE_Dishub.md — uji coba)

**Level 0:** Inti = layanan LLAJ + pengujian + perizinan angkutan (banyak yang penghasil PAD); Manajemen = perencanaan transportasi; Pendukung = TU.

| Sub-Urusan | Proses Bisnis | Jenis | Supplier → Customer | Sumber |
|---|---|---|---|---|
| LLAJ | Manajemen & rekayasa lalu lintas | [I] | — → masyarakat | Empiris |
| LLAJ | Persetujuan andalalin | [I] | pemohon → PUPR/DPMPTSP (prasyarat PBG) | Empiris (titik integrasi baru) |
| LLAJ | Penerbitan izin trayek angkutan | [I] | pemohon → Dishub | Normatif |
| LLAJ (Sarpras) | Penerbitan izin & pengelolaan parkir | [I] | masyarakat → **Bakeuda (retribusi/PAD)** | Empiris (OPD penghasil PAD) |
| LLAJ (Moda) | Pengujian berkala kendaraan (Uji KIR) | [I] | pemilik kendaraan → **Bakeuda (retribusi/PAD)** | Empiris (OPD penghasil PAD) |
| Pelayaran | Izin angkutan sungai-danau & pelabuhan lokal | [I] | pemohon → Dishub | Normatif (HSS: Sungai Nagara) |

**Catatan**: Parkir & Uji KIR adalah proses inti penghasil PAD — titik integrasi ke Bakeuda **arah pendapatan** (bukan belanja).

## Sosial ✅ (rujuk: Arsitektur_SPBE_Dinsos.md)

**Level 0:** Inti = rehabilitasi-perlindungan-jaminan sosial; Manajemen = perencanaan; Pendukung = TU.

| Sub-Urusan | Proses Bisnis | Jenis | Supplier → Customer | Sumber |
|---|---|---|---|---|
| Perlindungan & Jaminan Sosial | Pendataan & pengelolaan fakir miskin (DTKS) | [I] | Dukcapil (NIK) → Dinkes (PBI-JK), Disdikbud (PIP) | Empiris (hub DTKS) |
| Rehabilitasi Sosial | Rehabilitasi sosial non-panti | [I] | — → penerima manfaat | Empiris |
| Rehabilitasi Sosial | Rehabilitasi anak berhadapan hukum | [I] | — → anak | Normatif (luput di dok awal) |
| Pemberdayaan Sosial | Pemberdayaan KAT, izin sumbangan, LK3 | [I] | pemohon → Dinsos | Normatif |
| Penanganan Bencana | Kebutuhan dasar & pemulihan korban bencana | [I] | BPBD (irisan) → korban | Normatif |
| Taman Makam Pahlawan | Pemeliharaan TMP kab/kota | [P] | — → publik | Normatif (luput di dok awal) |

**Catatan sensitif**: Data DTKS + data rehabilitasi = data sensitif. Rehabilitasi anak berhadapan hukum & korban kekerasan → **prinsip batasi digitalisasi**.

## Administrasi Kependudukan ✅ (rujuk: Arsitektur_SPBE_Dukcapil.md)

**Level 0:** Inti = pelayanan pendaftaran penduduk & pencatatan sipil; Pendukung = pengelolaan data.

| Sub-Urusan | Proses Bisnis | Jenis | Supplier → Customer | Sumber |
|---|---|---|---|---|
| Pendaftaran Penduduk | Pelayanan pendaftaran penduduk (KK, KTP-el, pindah) | [I] | SIAK Terpusat (Pusat) → **semua OPD** (konsumen NIK) | Empiris (fondasi identitas) |
| Pencatatan Sipil | Pelayanan pencatatan sipil (akta lahir/mati/kawin) | [I] | pemohon → masyarakat | Empiris |
| Pengelolaan Informasi Adminduk | Pemanfaatan & penyajian database kependudukan | [I] | Dukcapil → semua OPD (via PKS pemanfaatan) | Empiris |

**Catatan**: Dukcapil adalah **supplier universal** — output-nya (verifikasi NIK) jadi input hampir semua OPD. Kewenangan kab/kota hanya "pelayanan"; NIK & blangko = Pusat.

## Pemberdayaan Masyarakat dan Desa ✅ (rujuk: Arsitektur_SPBE_DPMD.md)

| Sub-Urusan | Proses Bisnis | Jenis | Supplier → Customer | Sumber |
|---|---|---|---|---|
| Administrasi Pemerintahan Desa | Pembinaan-pengawasan administrasi desa | [I] | desa (Siskeudes) → DPMD | Empiris |
| Penataan Desa | Penyelenggaraan penataan desa | [I] | — → desa | Normatif |
| Kerja Sama Desa | Fasilitasi kerja sama antar-desa | [I] | — → desa | Normatif |
| Lembaga Kemasyarakatan | Pemberdayaan lembaga kemasyarakatan & adat | [I] | — → masyarakat desa | Normatif |
| (terkait) | Fasilitasi pengelolaan Dana Desa/ADD | [M] | Bakeuda (transfer) → desa | Empiris (titik integrasi) |

## Komunikasi-Informatika & Persandian & Statistik ✅ (rujuk: Arsitektur_SPBE_Diskominfo.md)

**Level 0:** Inti = layanan informasi publik + operasional e-gov + statistik sektoral; Pendukung = persandian (keamanan), infrastruktur TIK.

| Sub-Urusan | Proses Bisnis | Jenis | Supplier → Customer | Sumber |
|---|---|---|---|---|
| Informasi & Komunikasi Publik | Pengelolaan IKP & kehumasan (diseminasi, SP4N-LAPOR) | [I] | Bagian Organisasi (data pengaduan) → masyarakat | Empiris |
| Aplikasi Informatika | **Pengelolaan e-government kab/kota** (operator SPBE/Pemdi, Hub SPL) | [I]/[M] | semua OPD → semua OPD | Empiris (dasar hukum operator) |
| Aplikasi Informatika | Pengelolaan nama domain kab/kota | [P] | — → OPD | Normatif |
| Persandian (huruf U) | Persandian pengamanan informasi Pemda | [P] | — → semua OPD | Empiris (keamanan) |
| Statistik Sektoral (huruf T) | Penyelenggaraan statistik sektoral (walidata) | [I] | semua OPD → publik (Satu Data) | Empiris |

**Catatan**: "Pengelolaan e-government kab/kota" adalah dasar hukum eksplisit peran Diskominfo sebagai operator Hub SPL/integrasi — proses inti-manajemen sekaligus.

## Penanaman Modal ✅ (rujuk: Arsitektur_SPBE_PMPTSP.md)

| Sub-Urusan | Proses Bisnis | Jenis | Supplier → Customer | Sumber |
|---|---|---|---|---|
| Pelayanan Penanaman Modal | Pelayanan perizinan-nonperizinan terpadu 1 pintu (PTSP/MPP) | [I] | semua OPD teknis (rekomendasi) → pemohon | Empiris (MPP menyatukan lokasi) |
| Pengembangan Iklim PM | Fasilitas/insentif & peta potensi investasi | [I] | — → investor | Normatif |
| Promosi PM | Penyelenggaraan promosi penanaman modal | [I] | — → investor | Normatif |

**Catatan**: PTSP/MPP adalah titik integrasi backend dengan hampir semua OPD teknis (yang memberi rekomendasi izin) + Dukcapil + Bakeuda.

## Trantibumlinmas ✅ (rujuk: Arsitektur_SPBE_SatpolPP_Damkar.md — uji coba)

**Level 0:** Inti = penegakan Perda + ketertiban + **layanan darurat kebakaran**; Pendukung = Linmas, TU. Catatan: karakter dualitas (administratif vs darurat real-time).

| Sub-Urusan | Proses Bisnis | Jenis | Supplier → Customer | Sumber |
|---|---|---|---|---|
| Ketertiban Umum | Penegakan Perda & Perbup | [I] | — → masyarakat | Empiris |
| Ketertiban Umum | Penanganan gangguan trantibum (patroli, penertiban) | [I] | — → masyarakat | Empiris |
| Ketertiban Umum | Penertiban reklame/PKL/bangunan tanpa izin | [I] | PUPR (data PBG) + Bakeuda (pajak reklame) → masyarakat | Empiris (titik integrasi baru) |
| Kebakaran | **Respons darurat kebakaran & penyelamatan** | [I] | masyarakat (panggilan) → korban | Empiris (layanan darurat) |
| Kebakaran | Inspeksi proteksi kebakaran | [I] | PUPR (data SLF) → pemilik bangunan | Empiris (titik integrasi baru) |
| Kebakaran | Investigasi kejadian kebakaran | [I] | — → publik | Normatif |

**Catatan**: proses "respons darurat kebakaran" berkarakter real-time — prioritas ketersediaan (availability), kandidat command center/112. Beda kelas dari proses administratif.

---

# BAGIAN B — URUSAN NORMATIF SAJA (turunan UU 23/2014, belum ada dokumen HSS)

Untuk urusan berikut, proses bisnis diturunkan langsung dari sub-urusan matriks UU 23/2014. Belum tervalidasi lewat dokumen arsitektur nyata — **wajib ditandai [ISI: normatif, perlu validasi lapangan]** saat dipakai.

## Perumahan-Permukiman 🟡
| Sub-Urusan | Proses Bisnis (kandidat) | Jenis |
|---|---|---|
| Perumahan | Penyediaan-rehabilitasi rumah korban bencana; izin pembangunan perumahan; penerbitan SKBG | [I] |
| Kawasan Permukiman | Penataan kawasan kumuh <10ha; izin kawasan permukiman | [I] |
| PSU | Penyelenggaraan PSU perumahan | [I] |

## Tenaga Kerja ✅ (rujuk: Arsitektur_SPBE_Disnaker_Kop_UKM_Perind.md — uji coba)
| Sub-Urusan | Proses Bisnis | Jenis | Supplier/Customer |
|---|---|---|---|
| Pelatihan Kerja | Pelatihan berbasis kompetensi (BLK); izin lembaga pelatihan kerja | [I] | BLK → pencari kerja |
| Penempatan Tenaga Kerja | Pelayanan antar kerja; info pasar kerja; izin LPTKS; IMTA; perlindungan PMI | [I] | **SISNAKER** → pencari kerja |
| Hubungan Industrial | Pencegahan-penyelesaian perselisihan; pendaftaran PKB/PP | [I] | pekerja/pengusaha → Disnaker (data semi-sensitif) |

## Pemberdayaan Perempuan & Perlindungan Anak (PPPA) 🟡
| Sub-Urusan | Proses Bisnis (kandidat) | Jenis | Catatan |
|---|---|---|---|
| Perlindungan Perempuan/Anak | Layanan korban kekerasan; PUG; PHA | [I] | ⚠️ data korban → **batasi digitalisasi** |
| Sistem Data Gender-Anak | Pengumpulan-penyajian data gender & anak | [I] | Satu Data |

## Pengendalian Penduduk & KB 🟡
| Sub-Urusan | Proses Bisnis (kandidat) | Jenis | Catatan |
|---|---|---|---|
| Keluarga Berencana | KIE pengendalian penduduk & KB; pelayanan KB; distribusi alokon; pendayagunaan PKB/PLKB | [I] | PKB/PLKB = kandidat triplikasi ASN (sistem BKKBN) |
| Keluarga Sejahtera | Pembinaan ketahanan-kesejahteraan keluarga | [I] | — |

## Lingkungan Hidup 🟡
| Sub-Urusan | Proses Bisnis (kandidat) | Jenis | Supplier/Customer |
|---|---|---|---|
| Pengendalian Pencemaran | Pencegahan-penanggulangan-pemulihan pencemaran | [I] | — → masyarakat |
| Pembinaan & Pengawasan Izin | Pengawasan izin lingkungan & PPLH | [I] | DPMPTSP (izin) → pelaku usaha |
| Persampahan (huruf K) | Pengelolaan sampah; izin daur ulang; **retribusi sampah** | [I] | → **Bakeuda (PAD)** |
| B3 & Limbah B3 | Penyimpanan sementara & pengumpulan limbah B3 | [I] | — |
| KLHS | KLHS untuk KRP kab/kota | [M] | Bapperida → perencanaan |

## Perdagangan ✅ (rujuk: Arsitektur_SPBE_Perdagangan.md — uji coba) — OPD penghasil PAD padat

**Level 0:** Inti = perizinan usaha + pengelolaan pasar + metrologi + stabilisasi harga + perlindungan konsumen (rasio inti tinggi, banyak penghasil PAD); Manajemen = perencanaan pembinaan; Pendukung = TU.

| Sub-Urusan | Proses Bisnis | Jenis | Supplier → Customer | Sumber |
|---|---|---|---|---|
| Perizinan | Izin pasar rakyat/pusat perbelanjaan/toko swalayan; TDG; SIUP MB gol. C | [I] | pemohon → DPMPTSP/OSS | Empiris |
| Sarana Distribusi | Pembangunan-pengelolaan pasar rakyat | [I] | Bapperida/PUPR → pedagang | Empiris |
| Sarana Distribusi | **Retribusi pasar (sewa kios/los)** | [I] | pedagang → **Bakeuda (PAD)** | Empiris |
| Standardisasi & Perlindungan Konsumen | **Tera/tera ulang UTTP (via UPTD Metrologi)** | [I] | pelaku usaha → **Bakeuda (retribusi tera/PAD)** | Empiris (Perbup 68/2022) |
| Standardisasi & Perlindungan Konsumen | Pengawasan UTTP & BDKT; perlindungan konsumen | [I] | Disdag → pelaku usaha | Empiris |
| Stabilisasi Harga | **Pemantauan harga & stok bapok** | [I] | pasar → **SIHAPOK (Satu Data HSS, sudah eksis)** | Empiris (integrasi sudah jalan) |
| Penggunaan Produk Dalam Negeri | Promosi & pemasaran produk lokal | [I] | UKM → masyarakat | Normatif |

**Catatan**: OPD penghasil PAD **padat (3 sumber**: pasar, tera, TDG). Data harga bapok **sudah terhubung SIHAPOK** — titik integrasi eksis, bukan prediksi. **Temuan HSS**: Perdagangan & Perindustrian **dipecah** — Perindustrian ada di Disnaker-Kop-UKM-Perind (Perbup 83/2020), bukan Disperindag gabungan.

## Perindustrian ✅ (rujuk: Arsitektur_SPBE_Disnaker_Kop_UKM_Perind.md — uji coba)
| Sub-Urusan | Proses Bisnis | Jenis | Supplier/Customer |
|---|---|---|---|
| Perizinan | IUI kecil-menengah; IUKI/IPKI | [I] | pemohon → OSS |
| Perencanaan Pembangunan Industri | Penetapan RPIK (Rencana Pembangunan Industri Kab) | [M] | Bapperida → OPD |
| SIINas | Penyampaian data industri ke SIINas | [P] | Disperind → **SIINas (Kemenperin)** |
| (kekhasan lokal) | Pembinaan sentra IKM (mis. UPTD Logam Nagara HSS: kerajinan logam khas) | [I] | perajin → Disdag (pemasaran) |

## Koperasi-UKM ✅ (rujuk: Arsitektur_SPBE_Disnaker_Kop_UKM_Perind.md — uji coba)
| Sub-Urusan | Proses Bisnis | Jenis | Supplier/Customer |
|---|---|---|---|
| Izin Usaha Simpan Pinjam | Izin USP koperasi wilayah kab/kota | [I] | pemohon → Diskop |
| Pengawasan & Penilaian Kesehatan | Pemeriksaan-pengawasan koperasi; penilaian kesehatan KSP/USP | [I] | koperasi → Diskop |
| Diklat & Pemberdayaan Koperasi | Diklat perkoperasian; pemberdayaan-perlindungan koperasi | [I] | — → koperasi |
| Pemberdayaan & Pengembangan UMKM | Pemberdayaan & pengembangan **usaha mikro** (kab/kota hanya mikro; kecil=Prov, menengah=Pusat) | [I] | pelaku mikro → **DPMPTSP (NIB), Disdag (pemasaran)** |

## Pariwisata 🟡 (OPD penghasil PAD)
| Sub-Urusan | Proses Bisnis (kandidat) | Jenis | Supplier/Customer |
|---|---|---|---|
| Destinasi Pariwisata | Pengelolaan daya tarik/destinasi wisata; **retribusi wisata**; TDUP | [I] | → **Bakeuda (PAD)** |
| Pemasaran Pariwisata | Pemasaran & promosi wisata | [I] | — → wisatawan |
| Ekonomi Kreatif | Penyediaan ruang kreatif | [I] | — → insan kreatif |

## Kepemudaan-Olahraga 🟡
| Sub-Urusan | Proses Bisnis (kandidat) | Jenis |
|---|---|---|
| Kepemudaan | Pemberdayaan pemuda/wirausaha muda; organisasi kepemudaan | [I] |
| Keolahragaan | Pembinaan olahraga prestasi; kejuaraan; sarpras olahraga | [I] |
| Kepramukaan | Pembinaan organisasi kepramukaan | [P] |

## Kebudayaan 🟡
| Sub-Urusan | Proses Bisnis (kandidat) | Jenis |
|---|---|---|
| Kebudayaan/Kesenian | Pengelolaan kebudayaan, tradisi, kesenian, lembaga adat | [I] |
| Cagar Budaya | Penetapan & pengelolaan cagar budaya; izin bawa keluar | [I] |
| Permuseuman | Pengelolaan museum kab/kota (potensi retribusi) | [I] |
| Sejarah | Pembinaan sejarah lokal | [P] |

## Perpustakaan & Kearsipan 🟡
| Sub-Urusan | Proses Bisnis (kandidat) | Jenis |
|---|---|---|
| Pembinaan Perpustakaan | Pembinaan perpustakaan & pembudayaan gemar membaca | [I] |
| Pengelolaan Arsip (huruf X) | Pengelolaan arsip dinamis-statis; simpul JIKN | [P] |
| Perlindungan Arsip | Pemusnahan arsip retensi <10 tahun | [P] |

## Pangan / Pertanahan 🟡
| Urusan | Proses Bisnis (kandidat) | Jenis |
|---|---|---|
| Pangan | Penyediaan-penyaluran pangan pokok; stabilisasi pasokan-harga | [I] |
| Pertanahan | Izin lokasi; sengketa tanah garapan; izin membuka tanah | [I] |

## Pertanian / Kelautan-Perikanan 🟡
| Urusan | Proses Bisnis (kandidat) | Jenis | Catatan |
|---|---|---|---|
| Pertanian | Izin usaha pertanian; kesehatan hewan-kesmavet; pengawasan sarpras pertanian; penyuluhan | [I] | Penyuluh Pertanian = triplikasi ASN (Simluhtan) |
| Kelautan-Perikanan | Izin perikanan budidaya; pemberdayaan nelayan kecil; TPI; pengolahan-pemasaran hasil | [I] | HSS: fokus budidaya darat; TPI = potensi PAD |

## Urusan Praktis Kosong di Kab/Kota (jangan paksakan proses bisnis)
- **ESDM**: nol kewenangan kab/kota. Tidak ada proses bisnis kab/kota.
- **Kehutanan**: hanya Tahura kab/kota (jika ada). Selain itu kosong.
- **Transmigrasi**: hanya relevan jika ada kawasan transmigrasi.

---

## Ringkasan Metodologis

Matriks ini menerapkan tiga lapis (Permenpan 19/2018 + Perpres 132/2022 + UU 23/2014):
1. **UU 23/2014** memberi *legitimasi* (sub-urusan = kewenangan legal kab/kota).
2. **Matriks ini** memberi *daftar konkret* proses bisnis (Level 1) turunan sub-urusan.
3. **Permenpan 19/2018** memberi *struktur* (jenis Inti/Manajemen/Pendukung + SIPOC untuk titik integrasi).

Kolom **Jenis** memungkinkan skill memprioritaskan digitalisasi proses **Inti** (yang melayani pengguna eksternal) di Domain 4. Kolom **Supplier→Customer** adalah cara sistematis menemukan titik integrasi lintas-OPD (silang ke `pola-integrasi-pasangan.md`).

Dokumen ini akan makin kaya seiring OPD baru dipetakan — proses bisnis empiris baru menggantikan/melengkapi yang normatif (🟡 → ✅).
