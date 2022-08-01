const express = require('express');
const router = express.Router();
const { babyProducts, boujieeClothes, computerProducts, freeJunks, Order, user, } = require('../../../sequelize/models');


// gets all expenisve clothes to get
router.get("/expensiveclothes", async (req, res) =>{
    console.log(req.session);
    const expensiveClothesToGet = await boujieeClothes.findAll()
    console.log(expensiveClothesToGet)
    if (expensiveClothesToGet) {
        res.status(200)
        res.render("boujieeClothes.html", {locals: {
            theBlkeCollection: expensiveClothesToGet
        }})
        
    } else {
        res.status(400).send(error)
    }
})

module.exports = router;
