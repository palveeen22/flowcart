const fs = require("fs"); // fs as a module yang memanggil module fs
const chalk = require("chalk");
const validator = require("validator");

//create a folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//create json file if false
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

//loader / storing data of json
const loadContacts = () => {
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);
  return contacts;
};

const saveContact = (nama, email, number) => {
  const contact = {
    nama,
    email,
    number,
  };

  const contacts = loadContacts();

  //validasi nama duplikat
  const duplicateName = contacts.find((contact) => contact.nama === nama);
  if (duplicateName) {
    console.log(
      chalk.red.inverse.bold("contact sudah terdaftar, gunakan nama lain")
    );
    return false;
  }

  //cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(
        chalk.red.inverse.bold(
          "Email tidak valid. Isi dengan email yang valid !"
        )
      );
      return false;
    }
  }

  //cek number
  if (!validator.isMobilePhone(number, "id-ID")) {
    console.log(
      chalk.red.inverse.bold(
        "Number tidak valid. Isi dengan Number yang valid !"
      )
    );
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  if (email === undefined) {
    console.log(
      `Thank you ${nama}, has been registered with your phoneNumber ${number}`
    );
  } else {
    console.log(
      chalk.green.inverse.bold(
        `Thank you ${nama}, your ${email} has been registered with your phoneNumber ${number}`
      )
    );
  }
};

const listContacts = () => {
  const contact = loadContacts();
  console.log(chalk.cyan.inverse.bold(" Daftar kontak : "));
  contact.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.number}`);
  });
};

const detailContact = (nama) => {
  const contact = loadContacts();
  console.log(chalk.cyan.inverse.bold(" Daftar kontak by name : "));

  const contacts = contact.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contacts) {
    console.log(chalk.red.inverse.bold(`${nama} not found`));
    return false;
  }

  console.log(contacts.nama);
  console.log(contacts.number);

  if (contacts.email) {
    console.log(contacts.email);
  }
};

const deleteContact = (nama) => {
  const contact = loadContacts();

  const newContact = contact.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (contact.length === newContact.length) {
    console.log(
      chalk.red.inverse.bold(
        `You try to delete, but ${nama} not found in our data base`
      )
    );
    return false;
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(newContact)); //meanmpilakn ke json

  console.log(
    chalk.green.inverse.bold(
      `Thank you, ${nama} has been deleted from our data base`
    )
  );
};

module.exports = { saveContact, listContacts, detailContact, deleteContact };
