import React,{useState, useEffect} from "react";
import { useParams,Link, Outlet, NavLink  } from "react-router-dom";
import "../../Server"


function HostVanDetail(){

    const {id} = useParams()
   const [vanDetail, setVanDetail] = useState('')

   function getSingleHostVan(){
        fetch(`/api/host/vans/${id}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data); 
            setVanDetail(data.vans[0]) 
        });
   }

   useEffect(()=>{
        getSingleHostVan()
   },[])
   console.log(vanDetail)
    return(
        <div>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
                <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={vanDetail.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${vanDetail.type}`}
                        >
                            {vanDetail.type}
                        </i>
                        <h3>{vanDetail.name}</h3>
                        <h4>${vanDetail.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink to="." end>Details</NavLink>
                    <NavLink to="pricing">Pricing</NavLink>
                    <NavLink to="photos">Photos</NavLink>
                </nav>



                <Outlet context={[vanDetail, setVanDetail]} />
            </div>
            
        </div>
        
    )
}


export default HostVanDetail