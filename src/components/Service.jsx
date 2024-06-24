import "./Service.css"
import service1 from "../assets/service1.jpeg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import ServiceDetails from "./ServiceDetails"
import { useNavigate } from "react-router-dom"

const Service = (props) => {

    const [opendetails, closedetails] = useState(true);
    const navigate = useNavigate();

    const obj = props.obj;
    let {moredesc,duration,price} = obj;
    

    const details = async()=>{
        //closedetails(!opendetails);
        navigate('/servicedetails', {state: {obj}});
    }

    

 if (opendetails){
    return (
        

        <div className="serviceContainer">  
            <img src={service1} alt="" />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <button className="btn btn-primary" onClick={details}>View details</button>
        </div>
    )
}
else
{
    return <ServiceDetails obj = {obj}/>
}

}
export default Service