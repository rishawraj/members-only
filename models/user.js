const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, maxLength: 50, required: true },
  fullname: { type: String, maxLength: 50, required: true },
  password: { type: String, required: true },
  membership: { type: Boolean, required: true },
  isAdmin: { type: Boolean },
});

module.exports = mongoose.model("User", UserSchema);
