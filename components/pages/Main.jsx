const React = require('react');

// компоненты
const Layout = require('../Layout');
const Card = require('../ui/Card');

module.exports = function Main({ title, user, score, categories }) {
  return (
    <Layout title={title} user={user} score={score}>
      {categories.map((category) => (
        <div key={category.id}>
          <Card category={category} />
        </div>
      ))}
    </Layout>
  );
};
