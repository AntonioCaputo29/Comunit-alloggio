import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
 

function Presentazione() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card className="presentazione-card">
            <Card.Body>
              <Card.Title>Chi siamo</Card.Title>
              <Card.Text>
                La Comunità Alloggio LA VITA è uno spazio accogliente e sicuro per coloro che desiderano un
                sostegno nel percorso di vita quotidiana. Offriamo un ambiente familiare e
                inclusivo, fornendo assistenza personalizzata e servizi dedicati per il benessere
                dei nostri ospiti.
                La nostra missione è garantire un ambiente confortevole e un sostegno completo per
                il benessere e l'autonomia delle persone ospitate presso la Comunità Alloggio.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Presentazione;
