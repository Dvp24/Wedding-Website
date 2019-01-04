const mongoose = require("mongoose");
const db = require("../models");

require("mongoose-type-email");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/weddingwebsite"
);

const guestListSeed = [
  {
    firstName: "Erica",
    lastName: "Piano",
    peopleCount: 1,
    answer: true,
    date: new Date(Date.now()),
    note: "I'll be late",
    contactInfo: {
      phone: 9082404743,
      email: "ericapiano@gmail.com"
    }
  },
  {
    firstName: "Kerrin",
    lastName: "Zuco",
    peopleCount: 2,
    answer: false,
    date: new Date(Date.now()),
    note: "so sorry we can't make it!",
    contactInfo: {
      phone: 7322973319,
      email: "kerrinzuco@gmail.com"
    }
  }
];

const registrySeed = [
  {
    productName: "blanket",
    description: "fleece blanket color grey"
  },
  {
    productName: "Keurig",
    description: "Keurig K-Cafe Special Edition"
  }
];

db.list
  .remove({})
  .then(() => db.list.collection.insertMany(guestListSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.registry
  .remove({})
  .then(() => db.registry.collection.insertMany(registrySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
