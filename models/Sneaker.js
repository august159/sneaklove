const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const sneakerSchema = new Schema({
  // name: type,
  name: String,
  ref: String,
  size: Number,
  description: String,
  price: Number,
  category: { type: String, enum: ["men", "women", "kids"] },
  id_tags: [{ type: Schema.Types.ObjectId, ref: "tags" }],
  image: String,
});

const SneakerModel = mongoose.model("sneakers", sneakerSchema);
module.exports = SneakerModel;
