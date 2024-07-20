# FUNDAMENTAL JAVASCRIPT

Table of Content
- [Pendahuluan JavaScript](#pendahuluan)
- [Variabel dan Tipe Data pada JavaScript](#variabel-tipedata)
- [Operator pada JavaScript](#operator)
- [Perulangan pada JavaScript](#perulangan)
- [Pengkondisian pada JavaScript](#pengondisian)
- [Fungsi pada JavaScript](#fungsi)
- [Type Casting pada JavaScript](#typecasting)

<a name="pendahuluan"></a>
## Pendahuluan JavaScript
JavaScript diciptakan oleh Brendan Eich pada tahun 1995 saat bekerja di Netscape Communications Corporation. Awalnya dinamai Mocha, kemudian menjadi LiveScript, dan akhirnya JavaScript. Bahasa ini pertama kali dirilis di browser Netscape Navigator 2.0 pada Desember 1995, dirancang untuk membuat halaman web lebih dinamis dan interaktif.

Pada tahun 1997, JavaScript distandardisasi oleh ECMA sebagai ECMAScript. Versi utama ECMAScript, seperti ES3 pada 1999 dan ES6 pada 2015, memperkenalkan banyak fitur penting yang memajukan bahasa ini. Standar ini terus berkembang dengan pembaruan tahunan yang menambah fungsionalitas dan memperbaiki kekurangan.

JavaScript gratis dan mudah digunakan karena sudah disertakan dalam semua browser modern. Sebagai bahasa tingkat tinggi, JavaScript mudah dipelajari oleh pemula dan memiliki kemampuan cross-platform yang luas, membuatnya dapat dijalankan di berbagai perangkat dan sistem operasi.

Aplikasi JavaScript sangat beragam, meliputi pengembangan web, aplikasi desktop dengan Electron, pengembangan server-side melalui Node.js, dan bahkan perangkat Internet of Things (IoT). JavaScript telah berkembang dari bahasa sederhana menjadi salah satu bahasa pemrograman paling populer dan serbaguna di dunia.

### Mengapa harus belajar JavaScript?
Mengapa Belajar JavaScript? JavaScript adalah salah satu dari 3 bahasa yang harus dipelajari oleh semua pengembang web: 
1. HTML untuk menentukan konten halaman web
2. CSS untuk menentukan tata letak halaman web
3. JavaScript untuk memprogram perilaku halaman web

<a name="variabel-tipedata"></a>
## Variabel dan Tipe Data pada JavaScript
Variabel adalah tempat untuk menyimpan data.
### Jenis-Jenis Mendeklarasikan Variabel
Dalam bahasa pemrograman JavaScript sendiri memiliki 3 cara mendeklarasikan sebuah variabel, yaitu
1. ```const (constant)```: sifatnya konstan tidak bisa diubah
2. ```let (let it change)```: sifatnya bisa diubah, lebih aman untuk digunakan
3. ```var (variable)```: sifatnya bisa diubah, tidak aman untuk digunakan
### Jenis-Jenis Tipe Data
Jenis-Jenis Tipe Data
Untuk tipe data, JavaScript memiliki banyak tipe data, kali ini membahas 3 tipe data dasar yang sering digunakan, yaitu:
1. ```string```: Merupakan tipe data yang berupa tulisan/teks. Untuk mendeklarasikannya, gunakan tanda (' ), (") , atau (``) .
   ```
   let color = "Yellow";
   let lastName = "Johnson";
   ```
2. ```number```: Merupakan tipe data yang berupa angka. Bisa berupa bilangan biasa (misal 1,2,3, dst.) juga bilangan yang memiliki koma, tetapi bilangan yang memiliki koma, tanda komanya diganti dengan titik (misal 1.5, 3.14, 7.27, 19.45 dst...).
   ```
   let length = 16;
   let weight = 7.5;
   ```
3. ```boolean```: Merupakan tipe data yang berupa hal kelogisan. Valuenya hanya dua, true dan false.
   ```
   let x = true;
   let y = false;
   ```
4. ```null```: Merupakan tipe data yang biasanya digunakan untuk menyatakan suatu yang tidak ada. null ini bersifat falsy jika digunakan untuk boolean operator. Value dari null hanya null.
5. ```undefined```: Merupakan tipe data yang biasanya digunakan untuk menyatakan suatu yang tak terdefinisikan sebelumnya, akan bersifat falsy jika digunakan untuk boolean operator. Value dari undefined hanya undefined.
6. ```object```: Merupakan tipe data yang mempunyai pasangan key dan value. Maksud dari key adalah nama yang harus diberikan untuk dijadikan tanda pengenal, supaya value dari object bisa digunakan. Object ini menggunakan kurung kurawal ({}) untuk menyimpan pasangan dari key dan value.
   ```
   //object
   const person = {firstName:"John", lastName:"Doe"};
   ```

<a nae="operator"></a>
## Operator pada JavaScript
Operator digunakan untuk melakukan operasi pada nilai. Beberapa operator dasar dalam JavaScript antara lain:
### Operator Aritmatika
| Operator | Description | 
| :------: | :--------: |
| +   | Tambahan      | 
| -    | Pengurangan      |
| *     | Perkalian      | 
| **   | Pemangkatan      | 
| /    | Pembagian      |
| %     | Modulus      | 
| ++    | Increment      |
| --    | Decrement      | 

### Operator Perbandingan
| Operator | Description | 
| :------: | :--------: |
| ==   | sama dengan      | 
| ===    | sama nilainya dan sama tipe datanya     |
| !=    | tidak sama     | 
| !==    | tidak sama nilainya atau tidak sama tipe datanya     | 
| >   | lebih besar dari   | 
| <    | lebih kecil dari    | 
| >=   | lebih besar dari atau sama dengan     | 
| <=   | lebih kecil dari atau sama dengan      | 
| ?   | operator ternary   | 

### Operator Logika
| Operator | Description | 
| :------: | :--------: |
| &&   | logika dan     | 
| II    | logika atau     |
| !     | logika tidak     |

### Operator Penugasan
| Operator | Deskripsi | 
| :------: | :--------: |
| =        | Menetapkan nilai dari operand kanan ke operand kiri | 
| +=       | Menambahkan operand kanan ke operand kiri dan menetapkan hasilnya ke operand kiri |
| -=       | Mengurangi operand kanan dari operand kiri dan menetapkan hasilnya ke operand kiri | 
| *=       | Mengalikan operand kiri dengan operand kanan dan menetapkan hasilnya ke operand kiri | 
| /=       | Membagi operand kiri dengan operand kanan dan menetapkan hasilnya ke operand kiri | 
| %=       | Mengambil sisa pembagian operand kiri dengan operand kanan dan menetapkan hasilnya ke operand kiri | 
| **=      | Mengangkat operand kiri ke pangkat dari operand kanan dan menetapkan hasilnya ke operand kiri | 

### Operator Bitwise
| Operator | Description | 
| :------: | :--------: |
| &   | AND     | 
| I    | OR      |
| ~    | NOT     | 
| ^    | XOR     | 
| <<    | left shift      | 
| >>    | right shift    | 
| >>>    | unsigned right shift     | 

<a name="perulangan"></a>
## Perulangan pada JavaScript
| Perulangan | Description | 
| :------: | :--------: |
| for   | Perulangan dengan inisialisasi, kondisi, dan ekspresi akhir.    | 
| while   | Perulangan yang dijalankan selama kondisi bernilai true.      |
| do...while   | Perulangan yang dijalankan setidaknya sekali, kemudian selama kondisi bernilai true.    | 
| for...in   | Perulangan melalui properti objek.     | 
| for...of    | Perulangan melalui nilai dari objek iterable (misalnya array).      | 

<a name="pengondisian"></a>
## Pengkondisian pada JavaScript
| Operator | Description | 
| :------: | :--------: |
| if   | Mengeksekusi blok kode jika kondisi bernilai true.     | 
| if...else    | Menentukan blok kode yang dijalankan berdasarkan kondisi true atau false.      |
| switch    | Memilih salah satu dari beberapa blok kode untuk dijalankan berdasarkan nilai ekspresi.     | 

<a name="fungsi"></a>
## Fungsi pada JavaScript
Fungsi adalah sub-program yang bisa digunakan kembali baik di dalam program itu sendiri, maupun di program yang lain.
### Cara Membuat Fungsi
1. Menggunakan cara biasa
   ```
   function namaFungsi(){
       console.log("Hello World!");
   }
   ```
2. Menggunakan ekspresi
   Fungsi ini adalah fungsi anonim (anonymous function) atau fungsi tanpa nama.
   ```
   var namaFungsi = function(){
       console.log("Hello World!");

   }
   ```
3. Menggunakan tanda panah
   Fungsi ini mulai muncul pada standar ES6. Sebenarnya hampir sama dengan yang menggunakan ekspresi. Bedanya, kita menggunakan tanda panah (=>) sebagai ganti function. Pembuatan fungsi dengan cara ini disebut arrow function.
   ```
   var namaFungsi = () => {
       console.log("Hello World!");
   }
   // atau seperti ini (jika isi fungsi hanya satu baris):
   var namaFungsi = () => console.log("Hello World!");
   ```
4. Menggunakan constructor
   Cara ini tidak direkomendasikan, karena terlihat kurang bagus. Body fungsinya dibuat dalam bentuk string yang dapat mempengaruhi kinerja engine javascript.
   ```
   var namaFungsi = new Function('console.log("Hello World!");');
   ``
### Cara Memanggil/Eksekusi Fungsi
```
// membuat fungsi
function sayHello(){
    console.log("Hello World!");
}
// memanggil fungsi
sayHello() // maka akan menghasilkan -> Hello World!
```
### Fungsi dengan parameter
```
function kali(a, b){
    hasilKali = a * b;
    console.log("Hasil kali a*b = " + hasilKali);
}

//cara memanggil
kali(3, 2); // -> Hasil kali a*b = 6
```
### Fungsi yang Mengembalikan Nilai
Pengembalian nilai pada fungsi menggunakan kata kunci ``return`` kemudian diikuti dengan nilai atau variabel yang akan dikembalikan.
```
function bagi(a,b){
    hasilBagi = a / b;
    return hasilBagi;
}
// memanggil fungsi
var nilai1 = 20;
var nilai2 = 5;
var hasilPembagian = bagi(nilai1, nilai2);
console.log(hasilPembagian); //-> 4
```
<a name="typecasting"></a>
## Type Casting pada JavaScript
Type casting adalah proses mengubah tipe data dari satu jenis ke jenis lain. JavaScript memiliki dua jenis konversi tipe: implisit dan eksplisit.
### Konversi Implisit
JavaScript secara otomatis mengubah tipe data sesuai kebutuhan.
### Konversi Eksplisit
Pengembang secara eksplisit mengubah tipe data menggunakan fungsi atau metode.
| Eksplisit | Description | 
| :------: | :--------: |
| Number()   | Mengubah nilai ke tipe data number.     | 
| String()    | Mengubah nilai ke tipe data string.      |
| Boolean()    | Mengubah nilai ke tipe data boolean.     | 
| parseInt() dan parseFloat()    | Mengubah string ke number (integer atau floating-point).     | 

