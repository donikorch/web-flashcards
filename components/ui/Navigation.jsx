const React = require('react');

// стили
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

module.exports = function Navigation({ user, score }) {
  return (
    <>
      <Navbar className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand>Quiz</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-start .hidden-score'>
            <Navbar.Text className='score'>
              {user ? `Your score: ${score}` : ''}
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className='justify-content-end .hidden-name'>
            <Navbar.Text>
              {user ? (
                <a>Signed in as: {`${user.login}`}</a>
              ) : (
                <a>Hello, anonymous!</a>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
