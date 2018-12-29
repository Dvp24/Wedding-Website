const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RVSP = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  peopleCount: { type: Number, required: true },
  answer: { type: Boolean, required: true },
  date: { type: Date, default: Date.now }
});

const rsvp = mongoose.model("RSVP", RSVP);

module.exports = rsvp;
