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
            <li className="list-group-item skills">MongoDB</li>
            <li className="list-group-item skills">Express</li>
            <li className="list-group-item skills">React</li>
            <li className="list-group-item skills">Node</li>
            <li className="list-group-item skills">SQL</li>
            <li className="list-group-item skills">MVC</li>
            <li className="list-group-item skills">PWA</li>
            <li className="list-group-item skills">Git</li>
        </ul>
        </div>
        :
        <img className="img-fluid" id="profile-img" src="assets/daria-naumova.jpg" alt="my portfolio photo" />
        }
        </Col>
    )
}

export default Header;