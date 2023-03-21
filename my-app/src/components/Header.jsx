import React from "react";
import { NavLink, Link } from "react-router-dom"

function Header(){

    const activeStyle={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "yellow",
      }
    return(
        <header>
            
            <Link to="/"><h1 className="site-logo">#VANLIFE</h1></Link>
            <nav>
                <NavLink 
                to="/host"
                className={({isActive})=> isActive ? "active" : null}
                >Host</NavLink>
                <NavLink 
                to="/about"
                className={({isActive})=> isActive ? "active" : null}
                >About</NavLink> 
                <NavLink 
                to="/vans"
                className={({isActive})=> isActive ? "active" : null}
                >Vans</NavLink>
            </nav>
        </header>
    )
}

export default Header