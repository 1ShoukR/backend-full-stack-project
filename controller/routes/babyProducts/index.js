const express = require("express");
const router = express.Router();
const { babyProducts } = require("../../../sequelize/models");

// check login function
const checkLogin = (req, res, next) => {
  // add this function to every routes page and have it redirect them to the login page html file
  if (req.session.user) {
    next();
  } else {
    res.render("createUser.html");
  }
};

// gets all baby products from database
router.get("/all_your_baby_needs", checkLogin, async (req, res) => {
  console.log(req.session.user);
  const babyStuffToGet = await babyProducts.findAll();
  console.log(babyStuffToGet);
  res.render("babyProducts.html", {
    Locals: {
      babyNeeds: babyProducts,
    },
  });
});

module.exports = router;
