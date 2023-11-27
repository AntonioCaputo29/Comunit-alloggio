import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Poster from '../assets/img/Foto_home-removebg-preview.png'; 

const Contenuto = () => {
  const cardContent = [
    {
      title: 'Card 1',
      description: 'Descrizione della Card 1',
    },
    {
      title: 'Card 2',
      description: 'Descrizione della Card 2',
    },
    {
      title: 'Card 3',
      description: 'Descrizione della Card 3',
    },
  ];

  return (
    <Container>
      {/* Immagine del poster */}
      <Row className="mb-4">
        <Col>
          <img src={Poster} alt="Poster" className="img-fluid poster" />
        </Col>
      </Row>

      {/* Card orizzontali con informazioni */}
      <Row>
        {cardContent.map((card, index) => (
          <Col key={index} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Contenuto;
