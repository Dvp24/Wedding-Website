const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-email");

const guestList = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  peopleCount: { type: Number, required: true },
  answer: { type: Boolean, required: true },
  date: { type: Date, default: Date.now },
  note: { type: Text, required: false },
  contactInfo: {
    phone: Number,
    email: mongoose.SchemaTypes.Email
  }
});

const list = mongoose.model("RSVP", guestList);

module.exports = list;
