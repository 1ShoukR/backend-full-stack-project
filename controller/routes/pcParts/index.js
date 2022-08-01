const express = require('express');
const router = express.Router();
const { babyProducts, boujieeClothes, computerProducts, freeJunks, Order, user,} = require('../../../sequelize/models');


// gets all the pc stuff from database
router.get('/insane_pc_stuff', async (req, res) => {
    console.log(req.session);
    const pcPartsToGet = await computerProducts.findAll();
    console.log(pcPartsToGet)
    res.render('pcParts.html', {locals: {
        pcParts: pcPartsToGet
    }})
});


module.exports = router;