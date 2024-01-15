const mongoose = require("mongoose");

require("dotenv").config();
const mongoUrl = process.env.mongo_url;
mongoose.connect(mongoUrl);

const CardsSchema = new mongoose.Schema({
  name: String,
  description: String,
  interest: Array,
  linkdin: String,
  twitter: String,
});

const Cards = mongoose.model("Cards", CardsSchema);

module.exports = Cards;
