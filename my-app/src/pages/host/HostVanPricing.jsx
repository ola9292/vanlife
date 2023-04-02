import { useOutletContext } from "react-router-dom";
function HostVanPricing(){
    const [vanDetail, setVanDetail] =  useOutletContext('');
    return(
        <div>
             <h3 className="host-van-price">${vanDetail.price}<span>/day</span></h3>
        </div>
    )
}

export default HostVanPricing;