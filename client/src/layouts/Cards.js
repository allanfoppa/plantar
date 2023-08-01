import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Rating } from 'react-simple-star-rating'

// temp
import tempImage from '../assets/images/card-example-image.png'

export default function Cards() {
  return (
    <Container
      className='py-5'
    >
      <Row>
        <Col><CardsBody /></Col>
        <Col><CardsBody /></Col>
        <Col><CardsBody /></Col>
        <Col><CardsBody /></Col>
        <Col><CardsBody /></Col>
      </Row>
      <CardsSeeMoreButton />
    </Container>
  );
}

const CardsBody = () => {
  return(
    <Card style={{ width: '18rem', border: "none" }} className="mb-4">
      <Card.Img variant="top" src={tempImage} />
      <Card.Body>
        <Card.Title className='py-2'>Bananeira</Card.Title>
        <CardsRating />
        <div className="d-grid gap-2">
          <Button
            style={{
            borderRadius: '4px',
            border: '1px solid #0DC9B0',
            background: '#0DC9B0',
            boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.22)'
            }}
            className="mt-4"
          >Ver Detalhes de Plantio</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

const CardsRating = () => {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
    console.log('AQUIII', rate)
  }

  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)

  return (
    <Rating
      initialValue={rating}
      onClick={handleRating}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      allowHover={false}
    />
  )
}

const CardsSeeMoreButton = () => {
  return(
    <div className="d-grid gap-2">
      <Button variant="outline-secondary" size="lg">
        Carregar Mais
      </Button>
    </div>
  )
}
