import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import foto1 from "../assets/img/foto1.jpg"
import foto2 from "../assets/img/foto2.jpg"
import foto3 from "../assets/img/foto3.jpg"
import foto4 from "../assets/img/foto4.jpg"
import foto5 from "../assets/img/foto5.jpg"
import foto6 from "../assets/img/foto6.jpg"
import foto7 from "../assets/img/foto7.jpg"
import foto8 from "../assets/img/foto8.jpg"

function Contenuto() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={4} md={3} className="above">
          <img src={foto1} alt="Immagine 1" className="custom-image rotate-clockwise"/>
        </Col>
        <Col xs={4} md={3} className="above">
          <img src={foto2} alt="Immagine 2" className="custom-image rotate-clockwise"/>
        </Col>
        <Col xs={4} md={3} className="above">
          <img src={foto3} alt="Immagine 3" className="custom-image rotate-clockwise" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={4} md={3}  className="center">
          <img src={foto4} alt="Immagine 4" className="custom-image rotate-clock"/>
        </Col>
        <Col xs={4} md={3}  className="center">
          <img src={foto5} alt="Immagine 5" className="custom-image rotate-clock"/>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={4} md={3} className="below">
          <img src={foto6} alt="Immagine 6" className="custom-image rotate-clockwise"/>
        </Col>
        <Col xs={4} md={3} className="below">
          <img src={foto7} alt="Immagine 7" className="custom-image rotate-clockwise"/>
        </Col>
        <Col xs={4} md={3} className="below">
          <img src={foto8} alt="Immagine 8" className="custom-image rotate-clockwise"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Contenuto;
