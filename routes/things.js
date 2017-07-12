const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Things\n');
});

router.post('/', (req, res) => {
  res.send('New thing created\n');
});

module.exports = router;
