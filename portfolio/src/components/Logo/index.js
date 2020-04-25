import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Logo(){
    const location = useLocation();
    return (
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        <img className="img-responsive" src="assets/logo1.png" height="250px" />
        </Link>
    )}

export default Logo;