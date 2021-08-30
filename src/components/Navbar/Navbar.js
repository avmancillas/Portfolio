import React, {Component} from 'react';
import './Navbar.css';
import { NavLink, Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            
            <h3>
                <Link to= '/' style={{textDecoration: "none"}}>Home</Link>
                
            </h3>
            <ul className="nav-menu">
                <NavLink exact activeClassName="active" className="navBtns" a={Link} to= '/AboutMe'style={{textDecoration: "none"}}
                >AboutMe</NavLink>
                <NavLink exact activeClassName="active" className="navBtns" a={Link} to= '/Work'style={{textDecoration: "none"}}
                >Work</NavLink>
                <NavLink exact activeClassName="active" className="navBtns" a={Link} to= '/Resume'style={{textDecoration: "none"}}
                >Resume</NavLink>
                
                
            </ul>
        </nav>
    )
}



export default Navbar;