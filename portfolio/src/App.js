import React, { Component } from "react";
// import logo from './logo.svg';
// import Flip from 'react-reveal/Flip';
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Row, Container } from "../src/components/Grid";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Row>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
