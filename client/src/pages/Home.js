import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Projects from "./Projects";
// import ReactTypingEffect from 'react-typing-effect';

function Home() {
  return (
    <>
      <Col size="md-8 sm-8">
        <Projects />
      </Col>
    </>
  );
}

export default Home;
