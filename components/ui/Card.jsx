const React = require('react');

// стили
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

module.exports = function Card({ category }) {
  return (
    <>
      <Card style={{ width: '24rem' }}>
        <Card.Img variant='top' src={category.img} />
        <Card.Body>
          <Card.Title>{category.name}</Card.Title>
          <div className='card'>
            <Button
              type='submit'
              href={`/quiz/category_${category.id}/question_${(category.id, qu)}`}
              variant='outline-primary'
              className='play'
            >
              Играть
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
