import React from "react";
import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            
            <Link to="/"><h1 className="site-logo">#VANLIFE</h1></Link>
            <nav>
            <Link to="/host">Host</Link>
               <Link to="/about">About</Link> 
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}

export default Header