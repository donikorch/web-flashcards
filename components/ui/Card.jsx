const React = require('react');

// стили
import Card from 'react-bootstrap/Card';

module.exports = function Navigation({ category }) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={category.img} />
        <Card.Body>
          <Card.Title>{category.name}</Card.Title>
          {/* <Button variant='primary'>Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
};
