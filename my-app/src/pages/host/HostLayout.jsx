import { NavLink, Outlet } from "react-router-dom"

function HostLayout(){
    const activeStyle={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "red"
    }

    return(
        <>

            <nav className="host-nav">
        
                    <NavLink to="/host"
                    end
                    style={({isActive})=> isActive ? activeStyle : null}
                    >Dashboard</NavLink>
                    <NavLink to="/host/income"
                    style={({isActive})=> isActive ? activeStyle : null}
                    >Income</NavLink>
                    <NavLink to="/host/reviews"
                    style={({isActive})=> isActive ? activeStyle : null}
                    >Reviews</NavLink>
                   <NavLink to="/host/vans"
                    style={({isActive})=> isActive ? activeStyle : null}
                    >Vans</NavLink>
                </nav>
                <Outlet />
        </>
   
    )
}

export default HostLayout