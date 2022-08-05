const express = require("express");
const router = express.Router();
const { babyProducts } = require("../../../sequelize/models");

// check login function
const checkLogin = (req, res, next) => {
  // add this function to every routes page and have it redirect them to the login page html file
  if (req.session.user) {
    next();
  } else {
    // res.render("create-user.html");
    res.redirect("http://127.0.0.1:3005/login_page/new_user");
  }
};

// gets all baby products from database
router.get("/all_your_baby_needs", checkLogin, async (req, res) => {
  const babyStuffToGet = await babyProducts.findAll();
  res.render("baby.html", {
    locals: {
      test: "test",
      babyNeeds: babyStuffToGet,
    },
  });
});

module.exports = router;
