const React = require('react');

module.exports = function ErrorPage() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img src='/sticker.gif' />;
      </div>
    </>
  );
};
