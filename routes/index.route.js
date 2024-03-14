const router = require('express').Router();
const path = require('path')

// роуты
const logReg = require('./views/logreg.route');

router.use('/', logReg);

router.get('/*', (req, res) => {
  res.redirect('https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png');
});

module.exports = router;
