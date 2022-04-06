//====================== SOAL 1 ===========================

//Ini comment satu baris

/* Di Javascript terdapat 5 buah tipe data, yang memiliki kegunaan dan fungsinya masing-masing. Diantaranya adalah:
1. String
   Tipe data yang biasanya berbentuk kata atau kalimat

2. Integer / Number
   Tipe data number adalah tipe data yang berbentuk bilangan bulat. Contohnya adalah 0,1,2,3,4,5,6,7,8,9,10,dst

3. Boolean
   Tipe data yang hanya bisa diisi dengan salah satu diantara 2 nilai, yaitu : TRUE or FALSE
   
4. Object
   Tipe data object berisi data yang banyak di dalam sebuah variabel, memiliki nama dan value nya masing-masing.

5. Array
   Tipe data yang mampu menyimpan banyak data di dalam satu buah variabel. Dan data-data yang terdapat di dalam variabel tersebut diberikan nomor masing-masing sesuai urutannya
*/



//====================== SOAL 2 ===========================

//Tipe Data String di Javascript
const nama='Nadia Maharani';
let alamat='Jl.Urip Sumoharjo, Palembang';

//Tipe Data Numbers di Javascript
let noHandphone= 082289510227;
let noRumah=25 ;
let ukuranSepatu= 41;

//Tipe Data Boolean di Javascript
let is_employee= false;
const is_female= true;
let is_married= false;

//Tipe Data Object di Javascript
let hobi={
  name: 'Menulis, Desain, Programming, Traveling',
  level: 'Advanced'
}

const universitas={
  name: 'UIN Raden Fatah Palembang /',
  jurusan: 'S1 Sistem Informasi'
}

let pengalamanOrganisasi={
  name: 'Ketua Departemen SDM Study Club Sistem Informasi (SCSI)',
  year: '2018'
}

//Tipe Data Array di Javascript
const hewan= ['Kucing','Kelinci','Hamster'];
const kota= ['Jakarta', 'Palembang','Bogor','Bandung'];
let makananFavorit= ['Nasi Goreng','Bakso','Sate'];



//====================== SOAL 3 ===========================

const angkaPertama= 600;
const angkaKedua= 3;
let total

//Penjumlahan
total = angkaPertama + angkaKedua
console.log(total)

//Pengurangan
total = angkaPertama - angkaKedua
console.log(total)

//Perkalian
total = angkaPertama * angkaKedua
console.log(total)

//Pembagian
total = angkaPertama / angkaKedua
console.log(total)


//Console.log gabungan di soal 2
console.log(`${universitas.name} ${universitas.jurusan}`)
console.log(`Pengalaman organisasi saya adalah saya pernah di amanahkan menjadi ${pengalamanOrganisasi.name} pada tahun ${pengalamanOrganisasi.year}`)
console.log(`Nama saya ${nama}, No Rumah ${noRumah}`)
