const router = require('express').Router();

// компоненты
const Main = require('../../components/pages/Main');

// модели
const { Category, User } = require('../../db/models');

// главная страница
router.get('/quiz', async (req, res) => {
  const categories = await Category.findAll();
  const user = await User.findOne({ where: { id: 1 } });

  const main = res.renderComponent(Main, {
    title: 'Quiz',
    categories,
    user,
    score: 100,
  });

  res.send(main);
});

module.exports = router;
