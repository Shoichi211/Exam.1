import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-4 position-relative">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Sunshine High School. All rights reserved.</p>
        <p>
          <span>
            <i className="bi bi-geo-alt-fill icon"></i>
            123 Sunshine Blvd, Springfield
          </span>
          <span>
            <i className="bi bi-telephone-fill icon"></i>
            Phone: (123) 456-7890
          </span>
          <span>
            <i className="bi bi-envelope-fill icon"></i>
            Email: info@sunshinehigh.edu
          </span>
        </p>
      </Container>
    </footer>
  );
}
export default Footer;
