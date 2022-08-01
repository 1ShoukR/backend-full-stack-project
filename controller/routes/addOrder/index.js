const express = require('express');
const router = express.Router();
const { Order } = require("../../../sequelize/models")




// adds order to the orders table
router.post("/add_order", async (req, res) =>{
    const { userId, babyProductsId, computerProductsId, boujieeClothesId, freeJunkId, orderSummary, carrierService, trackingNumber, deliveryDate} = req.body
    console.log(
    userId,
    babyProductsId,
    computerProductsId,
    boujieeClothesId,
    freeJunkId,
    orderSummary,
    carrierService,
    trackingNumber,
    deliveryDate
    );
    const newOrder = {
        userId: userId,
        babyProductsId: babyProductsId,
        computerProductsId: computerProductsId,
        boujieeClothesId: boujieeClothesId,
        freeJunkId: freeJunkId,
        orderSummary: orderSummary,
        carrierService: carrierService,
        trackingNumber: trackingNumber,
        deliveryDate: deliveryDate
    }
    const addOrderToTable = await Order.create(newOrder)
})


// button.onclick
// sends me whatever the id of product is, orderSUmmary, carrierService, trackingNumber, delivery Date,

module.exports = router;