import simg from "../assets/serviceDetails1.jpg"
import "./ServiceDetails.css"
import { Link } from "react-router-dom"
import Buy from "./Buy"
import React, { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
//import { ServiceContext } from "./OurServices";


const ServiceDetails = (props) => {
    const [modal, setModal] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const obj = location.state?.obj || {};
    let totalcartitems = [];
    const toggleModal = () => {
        setModal(!modal);
    };

    useEffect(()=>{
        console.log(obj);
    }) ;

    const linkservice = async()=>{
        let response = await fetch("http://localhost:3000/addcart",{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('islogin'),
                serviceId: serviceId
            })
        });

        response = await response.json();
        if(!response.error){
            flag = true;
        }
        else{
            alert(response.error);
        }
    }
    
    const gotoCart = ()=>{
        linkservice();
        navigate('/cart',{state : {obj}});
    }

    return (
        <div className="sdContainer">
            <div className="sdLeft">
                <img src={simg} alt="" />
                <h2>{obj.title}</h2>
                <p> {obj.moredesc} </p>
            </div>
            <div className="sdRight">
                <div className="addService">
                    <h3>Services Icluded</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="pricing">
                    <h3>Price</h3>
                    <span>Base Price {obj.price} /-</span>
                    <p>Actual price may vary upon the amount of contents needed per service.</p>
                </div>
                <div className="Duration">
                    <h3>Guranteed delivery by</h3>
                    <span>{obj.duration} days</span>
                    
                </div>
                <button onClick={gotoCart} className="btn btn-success">Add to Cart</button>
                <button onClick={toggleModal} className="btn btn-primary">Book Service</button>
            </div>
            {modal && <Buy toggleModal={toggleModal} />}
        </div>
    )
}

export default ServiceDetails