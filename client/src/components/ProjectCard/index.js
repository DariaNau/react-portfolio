import React from "react";
import "./style.css";
// import CardImg from "../CardImg/index"

function ProjectCard(props) {
  return (
      <div className="flip-card">
      <div className="flip-card-inner">
        <div className="card" id="front">
        <img src={props.src} height="80%" className="card-img-top" alt={props.alt} />
          <div className="card-body">
            <p style={{color: "lightgrey"}} className="card-text">{props.title}</p>
          </div>
        </div>
        <div className="card" id="back">
          <div className="card-body">
            <a id="liveapp" style={{textDecoration: "none"}} href={props.deployed}>{props.title} - Live App</a>
            <p className="card-text" style={{fontSize: "14px"}}>{props.description}</p>
            <a style={{textDecoration:"none"}} className="fab fa-github fa-3x" href={props.github}></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
