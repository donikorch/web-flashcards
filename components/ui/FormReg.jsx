const React = require('react');

// стили
import Form from 'react-bootstrap/Form';

// компоненты
const Layout = require('../Layout');

module.exports = function FormLogReg({ children }) {
  return (
    <>
      <Form.Group>
        <Form.Label htmlFor='inputPassword5'>Login</Form.Label>
        <Form.Control type='text' name='login' placeholder='Name' required />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='inputPassword5'>Email</Form.Label>
        <Form.Control type='email' name='email' placeholder='Email' required />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label htmlFor='inputPassword5'>Password</Form.Label>
        <Form.Control
          type='password'
          name='password'
          placeholder='Password'
          required
        />
      </Form.Group>

      {children}
    </>
  );
};
