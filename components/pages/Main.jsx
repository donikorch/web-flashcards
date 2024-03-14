const React = require('react');

// компоненты
const Layout = require('../Layout');
const Card = require('../ui/Card');

module.exports = function Main({ title, user, score, categories }) {
  return (
    <Layout title={title} user={user} score={score}>
      <div
        className='d-flex justify-content-center align-items-center categories'
        style={{ height: '100vh' }}
      >
        {categories.map((category) => (
          <div key={category.id} className='m-5' data-id={category.id}>
            <Card category={category} />
          </div>
        ))}
      </div>
    </Layout>
  );
};
