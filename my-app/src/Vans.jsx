import React,{useState, useEffect} from "react";
import VanItemList from './VanItemList'
import "./server"


function Vans(){
    const [vansList, setVansList] = useState([])

    function getVans(){
        fetch('/api/vans')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.vans)
               setVansList(data.vans)
               
            });
    }
    
    useEffect(()=>{
        getVans()
    },[])
    let vanArr = vansList.map((item)=>{
        return <VanItemList key={item.id} item={item} />
    })
    return(
        <div>   
          
            <div className="van-list-container">
            <h1>Explore Our Van Options</h1>
            <div className="van-list">
                {vanArr}
            </div>
            </div>
    
        </div>
    )
}

export default Vans 