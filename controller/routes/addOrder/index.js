const express = require("express");
const router = express.Router();
const { Order } = require("../../../sequelize/models");

const checkLogin = (req, res, next) => {
  // add this function to every routes page and have it redirect them to the login page html file
  if (req.session.user) {
    next();
  } else {
    res.render("createUser.html");
  }
};

// adds order to the orders table
router.post("/add_order", checkLogin, async (req, res) => {
  // make an alert on frontend that says "your order has been complete"
  try {
    const { userId, babyProductId, computerProductId, boujieeClothesId, freeJunkId, orderSummary, carrierService, trackingNumber, deliveryDate } = req.body;
    console.log(userId, babyProductId, computerProductId, boujieeClothesId, freeJunkId, orderSummary, carrierService, trackingNumber, deliveryDate);
    const newOrder = {
      userId: req.session.user.id,
      babyProductId: babyProductId,
      computerProductId: computerProductId,
      boujieeClothesId: boujieeClothesId,
      freeJunkId: freeJunkId,
      orderSummary: orderSummary,
      carrierService: carrierService,
      trackingNumber: trackingNumber,
      deliveryDate: deliveryDate,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    console.log(newOrder);
    const addOrderToTable = await Order.create(newOrder);
    console.log(addOrderToTable);
    res.status(200);
    res.redirect("/basic_homepage");
  } catch (error) {
    res.send(error); // "your order didnt go through"
  }
});

// button.onclick
// sends me whatever the id of product is, orderSUmmary, carrierService, trackingNumber, delivery Date,

module.exports = router;
