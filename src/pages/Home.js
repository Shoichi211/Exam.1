import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <Container className="home-container">
      <div className="college-hero-banner">
        <div className="college-hero-content">
          <h1 className="college-title">Welcome to Davao Central College</h1>
          <p className="college-motto">
            Excellence in Education Since 1995
          </p>
          <p className="college-description">
            Davao Central College is committed to fostering academic excellence, 
            character development, and holistic growth for all students.
          </p>
          <button className="explore-button">
            Explore Our Programs
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Home;