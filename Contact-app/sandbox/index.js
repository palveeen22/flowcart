// const fs = require("fs"); // core modul
// const cetakNama = require("./coba"); // local module
// const moment = require("moment"); // npm modul/3rd party/ ada di node_modules

// const coba = require("./coba"); // local module

// console.log(coba.mahasiswa.cetakMhs());

const fs = require("fs");
// console.log(fs);

//menulis str ke file secraa sycnronous
fs.writeFileSync("test.txt", "Hello Word secara syncronous!");
