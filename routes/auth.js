const express = require("express");
const router = new express.Router();
const UserModel = require("./../models/User");
const bcrypt = require("bcrypt"); // lib to encrypt data

router.get("/signin", (req, res, next) => {
  res.render("signin");
});

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  const foundUser = await UserModel.findOne({ email: email });

  if (!foundUser) {
    res.render("signin", {
      msg: { status: "error", text: "Invalid credentials" },
    });
  } else {
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
    if (!isSamePassword) {
      res.render("signin", {
        msg: { status: "error", text: "Invalid credentials" },
      });
    } else {
      const userObject = foundUser.toObject();
      delete userObject.password;
      req.session.currentUser = userObject;
      res.redirect("/");
    }
  }
});

router.get("/signup", async (req, res, next) => {
  res.render("signup");
});

router.post("/signup", async (req, res, next) => {
  try {
    const newUser = { ...req.body }; // clone req.body with spread operator
    const foundUser = await UserModel.findOne({ email: newUser.email });

    if (foundUser) {
      res.render("signup", {
        msg: { status: "warning", text: "Email already registered" },
      });
    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, 10);
      newUser.password = hashedPassword;
      await UserModel.create(newUser);
      res.render("signin", {
        msg: { status: "success", text: "Congrats ! You are now registered !" },
      });
    }
  } catch (err) {
    let errorMessage = "";
    for (field in err.errors) {
      errorMessage += err.errors[field].message + "\n";
    }
    res.render("signup", {
      msg: { status: "error", text: errorMessage },
    });
  }
});

module.exports = router;

router.get("/logout", async (req, res, next) => {
  req.session.destroy(function (err) {
    res.redirect("/signin");
  });
});

module.exports = router;
