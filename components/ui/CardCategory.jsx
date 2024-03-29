const React = require('react');

// стили
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

module.exports = function CardCategory({ category }) {
  return (
    <>
      <Card style={{ width: '30rem', height: '40rem' }}>
        <Card.Img variant='top' src={category.img} />
        <Card.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Card.Title>{category.name}</Card.Title>
          <div className='card'>
            <Button
              type='button'
              href={`/categories/${category.id}`}
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
