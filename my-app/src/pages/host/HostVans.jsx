import React,{ useState, useEffect } from "react"
import '../../Server'
import HostVanItem from "./HostVanItem";
function HostVans(){
    const [hostVans, setHostVans] = useState([])

    function getHostVans(){
        fetch("/api/host/vans")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.vans)
           setHostVans(data.vans)
           
        }); 
    }

    useEffect(()=>{
        getHostVans()
    },[])

    let hostVansArr = hostVans.map((item )=>{
        return <HostVanItem key={item.id} item={item}/>
    })

    return(
        <div>
            
            <div className="host-van-wrapper">
            <h2>Your Listed Vans</h2>
                 {hostVansArr}
            </div>
    
        </div>
    )
}

export default HostVans