const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Message", messageSchema);
