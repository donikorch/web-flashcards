const React = require('react');

// стили
import Button from 'react-bootstrap/Button';

// компоненты
const Layout = require('../Layout');
const FormLogReg = require('../ui/FormLogReg');

module.exports = function LogReg({ title }) {
  return (
    <Layout title={title}>
      <FormLogReg></FormLogReg>
      <Button type='submit' variant='primary'>
        Войти
      </Button>{' '}
      <Button href='/registration' variant='success'>
        Зарегистрироваться
      </Button>{' '}
    </Layout>
  );
};
