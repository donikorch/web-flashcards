const router = require('express').Router();

const ErrorPage = require('../components/pages/ErrorPage');

// роуты api
const authApiRouter = require('./api/auth.api.routes');

// роуты view
const logReg = require('./views/logreg.route');
const main = require('./views/main.route');
const category = require('./views/category.route');

// route view
router.use('/', logReg);
router.use('/quiz', main);
router.use('/categories', category);

// route api
router.use('/', authApiRouter);

router.get('/*', (req, res) => {
  res.send(res.renderComponent(ErrorPage));
});

module.exports = router;
