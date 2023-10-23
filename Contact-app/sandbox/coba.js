// const getUserSync = (id) => {
//   const nama = id === 1 ? "Sandhika" : "Galih";
//   return { id, nama };
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = "Hello World!";
// console.log(halo);

// const getUser = (id, cb) => {
//   const time = id === 1 ? 3000 : 2000;
//   setTimeout(() => {
//     const nama = id === 1 ? "Sandhika" : "Galih";
//     cb({ id, nama });
//   }, time);
// };

// const userSatu = getUser(1, (hasil) => {
//   console.log(hasil);
// });

// const userDua = getUser(2, (hasil) => {
//   console.log(hasil);
// });

// const halo = "Hello World!";
// console.log("Selesai");

function cetakNama(nama) {
  return `halo, nama saya ${nama}`;
}

const PI = 3.14;
const nama = "Alvin";

const mahasiswa = {
  nama: "Dody Ferdiansyah",
  umur: 20,
  cetakMhs() {
    return `hallo, nama saya ${this.nama} berumur ${this.umur}`;
  },
};

class Pesan {
  constructor() {
    console.log("object tealh di buat");
  }
}

// module.exports = PI;
// module.exports = nama;
module.exports = { PI, nama, mahasiswa, Pesan };
