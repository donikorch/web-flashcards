const React = require('react');

// стили
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// компоненты
const Layout = require('../Layout');

module.exports = function Question({ title, user, score, question }) {
  return (
    <Layout title={title} user={user} score={score}>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <div key={question.id} className='m-5' data-id={question.categoryId}>
          <Card style={{ width: '40rem', height: '40rem' }}>
            <Card.Img variant='top' src={question.img} />
            <Card.Body>
              <Card.Title>{question.name}</Card.Title>
              <div className='card'>
                <Button variant='primary'>Проверить</Button>
                <Button variant='success' className='next'>
                  Далее
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
