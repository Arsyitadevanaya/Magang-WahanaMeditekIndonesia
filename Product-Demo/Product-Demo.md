# Adameds

## 1. Project Background
Adameds merupakan sistem informasi klinik yang membantu mempermudah proses manajemen dan pelayanan di klinik. Sistem informasi ini dirancang untuk mengintegrasikan berbagai aspek operasional klinik, mulai dari pendaftaran pasien, pengelolaan rekam medis, penjadwalan pemeriksaan rawat jalan dan rawat inap, pendaftaran lab, hingga manajemen inventaris obat-obatan.

## 2. Resume Website Demo Adameds

### 2.1 Login
Halaman login terdiri dari username dan password. Setelah melakukan input username dan password, klik "Sign In" akan mengarah ke halaman dashboard website Adameds.

### 2.2 Notification
Notification ditandai dengan button lonceng. Jika diklik akan memunculkan sidebar yang berisi pesan notifikasi.

### 2.3 Profile

#### 2.3.1 Profile
Halaman profil berisi informasi pemilik akun yang terdiri dari nama, email, username, password, dan telepon. Pemilik akun dapat melakukan update profil. Dalam halaman profil juga berisi informasi update version.

#### 2.3.2 Settings
Halaman setting berisi informasi dari klinik meliputi logo klinik, nama klinik, email, telepon, dan alamat. Pemilik akun dapat melakukan update informasi. Pada halaman setting ini juga berisi informasi tipe akun, durasi lisensi, dan masa berlaku.

#### 2.3.3 Logout
Logout dilakukan jika pemilik akun ingin keluar dari akun website.

### 2.4 Dashboard

- **Bagian atas**: Menampilkan informasi umum seperti total kunjungan, kunjungan selesai, total penjualan obat, pembayaran lunas, pembayaran belum lunas.
- **Bagian grafik kunjungan pasien**: Menampilkan data kunjungan pasien dalam bentuk diagram batang. View detail pada bagian ini mengarah ke halaman pasien rawat jalan.
- **Bagian Kunjungan berdasarkan jenis kelamin**: Menampilkan data kunjungan berdasarkan jenis kelamin. View detail pada bagian ini mengarah ke halaman list pasien.
- **Bagian Kunjungan berdasarkan status rawat**: Menampilkan data kunjungan berdasarkan status rawat dalam bentuk grafik. View detail pada bagian ini mengarah pada halaman pasien rawat inap.
- **Bagian grafik pemasukkan dan pengeluaran**: Menampilkan grafik pemasukkan dan pengeluaran. View detail pada bagian ini mengarah pada halaman akuntansi.
- **Bagian top 5 pemeriksaan dan perujuk**: Top 5 pemeriksaan dan top 5 perujuk pada view detail mengarah pada halaman lab pemeriksaan.

### 2.5 Pendaftaran

#### 2.5.1 Pendaftaran Umum
Pendaftaran umum dibuat untuk pasien yang melakukan layanan kesehatan tidak darurat.

- **Bagian atas**: Terdapat tombol untuk mencari data pasien lama yang sudah terdaftar di sistem, jika pendaftaran merupakan pasien lama di klinik tersebut.
- **Bagian asuransi**: Jika merupakan pasien lama maka identitas otomatis terisi dan jika pasien baru maka harus mengisikan identitas terlebih dahulu. Menginputkan jenis asuransi dan nomor asuransi jika menggunakan asuransi kesehatan seperti BPJS, Jasa Raharja, dll.
- **Bagian data pasien**: Jika merupakan pasien lama maka data pasien akan otomatis terisi dan jika pasien baru maka harus mengisikan data pasien.
- **Bagian rujukan**: Digunakan untuk pasien yang mendapatkan rujukan dari dokter atau rumah sakit lain. Pada bagian ini, perlu diinputkan informasi rujukan dan dokter perujuk.
- **Bagian poli**: Digunakan untuk mendaftar pasien pada poli yang sesuai dengan keluhan atau kondisi kesehatan pasien. Pada bagian ini, perlu diinputkan poli yang dituju dan dokter yang akan memeriksa.

#### 2.5.2 Pendaftaran IGD
Pendaftaran IGD dibuat untuk pasien yang melakukan pelayanan kesehatan darurat.

