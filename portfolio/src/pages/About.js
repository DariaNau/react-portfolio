import React from "react";
import { Col, Row, Container } from "../components/Grid";

function About () {
  return (
      <>
        <Col size="md-8 sm-8">
        <div className="about-text"> 
                <p>
                  Full Stack Web Developer leveraging management background and a life-long dedication to learning.
                  Effective at combining creativity, customer service experience and problem solving to ensure efficient
                  mobile-first design and innovative web development.
                </p>
                <p>
                  Over five years of international experience in business management has prepared me for open and
                  clear communication to always benefit teamwork and promote customer-focused perspectives.
                  I have also spent a few years as a remote IT specialist and social media assistant which has equipped me with a solid
                  understanding of modern marketing technologies and has led me to the world of web development.
                </p>
                <p>
                Email me at <a href="mailto:dariagnaumova@gmail.com">dariagnaumova@gmail.com</a>  Or view my <a href="assets/Daria Naumova CV Web Dev.pdf" target="_blank">CV</a>.
                </p>
              </div>
        </Col>
      </>
  );
}

export default About;



