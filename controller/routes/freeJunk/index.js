const express = require('express');
const router = express.Router();
const {freeJunks} = require('../../../sequelize/models');

router.get("/get_your_free_stuff_here", async (req, res) =>{
    const freeJunkToGet = await freeJunks.findAll()
    console.log(freeJunkToGet)
    res.render("freeJunk.html", {locals: {
        freeJunks: freeJunkToGet
    }})
})

module.exports = router;