const express = require('express');
const router = express.Router();
const { babyProducts, boujieeClothes, computerProducts, freeJunks, Order, user,} = require('../../../sequelize/models');
const checkLogin = (req, res, next) => {
  // add this function to every routes page and have it redirect them to the login page html file
  if (req.session.user) {
    next();
  } else {
    res.render('createUser.html');
  }
};

// gets all the pc stuff from database
router.get('/insane_pc_stuff', checkLogin, async (req, res) => {
    console.log(req.session);
    const pcPartsToGet = await computerProducts.findAll();
    console.log(pcPartsToGet)
    res.render('pcParts.html', {locals: {
        pcParts: pcPartsToGet
    }})
});


module.exports = router;