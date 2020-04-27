import React from "react";
import Nav from "../Nav";
import {Col} from "../Grid";
import "./style.css";
import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <Col size="md-4">
        <Nav />
        {location.pathname === "/" ?
        <div className="side-component">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Node</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">React</li>
            {/* <li className="list-group-item">ORM</li>
            <li className="list-group-item">Web API</li> */}
            <li className="list-group-item">PWA</li>
            <li className="list-group-item">SQL</li>
            <li className="list-group-item">MongoDB</li>
            {/* <li className="list-group-item">MERN Stack</li> */}
        </ul>
        </div>
        :
        <img className="img-fluid" id="profile-img" src="assets/daria-naumova.jpg" alt="my portfolio photo" />
        }
        </Col>
    )
}

export default Header;