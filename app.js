const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const expressLayouts = require("express-ejs-layouts");

const { body, validationResult, check } = require("express-validator");

const validator = require("validator");
const {
  loadContacts,
  findContact,
  addContact,
  cekDuplicate,
} = require("./utils/contacts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

//call ejs
app.set("view engine", "ejs");

//middleware buildin
app.use(express.static("public"));

// call ejs layouts (third party)
app.use(expressLayouts);

//midleware for post
app.use(express.urlencoded({ extended: true }));

//konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

//root ( halaman utama dalam app)
//route (navigasi path halaman  )
app.get("/", (req, res) => {
  //call halaman dr view
  const mahasiswa = [
    {
      nama: "bejo",
      email: "alvin22@gmail.com",
    },
    {
      nama: "erik",
      email: "erik32@gmail.com",
    },
    {
      nama: "nani",
      email: "nani12@gmail.com",
    },
  ];
  res.render("index", {
    nama: "alvin",
    title: "Halaman Utama",
    mahasiswa,
    layout: "layouts/mainLayouts",
  }); // send nama to index.ejs, buat obj dan tarik keynya ke ejs untuk di tampilin
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/mainLayouts",
    title: "Halaman about",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContacts();

  //show contact
  res.render("contact", {
    layout: "layouts/mainLayouts",
    title: "Halaman contact",
    contacts,
    msg: req.flash("msg"),
  });
});

//add data contact
app.get("/contact/add", (req, res) => {
  //show contact
  res.render("add-contact", {
    title: "Form tambah contact",
    layout: "layouts/mainLayouts",
  });
});

//proses data contact
app.post(
  "/contact",
  [
    body("nama").custom((value) => {
      const duplicate = cekDuplicate(value);

      if (duplicate) {
        throw new Error("Nama sudah terdaftar, isi ulang!");
      }
      return true;
    }),
    check("email", "email tidak valid").isEmail(),
    check("number", "number tidak valid").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("add-contact", {
        title: "Form Tambah Data Contact",
        layout: "layouts/mainLayouts",
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      //kriim flash msg
      req.flash("msg", "Data berhasil ditambahkan");

      // //routenya get disini
      res.redirect("/contact");
    }
  }
);

//get contacts dengan param / detail
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  //show contact
  res.render("detail", {
    title: "Halaman detail",
    layout: "layouts/mainLayouts",
    contact,
  });
});

//middleware
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 Error</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
