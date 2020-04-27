import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Logo(){
    const location = useLocation();
    return (
        <div>
        {location.pathname === "/" ? 
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        <img onClick={window.scrollTo(0, 0)} className="img-responsive" src="assets/logo1.png" height="220px" />
        </Link>
        : 
        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
        <img onClick={window.scrollTo(0, 0)} className="img-responsive" src="assets/logo1.png" height="220px" />
        </Link>
    }
    </div>
    )}

export default Logo;