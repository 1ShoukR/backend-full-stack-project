const express = require("express");
const router = express.Router();
const { boujieeClothes } = require("../../../sequelize/models");
const checkLogin = (req, res, next) => {
  // add this function to every routes page and have it redirect them to the login page html file
  if (req.session.user) {
    next();
  } else {
    res.render("create-user.html");
  }
};

// gets all expenisve clothes to get
router.get("/expensiveclothes", checkLogin, async (req, res) => {
  console.log(req.session);
  const expensiveClothesToGet = await boujieeClothes.findAll();
  console.log(expensiveClothesToGet);
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
