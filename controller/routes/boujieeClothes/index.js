const express = require('express');
const router = express.Router();

router.get("/expensiveclothes", async (req, res) =>{
    res.send("clothes for joe")
})

module.exports = router;
