
import { Link, Outlet } from "react-router-dom"
function HostVanItem({item}){
    return(
        <Link to={`/host/vans/${item.id}`} className="link">
            <div className="host-van-container">
                <div className="">
                    <img src={item.imageUrl}  className="host-van-img"/>
                </div>
                <div className="host-van-details">
                    <div className="host-van-name">
                        {item.name}
                    </div>
                    <div className="host-van-price">
                    ${item.price}/day
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default HostVanItem