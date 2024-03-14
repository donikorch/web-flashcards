const React = require('react');

// стили
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

module.exports = function Navigation({ user, score }) {
  return (
    <>
      <Navbar className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='/'>Quiz</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-center .hidden-score'>
            <Navbar.Text>{user ? `Your score: ${score}` : ''}</Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className='justify-content-end .hidden-name'>
            <Navbar.Text>
              {user
                ? `Signed in as: <a href='#'>${user.login}</a>`
                : 'Hello, anonymous!'}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
