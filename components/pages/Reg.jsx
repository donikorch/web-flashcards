const React = require('react');

// стили
import Button from 'react-bootstrap/Button';

// компоненты
const Layout = require('../Layout');
const FormReg = require('../ui/FormReg');

module.exports = function Reg({ title }) {
  return (
    <Layout title={title}>
      <form className='sign-in'>
        <FormReg>
          <Button type='submit' className='mb-2' variant='success'>
            Зарегистрироваться
          </Button>{' '}
        </FormReg>
      </form>
    </Layout>
  );
};
