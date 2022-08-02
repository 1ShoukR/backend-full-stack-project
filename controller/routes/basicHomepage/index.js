const express = require('express');
const router = express.Router();
const {babyProducts,boujieeClothes,computerProducts,freeJunk,Order,user,} = require('../../../sequelize/models');


// can render out the name of the user I.E: "Welcome *insert user from req.session.user"
router.get("/", async (req, res) =>{
    console.log(req.session.user);
    res.render("index.html", {locals: {name: req.session.user}})
})


module.exports = router;