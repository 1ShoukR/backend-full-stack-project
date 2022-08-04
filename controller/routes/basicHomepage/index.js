const express = require("express");
const router = express.Router();
const { boujieeClothes } = require("../../../sequelize/models");

const checkLogin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.render("create-user.html");
  }
};

router.get("/", async (req, res) => {
  const expensiveClothesToGet = await boujieeClothes.findAll();
  res.render("index.html", {
    locals: {
      name: req.session.user,
      theBlkeCollection: expensiveClothesToGet,
    },
  });
});

router.get("/get_current_user", async (req, res) => {
  if (req.session.user) {
    res.send(
      JSON.stringify({
        user: req.session.user,
      }),
    );
  } else {
    res.send(
      JSON.stringify({
        user: null,
      }),
    );
  }
});

module.exports = router;
