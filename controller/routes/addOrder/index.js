const express = require("express");
const router = express.Router();
const { Order } = require("../../../sequelize/models");

router.get("/cart", async (req, res) => {
  res.render("cart.html");
});

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
    const addOrderToTable = await Order.create(newOrder);
    res.status(200);
    res.redirect("/basic_homepage");
  } catch (error) {
    res.send(error); // "your order didnt go through"
  }
});

// button.onclick
// sends me whatever the id of product is, orderSUmmary, carrierService, trackingNumber, delivery Date,

module.exports = router;
