import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"

function NavBar() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav class="navbar sticky-top">
    <ul className="navbar nav">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Work
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/discover"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/search"
          className={location.pathname === "/search" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li> */}
    </ul>
</nav>
  );
}

export default NavBar;
