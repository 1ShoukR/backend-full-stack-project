const express = require('express');
const router = express.Router();
const { babyProducts, boujieeClothes, computerProducts, freeJunks, Order, user, } = require('../../../sequelize/models');

router.get("/expensiveclothes", async (req, res) =>{
    const expensiveClothesToGet = await boujieeClothes.findAll()
    console.log(expensiveClothesToGet)
    if (expensiveClothesToGet) {
        res.status(200).send("The Blke Collection")
        res.render("boujieeClothes.html", {locals: {
            theBlkeCollection: expensiveClothesToGet
        }})
        
    } else {
        res.status(400).send(error)
    }
})

module.exports = router;
