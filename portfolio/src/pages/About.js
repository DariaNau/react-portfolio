// info about me
// contact and resume

import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Projects from "../content/Projects";
// import ReactTypingEffect from 'react-typing-effect';

function Home() {

  return (
    <Container fluid>
      <Row>
        <Col size="md-4 sm-4">
        <h3>Daria Naumova</h3>
        <h4>MERN Stack Javascript | Responsive UI Design | SQL | Git</h4>
        </Col>
        <Col size="md-8 sm-8">
          <Projects />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
