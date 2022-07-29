const express = require('express');
const router = express.Router();
const {babyProducts,boujieeClothes,computerProducts,freeJunk,Order,user,} = require('../../../sequelize/models');



router.get("/", async (req, res) =>{
    res.send("Welcome to the homepage!")
})


module.exports = router;