import React from "react";
import ProjectCard from "../components/ProjectCard";
// import tutorimg from "./assets/tutorme.gif"


function Projects() {
  return (
    <div className="card-group">
      {/* <h1 className="subtopic">My Education</h1> */}
      <ProjectCard
        title="TutorMe"
        src="assets/tutorme.gif"
        alt="full-stack app demo"
        github="https://github.com/bcancel91/Project_2/"
        deployed="https://tutor-me-gq.herokuapp.com"
        description="TutorMe - is a Full Stack App "
      />
      <ProjectCard
        title="Weather Dashboard"
        src="assets"
        alt="Javascript"
        github="https://darianau.github.io/weather-dashboard/"
        deployed="https://github.com/DariaNau/weather-dashboard"
        description="Weather app desc"
      />
      <ProjectCard title="Food & Wine Pairing" />
      <ProjectCard title="Burger Devouring" />
      <ProjectCard title="Employee Management" />
      <ProjectCard title="DayPlanner" />
      <ProjectCard title="React Employee Search Tool" />
      <ProjectCard title="Get Fit App" />
      <ProjectCard title="Google Books" />
    </div>
  );
}

export default Projects;
