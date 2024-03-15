const router = require('express').Router();


// роуты api
const authApiRouter = require('./api/auth.api.routes');


// роуты view
const logReg = require('./views/logreg.route');

// route view

router.use('/', logReg);

// route api
router.use('/', authApiRouter);




router.get('/*', (req, res) => {
  res.json({ message: '404' });
});

module.exports = router;
