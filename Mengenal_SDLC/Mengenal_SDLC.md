# MENGENAL SDLC

Table of Content
- [Pengertian SDLC](#pengertian-sdlc)
- [Fungsi SDLC](#fungsi-sdlc)
- [Tahapan SDLC](#tahapan-sdlc)
- [Macam-Macam SDLC](#macam-macam-sdlc)
  - [Waterfall](#waterfall)
  - [V-Model](#v-model)
  - [Iterative](#iterative)
  - [Fontain](#fontain)
  - [Spiral Model](#spiral-model)
  - [Agile Development](#agile-development)
  - [Rapid Application Development Model](#rapid-application-development-model)
- [Kelebihan & Kekurangan](#kelebihan--kekurangan)
- [Kesimpulan](#kesimpulan)

<a name="pengertian-sdlc"></a>
## Pengertian SDLC
SDLC (Siklus Hidup Pengembangan Sistem) atau Systems Life Cycle (Siklus Hidup Sistem), dalam rekayasa sistem dan rekayasa perangkat lunak, adalah proses pembuatan dan pengubahan sistem serta model dan metodologi yang digunakan untuk mengembangkan sistem-sistem tersebut dengan tujuan untuk meminimalkan risiko proyek melalui perencanaan ke depan agar perangkat lunak memenuhi harapan pelanggan selama produksi dan seterusnya.

<a name="fungsi-sdlc"></a>
## Fungsi SDLC
Mengembangkan perangkat lunak tanpa perencanaan yang matang sangatlah sulit. Banyak teknik telah dikembangkan untuk mendukung proses ini, meskipun masih ada perdebatan tentang metode terbaik. Namun, perencanaan selalu lebih baik daripada tanpa perencanaan. SDLC memiliki berbagai fungsi penting, seperti:
- Memfasilitasi komunikasi antara tim pengembang dan pemangku kepentingan
- Mendefinisikan peran dan tanggung jawab antara pengembang, desainer, analis bisnis, dan manajer proyek
- SDLC membantu memberikan gambaran yang jelas tentang input dan output di setiap tahap.

<a name="tahapan-sdlc"></a>
## Tahapan SDLC
Setiap proyek pengembangan perangkat lunak melibatkan serangkaian tahap tertentu. Berikut adalah tahapan umum dalam SDLC:
1. Perencanaan (Planning):
   Tahap ini fokus pada studi kelayakan pengembangan sistem. Aktivitas meliputi pembentukan tim, menetapkan tujuan dan ruang lingkup proyek, serta merumuskan strategi pengembangan.
2. Analisis Sistem (Analysis):
   Pada tahap ini, sistem yang akan dikembangkan dianalisis secara mendalam. Ini termasuk studi literatur, brainstorming untuk memahami kebutuhan sistem, dan analisis detail untuk memastikan semua kebutuhan pengguna terdokumentasi dengan baik.
3. Perancangan (Design):
   Tahap ini menghasilkan desain sistem yang spesifik dan terinci. Ini meliputi pembuatan prototipe, merancang komponen-komponen sistem, serta menghasilkan dokumen teknis yang mendetail.
4. Implementasi (Implementation):
   Tahap implementasi melibatkan pembuatan database, aplikasi, dan pengujian. Aktivitas-aktivitas ini bertujuan untuk mengimplementasikan rancangan sistem yang telah dibuat sebelumnya.
5. Pemeliharaan(Maintenance):
   Setelah sistem diluncurkan, tahap pemeliharaan dimulai. Ini mencakup pembaruan rutin, penanganan bug, dan penyesuaian sistem dengan perubahan kebutuhan atau lingkungan operasional yang baru.
   
<a name="macam-macam-sdlc"></a>
## Macam-Macam SDLC
Terdapat berbagai model pengembangan SDLC yang umum digunakan. Beberapa di antaranya adalah:
<a name="waterfall"></a>
### Waterfall
![text if the image fails to load](https://dicoding-assets.sgp1.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2021/07/Metode-SDLC-Waterfall.png "Text displayed on hover") <br>
Metode SDLC yang pertama adalah waterfall. Metode waterfall adalah metode kerja yang menekankan fase-fase yang berurutan dan sistematis. Disebut waterfall karena proses mengalir satu arah “ke bawah” seperti air terjun. Metode waterfall ini harus dilakukan secara berurutan sesuai dengan tahap yang ada.
Berikut adalah tahap-tahap pengembangan dalam metode waterfall.
1. Requirement gathering and analysis: Mengumpulkan kebutuhan secara lengkap untuk dianalisis dan mendefinisikan kebutuhan apa saja yang harus dicapai oleh program. Informasi dapat diperoleh melalui wawancara, diskusi, atau survey.
2. Design: Melakukan perancangan desain perangkat lunak sebagai perkiraan sebelum dibuatnya kode. Desain sistem dapat dibuat menggunakan Flowchart, Mind Map, atau Entity Relationship Diagram (ERD).
3. Implementasi: Implementasi ini adalah tahap dimana seluruh desain yang sebelumnya sudah dibuat diubah menjadi kode-kode program. Kode yang dihasilkan masih berbentuk modul-modul yang harus digabungkan di tahap selanjutnya.
4. Integration & testing: Di tahap ini dilakukan penggabungan modul-modul yang sudah dibuat sebelumnya dan melakukan pengujian untuk mengetahui apakah perangkat lunak yang dibuat telah sesuai dengan desain dan fungsinya atau tidak.
5. Verification: Di tahap ini, pengguna atau klien yang langsung melakukan pengujian pada sistem, apakah sistem telah sesuai dengan tang disetujui atau belum sesuai.
6. Operation & maintenance: Tahap ini merupakan tahap terakhir dari model waterfall. Sistem yang sudah selesai dijalankan serta dilakukan pemeliharaan. Pemeliharaan berupa memperbaiki kesalahan yang tidak ditemukan pada langkah sebelumnya.

<a name="v-model"></a>
### V-Model
![text if the image fails to load](https://media.geeksforgeeks.org/wp-content/uploads/20231030123258/software-Testing-Tutorial-SDLC-V-model.webp "Text displayed on hover") <br>
The V-Model adalah model SDLC dimana pelaksanaan proses yang terjadi secara berurutan dalam bentuk-V. Dikenal juga sebagai model Verifikasi dan Validasi. The V-Model merupakan perluasan dari waterfall model  dan didasarkan pada asosiasi dari fase pengujian untuk setiap tahap pengembangan yang sesuai. Ini berarti bahwa untuk setiap fase tunggal dalam siklus pengembangan, ada tahap pengujian terkait langsung.
Berikut adalah tahap-tahap pengembangan dalam metode v-model.
1. Tahap Desain:
   - Analisis persyaratan: Berisi komunikasi rinci dengan pelanggan untuk memahami persyaratan dan harapan pelangan.
   - Desain sistem: Berisi desain sistem dan perangkat keras serta pengaturan komunikasi lengkap untuk mengembangkan produk.
   - Desain Arsitektur: Berisi pecahan dari desain sistem menjadi modul-modul yang memiliki fungsi berbeda.
   - Desain modul
2. Tahapan pengkodean:
   Penulisan kode untuk sistem modul yang dibuat selama fase desain.
3. Tahap Pengujian:
   - Tes unit: Rencana unit dikembangkan selama fase desain modul. Rencana uji unit ini dijalankan untuk menghilangkan bug dalam kode atau tingkat unit.
   - Tes integrasi: Pengujian integrasi dilakukan dalam fase desain arsitektur. Pengujian ini memverivikasi mudul-modul komunikasi.
   - Pengujian sistem: Pengujian yang menguji aplikasi secara keseluruhan baik fungsional dan non-fungsionalnya.
   - Pengujian penerimaan pengguna (UAT): Menguji pernerimaan pengguna untuk memverivikasi sistem yang dibuat sesuai dengan persyaratan dan siap digunakan di dunia nyata. 

<a name="iterative"></a>
### Iterative
![text if the image fails to load](https://www.tutorialspoint.com/sdlc/images/sdlc_iterative_model.jpg "Text displayed on hover") <br>
Iterative Model adalah pendekatan dalam pengembangan perangkat lunak yang mengembangkan sistem melalui serangkaian iterasi (pengulangan) yang berulang. Setiap iterasi melibatkan siklus pengembangan perangkat lunak yang lengkap, termasuk perencanaan, analisis kebutuhan, desain, pengkodean, pengujian, dan evaluasi.
Berikut adalah tahap-tahap pengembangan dalam metode iterative:
1. Requirements : Mengumpulkan dan menganalisis semua kebutuhan sistem.
2. Design & development: Melakukan desain dan pengembangan berdasarkan kebutuhan.
3. Testing: Melakukan pengujian sistem yang telah dibangun berfungsi dengan benar.
4. Implementatin: Mengimplementasikan atau menerapkan sistem.
5. Build 1,2,3 merupakan perulangan dari siklus pengembangan perangkat lunak yang terdiri dari design & development, testing, dan implementation.

<a name="fontain"></a>
### Fontain
![text if the image fails to load](https://dicoding-assets.sgp1.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2021/07/bagan-2-612x1536.jpg "Text displayed on hover") <br>
Metode fountain adalah perbaikan dari metode waterfall, di mana jenis tahapan masih sama. Namun beberapa jenis tahapan boleh didahulukan atau dilewati, tetapi ada tahapan yang tidak bisa dilewati, contohnya seperti design sebelum melakukan implementasi, jika hal tersebut dilewati maka akan ada tumpang tindih.

<a name="spiral-model"></a>
### Spiral Model
![text if the image fails to load](https://sis.binus.ac.id/wp-content/uploads/2019/04/art1.gif "Text displayed on hover") <br>
metode siklus pengembangan sistem ( SDLC ) yang digunakan untuk manajemen risiko yang menggabungkan model proses pengembangan iteratif dengan elemen model Waterfall . 
Berikut adalah tahap-tahap pengembangan dalam metode Spiral Model:
1. Tahap liason: Berhubungan dengan komunikasi antar pihak yangn terlibat dalam pengembangan software dengan tujuan untuk mengembangkan software yang sesuai dengan kebutuhan dan keinginan pelanggan.
2. Tahap Planning: Tahap perencanaan meliputi estimasi biaya yang digunakan, batas waktu, pegaturan jadwal, identifikasi lingkungan kerja.
3. Tahap analisis resiko: Tahapan untuk mengidentifikasi resiko yang berpotensi terjadi dan menghasilkan solusi alternatif secara teknis dan manajemen saat strategi mitigasi direncanakan dan diselesaikan.
4. Tahapan rekayasa: Tahapan menguji, coding, mengembangkan software, menginstal software, membuat prototype, mendesain dokumen, meringkas pengujian software, dan membuat laporan atas kekurangn dari software.
5. Tahap evaluasi: Pada tahap evaluasi, system analyst membutuhkan masukan dan tanggapan dari para user dalam mengevaluasi perangkat/produk yang diuji dan memastikan bahwa produk dibutuhkan sesuai ketentuan yang telah dibicarakan diawal dengan user.



<a name="agile-development"></a>
### Agile Development
![text if the image fails to load](https://dicoding-assets.sgp1.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2021/07/1592-1536x1152.jpg "Text displayed on hover") <br>
Metode agile adalah metode yang fleksibel di mana pengembangan dilakukan dalam jangka pendek. Namun diperlukan adaptasi yang cepat dari developer terhadap perubahan dalam bentuk apa pun.
Berikut adalah tahap-tahap pengembangan dalam metode agile:
1. Planning : Tahap ini dimulai dengan sprint planning, di mana tim mengidentifikasi dan memilih item dari backlog (daftar pekerjaan yang harus dilakukan) untuk dikerjakan selama sprint (periode waktu tertentu, biasanya 1-4 minggu). Tujuan utamanya adalah membuat rencana untuk sprint yang akan datang.
3. Desain: Tahap desain melibatkan pengembangan detail teknis dari fitur atau fungsi yang akan dibangun. Ini mencakup perencanaan arsitektur sistem, antarmuka pengguna, dan rancangan teknis lainnya yang diperlukan sebelum tim mulai menulis kode.
4. Development: Tahap ini adalah saat pengembang mulai menulis kode berdasarkan rancangan yang telah disepakati. Proses ini terfokus pada pengembangan fungsionalitas atau fitur yang telah direncanakan dalam sprint.
5. Testing: Setelah pengembangan selesai, tim melakukan pengujian untuk memastikan bahwa semua fitur dan fungsi berjalan dengan baik sesuai dengan spesifikasi yang ditetapkan. Pengujian dapat mencakup pengujian otomatis dan manual untuk memastikan kualitas perangkat lunak.
6. Review: ada tahap ini, tim melakukan sesi review bersama untuk mengevaluasi pekerjaan yang telah dilakukan dalam sprint. Ini melibatkan demo produk kepada pemangku kepentingan untuk mendapatkan umpan balik dan memastikan bahwa produk memenuhi ekspektasi.
7. Retrospective: Melakukan pemeriksaan apa yang berjalan dengan baik, apa yang perlu ditingkatkan, dan cara untuk memperbaikinya di sprint berikutnya.
8. Release: Tahap terakhir adalah rilis produk ke pelanggan atau pengguna akhir. Rilis ini dapat terjadi setelah satu sprint atau lebih, tergantung pada strategi dan kebutuhan bisnis.

<a name="rapid-application-development-model"></a>
### Rapid Application Development Model
![text if the image fails to load](https://cms.agus-hermanto.com/uploads/agus-hermanto/originals/6cad856a-7d75-462c-98a7-123f7a8f4341.png "Text displayed on hover") <br>
Metode pengembangan perangkat lunak RAD (Rapid Application Development) adalah sebuah proses pengembangan perangkat lunak yang menekankan siklus pengembangan dengan waktu yang singkat. Definisi lain menyatakan bahwa metode pengembangan perangkat lunak RAD adalah metode yang menggunakan pendekatan beorientasi objek untuk pengembangan sistem yang meliputi pengembangan perangkat dan perangkat lunak.
Berikut adalah tahap-tahap pengembangan dalam metode Rapid Application Development Model :
1. Perencanaan kebutuhan: Melakukan identifikasi masalah dan pengumpulan data dari pengguna atau stakeholder dengan tujuan untuk mengidentifikasi maksud akhir atau tujuan dari sistem yang diinginkan.
3. Desain sistem: Tahap ini mencakup pengembangan rancangan sistem secara keseluruhan, termasuk arsitektur teknis dan desain antarmuka pengguna.
4. Proses pengembangan dan pengumpulan feedback: Tahap ini melibatkan pengembangan prototipe atau aplikasi secara iteratif. Umpan balik ini digunakan untuk melakukan perbaikan dan penyesuaian pada prototipe yang sedang dikembangkan.
5. Implementasi atau penyelesaian produk: Tahap terakhir adalah implementasi solusi atau produk yang telah dikembangkan. Ini melibatkan konversi data, pelatihan pengguna, dan persiapan untuk peluncuran produk ke lingkungan produksi.


<a name="#kelebihan--kekurangan"></a>
## Kelebihan & Kelemahan
| No | Metodologi | Kelebihan | Kelemahan |
| :- | :---------- | :---------- | :---------- |
| 1 | Waterfall | 1. Memiliki proses yang terurut, sehingga pengerjaan dapat terjadwal dengan baik dan mudah. <br> 2. Cocok untuk sistem dengan kompleksitas rendah (predictable). <br> 3. Setiap proses yang dilakukan tidak dapat saling tumpah tindih. | Tahapan yang berurutan secara linier tidak memungkinkan untuk kembali pada tahapan selanjutnya |
| 2 |V-Model      | 1. Digunakan untuk proyek kecil dengan persyaratan yang jelas. <br> 2. Berfokus pada aktifitas verifikasi dan validasi. <br> 3. Ini adalah model yang sangat-disiplin dan Tahapan selesai satu per satu. | 1. Tidak cocok untuk proyek dengan persyaratan tiggi. <br> 2. Tidak mendukung iterasi. <br> 3. Memakan waktu karena memerlukan banyak dokumentasi dan pengujian.       |
| 3 | Iterative Model      | 1. Manajemen resiko lebih baik. <br> 2. Penyempurnaan berkelanjutan. <br> 3. Adaptasi terhadap perubahan.       | 1. Kebutuhan manajemen yang kompleks. <br> 2. Ketergantungan pada umpan balik. <br> 3. Dokumentasi berulang.     |
| 4 | Fontain     | 1. Memiliki proses yang terurut, sehingga pengerjaan dapat terjadwal dengan baik dan mudah. <br> 2. Dapat melewati atau mendahulukan beberapa tahapan. <br> 3. Setiap proses yang dilakukan tidak dapat saling tumpah tindih.        | 1. Waktu pengerjaan relatif lebih lama, karena harus menunggu tahap sebelumnya selesai. <br> 2. Model fountain ini kurang cocok untuk pengembangan proyek yang memiliki kompleksitas tinggi.        |
| 5 | Spiral Model      | 1. Pembangunan dan perubahan perangkat lunak yang terjadi dapat diselesaikan secara sistematis. <br> 2. Manajemen dan analisa risiko yang lebih cepat dan mudah. <br> 3. Mudah dalam melakukan perubahan kebutuhan dan dokumentasi.        |1. Tidak cocok dan sulit diimplementasikan dalam projek kecil. <br> 2. Membutuhkan best practice atau pengalaman sebelumnya karena proses yang sangat kompleks. <br> 3. Resiko dalam tahap planning cukup besar. Misalnya terjadi perbedaan dalam jadwal pengembangan dan anggaran belanja.       |
| 6 | Agile Development      | 1. Adaptif terhadap perubahan. <br> 2. Kolaborasi tim yang kuat. <br> 3. Kepuasan pelanggan. <br> 4. Penyempurnaan berkelanjuatan.       | 1. Membutuhkan komitmen yang tinggi. <br> 2. Dokumentasi kurang. <br> 3. Memerlukan keterlibatan konstan dari pemangku kepentingan.      |
| 7 | Rapid Application Development Model      | 1. Integrasi proses yang lebih cepat dan efeltif. <br> 2. Penyesuaian kebutuhan dan keinginan user menjadi lebih mudah. <br> 3. Memperkecil kesalahan atau eror.         | 1. Memerlukan kolaborasi tim yang kuat dan memadai. <br> 2. Hanya cocok diterapkan untuk proyek kecil dan memiliki waktu pengerjaan yang singkat. <br> 3. Memerlukan kolaborasi tim yang kuat dan memadai.       |


<a name="kesimpulan"></a>
## Kesimpulan
Untuk perusahaan software house, Agile Development adalah pilihan terbaik karena dapat dengan cepat menyesuaikan diri dengan perubahan dalam kebutuhan pasar dan pelanggan. Pendekatan ini memungkinkan tim untuk melakukan iterasi yang terencana dengan baik, yang memastikan bahwa produk yang dikembangkan tetap berkualitas tinggi. Dengan Agile, perusahaan dapat merespons umpan balik dari pelanggan dengan lebih efisien, sehingga memungkinkan produk diluncurkan lebih cepat ke pasar dengan fitur-fitur yang sesuai dengan harapan pengguna.
