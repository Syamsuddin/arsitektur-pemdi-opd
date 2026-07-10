# Metodologi Penyusunan Proses Bisnis — Permenpan RB 19/2018

> Kerangka baku penyusunan Peta Proses Bisnis Instansi Pemerintah (Permenpan RB 19/2018, mengganti Permenpan 12/2011). Dipakai untuk **menstrukturkan** Domain 1 dalam skill `pemdi-arsitektur-opd`. Melengkapi `matriks-urusan-uu23-2014.md` (yang memberi *bahan* proses bisnis) dan `matriks-proses-bisnis.md` (yang memberi *daftar* proses bisnis) dengan *cara* menyusunnya secara metodologis benar.
>
> Catatan status: Permenpan 19/2018 adalah regulasi 2018. Metodologi dasarnya (level, jenis peta, SIPOC) jarang berubah dan masih jadi rujukan. Untuk kepastian apakah ada revisi terbaru, cek saat relevan. Fungsi dokumen ini adalah kerangka berpikir, bukan konten per-urusan.

## Tiga Jenis Proses (Klasifikasi Level 0)

Setiap proses bisnis OPD wajib diklasifikasikan ke salah satu dari tiga jenis. Ini pembeda paling penting yang sering luput: **tidak semua proses bisnis setara** — arsitektur SPBE/Pemdi seharusnya memprioritaskan digitalisasi **proses inti**, bukan pendukung.

| Jenis | Definisi | Kriteria | Contoh (Disdikbud) |
|---|---|---|---|
| **Proses Inti (Utama)** | Menciptakan aliran nilai utama organisasi | Berperan langsung memenuhi kebutuhan pengguna eksternal; berpengaruh langsung ke pencapaian visi-misi; merespons langsung permintaan pengguna | PPDB, pengelolaan pembelajaran, penerbitan ijazah |
| **Proses Manajemen** | Mengarahkan dan mengendalikan organisasi | Menetapkan arah, kebijakan, dan kontrol atas proses inti | Perencanaan strategis (Renstra), penganggaran, monev kinerja |
| **Proses Pendukung** | Mengelola operasional agar proses inti berjalan | Memenuhi kebutuhan pengguna internal; mendukung aktivitas proses inti | Kepegawaian internal, keuangan internal, pengelolaan aset/TU |

**Aturan pakai untuk skill**: saat menyusun Domain 1, tandai tiap proses bisnis dengan jenisnya (Inti/Manajemen/Pendukung). Di Domain 4 (Aplikasi) dan rekomendasi, **prioritaskan digitalisasi dan integrasi untuk proses INTI** — itu yang memberi nilai ke masyarakat/pengguna eksternal. Proses pendukung (kepegawaian, keuangan internal) penting tapi bukan pembeda pelayanan.

## Struktur Berjenjang (Level 0 → 1 → n)

Proses bisnis disusun berjenjang, bukan sebagai daftar datar:

- **Level 0**: seluruh proses bisnis OPD, dikelompokkan jadi tiga jenis di atas. Turunan langsung dari visi-misi-tujuan (Renstra) + tugas-fungsi (Perbup SOTK).
- **Level 1**: penjabaran tiap proses Level 0 jadi rangkaian aktivitas. Menggambarkan proses per unit organisasi (Bidang/Seksi) dan keterhubungan antar-proses.
- **Level n**: makin rinci sesuai kompleksitas, sampai bisa jadi dasar SOP.

**Aturan pakai untuk skill**: dalam dokumen arsitektur OPD, tabel proses bisnis per-Bidang yang selama ini disusun (PB-1, PB-2, ...) setara **Level 1**. Untuk kelengkapan metodologis, sebutkan pengelompokan Level 0 (Inti/Manajemen/Pendukung) di awal Domain 1 sebelum merinci per-Bidang.

## Empat Jenis Peta (Cara Menggambarkan)

Selain berjenjang, proses bisnis digambarkan lewat empat jenis peta yang saling menurun:

1. **Peta Proses** — proses tingkat atas, digambar dengan prinsip **SIPOC** (lihat bawah).
2. **Peta Subproses** — turunan teknis tiap proses.
3. **Peta Relasi (Relationship Map)** — **siapa saja unit/pihak yang terlibat** dalam tiap proses. *Ini yang paling relevan untuk titik integrasi lintas-OPD.*
4. **Peta Lintas Fungsi (Cross-Functional Map)** — rangkaian kerja lintas-unit/fungsi, dasar penyusunan SOP (siapa melakukan apa, dengan metode apa).

