const React = require('react');

// стили
import Container from 'react-bootstrap/Container';

// компоненты
const Navigation = require('./ui/Navigation');

module.exports = function Layout({ title, children, user, score }) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
          integrity='sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN'
          crossOrigin='anonymous'
        />
        <script src='/scripts/delTweet.js' defer />
        <script src='/scripts/upTweet.js' defer />
        <title>{title}</title>
      </head>
      <body>
        <Navigation user={user} score={score} />
        <Container>{children}</Container>
      </body>
    </html>
  );
};
