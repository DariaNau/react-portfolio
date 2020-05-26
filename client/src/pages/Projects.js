import React from "react";
import ProjectCard from "../components/ProjectCard";
// import "./assets"

function Projects() {
  return (
    <div className="card-group">
      {/* <h1 className="subtopic">My Education</h1> */}
      <ProjectCard
        title="Bandwagon"
        src="assets/BandwagonBK.png"
        alt="Bandwagon"
        github="https://github.com/alexgignilliat/bandwagon"
        deployed="https://bandwagon-project.herokuapp.com/"
        description="A digital music streaming platform designed with listeners and artists in mind."
      />
      <ProjectCard
        title="TutorMe"
        src="assets/tutorme.gif"
        alt="full-stack app demo"
        github="https://github.com/bcancel91/Project_2/"
        deployed="https://tutor-me-gq.herokuapp.com"
        description="An online tutoring service that is available to you from anywhere."
      />
      <ProjectCard
        title="Weather Dashboard"
        src="assets/bg.png"
        alt="weather app"
        github="https://darianau.github.io/weather-dashboard/"
        deployed="https://github.com/DariaNau/weather-dashboard"
        description="The App runs in the browser and features dynamically updated HTML and CSS powered by jQuery."
      />
      <ProjectCard
        title="Food & Wine Pairing"
        src="assets/winedine.png"
        alt="wine project"
        github="https://github.com/DariaNau/group-project-wine-app"
        deployed="https://darianau.github.io/group-project-wine-app/"
        description="The app offers suggestions on food and wine pairings based on user’s choice of grape varietal."
      />
      <ProjectCard
        title="PWA Budget"
        src="assets/pwabudget.png"
        alt="wine project"
        github="https://github.com/DariaNau/pwa-budget"
        deployed="https://secret-tor-45178.herokuapp.com/"
        description="Online or not - this app will let you keep track of your funds."
      />
      <ProjectCard
        title="React Directory"
        src="assets/directory-react.png"
        alt="react api project"
        github="https://github.com/DariaNau/react-employee-directory"
        deployed="https://young-sierra-35107.herokuapp.com/"
        description="Simple react search of randomuser.me API database."
      />
      <ProjectCard
        title="Burger ORM"
        src="assets/burger-app.jpg"
        alt="mySQ node express handlebars app"
        github="https://github.com/DariaNau/node-express-handlebars"
        deployed="https://frozen-brushlands-88386.herokuapp.com/"
        description="MVC structured full stack application that won't leave you hungry!"
      />
      <ProjectCard
        title="Employee Management CLI"
        src="assets/team-generator.png"
        alt="node cli"
        github="https://github.com/DariaNau/template-engine-employee-summary"
        deployed="https://github.com/DariaNau/template-engine-employee-summary/blob/master/assets/team-generator-demo.gif"
        description="Quick and easy way to create a visual representation of your database."
      />

      <ProjectCard
        title="Day Planner"
        src="assets/dayplanner.jpg"
        alt="javascript app"
        github="https://github.com/DariaNau/day-planner"
        deployed="https://darianau.github.io/day-planner/."
        description="Color-coded tool to keep your day productive without looking at the clock."
      />
    </div>
  );
}

export default Projects;
