const express = require('express');
const router = express.Router();
const { babyProducts, boujieeClothes, computerProducts, freeJunks, Order, user, } = require('../../../sequelize/models');


const checkLogin = (req, res, next) => {
  // add this function to every routes page and have it redirect them to the login page html file
  if (req.session.user) {
    next();
  } else {
    res.render('createUser.html');
  }
};

router.get("/all_your_baby_needs", checkLogin, async (req, res) =>{
    const babyStuffToGet = await babyProducts.findAll()
    console.log(babyStuffToGet)
    res.render("babyProducts.html" ,{Locals: {
        babyNeeds: babyProducts
    }})
})

module.exports = router;
