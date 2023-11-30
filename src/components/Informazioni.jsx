import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
 

function Informazioni() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={4}>
          <Card className="info-card1">
            <Card.Body>
              <Card.Title>Assistenza personalizzata</Card.Title>
              <Card.Text>La nostrà comunità,si prefigge come obiettivo quello di mantenere al più lungo possibile l’autonomia dei residenti, attraverso la promozione del loro benessere, lo sviluppo delle loro potenzialità e consolidando nel contempo gli obiettivi da loro raggiunti.
La scelta è quella di gestire direttamente tutti i servizi per garantire la massima qualità: assistenza, terapie, igiene. lavanderia e soprattutto pasti. La casa di riposo non delegherà alcun servizio a ditte esterne.
Per ogni residente viene definito un progetto di vita e di cura personalizzato, rivisto periodicamente per garantire un’assistenza di qualità durante tutto il soggiorno. </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="d-none d-md-block"> 
        </Col>
        <Col xs={12} md={4} className="order-md-last">
          
          <Card className="info-card2 text-center"> 
            <Card.Body>
              <Card.Title>Attività di socializzazione</Card.Title>
              <Card.Text>La nostra comunità mette a disposizione spazi accoglienti ed eleganti per riunirvi, socializzare, godervi un momento di relax e ricevere i vostri cari.

All’interno della struttura sono presenti:

Una sala polivalente dove si svolgono attività ricreative e occupazionali di vario genere.
Una sala di ricreazione, luogo di incontro per trascorrere piacevolmente del tempo insieme sorseggiando bibite, tè o caffè.
Un ampio giardino riservato affacciato sul lago di bolsena che offre un luogo protetto dove la persona può trascorrere del tempo, godere della libertà di uscire all’aperto, riappropriarsi della natura e osservare i ritmi vitali delle piante e prendersene cura.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="info-card3">
            <Card.Body>
              <Card.Title>Cura della Persona</Card.Title>
              <Card.Text>La bellezza non ha età, infatti abbiamo pensato di creare un angolo Beauty per uomini e donne comprensivo dei seguenti servizi:

<li>Parrucchiere</li>
<li>Estetista</li>
<li>Podologo</li>
Il desiderio di piacersi e piacere va al di là di ogni età.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Informazioni;
