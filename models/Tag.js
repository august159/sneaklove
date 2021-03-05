const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tagSchema = new Schema({
  label: { type: String, required: true },
});

const TagModel = mongoose.model("tags", tagSchema);
module.exports = TagModel;