- **Bagian atas**: Terdapat tombol untuk mencari data pasien lama yang sudah terdaftar di sistem, jika pendaftaran merupakan pasien lama di klinik tersebut.
- **Bagian asuransi**: Jika merupakan pasien lama, maka identitas otomatis terisi. Jika pasien baru, maka harus mengisi identitas terlebih dahulu. Jenis asuransi dan nomor asuransi juga perlu diinput jika menggunakan asuransi kesehatan seperti BPJS, Jasa Raharja, dll.
- **Bagian data pasien**: Jika merupakan pasien lama, maka data pasien akan otomatis terisi. Jika pasien baru, maka harus mengisi data pasien secara lengkap.
- **Bagian dokter dan rujukan**: Digunakan bagi pasien yang mendapat rujukan dari dokter atau perujuk sebelumnya. Pada bagian ini, perlu diinputkan informasi dokter pemeriksa, perujuk, dan dokter perujuk.

### 2.6 Kasir

- **Bagian search**: Kasir harus memasukkan nomor registrasi untuk melihat atau melakukan transaksi pasien.
- **Bagian detail pasien**: Detail pasien berisi data berupa nomor registrasi, nama pasien, nomor invoice, dan tanggal kunjungan.
- **Bagian detail pembayaran**: Detail pembayaran berisi nominal biaya dari pelayanan yang telah dilakukan oleh pasien. Kasir diminta untuk menginput jumlah bayar, jumlah kembalian, nomor referensi jika ada, dan metode pembayaran yang dilakukan. Setelah semua data terisi, klik tombol "Proses Pembayaran" untuk menyelesaikan transaksi.

### 2.7 Pasien

#### 2.7.1 List Pasien
Pada halaman list pasien menampilkan data tabel pasien yang telah terdaftar pada klinik. Tabel pasien dapat diekspor dalam bentuk excel. Data dari pasien juga dapat diimpor dalam bentuk excel dan sesuai dengan format yang telah diberikan.

#### 2.7.2 Rawat Jalan
Pada halaman ini menampilkan data tabel dari pasien yang melakukan rawat jalan. Kolom dari data tabel berisi no, no. rekam medis, dokter & poli, tanggal daftar, status dan aksi. Status yang diberikan yaitu booking untuk pasien yang baru mendaftar, diperiksa untuk pasien yang sedang melakukan pemeriksaan, dan selesai untuk pasien yang sudah melakukan pemeriksaan.

#### 2.7.3 Rawat Inap
Pada halaman ini menampilkan data tabel dari pasien yang melakukan rawat inap. Kolom dari data tabel berisi no, no. rekam medis, dokter & ruangan, tanggal daftar dan keluar, status, status keluar dan aksi. Untuk status terdiri dari IGD untuk pasien yang daftar dari IGD, opname untuk pasien yang telah memesan kamar, transit untuk pasien yang melakukan pindah kamar, dan checkout untuk pasien yang telah keluar.

### 2.8 Lab

Pada halaman lab, admin dapat melakukan pendaftaran pasien dengan mengisi data pasien. Pada halaman pemeriksaan, admin dapat melihat data tabel dari pasien beserta status pembayaran dan booking. Pada halaman kasir, admin dapat melakukan transaksi pembayaran dari pasien. Halaman datamaster berisi data utama dari lab. Halaman data stok berisi stok persediaan barang lab.

### 2.9 Farmasi

#### 2.9.1 Datamaster
Halaman data master farmasi menampilkan bagian dari sistem manajemen yang digunakan untuk mengelola informasi terkait item farmasi yang tersedia.

#### 2.9.2 Resep Dokter
Halaman ini menampilkan data tabel dari resep dokter yang diberikan kepada pasien.

#### 2.9.3 Penjualan
Halaman ini menampilkan data tabel penjualan obat. Terdapat status pembayaran untuk melihat pembayaran dari pasien dan aksi untuk melakukan pembayaran dan cetak pembayaran.

#### 2.9.4 Data Stok
Halaman menampilkan persediaan stok obat. Pada halaman ini dapat melihat saldo awal obat, saldo akhir, stok masuk, stok keluar, dan stok minimum obat.

