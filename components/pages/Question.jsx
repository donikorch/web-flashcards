const React = require('react');

// компоненты
const Layout = require('../Layout');

module.exports = function Question({ title, user, score, question }) {
  return (
    <Layout title={title} user={user} score={score}>
      <div
        className='d-flex justify-content-center align-items-center categories'
        style={{ height: '100vh' }}
      >
        <div key={category.id} className='m-5' data-id={category.id}>
          {question.content}
        </div>
      </div>
    </Layout>
  );
};
