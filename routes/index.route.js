const router = require('express').Router();

// роуты
const logReg = require('./views/logreg.route');

router.use('/', logReg);

router.get('/*', (req, res) => {
  res.json({ message: '404' });
});

module.exports = router;
