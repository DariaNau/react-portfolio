import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Logo from "../Logo"

function NavBar() {
  const location = useLocation();
  return (
      <nav className="navbar sticky-top">
        <ul className="navbar nav">
          <Logo />
          <li className="nav-item">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              Thoughts & Projects
            </Link>
          </li> */}
        </ul>
      </nav>
  );
}

export default NavBar;
