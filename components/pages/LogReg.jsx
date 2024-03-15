const React = require('react');

// стили
import Button from 'react-bootstrap/Button';

// компоненты
const Layout = require('../Layout');
const FormLog = require('../ui/FormLog');

module.exports = function LogReg({ title }) {
  return (
    <Layout title={title}>
      <form className='authForm'>
        <FormLog>
          <Button type='submit' className='mb-2' variant='primary'>
            Войти
          </Button>{' '}
          <Button href='/registration' className='mb-2' variant='success'>
            Зарегистрироваться
          </Button>{' '}
        </FormLog>
      </form>
    </Layout>
  );
};
