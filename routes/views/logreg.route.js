const router = require('express').Router();

// компоненты
const LogReg = require('../../components/pages/LogReg');
const Reg = require('../../components/pages/Reg');

// страница логина
router.get('/', async (req, res) => {
  const logReg = res.renderComponent(LogReg, {
    title: 'Login',
  });

  res.send(logReg);
});

// страница регистрации
router.get('/registration', async (req, res) => {
  const logReg = res.renderComponent(Reg, {
    title: 'Registration',
  });

  res.send(logReg);
});

module.exports = router;
