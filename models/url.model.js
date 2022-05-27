const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  mainUrl: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("url", UrlSchema);
