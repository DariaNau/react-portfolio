import React from "react";
import { Col } from "../components/Grid";
// import FadeInSection from "../components/FadeIn"

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function About() {
  return (
    <Col size="md-8 sm-8">
      <div className="about-text">
        <FadeInSection>
          <p>
            Full Stack Web Developer leveraging management background and a
            life-long dedication to learning. Effective at combining creativity,
            customer service experience and problem solving to ensure efficient
            mobile-first design and innovative web development.
          </p>
        </FadeInSection>
        <FadeInSection>
          <p>
            Over 7 years of international experience in business management
            has prepared me for open and clear communication to always benefit
            teamwork and promote customer-focused perspectives. 
          </p>
        </FadeInSection>
        <FadeInSection>
          <p>
            I have then spent 2 years as a remote IT specialist and social
            media assistant which has equipped me with a solid understanding of
            modern marketing technologies and has led me to the world of web
            development.
          </p>
        </FadeInSection>
        <FadeInSection>
          <p>
            Email me at{" "}
            <a href="mailto:dariagnaumova@gmail.com">dariagnaumova@gmail.com</a>{" "}
            Or view my{" "}
            <a href="assets/Daria Naumova CV Web Dev.pdf" target="_blank">
              CV
            </a>
            .
          </p>
        </FadeInSection>
      </div>
    </Col>
  );
}

export default About;
