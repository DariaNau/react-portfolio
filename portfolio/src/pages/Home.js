import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Projects from "../content/Projects";
// import ReactTypingEffect from 'react-typing-effect';
import Nav from "../components/Nav";
import Logo from "../components/Logo"
function Home() {

  return (
    <Container fluid>
      <Row>
        <Col size="md-4 sm-4">
        <Logo></Logo>
        <Nav />
        {/* <h3>Full Stack Developer</h3>
        <h6>MERN Stack Javascript | Responsive UI Design | SQL | Git</h6> */}
        </Col>
        <Col size="md-8 sm-8">
          <Projects />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