### 2.10 Datamaster
Halaman datamaster berisi data utama dari web Adameds yang meliputi data dokter, jadwal dokter, spesialis, diagnosis, catatan, jenis pemeriksaan, tipe rujukan, perujuk, dokter perujuk, asuransi, diskon, voucher, biaya lainnya, supplier, kategori supplier, poli, tindakan, seat, jadwal seat, ruangan, kategori ruangan, dan kelas ruangan.

### 2.11 Inventory
Halaman ini untuk melihat dan mencatat inventory klinik. Terdapat informasi dari barang keluar dan detail stok dari inventory.

### 2.12 Pengadaan

#### 2.12.1 P.O. Inventory
Halaman ini berisi tabel yang menampilkan daftar pembelian yang sudah dibuat. Setiap baris berisi informasi detail pesanan pembelian. Kolom dari tabel tersebut terdiri dari no, po number, tanggal, departemen, supplier, total harga, total bayar, pembayaran, status, dan aksi untuk melakukan persetujuan dan pengeditan.

#### 2.12.2 P.O. Farmasi
Halaman ini berisi tabel yang menampilkan daftar pesanan pembelian obat yang telah dibuat. Setiap baris berisi informasi detail pesanan pembelian. Kolom dari tabel tersebut terdiri dari no, po number, tanggal, departemen, supplier, total harga, total bayar, pembayaran, status, dan aksi untuk melakukan persetujuan dan pengeditan.

#### 2.12.3 P.O. Lab
Halaman ini berisi tabel yang menampilkan daftar pesanan pembelian barang lab yang telah dibuat. Setiap baris berisi informasi detail pesanan pembelian. Kolom dari tabel tersebut terdiri dari no, po number, tanggal, departemen, supplier, total harga, total bayar, pembayaran, status, dan aksi untuk melakukan persetujuan dan pengeditan.

### 2.13 Akuntansi

- **Laporan pembayaran kunjungan**: Pada halaman laporan pembayaran kunjungan menampilkan data tabel pembayaran pasien baik yang telah dilunasi maupun pembayaran yang belum dilunasi. Terdapat filter tanggal untuk melakukan pengecekan pembayaran dari rentang tanggal yang dibutuhkan. Rekapan pembayaran dapat di-export dalam bentuk excel.
- **Laporan pembayaran lab**: Pada halaman laporan pembayaran lab menampilkan data tabel pembayaran lab pasien baik yang telah dilunasi maupun pembayaran yang belum dilunasi. Terdapat filter tanggal untuk melakukan pengecekan pembayaran dari rentang tanggal yang dibutuhkan. Rekapan pembayaran dapat di-export dalam bentuk excel.
- **Laporan laba rugi**: Pada halaman laporan laba rugi menampilkan rekapan dari pendapatan dan pengeluaran klinik. Terdapat filter tanggal untuk melakukan pengecekan pembayaran dari rentang tanggal yang dibutuhkan. Rekapan pembayaran dapat di-export dalam bentuk excel.

### 2.14 Laporan
Belum bisa diakses

# Adamlabs

## 1. Project Background
Adamlabs merupakan sistem informasi laboratorium yang membantu mempermudah proses manajemen dan pelayanan di laboratorium. Sistem ini berintegrasi dengan website Adameds. Sistem ini dirancang untuk mengintegrasikan berbagai aspek operasional laboratorium.

## 2. Resume Website Demo Adamlabs

### 2.1 Login
Halaman login terdiri dari username dan password. Setelah melakukan input username dan password, klik "Sign In" akan mengarah ke halaman dashboard website Adamlabs.

### 2.2 Profile
Bagian profile berisi informasi profil admin, pengaturan, dan logout untuk admin keluar dari website.

### 2.3 Dashboard

- **Bagian atas**: Menampilkan informasi dari total pasien belum diperiksa, telah diperiksa, selesai diperiksa, rata-rata TAT, dan total pasien kritis. Tiap informasi dapat dilihat detailnya dengan melakukan klik button "lihat detail".
- **Bagian grafik kunjungan pasien reguler dan cito**: Menampilkan grafik dari kunjungan pasien reguler dan cito.
- **Bagian kunjungan hari ini**
- **Bagian kunjungan per-bulan**
- **Bagian Kunjungan per jenis kelamin, jumlah kunjungan duplo dan non-duplo, top 5 penjamin terbanyak, top 5 unit asal terbanyak**

