import React from "react";
import "./style.css";

function Contact () {
  return (
    <div id="contactPage">
      <div className="contactLinks">
        <div className="cont_link">
          <a href="https://twitter.com/darianaumova13">
            <i className="fab fa-twitter fa-3x"></i>
          </a>
        </div>
        <div className="cont_link">
          <a href="https://www.linkedin.com/in/daria-naumova-901bb8111/">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
        </div>
        <div className="cont_link">
          <a href="https://github.com/DariaNau/">
            <i className="fab fa-github fa-3x"></i>
          </a>
        </div>
        <div className="cont_link">
          <a href="mailto:dariagnaumova@gmail.com">
            <i className="far fa-envelope fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  )}

  export default Contact;
