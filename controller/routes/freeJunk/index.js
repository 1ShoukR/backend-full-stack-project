const express = require('express');
const router = express.Router();
const {freeJunks} = require('../../../sequelize/models');


// gets all free stuff from database
router.get("/get_your_free_stuff_here", async (req, res) =>{
    console.log(req.session.user);
    const freeJunkToGet = await freeJunks.findAll()
    console.log(freeJunkToGet)
    res.render("freeJunk.html", {locals: {
        freeJunks: freeJunkToGet
    }})
})

module.exports = router;