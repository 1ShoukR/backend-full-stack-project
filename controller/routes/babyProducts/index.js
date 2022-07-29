const express = require('express');
const router = express.Router();


router.get("/all_your_baby_needs", async (req, res) =>{
    res.send("baby stuff")
})

module.exports = router;
