# Tools and Software

Table of Content
- [IDE](#ide)
- [DB Viewer](#db-viewer)
- [PostgreSql](#postgresql)
- [Docker](#docker)
- [Gitlab](#gitlab)
- [Figma](#figma)
- [Odoo](#odoo)
- [Emulator](#emulator)
- [Postman](#postman)
- [Google Spreadsheet](#spreadsheet)
- [Google Doc](#doc)
- [Data Modeling](#data-modeling)

<a name="ide"></a>
## IDE
Integrated Development Environment adalah rangkaian software yang menyatukan semua tool pengembangan menjadi satu GUI (Graphical User Interface). Dengannya, proses pengembangan bisa menjadi lebih efisien dan lebih cepat.

- Jenis IDE 

```
Multilanguage

Mendukung banyak program bahasa yang bisa membantu pemula meningkatkan skill. Misalnya, Visual Studio 

Mobile development

secara khusus dibangun untuk mobile development, seperti AppCode dan Android Studio.

Language-specific 

dirancang untuk developer software yang bekerja menggunakan satu bahasa. Contohnya, Jikes dan Jcreator dibuat untuk Java, dan Idle untuk Python

Cloud-based

Menyediakan fitur built-in untuk pair programming real-time dengan feedback langsung yang memungkinkan developer membuat software hanya menggunakan browser

HTML

digunakan untuk mengembangkan aplikasi HTML seperti Notepad++, Atom, dan Adobe DreamWeaver CC. Tool ini mengotomatiskan banyak tugas dalam web development.
```

<a name="db-viewer"></a>
## DB Viewer
DB Viewer (Database Viewer) adalah perangkat lunak atau alat yang digunakan untuk melihat dan mengelola basis data


| **Fitur/Alat**    | **Navicat**                                      | **DBeaver**                                  | **TablePlus**                                 |
|-------------------|--------------------------------------------------|----------------------------------------------|----------------------------------------------|
| **Dukungan Basis Data** | MySQL, PostgreSQL, Oracle, SQLite, SQL Server, MariaDB, dan lainnya | MySQL, PostgreSQL, SQLite, Oracle, SQL Server, DB2, Sybase, Teradata, MongoDB, Cassandra, Redis, dan lainnya | MySQL, PostgreSQL, SQLite, SQL Server, Redis, Cassandra, CockroachDB, dan lainnya |
| **Antarmuka Pengguna** | Ramah dan mudah digunakan                    | Bersih dan intuitif                          | Modern dan intuitif                          |
| **Pemodelan Basis Data** | Ya                                           | Ya                                           | Tidak                                         |
| **Sinkronisasi Data dan Skema** | Ya                                           | Ya                                           | Tidak                                         |
| **Ekspor dan Impor Data** | Ya                                           | Ya                                           | Ya                                           |
| **Editor SQL**    | Ya                                           | Ya                                           | Ya                                           |
| **Visualisasi Data** | Ya                                           | Ya                                           | Ya                                           |
| **Otomatisasi Tugas** | Ya (dengan penjadwalan)                        | Tidak                                         | Tidak                                         |
| **Plugin dan Ekstensi** | Tidak                                         | Ya                                           | Tidak                                         |
| **Multi-Platform** | Windows, macOS, Linux                          | Windows, macOS, Linux                        | macOS, Windows (beta)                        |
| **Harga**         | Berbayar (dengan uji coba gratis)               | Gratis (open-source) dan versi berbayar (Enterprise) | Berbayar (dengan uji coba gratis)           |
| **Ideal untuk**   | Pengguna yang membutuhkan alat komprehensif dengan banyak fitur manajemen basis data | Pengguna yang membutuhkan fleksibilitas tinggi dan dukungan banyak basis data | Pengguna yang mencari alat cepat dan mudah digunakan untuk manajemen basis data dasar |

<a name="postgresql"></a>
## PostgreSql
| **Kategori**              | **Deskripsi**                                                                                       |
|---------------------------|-----------------------------------------------------------------------------------------------------|
| **Nama**                  | PostgreSQL                                                                                          |
| **Tipe**                  | Sistem Manajemen Basis Data Relasional Objek (ORDBMS)                                               |
| **Lisensi**               | Open Source, di bawah lisensi PostgreSQL                                                            |
| **Situs Resmi**           | [postgresql.org](https://www.postgresql.org)                                                        |
| **Fitur Utama**           | - Kepatuhan SQL<br>- Ekstensi dan Penyesuaian<br>- Tipe Data Beragam<br>- Transaksi ACID<br>- Indeks dan Optimisasi<br>- Replikasi dan Ketersediaan Tinggi<br>- Keamanan |
| **Sejarah Singkat**       | - Awal Mula: Dikembangkan di University of California, Berkeley, pada akhir 1980-an<br>- Rilis Pertama: 1989 sebagai Postgres, berganti nama menjadi PostgreSQL pada pertengahan 1990-an |

<a name="docker"></a>
## Docker
Docker adalah platform yang dirancang untuk membuat, mengirim, dan menjalankan aplikasi di dalam container. Container adalah lingkungan terisolasi yang mencakup semua yang dibutuhkan untuk menjalankan aplikasi, seperti kode, runtime, alat sistem, pustaka, dan pengaturan.

### 1. **Konsep Dasar Docker**
- **Container**: Unit standar perangkat lunak yang memaketkan kode dan semua dependensinya sehingga aplikasi berjalan secara konsisten di berbagai lingkungan.
- **Image**: Templat hanya-baca yang digunakan untuk membuat container. Images biasanya dibangun dari Dockerfile.
- **Dockerfile**: File teks yang berisi serangkaian instruksi untuk membangun image Docker.
- **Docker Engine**: Runtime yang menjalankan container.


### 2. **Komponen Utama Docker**
- **Docker Hub**: Registry publik yang memungkinkan Anda untuk berbagi, menyimpan, dan mendistribusikan image Docker.
- **Docker Compose**: Alat untuk mendefinisikan dan menjalankan aplikasi multi-container. File `docker-compose.yml` digunakan untuk mengonfigurasi layanan aplikasi.
- **Docker Swarm**: Orkestrator native Docker untuk mengelola cluster dari Docker Engine, memungkinkan deployment dan manajemen container secara terdistribusi.

### 3. **Perintah Dasar Docker**
- **docker run**: Menjalankan container dari sebuah image.
- **docker build**: Membangun image dari Dockerfile.
- **docker pull**: Mengunduh image dari registry seperti Docker Hub.
- **docker push**: Mengunggah image ke registry.
- **docker ps**: Menampilkan daftar container yang sedang berjalan.
- **docker stop**: Menghentikan container yang sedang berjalan.
- **docker rm**: Menghapus container.
- **docker rmi**: Menghapus image.

### 4. **Penggunaan Docker dalam Proyek**
- **Development**: Menyediakan lingkungan pengembangan yang konsisten di berbagai mesin.
- **CI/CD**: Mengotomatisasi build, testing, dan deployment aplikasi.
- **Deployment**: Menyederhanakan deployment aplikasi ke berbagai lingkungan, termasuk cloud dan on-premises.

<a name="gitlab"></a>
## Gitlab
| **Aspek**            | **Detail**                                                                                                   |
|----------------------|---------------------------------------------------------------------------------------------------------------|
| **Konsep Dasar**     | Platform DevOps berbasis web yang menyediakan repositori Git dan fitur untuk pengembangan perangkat lunak.     |
| **Komponen Utama**   | - **Repository**: Tempat menyimpan dan mengelola kode sumber.<br>- **Issues**: Alat untuk pelacakan tugas dan bug.<br>- **Merge Requests (MR)**: Proses untuk menggabungkan perubahan kode dengan tinjauan.<br>- **Pipelines**: Rangkaian proses otomatisasi CI/CD.<br>- **Milestones**: Mengelola dan melacak progres proyek.<br>- **Wikis**: Dokumentasi proyek. |
| **Perintah Dasar**   | - `git clone`: Mengunduh salinan repositori.<br>- `git push`: Mengirim perubahan ke repositori remote.<br>- Create Issue: Membuat issue baru.<br>- Create Merge Request: Membuat merge request untuk perubahan kode.<br>- Run Pipeline: Menjalankan pipeline CI/CD secara manual. |
| **Penggunaan**       | - **Version Control**: Mengelola dan melacak kode sumber.<br>- **CI/CD Pipelines**: Mengotomatisasi build, testing, dan deployment.<br>- **Code Review**: Memfasilitasi tinjauan kode.<br>- **Project Management**: Mengelola tugas dan progres proyek.<br>- **Security**: Fitur keamanan seperti vulnerability management dan secret detection. |

<a name="figma"></a>
## Figma
### Konsep Dasar
Figma adalah alat desain antarmuka pengguna (UI) dan pengalaman pengguna (UX) berbasis web yang memungkinkan kolaborasi real-time antara tim.

### Fitur Utama
- **Design**: Alat untuk membuat dan mendesain antarmuka pengguna dengan berbagai elemen desain seperti frame, shapes, dan text.
- **Prototyping**: Fitur untuk membuat prototipe interaktif, memungkinkan pengguna untuk mendemonstrasikan alur dan interaksi antarmuka.
- **Components**: Memungkinkan penggunaan komponen dan simbol untuk memastikan konsistensi desain di seluruh proyek.
- **Collaboration**: Mendukung kolaborasi langsung dan real-time, sehingga beberapa pengguna bisa bekerja pada desain yang sama secara bersamaan.
- **Feedback**: Memungkinkan tim untuk memberikan komentar dan umpan balik langsung pada elemen desain.
- **Version Control**: Menyediakan riwayat perubahan desain dan opsi untuk mengembalikan versi sebelumnya.

### Penggunaan
- **Desain UI/UX**: Digunakan untuk mendesain antarmuka aplikasi dan website.
- **Prototyping**: Membantu dalam mengembangkan prototipe interaktif untuk pengujian dan demonstrasi.
- **Kolaborasi Tim**: Memfasilitasi kerja sama tim secara real-time dan umpan balik langsung.
- **Dokumentasi Desain**: Menyimpan dan mengelola dokumentasi desain secara terpusat.

<a name="odoo"></a>
## Odoo
Odoo adalah aplikasi ERP (Enterprise Resources Planning) modern dan lengkap yang didistribusikan secara open source, didalamnya terdapat berbagai program aplikasi bisnis termasuk Sales, CRM, Human Resources, Warehouse Management, Manufacturing, Finance and Accounting dan lain sebagainya.
### Kelebihan 
- Integrasi dengan berbagai sistem
- Memiliki fleksibilitas dalam kustomisasi
- Memiliki model pengembangan open-source
### Kekurangan
- Integrasi Odoo ERP masih kompleks bagi bisnis dengan operasional sederhana
- Dukungan teknis dan kustomisasinya masih terbatas dan belum menyeluruh
- Pengoprasian Odoo dilakukan dengan bantuan ahli teknologi khusus

<a name="emulator"></a>
## Emulator
Emulator adalah perangkat lunak atau perangkat keras yang memungkinkan satu sistem komputer (host) untuk meniru fungsi sistem komputer lain (guest). Emulator memungkinkan host menjalankan aplikasi atau sistem operasi yang awalnya dirancang untuk perangkat keras yang berbeda. 
### Emulator Android Studio
Android Studio Emulator adalah bagian dari Android Studio, lingkungan pengembangan terintegrasi (IDE) resmi dari Google untuk pengembangan aplikasi Android.
#### Kelebihan
- Terintegrasi dengan baik dengan Android Studio, memudahkan pengujian langsung dari IDE.
- Mendukung berbagai versi Android dan konfigurasi perangkat, termasuk berbagai resolusi layar, kapasitas memori, dan fitur perangkat keras seperti GPS, kamera, dan sensor lainnya.
- Menyediakan berbagai alat debugging, termasuk Android Debug Bridge (ADB), untuk memudahkan pengembang dalam mendiagnosis dan memperbaiki masalah aplikasi.
#### Kekurangan
- Emulator Android Studio bisa lambat, terutama pada komputer dengan spesifikasi rendah.
- Membutuhkan banyak RAM dan CPU untuk berjalan dengan lancar, yang dapat membebani sistem host.
- Memiliki kurva pembelajaran yang curam bagi pengembang baru atau mereka yang tidak terbiasa dengan ekosistem Android.
### Emulator Sistem Operasi VirtualBox
VirtualBox adalah perangkat lunak virtualisasi open-source yang dikembangkan oleh Oracle. VirtualBox memungkinkan pengguna untuk menjalankan berbagai sistem operasi sebagai mesin virtual (VM) di atas sistem operasi host mereka, menciptakan lingkungan yang terisolasi untuk pengujian, pengembangan, dan eksperimen.
#### Kelebihan
- Tersedia secara gratis dan open-source, memungkinkan pengguna untuk mengakses dan memodifikasi kode sumber.
- Mendukung berbagai sistem operasi host seperti Windows, macOS, Linux, dan Solaris, serta berbagai sistem operasi tamu.
- Fitur snapshot memungkinkan pengguna untuk menyimpan dan mengembalikan keadaan VM ke titik waktu tertentu, memudahkan pengujian dan pemulihan.
#### Kekurangan
- VM sering kali lebih lambat dibandingkan menjalankan sistem operasi secara native karena berbagi sumber daya dengan sistem host.
- Membutuhkan banyak RAM dan CPU, yang dapat membebani sistem host.
- Beberapa fitur canggih mungkin tidak didukung atau memerlukan konfigurasi tambahan.

<a name="postman"></a>
## Postman
Postman adalah aplikasi komputer yang digunakan untuk pengujian API. Postman mengirim permintaan API ke server web dan menerima respons, apa pun itu. Dalam tool ini, hampir semua fungsi yang mungkin dibutuhkan developer mana pun akan disematkan. Tool ini memiliki kemampuan untuk membuat berbagai jenis permintaan HTTP seperti GET, POST, PUT, PATCH, dan mengonversi API menjadi kode untuk bahasa seperti JavaScript dan Python.
### Kelebihan
- Mudah mengakses file kapan saja dan di mana saja selama aplikasi postman diinstal di komputer.
- Mempermudah proses pembuatan, pengujian, dan dokumentasi API.
- Mendukung kolaborasi tim melalui fitur sharing workspace dan collections.
- Memiliki fitur lengkap untuk berbagai jenis permintaan HTTP dan dukungan untuk pengujian otomatis.
### Kekurangan
- Bagi pemula, mungkin memerlukan waktu untuk memahami semua fitur dan fungsionalitasnya.
- Beberapa fitur memerlukan koneksi internet, terutama untuk kolaborasi.
- Bisa menjadi berat dan mengkonsumsi banyak sumber daya sistem.
  
<a name="spreadsheet"></a>
## Google Spreadsheet
Google Spreadsheet adalah lembar kerja yang serupa dengan Microsoft Excel yang dikembangkan oleh Google. Tetapi penggunaannya lebih difokuskan secara online, sehingga sangat mudah untuk sharing dengan para pengguna lain.
### Kelebihan
- Mendukung pengeditan bersama secara real-time dengan banyak pengguna.
- Mudah diintegrasikan dengan produk Google lainnya seperti Google Form, Google Data Studio, dan Google Apps Script.
- Dapat diakses dari mana saja dengan koneksi internet.
### Kekurangan
- Tidak sekuat software spreadsheet desktop seperti Microsoft Excel dalam hal fitur analisis data yang canggih.
- Ada batasan pada ukuran file dan jumlah baris/kolom.
- Data yang disimpan di cloud dapat menjadi target potensial untuk pelanggaran keamanan.

<a name="doc"></a>
## Google Doc
Google Doc adalah lembar kerja yang serupa dengan Microsoft Word yang dikembangkan oleh Google. Tetapi penggunaannya lebih difokuskan secara online, sehingga sangat mudah untuk sharing dengan para pengguna lain.
### Kelebihan
- Memungkinkan banyak pengguna untuk mengedit dokumen secara bersamaan.
- Dapat diakses dari mana saja dengan koneksi internet.
- Tersedia secara gratis dan mudah digunakan.
### Kekurangan
- Tidak sekuat aplikasi pengolah kata desktop seperti Microsoft Word dalam hal fitur canggih.
- Kesulitan dalam mempertahankan format dokumen kompleks saat diimpor/ekspor dari/ke format lain.
- Memerlukan koneksi internet untuk kolaborasi real-time dan beberapa fitur lainnya.

<a name="data-modeling"></a>
## Data Modeling
Data modeling adalah proses pembuatan representasi visual atau konseptual dari sistem informasi yang menggambarkan data, hubungan antar data, dan aturan-aturan yang mengatur data tersebut. Data modeling membantu dalam merancang struktur database yang efisien dan terorganisir, serta memungkinkan pemahaman yang lebih baik tentang kebutuhan data dalam sebuah organisasi.
### Tools Membuat Data Model
#### PowerDesigner (SAP PowerDesigner)
PowerDesigner adalah alat data modeling yang dikembangkan oleh SAP, yang menawarkan solusi untuk enterprise architecture, data modeling, dan informasi pengelolaan model.
##### Kelebihan
- Mendukung berbagai jenis diagram dan model, termasuk data flow diagrams, ERD, UML, dan BPMN.
- Terintegrasi dengan baik dengan berbagai sistem dan alat SAP lainnya.
- Menawarkan fitur manajemen perubahan dan dampak untuk analisis yang mendalam.
##### Kekurangan
- Relatif mahal dibandingkan alat data modeling lainnya.
- Memiliki kurva pembelajaran yang curam dan bisa terlalu kompleks untuk kebutuhan sederhana.
#### Draw.io (diagrams.net)
Draw.io adalah aplikasi berbasis web untuk membuat diagram yang mendukung berbagai jenis diagram, termasuk diagram alir, ERD, UML, dan banyak lagi.
##### Kelebihan
- Tersedia secara gratis dan open-source.
- Dapat diakses dari mana saja melalui browser.
- Mudah diintegrasikan dengan platform seperti Google Drive, GitHub, dan lainnya.
##### Kekurangan
- Tidak sekomprehensif alat data modeling khusus.
- Dibuat untuk berbagai jenis diagram, sehingga tidak khusus untuk data modeling yang mendalam.



