const express = require('express');
const router = express.Router();
const {babyProducts,boujieeClothes,computerProducts,freeJunk,Order,user,} = require('../../../sequelize/models');


// can render out the name of the user I.E: "Welcome *insert user from req.session.user"
router.get("/", async (req, res) =>{
    res.render("index.html", {locals: {name: req.sessionStore.user}})
})


module.exports = router;