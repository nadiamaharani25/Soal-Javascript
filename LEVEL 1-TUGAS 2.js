//SOAL 1
var nama='Nadia Maharani';
let umur=24;
var alamat='Jl.Urip Sumoharjo, Palembang';
let hobi=['Menulis','Desain','Ngoding','Traveling'];
const asalSekolah='UIN Raden Fatah Palembang';
const jurusan='S1 Sistem Informasi';
let alasanSukaProgramming='dulu saya tidak suka ngoding. Namun semakin saya coba, saya semakin tertarik untuk mempelajarinya. Dan karena bagi saya ngoding itu seru dan penuh tantangan, juga bisa mempelajari banyak hal baru. \n';

//SOAL 2
console.log(`Nama saya adalah ${nama}, asal sekolah dari ${asalSekolah}, Jurusan ${jurusan}. Alasan saya tertarik dengan programming adalah ${alasanSukaProgramming}`);

//SOAl 3
console.log ("\n" + "Perbedaan var, let dan const adalah:" + "\n")
console.log("- Var biasa digunakan untuk mendeklarasikan variable. Misal, di scope terluar kita deklarasikan variable a dengan nilai 0, lalu di scope terdalam kita deklarasi ulang variable a dengan nilai 1, dan nilainya akan berubah dari 0 menjadi 1. \n")
console.log ("- Let mirip dengan var tapi tak merubah nilai saat dideklarasi ulang, melainkan variable baru akan dibuat untuk scope terkait. Gunakan Let hindari Var. \n")
console.log ("- Const merupakan bagian dari Javascript ES6 seperti let, tapi hanya saja nilainya tak dapat diubah.")