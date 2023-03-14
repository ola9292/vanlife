import React from "react";
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div>
            
            <Link to="/"><h1 className="site-logo">#VANLIFE</h1></Link>
            <ul>
                <li> <Link to="/about">About</Link> </li>
                <li><Link to="/vans">Vans</Link></li>
            </ul>
        </div>
    )
}

export default Navbar