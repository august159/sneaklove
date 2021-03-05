const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  // name: type,
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
