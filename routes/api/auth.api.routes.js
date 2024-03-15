const { User } = require('../../db/models');

const router = require('express').Router();

router.post('/registration', async (req, res) => {
  try {
    const { login, email, password } = req.body;
    const user = await User.create({ login, email, password });
    if (user) {
      res.app.locals.user = user;
      res.json({ message: 'Отлично' });
      // res.redirect("/");
    } else res.status(400).json({ error: 'Не все поля заполнены' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  try {
    const result = await User.findOne({ where: { email, password } });
    if (result) {
      res.app.locals.user = result;
      res.json({ message: 'success' });
    } else {
      res.json({ message: 'Пользователя нет' });
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

module.exports = router;
