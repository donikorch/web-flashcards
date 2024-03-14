// стили
import Container from 'react-bootstrap/Container';

const React = require('react');

// компоненты
const Navigation = require('./ui/Navigation');

module.exports = function Layout({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
        />
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
        <Navigation />
        <Container>{children}</Container>
      </body>
    </html>
  );
};