## SIPOC — Alat Identifikasi Titik Integrasi

Setiap proses digambar dengan lima elemen: **Supplier - Input - Process - Output - Customer**.

**Wawasan kunci untuk skill**: dalam konteks pemerintahan, **Supplier dan Customer sebuah proses seringkali OPD lain**. Inilah cara sistematis menemukan titik integrasi lintas-OPD:
- Kalau **Input** sebuah proses berasal dari OPD lain → itu Supplier → titik integrasi (data masuk).
- Kalau **Output** sebuah proses dipakai OPD lain → itu Customer → titik integrasi (data keluar).

Contoh: Proses "Rekonsiliasi TPP" di BKPSDM — Input (data kehadiran/kinerja) supplier-nya OPD masing-masing + data gaji supplier-nya Bakeuda; Output (nilai TPP final) customer-nya Bakeuda. Dua titik integrasi langsung terlihat dari SIPOC.

**Aturan pakai untuk skill**: "titik integrasi berpasangan" yang sudah dipetakan (`pola-integrasi-pasangan.md`) pada dasarnya adalah **Peta Relasi + analisis SIPOC** dalam bahasa Permenpan 19/2018. Saat memetakan proses inti sebuah OPD, cek Supplier dan Customer tiap proses — kalau bukan OPD ini sendiri, itu kandidat titik integrasi.

## Delapan Prinsip Proses Bisnis (checklist kualitas)

Peta proses bisnis yang baik memenuhi: (1) **Definitif** (batasan, masukan, keluaran jelas), (2) **Urutan** (aktivitas berurutan waktu-ruang), (3) **Pelanggan** (ada penerima akhir), (4) **Nilai tambah** (transformasi memberi nilai), (5) **Keterkaitan** (terkait struktur organisasi), (6) **Fungsi silang** (kerja sama beberapa fungsi), (7) **Sederhana representatif** (mewakili semua aktivitas, digambar sederhana), (8) **Konsensus** (disepakati unit terkait).

**Aturan pakai untuk skill**: prinsip 4 (nilai tambah) dan 3 (pelanggan) memperkuat pembedaan inti-vs-pendukung. Prinsip 6 (fungsi silang) adalah dasar konsep titik integrasi.

## Empat Tahapan Penyusunan (konteks proses, bukan langkah skill)

Permenpan 19/2018 menempuh 4 tahap: (1) Persiapan-Perencanaan (inventarisasi Renstra/Renja, kumpulkan info primer via wawancara + sekunder via dokumen), (2) Pengembangan (menyusun peta berjenjang), (3) Penerapan/Implementasi, (4) Evaluasi berkala.

**Catatan penting untuk skill**: tahap 1 menekankan **informasi primer** (wawancara penanggung jawab proses) sebagai sumber utama. Skill ini bekerja dari **dokumen** (regulasi, Perbup, matriks urusan) — yaitu informasi *sekunder*. Artinya: proses bisnis yang dihasilkan skill adalah **draf berbasis dokumen yang perlu divalidasi lewat wawancara di lapangan**. Ini konsisten dengan disiplin anti-fabrikasi: tandai proses bisnis hasil derivasi sebagai draf, bukan fakta final, karena sumber primer (wawancara) belum dilakukan.

## Pengelompokan Berdasarkan Kegiatan, Bukan Unit

Prinsip penting Permenpan 19/2018: proses bisnis dikelompokkan **berdasarkan kegiatan, bukan berdasarkan unit organisasi**. Artinya satu proses bisa melibatkan beberapa Bidang, dan itu wajar (justru itu fungsi silang).

**Ketegangan dengan praktik skill**: dokumen arsitektur OPD selama ini menyusun proses bisnis **per Bidang** (mengikuti struktur Perbup SOTK). Ini pragmatis dan mudah dibaca, tapi secara metodologis Permenpan 19/2018 menyarankan pengelompokan per-kegiatan. Kompromi yang dipakai: susun per Bidang untuk keterbacaan (karena pembaca birokrasi berpikir dalam struktur organisasi), tapi **eksplisit tandai proses yang lintas-Bidang/lintas-OPD** sebagai fungsi silang — sehingga tidak kehilangan wawasan integrasi.
