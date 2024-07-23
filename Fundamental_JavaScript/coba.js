// Percobaan 1: Looping sederhana
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// Percobaan 2: Looping dengan conditional untuk angka ganjil
// for (let j = 0; j < 10; j++) {
//     if (j % 2 != 0) {
//         console.log(j);
//     }
// }

// Percobaan 3: Looping dengan conditional untuk angka genap
// for (let k = 0; k < 10; k++) {
//     if (k % 2 == 0) {
//         console.log(k);
//     }
// }

// Percobaan 4: Mengakses elemen array
// let array1 = [1, 2, 3, 4, 5, 6];
// console.log(array1[5]);

// Percobaan 5: Mengurutkan elemen array
// let array2 = [5, 2, 4, 1, 3, 5];
// console.log(array2.sort());

// Percobaan 6: Mengeluarkan elemen array
// let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];
// for (let l = 0; l < 4; l++) {
//     console.log(array3[l]);
// }

// Percobaan 7: Menggabungkan elemen array menjadi string
// let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];
// console.log(kalimat.join(" "));

// Percobaan 8: Menambahkan elemen ke array
// let sayuran = [];
// sayuran.push("kangkung");
// console.log(sayuran); // Output: ["kangkung"]

// Percobaan 9: Function sederhana dengan parameter
// function cetakFunction(nama_kamu) {
//     return "Hallo Nama saya " + nama_kamu;
// }
// console.log(cetakFunction("Naya"));

// Percobaan 10: Arrow function dengan parameter
// const cetakFunction = (nama_kamu) => {
//     return "Hallo Nama saya " + nama_kamu;
// }
// console.log(cetakFunction("Naya"));

// Percobaan 11: Arrow function dengan dua parameter
// const myFunction = (angka1, angka2) => {
//     return angka1 + angka2;
// }
// console.log(myFunction(20, 7));

// Percobaan 12: Arrow function tanpa parameter
// const Hello = () => {
//     return "Hello";
// }
// console.log(Hello());

// Percobaan 13: Mengakses properti objek
// let obj = {
//     nama: "John",
//     umur: 22,
//     bahasa: "indonesia"
// };
// console.log(obj.bahasa);

// Percobaan 14: Mengkonversi array ke objek
// let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
// let objDaftarPeserta = {
//     nama: arrayDaftarPeserta[0],
//     gender: arrayDaftarPeserta[1],
//     hobi: arrayDaftarPeserta[2],
//     tahun: arrayDaftarPeserta[3]
// };
// console.log(objDaftarPeserta);

// Percobaan 15: Filter elemen array objek
// let buah = [
//     { nama: "Nanas", warna: "Kuning", "ada bijinya": false, harga: 9000 },
//     { nama: "Jeruk", warna: "Oranye", "ada bijinya": true, harga: 8000 },
//     { nama: "Semangka", warna: "Hijau & Merah", "ada bijinya": false, harga: 10000 },
//     { nama: "Pisang", warna: "Kuning", "ada bijinya": false, harga: 5000 }
// ];

// let arrayBuahFilter = buah.filter(item => !item["ada bijinya"]);
// console.log(arrayBuahFilter);

// Percobaan 16: Destructuring objek
// let phone = {
//     nama: "Galaxy Note 20",
//     brand: "Samsung",
//     year: 2020
// };

// const { nama, brand, year } = phone;
// console.log(nama, brand, year);

// Percobaan 17: Menggabungkan objek
// let dataBukuTambahan = {
//     penulis: "john doe",
//     tahunTerbit: 2020
// };

// let buku = {
//     nama: "pemrograman dasar",
//     jumlahHalaman: 172
// };

// let objOutput = { ...dataBukuTambahan, ...buku };
// console.log(objOutput);

// Percobaan 18: Mengembalikan parameter dari fungsi
// let mobil = {
//     merk: "bmw",
//     color: "red",
//     year: 2002
// };

// const functionObject = (param) => {
//     return param;
// }
// console.log(mobil);
