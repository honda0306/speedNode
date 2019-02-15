const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const honda = { name: 'Chris', age: '500', cool: false };
  res.send(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
