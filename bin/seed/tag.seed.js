//* create a test data set of valid users
require("dotenv").config();
require("../../config/mongodb"); //Path to db config aka MongoDB
const TagModel = require("../../models/Tag"); // Path to Model

//* Define data sample
const tags = [
  {
    label: "12345",
  },
  {
    label: "12346",
  },
  {
    label: "12347",
  },
  {
    label: "12348",
  },
];

async function inserttags() {
  try {
    await TagModel.deleteMany();
    const inserted = await TagModel.insertMany(tags);
    console.log(`seed tags done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

inserttags(tags);
