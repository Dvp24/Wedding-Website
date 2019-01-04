const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Registry = new Schema({
  productName: { types: String, required: true },
  description: { type: Text, required: false }
});

const registry = mongoose.model("Registry", Registry);

module.exports = registry;
