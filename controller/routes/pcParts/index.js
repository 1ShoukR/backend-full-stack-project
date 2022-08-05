const express = require("express");
const router = express.Router();
const { computerProducts } = require("../../../sequelize/models");
const checkLogin = (req, res, next) => {
  // add this function to every routes page and have it redirect them to the login page html file
  if (req.session.user) {
    next();
  } else {
    // res.render("create-user.html");
    res.redirect("http://127.0.0.1:3005/login_page/new_user");
  }
};

// gets all the pc stuff from database
router.get("/insane_pc_stuff", checkLogin, async (req, res) => {
  const pcPartsToGet = await computerProducts.findAll();
  res.render("electronics.html", {
    locals: {
      pcParts: pcPartsToGet,
    },
  });
});

module.exports = router;
