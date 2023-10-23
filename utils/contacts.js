const fs = require("fs"); // fs as a module yang memanggil module fs

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

//get all data in contact.json
const loadContacts = () => {
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);
  return contacts;
};

//find contact by name
const findContact = (nama) => {
  const contacts = loadContacts();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  return contact;
};

//menuliskan / menimpa data baru contact / get new data
const saveContacts = (contacts) => {
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

//menambahkan data contact baru
const addContact = (contact) => {
  const contacts = loadContacts();
  contacts.push(contact);
  saveContacts(contacts);
};

//validation, cek name duplicate

const cekDuplicate = (nama) => {
  const contacts = loadContacts();
  return contacts.find((contacts) => contacts.nama === nama);
};

module.exports = { loadContacts, findContact, addContact, cekDuplicate };
