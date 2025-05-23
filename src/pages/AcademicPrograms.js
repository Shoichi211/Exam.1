import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import './AcademicPrograms.css';

function AcademicPrograms() {
  return (
    <Container className="mt-4">
      <h2>Academic Programs</h2>
      <ListGroup>
        <ListGroup.Item>Science Department</ListGroup.Item>
        <ListGroup.Item>Mathematics Department</ListGroup.Item>
        <ListGroup.Item>Humanities Department</ListGroup.Item>
        <ListGroup.Item>Information Technology</ListGroup.Item>
        <ListGroup.Item>Arts and Music</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default AcademicPrograms;
