import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';


function Footer() {
  return (
    <footer className="py-5">
        <hr />
      <Container>
        <Row>
          <Col md={6}>
            <h4>Contattaci</h4>
            <p>
              <FiPhone /> +1 123 456 7890
            </p>
            <p>
              <FiMail /> info@example.com
            </p>
            <hr />
            <p>
              <FiMapPin /> Via Antonio Caputo 15, Roma, 00145
            </p>
          </Col>
          <Col md={6}>
            <h4>Iscriviti alla Newsletter</h4>
            <p>
              Ricevi aggiornamenti sulle nostre attività iscrivendoti alla nostra newsletter.
            </p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="newsletter">Email</Form.Label>
                <Form.Control className="newsletter-input" type="email" placeholder="Inserisci la tua email" />
              </Form.Group>
              <br />
              <Button type="submit">
                Iscriviti
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
