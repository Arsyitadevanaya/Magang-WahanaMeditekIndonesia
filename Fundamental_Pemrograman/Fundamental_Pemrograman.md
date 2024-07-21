# FUNDAMENTAL PEMROGRAMAN

Table of Content
- [Pengertian Pemrograman](#pengertian-pemrograman)
- [Paradigma Pemrograman](#paradigma-pemrograman)
- [Kompilasi dan Interpretasi Pemrograman](#kompilasi-dan-interpretasi)
- [Carakerja Program Komputer](#eksekusi)
- [Jenis Pemrograman](#jenis-pemrograman)
- [Struktur Dasar Bahasa Pemrograman](#struktur-dasar)

<a name="pengertian-pemrograman"></a>
## Pengertian Pemrograman

Sebuah program komputer adalah serangkaian instruksi yang ditulis untuk melakukan tugas tertentu pada komputer. Untuk menjalankan fungsi-fungsinya, komputer memerlukan program ini. Program bisa berupa kode sumber, yang bisa dibaca dan dianalisis oleh programmer. Kode sumber ini kemudian dikompilasi menjadi program yang bisa dieksekusi oleh komputer.

Ada dua cara umum untuk menjalankan program: melalui kompilasi menjadi kode yang dapat dieksekusi, atau dengan menggunakan interpreter langsung. Komputer juga bisa menjalankan beberapa program secara bersamaan, kemampuan ini disebut multitasking.

Program komputer dapat dibagi menjadi dua jenis utama: perangkat lunak sistem dan perangkat lunak aplikasi. Proses pembuatan program melibatkan penulisan, pengeditan, pengujian, analisis, perbaikan kesalahan, dan kadang-kadang kolaborasi antar-programmer.

Praktisi yang ahli dalam menulis kode program disebut sebagai programmer atau pengembang perangkat lunak. Secara luas, proses pembuatan program ini dikenal sebagai rekayasa perangkat lunak.

<a name="paradigma-pemrograman" ></a>
## Paradigma Pemrograman

Bahasa pemrograman dapat dibagi menjadi dua paradigma utama: imperatif dan deklaratif. 

1. **Imperatif**: Program dalam paradigma ini mengandalkan urutan perintah yang menjelaskan langkah-langkah untuk mencapai hasil akhir. Fokus utamanya adalah bagaimana mencapai tujuan. Paradigma terdiri dari beberapa pernyataan dan setelah eksekusi semua hasilnya disimpan. Pemrograman imperatif dibagi menjadi tiga kategori besar: Pemrosesan prosedural, OOP, dan paralel. Paradigma tersebut adalah sebagai berikut:
   - **Prosedural**: Paradigma ini menekankan pada prosedur dalam kaitannya dengan model mesin yang mendasarinya.Contoh bahasa C, C++, dan Java.
   - **OOP**: Pemrograman berorientasi objek – Program ini ditulis sebagai kumpulan kelas dan objek yang dimaksudkan untuk komunikasi. Entitas terkecil dan dasar adalah objek dan semua jenis perhitungan dilakukan pada objek saja. Contoh C++, Java, Python, Ruby, dll.
   - **Paralel**: Pendekatan pemrosesan paralel – Pemrosesan paralel adalah pemrosesan instruksi program dengan membaginya di antara beberapa prosesor. Contoh NESL dan C/C++.

2. **Deklaratif**: Di sisi lain, program dalam paradigma deklaratif mendeskripsikan properti yang harus dipenuhi untuk mencapai hasil tertentu, mirip dengan deklarasi matematis atas hubungan objek. Paradigma ini mencakup dua jenis utama:
   - **Fungsional**: Menghindari efek samping dengan fokus pada fungsi matematis murni, seperti yang terlihat dalam bahasa Haskell.
   - **Logikal**: Menentukan permasalahan dan tujuan yang diinginkan, dengan sistem menemukan solusi berdasarkan aturan dan fakta yang diberikan, seperti dalam bahasa Prolog.

Pemrograman dapat dilakukan secara tekstual, dengan menulis kode secara manual, atau secara visual, dengan elemen-elemen program dimanipulasi secara grafis.
<a name="kompilasi-dan-interpretasi" />
## Kompilasi dan Interpretasi Pemrograman
Bahasa pemrograman bisa dijalankan oleh komputer dalam dua cara utama: melalui kompilasi atau interpretasi. 
Kompilasi vs Interpretasi
1. Kompilasi:
   - Kompiler: Alat yang mengubah kode sumber menjadi kode mesin (bahasa yang bisa dipahami oleh komputer).
   - Hasil: Berkas eksekutabel (kode biner) yang bisa dijalankan langsung oleh komputer.
   - Keuntungan: Program berjalan lebih cepat.
   - Kerugian: Proses pengembangan lebih lambat karena perlu dikompilasi setiap kali ada perubahan.
   - Contoh: C, C++
2. Interpretasi:
   - Interpreter: Alat yang menjalankan kode sumber secara langsung.
   - Hasil: Program dijalankan baris per baris tanpa diubah menjadi kode mesin sebelumnya.
   - Keuntungan: Pengembangan lebih cepat karena tidak perlu kompilasi.
   - Kerugian: Program berjalan lebih lambat dan membutuhkan interpreter untuk dijalankan.
   - Contoh: Python, Perl
3. Just-In-Time (JIT) Compiler
   - JIR: Menggabungkan keunggulan kompilasi dan interpretasi dengan menerjemahkan bagian-bagian kode yang sering digunakan menjadi kode mesin saat program berjalan.
   - Keuntungan: Meningkatkan kecepatan program interpretatif mendekati kecepatan program yang dikompilasi.
   - Contoh: Java (menggunakan Bytecode dan Java Virtual Machine)
<a name="eksekusi" ></a>
## Cara Kerja Program Komputer
1. Menyimpan Program ke RAM:
   - Sebelum sebuah program dijalankan, program tersebut akan disimpan terlebih dahulu di memori utama komputer yang dikenal sebagai RAM (Random Access Memory).
   - Sistem operasi yang bertugas mengatur semua ini, memasukkan program ke RAM.
2. Eksekusi Program oleh Prosesor:
   - Setelah berada di RAM, prosesor (otak komputer) akan menjalankan program tersebut.
   - Prosesor mengeksekusi program ini langkah demi langkah, instruksi demi instruksi, sampai program selesai atau dihentikan.
   - Program yang sedang berjalan ini disebut proses.
3. Terminasi Program:
   - Sebuah program bisa dihentikan karena beberapa alasan, seperti permintaan pengguna, adanya kesalahan dalam program, atau masalah pada perangkat keras.
<a name="jenis-pemrograman" ></a>
## Jenis Pemrograman
Pemrograman dibedakan atas beberapa jenis, yaitu:
1. Pemrograman Sistem Operasi
   Linus Benedict Torvalds membangun sistem operasi Linux dengan bahasa pemrograman C. Linux bersifat open source, memungkinkan siapa saja membaca source code-nya. Sebaliknya, sistem operasi Windows tidak secara pasti diketahui menggunakan bahasa apa, meski beberapa sumber menyebutkan assembler.
2. Pemrograman Aplikasi
   Bahasa pemrograman yang dapat digunakan untuk membangun aplikasi misalnya java,
visual basic, Delphi, C/++/C#, VISUAL FOXPRO, dan Python. Aplikasi yang
dihasilkanpun bermacam-macam mulai dari editor teks, image viewer, pemutar VCD,
sampai aplikasi-aplikasi perkantoran pengolah gambar, pengolah foto, pengolah data
dan lain-lain.
3. Pemrograman Web
   Pemrograman web memungkinkan pembuatan halaman web dinamis dan interaktif. HTML digunakan untuk markup teks dan bersifat statis. Untuk membuatnya dinamis, digunakan bahasa pemrograman seperti ASP, PHP, JSP, VBScript, dan JavaScript.
4. Pemrograman Game
   Pemrograman game adalah salah satu yang paling rumit. Sebelum pengembangan, game memerlukan konsep cerita yang jelas dan menarik. Selanjutnya, pemrograman game menggabungkan berbagai pustaka dan API yang tersedia. Bahasa pemrograman populer untuk ini termasuk C++, Java, dan C, karena dukungan mereka terhadap orientasi objek dan compiler yang cocok untuk game. Meskipun demikian, bahasa lain seperti Visual Basic juga bisa digunakan untuk game sederhana.

<a name="struktur-dasar"></a>
## Struktur Dasar Pemrograman
Struktur dasar dalam pemrograman meliputi urutan langkah, perulangan, dan percabangan.
1. Struktur Runtutan:
   Instruksi dieksekusi berurutan dari awal hingga akhir. Setiap langkah dilakukan satu per satu, tanpa meloncat.
2. Struktur Perulangan:
   Digunakan untuk menjalankan serangkaian perintah berulang kali. Contoh: for, while, dan do-while dalam berbagai bahasa pemrograman.
3. Struktur Percabangan:
   Memungkinkan pemilihan instruksi berdasarkan kondisi tertentu. Contoh: if-else, switch-case, untuk mengatur alur program berdasarkan nilai variabel. 
