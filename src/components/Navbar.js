import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img
            alt="Davao Central College Logo"
            src="https://dcc.edu.ph/wp-content/uploads/2020/05/website-header-smaller-V2.png"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links-container">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link as={Link} to="/academic-programs" className="nav-link-custom">Programs</Nav.Link>
            <Nav.Link as={Link} to="/admission" className="nav-link-custom">Admission</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom contact-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;