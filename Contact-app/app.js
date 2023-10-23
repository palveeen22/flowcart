const yargs = require("yargs");
const contacts = require("./contacts");

//add new contacts into json
yargs
  .command({
    command: "add",
    describe: "Create a new contacts",
    builder: {
      nama: {
        describe: "Full Name",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email address",
        demandOption: false,
        type: "string",
      },
      number: {
        describe: "Phone Number",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      contacts.saveContact(argv.nama, argv.email, argv.number);
    },
  })
  .demandCommand();

// show list of contacts
yargs.command({
  command: "list",
  describe: "show all names and numbers",
  handler() {
    contacts.listContacts();
  },
});

//show detaild from contacts
yargs.command({
  command: "details",
  describe: "show details by name",
  builder: {
    nama: {
      describe: "Full Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

//delete contacts by name
yargs.command({
  command: "delete",
  describe: "delete contact by name",
  builder: {
    nama: {
      describe: "Full Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  },
});

yargs.parse();
