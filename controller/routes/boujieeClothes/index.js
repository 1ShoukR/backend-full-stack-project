const express = require("express");
const router = express.Router();
const { boujieeClothes } = require("../../../sequelize/models");
const checkLogin = (req, res, next) => {
  // add this function to every routes page and have it redirect them to the login page html file
  if (req.session.user) {
    next();
  } else {
    // res.render("create-user.html");
    res.redirect("http://127.0.0.1:3005/login_page/new_user");
  }
};

// gets all expenisve clothes to get
router.get("/expensiveclothes", checkLogin, async (req, res) => {
  const expensiveClothesToGet = await boujieeClothes.findAll();
  if (expensiveClothesToGet) {
    res.status(200);
    res.render("fashion.html", {
      locals: {
        theBlkeCollection: expensiveClothesToGet,
      },
    });
  } else {
    res.status(400).send(error);
  }
});

module.exports = router;
