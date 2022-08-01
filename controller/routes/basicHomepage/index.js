const express = require('express');
const router = express.Router();
const {babyProducts,boujieeClothes,computerProducts,freeJunk,Order,user,} = require('../../../sequelize/models');



router.get("/", async (req, res) =>{
    res.render("index.html")
})


module.exports = router;