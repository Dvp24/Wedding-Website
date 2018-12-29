const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Registry = new Schema({
  id?,
  productName: { type: String, required: true },
  description: { type: Text, required: false }
});

const registry = mongoose.model("RSVP", Registry);

module.exports = registry;
