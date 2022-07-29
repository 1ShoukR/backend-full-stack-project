const express = require('express');
const router = express.Router();

router.get('/insane_pc_stuff', async (req, res) => {
  res.send('Pc parts');
});


module.exports = router;