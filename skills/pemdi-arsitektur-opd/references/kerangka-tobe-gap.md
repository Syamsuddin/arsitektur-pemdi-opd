# Kerangka To-be dan Katalog Gap — Metodologi Mode PERENCANAAN

> Panduan lengkap penyusunan Arsitektur To-be (kondisi ideal) dan Katalog Gap (kesenjangan As-is menuju To-be). Dibaca di Mode PERENCANAAN. Dasar: alur Manual SIA-SPBE (Pengembangan As-is, lalu To-be, lalu Katalog Gap, lalu Peta Rencana).
>
> **Prinsip pemandu**: To-be bukan data yang bisa diambil, melainkan keputusan yang lahir dari kebijakan. Skill tidak "memperoleh" To-be dari regulasi seperti As-is. Perannya memfasilitasi: menyajikan yang bersumber fakta/aturan, dan menanyakan yang merupakan keputusan pimpinan dengan usulan rekomendasi.

## Mengapa To-be Berbeda dari As-is

| Aspek | As-is | To-be |
|---|---|---|
| Sifat pekerjaan | Dokumentasi | Perencanaan |
| Sumber | Fakta terverifikasi (regulasi, SOTK, sistem berjalan) | Keputusan (RPJMD, prioritas, anggaran, keputusan pimpinan) |
| Bisa diturunkan skill? | Ya, dari aturan | Tidak sepenuhnya — sebagian keputusan manusia |
| Risiko utama | Dokumentasi keliru | **Mengarang keputusan investasi anggaran** |

As-is bisa diturunkan skill karena bersumber fakta. To-be tidak bisa sepenuhnya, karena arah yang dituju adalah pilihan kebijakan yang berbeda tiap daerah dan tiap periode. Karena To-be jadi dasar belanja TIK, To-be yang dikarang lebih berbahaya daripada As-is yang keliru.

## Disiplin Tiga Kategori (Jantung Mode PERENCANAAN)

Setiap isi To-be dan Gap wajib dikelompokkan ke salah satu dari tiga kategori. Ini menentukan apakah skill boleh mengisinya sendiri atau harus bertanya.

### Kategori 1 — Gap Teramati (skill isi sendiri, tanpa bertanya)

Kesenjangan yang terlihat langsung dari analisis As-is. Bersumber fakta, jadi sah disajikan sebagai temuan.

**Dari mana diambil**: catatan analisis tiap domain di dokumen As-is. Cari kata kunci: "masih manual", "belum tersinkron", "belum ada integrasi", "terfragmentasi", "gap", "kandidat integrasi", "risiko".

**Contoh** (dari uji coba BKPSDM):
- Rekonsiliasi kinerja e-Kinerja ke TPP Bakeuda masih manual/semi-manual.
- SIMPEG lokal belum tersinkron otomatis ke SIASN.
- Data ASN terfragmentasi di tiga tempat (SIMPEG/SIASN/sektoral).

**Cara sajikan**: sebagai daftar temuan, bukan pertanyaan. "Berikut gap yang teramati dari As-is."

### Kategori 2 — Rujukan Normatif (skill sodorkan, tanpa bertanya)

Kondisi standar menurut aturan yang belum terpenuhi di As-is. Bersumber regulasi, jadi sah disajikan sebagai acuan.

**Dari mana diambil**: silang As-is dengan:
- `matriks-aplikasi-spbe.md` — aplikasi umum wajib yang belum dipakai.
- `referensi-nasional.md` — integrasi via SPLP (Sistem Penghubung Layanan Pemerintah), Satu Data, standar domain.
- `regulasi-pemdi-2026.md` — indikator Indeks Pemdi yang belum terpenuhi.

**Contoh**:
- SIASN wajib jadi muara data ASN; idealnya SIMPEG lokal tersinkron ke SIASN, bukan basis terpisah.
- Integrasi antar-sistem semestinya via SPLP, bukan pertukaran manual.

