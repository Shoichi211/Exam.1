import React from 'react';
import { Container } from 'react-bootstrap';
import './Admission.css';
function Admission() {
  return (
    <Container className="mt-4">
      <h2>Admission Procedures</h2>
      <ol>
        <li>Submit a completed application form.</li>
        <li>Provide previous school records.</li>
        <li>Attend an entrance examination.</li>
        <li>Interview with the admissions committee.</li>
      </ol>
      <p>For more details, contact our admission office.</p>
    </Container>
  );
}

export default Admission;

