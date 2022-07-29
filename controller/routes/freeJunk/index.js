const express = require('express');
const router = express.Router();

router.get("/get_your_free_stuff_here", async (req, res) =>{
    res.send("Free junk")
})

module.exports = router;