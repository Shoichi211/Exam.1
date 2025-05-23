import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css';

function AboutUs() {
  return (
    <Container className="about-container mt-4">
      <h2 className="about-title">About Us</h2>
      
      <div className="about-highlight">
        <p className="about-content">
          <strong>Vision</strong>
          To nurture well-rounded individuals who excel in academics and character.
        </p>
      </div>
      
      <div className="about-highlight">
        <p className="about-content">
          <strong>Mission</strong>
          Provide quality education through innovation and dedicated staff.
        </p>
      </div>
      
      <div className="about-history">
        <p className="about-content">
          Sunshine High School was founded in 1995 with the goal to serve our community by...
        </p>
      </div>
    </Container>
  );
}

export default AboutUs;
