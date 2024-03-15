const router = require('express').Router();
const path = require('path')


// роуты api
const authApiRouter = require('./api/auth.api.routes');


// роуты view
const logReg = require('./views/logreg.route');

// route view

router.use('/', logReg);

// route api
router.use('/', authApiRouter);




router.get('/*', (req, res) => {
  res.redirect('https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png');
});

module.exports = router;
