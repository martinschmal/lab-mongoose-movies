const mongoose = require("mongoose");

const celebSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  occupation: String,
  catchPhrase: String
});

const Celeb = mongoose.model("Celeb", celebSchema);

module.exports = Celeb;
