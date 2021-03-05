//* create a test data set of valid users
require("dotenv").config();
require("./../../config/mongodb"); //Path to db config aka MongoDB
const SneakerModel = require("./../../models/Sneaker"); // Path to Model

//* Define data sample
const sneakers = [
  {
    // name: "value",
    name: "Nike Air Jordan",
    ref: "blabla",
    size: "42",
    description: "Iconic shoes",
    price: "100",
    category: "men",
    id_tags: ["6041fc3cfa916310a0a5d8f3"],
    image:
      "https://res.cloudinary.com/ago59/image/upload/v1614938882/sneakerLove/AirJordan_ghqt6f.png",
  },
  {
    // name: "value",
    name: "Converse All Stars",
    ref: "blibli",
    size: "38",
    description: "Original sneakers",
    price: "60",
    category: "women",
    id_tags: ["6041fc3cfa916310a0a5d8f4"],
    image:
      "https://res.cloudinary.com/ago59/image/upload/v1614939050/sneakerLove/AllStars_dah1nf.png",
  },
  {
    // name: "value",
    name: "Adidas Yezzy",
    ref: "bloblo",
    size: "31",
    description: "Amazing sneakers",
    price: "400",
    category: "kids",
    id_tags: ["6041fc3cfa916310a0a5d8f5", "6041fc3cfa916310a0a5d8f6"],
    image:
      "https://res.cloudinary.com/ago59/image/upload/v1614939038/sneakerLove/Yezzy_sw05x0.png",
  },
];

(async function insertsneakers() {
  try {
    await SneakerModel.deleteMany();
    const inserted = await SneakerModel.insertMany(sneakers);
    console.log(`seed sneakers done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
})();

// insertsneakers()
