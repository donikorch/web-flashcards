const router = require('express').Router();

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

// router.get('/*', (req, res) => {
//   res.redirect(
//     'https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png',
//   );
// });

module.exports = router;
