const express = require('express');
const router = express.Router();
const { freeJunks } = require('../../../sequelize/models');
const checkLogin = (req, res, next) => {
  // add this function to every routes page and have it redirect them to the login page html file
  if (req.session.user) {
    next();
  } else {
    res.render('createUser.html');
  }
};

// gets all free stuff from database
router.get("/get_your_free_stuff_here", checkLogin, async (req, res) =>{
    console.log(req.session.user);
    const freeJunkToGet = await freeJunks.findAll()
    console.log(freeJunkToGet)
    res.render("freeJunk.html", {locals: {
        freeJunks: freeJunkToGet
    }})
})

module.exports = router;