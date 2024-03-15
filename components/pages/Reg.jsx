const React = require('react');

// стили
import Button from 'react-bootstrap/Button';

// компоненты
const Layout = require('../Layout');

module.exports = function Reg({ title }) {
  return (
    <Layout title={title}>
        <form className='sign-in'>
          <input type="text" name="login" placeholder="Name" required />
          <input type="password" name="password" placeholder="password" required />
          <input type="email" name="email" placeholder="email" required/>
          <Button type='submit' variant='success'>
          Зарегистрироваться
          </Button>{' '}
        </form>
    </Layout>
  );
};
