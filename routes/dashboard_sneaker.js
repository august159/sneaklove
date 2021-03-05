const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const fileUploader = require("./../config/cloudinary");
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute");
const SneakerModel = require("./../models/Sneaker");
const TagModel = require("./../models/Tag");
const UserModel = require("./../models/User");

router.get("/prod-add", protectPrivateRoute, async (req, res, next) => {
  const tags = await TagModel.find();
  res.render("products_add", { tags });
});

router.post(
  "/prod-add",
  fileUploader.single("image"),
  async (req, res, next) => {
    const newSneaker = { ...req.body };
    console.log("newSneaker", newSneaker);
    if (!req.file) newSneaker.image = undefined;
    else newSneaker.image = req.file.path;
    console.log("req.file", req.file);
    try {
      await SneakerModel.create(newSneaker);
      res.redirect("/prod-add");
    } catch (err) {
      next(err);
    }
  }
);

router.post("/tag-add", async (req, res, next) => {
  try {
    await TagModel.create(req.body);
    res.redirect("/prod-add");
  } catch (error) {
    next(error);
  }
});

router.get("/prod-manage", protectPrivateRoute, async (req, res, next) => {
  const sneakers = await SneakerModel.find();
  res.render("products_manage", { sneakers });
});

module.exports = router;
