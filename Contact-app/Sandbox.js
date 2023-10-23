// const getData = (dataEndpoint) => {
//   return new Promise((resolve, reject) => {
//     //some request to the endpoint;
//     //  if(request is successful){
//     //    //do something;
//     //    resolve();
//     //  }
//     //  else if(there is an error){
//     //    reject();
//     //  }
//   });
// };

//dari appjs
// const yargs = require("yargs");
//mengambil argument dari comment line

// const contact = require("./contacts");
// console.log(yargs.argv);
// // bisa pakai objc distructering
// // const { saveContact, pertanyaan } = require("./contacts");

// const main = async () => {
//   const nama = await contact.pertanyaan("Input your name : ");
//   const email = await contact.pertanyaan("Input your Email : ");
//   const number = await contact.pertanyaan("Input your phone Number : ");

//   contact.saveContact(nama, email, number);
// };

// main();

//file syste

//menuliskan string ke file syncronous
// fs.writeFileSync("test.txt", "Hello word sycncronous!");
//sycncrous
// try {
//   fs.writeFileSync("data/test.txt", "menampilakn eror!");
// } catch (e) {
//   console.log(e);
// }

//menuliskan string ke file asyncronous
// fs.writeFile("data/test.txt", "Hello word secara Asynchronous", (err) => {
//   console.log(err);
// });

//membaca isi file secara syncronous
// let read = fs.readFileSync("data/test.txt");
// console.log(read.toString());

//membaca isi file secara asyncronous
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Please input your email address : ", (email) => {
//       resolve(email);
//     });
//   });
// };

//const pertanyaan = (question) => {
//   return new Promise((resolve, reject) => {
//     rl.question(question, (nama) => {
//       resolve(nama);
//     });
//   });
// };

//     const contact = {
//       nama: argv.nama,
//       email: argv.email,
//       number: argv.number,
//     };
//     console.log(contact);

//syntax ====>
// const { rejects } = require("assert");
// const { error } = require("console");
// const { resolve } = require("path");

// const http = require("http");
// const fs = require("fs");

// const port = 3000;

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("Error : file not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// // Create a local server to receive data from
// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/html", // kalau mau rest api C-Tnya json
//     });

//     const url = req.url;

//     if (url === "/about") {
//       renderHTML("./about.html", res);
//     } else if (url === "/contact") {
//       renderHTML("./contact.html", res);
//     } else {
//       renderHTML("./index.html", res);
//     }
//   })
//   .listen(port, () => {
//     console.log(`server is listening on port ${port}..`);
//   });
