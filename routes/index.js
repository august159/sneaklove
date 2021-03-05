const express = require("express");
const router = express.Router();
const SneakerModel = require("./../models/Sneaker");
const TagModel = require("./../models/Tag");
const UserModel = require("./../models/User");

// return console.log(`\n\n
// -----------------------------
// -----------------------------
//      wax on / wax off !
// -----------------------------
// -----------------------------\n\n`
// );

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/:cat", async (req, res, next) => {
  try {
    const category = req.params.cat;
    let sneakers;
    if (category === "collection") {
      sneakers = await SneakerModel.find();
    } else {
      sneakers = await SneakerModel.find({ category: category });
    }
    console.log("category", category);
    res.render("products", { category, sneakers });
  } catch (error) {
    next(error);
  }
});

router.get("/one-product/:id", async (req, res, next) => {
  try {
    const sneaker = await SneakerModel.findById(req.params.id);
    res.render("one_product", { sneaker });
  } catch (error) {
    next(error);
  }
});

router.get("/signup", (req, res) => {
  res.send("sneak");
});

router.get("/signin", (req, res) => {
  res.send("love");
});

module.exports = router;
