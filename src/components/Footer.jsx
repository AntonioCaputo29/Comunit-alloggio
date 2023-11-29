import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

function Footer() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <footer className="py-5">
      <hr />
      <Container>
        <Row>
          <Col md={6}>
            <h4>Contattaci</h4>
            <p>
              <FiPhone /> 0000/123456
            </p>
            <p>
              <FiMail /> info@comunitàlavita.com
            </p>
            <hr />
            <p>
              <FiMapPin /> Via Antonio Caputo 15, Roma, 00127
            </p>
          </Col>
          <Col md={6}>
            <h4>Iscriviti alla Newsletter</h4>
            <p>
              Ricevi aggiornamenti sulle nostre attività iscrivendoti alla nostra newsletter.
            </p>
            <Form onSubmit={handleSubscribe}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="newsletter">Email</Form.Label>
                <Form.Control className="newsletter-input" type="email" placeholder="Inserisci la tua email" />
              </Form.Group>
              <br />
              <Button type="submit">
                Iscriviti
              </Button>
            </Form>
            {showAlert && (
              <Alert variant="custom" className="mt-3 alert-custom" onClose={() => setShowAlert(false)} dismissible>
              Iscrizione effettuata con successo!
            </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
