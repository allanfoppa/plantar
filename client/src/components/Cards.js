import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Rating } from 'react-simple-star-rating'
import '../assets/styles/cards.css'
import { PATHS } from '../routes/paths';

import bananeira from '../temp/bananeira.png'
import alfaceAmericana from '../temp/alface-americana.png'
import alhoPoro from '../temp/alho-poro.jpg'
import amoreira from '../temp/amoreira.png'
import cerejeira from '../temp/cerejeira.png'
import chicoria from '../temp/chicoria.jpg'


export default function Cards() {

  const data = [
    {
      "id": 1,
      "image": bananeira,
      "path_name": "bananeira",
      "name": "Bananeira",
      "stars": 5
    },
    {
      "id": 2,
      "image": alfaceAmericana,
      "path_name": "alface-americana",
      "name": "Alface Americana",
      "stars": 2
    },
    {
      "id": 3,
      "image": alhoPoro,
      "path_name": "alho-poró",
      "name": "Alho Poró",
      "stars": 4
    },
    {
      "id": 4,
      "image": amoreira,
      "path_name": "amoreira",
      "name": "Amoreira",
      "stars": 5
    },
    {
      "id": 5,
      "image": cerejeira,
      "path_name": "cerejeira",
      "name": "Cerejeira",
      "stars": 4
    },
    {
      "id": 6,
      "image": chicoria,
      "path_name": "chicoria",
      "name": "Chicória",
      "stars": 2
    }
  ]

  return (
    <Container
      className='py-5'
    >
      <Row>
        { data.map((i, index) =>
          <Col lg={3} key={index}>
            <CardsBody info={i} />
          </Col>
        )}
      </Row>
      <CardsSeeMoreButton />
    </Container>
  );
}

const CardsBody = ({
  info
}) => {
  return(
    <Card style={{ border: "none" }} className="mb-4">
      <Card.Img variant="top" src={info.image} />
      <Card.Body>
        <Card.Title className='py-2'>{info.name}</Card.Title>
        <CardsRating ratingStars={info.stars} />
        <div className="d-grid gap-2">
          <LinkContainer to={PATHS.Details + '/' + info.path_name}>
            <Button
              id='planting-details'
              className="mt-4"
            >
              Ver Detalhes de Plantio
            </Button>
          </LinkContainer>
        </div>
      </Card.Body>
    </Card>
  )
}

const CardsRating = ({
  ratingStars
}) => {

  const [ rating, setRating ] = useState(ratingStars)
  const [ showTooltipValue, setShowTooltipValue ] = useState(false)

  // Catch Rating value
  const handleRating = (rate) => {
    // setRating(rate)
    // other logic
    setShowTooltipValue(true)
    console.log('AQUIII', rate)
  }

  return (
    <>
      <Rating
        initialValue={rating}
        onClick={handleRating}
        allowHover={false}
        showTooltip={showTooltipValue}
      />
    </>
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



/*==========================================================================
  PROPTYPES
  ========================================================================== */
