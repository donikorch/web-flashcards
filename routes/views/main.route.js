const router = require('express').Router();

// компоненты
const Main = require('../../components/pages/Main');

// модели
const { Category } = require('../../db/models');

// главная страница
router.get('/', async (req, res) => {
  const categories = await Category.findAll();
  const user = res.app.locals.user;
  res.app.locals.score = 0;

  const main = res.renderComponent(Main, {
    title: 'Quiz',
    categories,
    user,
    score: res.app.locals.score,
  });

  res.send(main);
});

module.exports = router;