**Cara sajikan**: sebagai acuan normatif, bukan pertanyaan ya/tidak. "Berikut kondisi standar menurut aturan yang belum terpenuhi." Tandai `[ISI: verifikasi portal]` untuk yang belum pasti (mis. relasi SIASN vs SI-ASN).

### Kategori 3 — Keputusan Kebijakan (WAJIB tanya, dengan usulan bertanda)

Hal yang merupakan pilihan pimpinan, bukan wewenang skill: prioritas periode, target waktu, penanggung jawab, keselarasan RPJMD, dan apa yang akan dibelanjakan.

**Aturan bertanya**:
- Pertanyaan **terbuka dan netral**, bukan ya/tidak yang menggiring. Benar: "Dari kandidat gap berikut, mana prioritas periode ini dan apa targetnya?" Salah: "Apakah akan membangun integrasi SPLP?" (sudah menyodorkan solusi).
- **Selalu sertakan usulan rekomendasi** dari analisis terbaik skill, supaya pengguna tinggal menimbang.
- Batasi jumlah pertanyaan — hanya yang benar-benar keputusan, bukan yang bisa diturunkan dari kategori 1-2.

## Kaidah Usulan Bertanda (Aturan Keras)

Untuk kategori 3, setelah menyertakan rekomendasi:

- Pengguna **menjawab** → pakai jawabannya sebagai **keputusan final** (tanpa penanda).
- Pengguna **diam / minta lanjut** → pakai rekomendasi TAPI tandai `[USULAN CLAUDE, belum dikonfirmasi: ...]`.

**Yang DILARANG**:
- Mengunci rekomendasi sebagai final tanpa jawaban (skill mengambil keputusan pejabat secara diam-diam).
- Membiarkan kosong `[ISI:]` (dokumen jadi berlubang, tidak bisa dipakai).

**Mengapa penanda ini penting**: menjaga tiga hal sekaligus — dokumen utuh dan bisa dipakai, kepengarangan jujur (pembaca tahu mana keputusan resmi vs usulan skill), beban ringan (setuju = biarkan, tidak setuju = ganti). Berbeda dari `[ISI:]` (kosong, menunggu data) dan berbeda dari keputusan final (sudah dijawab manusia).

**Perbedaan tiga penanda**:
| Penanda | Arti | Kapan |
|---|---|---|
| *(tanpa penanda)* | Keputusan final | Pengguna menjawab, atau fakta/aturan (kategori 1-2) |
| `[USULAN CLAUDE, belum dikonfirmasi: X]` | Usulan skill, menunggu pengesahan | Kategori 3, pengguna diam |
| `[ISI: ...]` | Kosong, butuh data lapangan | Data teknis yang skill tak punya (nomor Perbup, spesifikasi) |

## Menyusun Arsitektur To-be

Tiap objek To-be diberi **status** sesuai konvensi SIA-SPBE:
- **`new`** — objek baru yang belum ada di As-is (mis. jalur sinkronisasi baru).
- **`upgrade`** — pengembangan/perubahan dari objek yang sudah ada di As-is (mis. rekonsiliasi manual jadi otomatis).

Format tabel To-be:

| Objek To-be | Status | Kondisi yang Dituju | Sumber |
|---|---|---|---|
| [nama objek] | new/upgrade | [deskripsi kondisi ideal] | [kategori 1/2/3, final atau usulan bertanda] |

To-be disusun per domain (mengikuti 6 domain As-is) atau terfokus pada domain yang punya gap. Tidak semua domain harus punya To-be — hanya yang ada kesenjangannya.

## Menurunkan Katalog Gap

Katalog Gap adalah **selisih As-is menuju To-be**, dalam format objek **Gap** dan **Kegiatan** (konvensi SIA-SPBE). Tiap Gap dipasangkan dengan Kegiatan penutupnya.

Format tabel Katalog Gap:

