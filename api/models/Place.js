const { kMaxLength } = require("buffer");
const { maxHeaderSize } = require("http");
const mongoose = require("mongoose");
const { title } = require("process");

const placeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  photos: [String],
  description: String,
});

const PlaceModel = mongoose.model("Place", placeSchema);

module.exports = PlaceModel;
