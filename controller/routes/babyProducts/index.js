const express = require('express');
const router = express.Router();
const { babyProducts, boujieeClothes, computerProducts, freeJunks, Order, user, } = require('../../../sequelize/models');


router.get("/all_your_baby_needs", async (req, res) =>{
    const babyStuffToGet = await babyProducts.findAll()
    console.log(babyStuffToGet)
    res.render("babyProducts.html" ,{Locals: {
        babyNeeds: babyProducts
    }})
})

module.exports = router;
