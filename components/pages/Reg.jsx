const React = require('react');

// стили
import Button from 'react-bootstrap/Button';

// компоненты
const Layout = require('../Layout');
const FormLogReg = require('../ui/FormLogReg');

module.exports = function Reg({ title }) {
  return (
    <Layout title={title}>
      <FormLogReg></FormLogReg>
      <Button type='submit' variant='success'>
        Зарегистрироваться
      </Button>{' '}
    </Layout>
  );
};
