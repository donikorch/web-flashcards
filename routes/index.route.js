const router = require('express').Router();

// роуты
const main = require('./views/main.route');

router.use('/', main);

router.get('/*', (req, res) => {
  res.json({ message: '404' });
});

module.exports = router;
