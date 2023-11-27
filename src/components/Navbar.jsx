import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/img/COMUNITA’ ALLOGGIO LA VITA.png';

const CustomNavbar = () => {
  return (
    <Navbar bg="transparent">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="https://www.facebook.com/">
            <FaFacebook style={{ fontSize: '54px', color: '#3b5998' }} />
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/">
            <FaInstagram style={{ fontSize: '54px', color: '#e4405f' }} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/">
            <FaLinkedin style={{ fontSize: '54px', color: '#0077b5' }} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
