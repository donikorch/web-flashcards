const React = require('react');

// стили
import Form from 'react-bootstrap/Form';

// компоненты
const Layout = require('../Layout');

module.exports = function LogReg({ title }) {
  return (
    <>
      <Form.Label htmlFor='inputPassword5'>Login</Form.Label>
      <Form.Control type='text' required />
      <Form.Label htmlFor='inputPassword5'>Email</Form.Label>
      <Form.Control type='text' required />
      <Form.Label htmlFor='inputPassword5'>Password</Form.Label>
      <Form.Control type='password' required />
    </>
  );
};
