const router = require('express').Router();

// роуты
const logReg = require('./views/logreg.route');
const main = require('./views/main.route');
const category = require('./views/category.route');

router.use('/', logReg);
router.use('/quiz', main);
router.use('/categories', category);

router.get('/*', (req, res) => {
  res.json({ message: '404' });
});

module.exports = router;
