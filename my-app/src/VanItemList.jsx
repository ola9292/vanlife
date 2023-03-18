import React from "react"
import { Link} from "react-router-dom"
function VanItemList({item}){

   
    return(
        <Link to={`${item.id}`}>
        <div key={item.id} className="van-tile">
        <img src={item.imageUrl} />
        <div className="van-info">
            <h3>{item.name}</h3>
            <p>${item.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${item.type} selected`}>{item.type}</i>
    </div>
    </Link>
    )
}

export default VanItemList