const express = require('express');
const router = express.Router();
const { Order } = require("../../../sequelize/models")





router.post("/add_order", async (req, res) =>{
    res.send("This is your order")
})


// button.onclick
// sends me whatever the id of product is, orderSUmmary, carrierService, trackingNumber, delivery Date,

module.exports = router;