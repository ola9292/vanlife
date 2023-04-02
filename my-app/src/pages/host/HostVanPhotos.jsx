import { useOutletContext } from "react-router-dom";
function HostVanPhotos(){
    const [vanDetail, setVanDetail] =  useOutletContext('');
    return(
        <div>
            <img src={vanDetail.imageUrl} width="200px" />
        </div>
    )
}

export default HostVanPhotos