### 2.4 Registrasi
Halaman registrasi menampilkan form untuk admin menginputkan pasien baru yang ingin melakukan uji lab.

### 2.5 Pasien
Halaman pasien menampilkan data tabel pasien yang melakukan uji lab. Kolom tabel ini meliputi no, no. lab, no. rekam medis, nama pasien, tanggal periksa, no. registrasi, status pemeriksaan, print, dan aksi berupa edit data dan ambil sampel.

### 2.6 Arsip
Halaman arsip menampilkan data dari pasien yang telah diarsipkan.

### 2.7 Point of Sale

- **Halaman kasir**: Halaman ini untuk menampilkan form transaksi untuk admin menginputkan data transaksi saat melakukan pembayaran dari pasien.
- **Halaman Rekap**: Berisi laporan rekap dari pemasukan hari ini dan total pemasukan.
- **Halaman Laporan Detail**: Halaman ini menampilkan data tabel laporan detail semua transaksi pasien.
- **Halaman Laporan Closingan**

### 2.8 Bank Darah
Halaman bank darah menampilkan stok darah yang tersedia, melihat pengurangan stok darah, melihat data permintaan darah, data penerimaan darah, data cross match, data transfusi, history pasien, dan laporan/rekapitulasi darah.

### 2.9 MCU
Halaman MCU menampilkan data tabel dari medical checkup data pasien. Setiap medical checkup dapat diexport dalam bentuk excel dan dapat dilakukan edit.

### 2.10 Antrian
Halaman antrian menampilkan daftar antrian pasien, tes sampel, dan lainnya.

### 2.11 Laporan
Halaman ini menampilkan data kunjungan, data penjamin, unit asal, TAT, laporan kritis, pemeriksaan duplo, pemeriksaan manual, pemeriksaan, dan rekap pemeriksaan.

### 2.12 Quality Control
Halaman ini menampilkan quality control lab.

### 2.13 Inventory
Halaman ini menampilkan data barang dalam sistem laboratorium.

### 2.14 Data Master
Halaman ini menampilkan data utama dari web lab yang dapat dilakukan penambahan atau edit data oleh admin.

### 2.15 Monitoring
Halaman ini menampilkan monitoring uji lab.

### 2.16 Unit Asal
Halaman ini menampilkan data pasien dari unit asal.

### 2.17 Data Dihapus
Halaman ini menampilkan semua data yang telah dihapus.

### 2.18 Log
Halaman ini menampilkan aktivitas yang dilakukan oleh admin.

### 2.19 Validasi
Halaman ini menampilkan data tabel dari validasi dokter.

# Expertise

## 1. Project Background
Expertise merupakan aplikasi mobile yang terintegrasi dengan Adamlabs yang digunakan oleh dokter untuk memantau hasil dari lab pasien.

## 2. Resume Website Demo Adamlabs

### 2.1 Dashboard

- **Bagian atas**: Bagian ini menampilkan informasi dari total pasien belum diperiksa, pasien proses, dan total pasien selesai.
- **Bagian total pasien**: Bagian ini menampilkan total harian, bulanan, dan total pasien kritis.
- **Bagian grafik chart**: Halaman ini menampilkan grafik chart pasien berdasarkan jenis kelamin, kunjungan pasien regular, dan top 5 diagnosis.

### 2.2 Laporan
Halaman ini menampilkan preview harian total kunjungan pasien, kunjungan ruangan, pemeriksaan, pemeriksaan kritis, pasien cito, dan preview dari waktu TAT.

### 2.3 Arsip
Halaman arsip menampilkan data dari pasien yang telah diarsipkan.

### 2.4 Pasien
Halaman ini menampilkan pasien lab dari yang belum diperiksa, proses, hingga selesai. Data tersebut dapat melihat hasil tes lab yang telah diinputkan oleh admin melalui web Adamlabs.

### 2.5 Expertise
Halaman ini menampilkan data pasien yang telah dilakukan pemeriksaan beserta riwayat pemeriksaan. Halaman ini dapat menampilkan informasi dari pemeriksaan dan dokter akan melakukan verifikasi dan menambahkan catatan.

### 2.6 Akun
Halaman ini menampilkan data pengguna akun dan dapat melakukan logout.