| Gap (kesenjangan) | Kegiatan penutup | Target | Penanggung Jawab | Selaras RPJMD? |
|---|---|---|---|---|
| [kondisi As-is yang kurang] | [kegiatan menuju To-be] | [waktu/kondisi] | [OPD/bidang] | [nomor sasaran atau ISI] |

**Aturan Katalog Gap**:
- Kolom Target, Penanggung Jawab, dan Selaras RPJMD adalah kategori 3 — isi dari jawaban pengguna atau usulan bertanda.
- **Gap yang dikeluarkan dari prioritas dicatat sebagai "ditunda", bukan dihapus** — supaya tidak hilang dari radar periode berikutnya.
- Objek **Kegiatan** di sini adalah bahan mentah Peta Rencana SPBE (lihat jembatan di bawah).

## Ringkasan Konfirmasi Akhir

Sebelum finalisasi, sajikan **daftar ringkas semua isian `[USULAN CLAUDE, belum dikonfirmasi]`** dalam satu tempat. Tujuannya: sebelum dokumen ditetapkan, pengguna diberi satu kesempatan meninjau seluruh isian default sekaligus — terima semua, atau koreksi yang perlu. Ini mencegah pengguna menerima dokumen tanpa menyadari bagian mana yang usulan skill.

Format:
> **Perlu konfirmasi Bapak sebelum final** (saya isi dengan usulan, silakan terima atau koreksi):
> 1. [objek]: usulan [X]
> 2. [objek]: usulan [Y]

## Warisan Keputusan Tingkat Pemda (Hindari Pertanyaan Berulang)

Beberapa keputusan kebijakan berlaku untuk **seluruh OPD** dalam satu Pemda, bukan per-OPD: arah RPJMD, plafon/prioritas anggaran TIK, periode perencanaan, kebijakan Satu Data. Tanyakan **sekali** (saat OPD pertama menjalankan PERENCANAAN), simpan di Dosir field `keputusan_kebijakan_pemda`, lalu **warisi** ke OPD berikutnya tanpa bertanya ulang. Ini menjaga beban pertanyaan wajar saat satu Pemda memetakan puluhan OPD.

## Jembatan ke Peta Rencana SPBE (Lingkup Berikutnya)

Objek **Kegiatan** di Katalog Gap adalah bahan mentah Peta Rencana SPBE (domain Tata Kelola): Sasaran Strategis → Inisiatif → Program (7 kategori: Tata Kelola, Manajemen, Layanan, Aplikasi, Infrastruktur, Keamanan, Audit TIK) → Kegiatan (dari Katalog Gap) → objek To-be, dengan UIC dan planning status.

Mode PERENCANAAN menyiapkan bahannya (Kegiatan + To-be), tapi penyusunan Peta Strategi + Peta Rencana penuh (Visi/Misi/Sasaran/IKU) adalah **pengembangan lanjutan yang belum diimplementasikan**. Jangan mengarang Peta Rencana — tandai sebagai lingkup berikutnya. Peta Strategi juga jembatan ke dunia SAKIP (IKU/Sasaran Strategis), yang relevan untuk integrasi dengan perencanaan kinerja.

## Ringkas: Checklist Mode PERENCANAAN

1. As-is ada? Kalau tidak, PEMETAAN dulu.
2. Ekstrak Gap Teramati (kategori 1) dari catatan analisis As-is.
3. Ekstrak Rujukan Normatif (kategori 2) dari silang standar.
4. Cek `keputusan_kebijakan_pemda` di Dosir — warisi yang sudah ada.
5. Tanya keputusan kebijakan (kategori 3) yang belum terjawab, dengan usulan rekomendasi.
6. Susun To-be (status new/upgrade), isi final atau usulan bertanda.
7. Turunkan Katalog Gap (Gap + Kegiatan + Target + PJ + RPJMD).
8. Sajikan ringkasan konfirmasi akhir (semua usulan bertanda).
9. Perbarui Dosir (To-be, Katalog Gap, keputusan_kebijakan_pemda).
