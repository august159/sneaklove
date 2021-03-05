const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const SneakerModel = require("./../models/Sneaker");
const TagModel = require("./../models/Tag");
const UserModel = require("./../models/User");

router.get("/prod-add", async (req, res, next) => {
  const tags = await TagModel.find();
  res.render("products_add", { tags });
});

router.post("/prod-add", async (req, res, next) => {
  // const
});

router.get("/prod-manage", async (req, res, next) => {
  const sneakers = await SneakerModel.find();
  res.render("products_manage", { sneakers });
});

module.exports = router;
