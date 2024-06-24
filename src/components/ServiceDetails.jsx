import simg from "../assets/serviceDetails1.jpg"
import "./ServiceDetails.css"
import { Link } from "react-router-dom"
import Buy from "./Buy"
import React, { useEffect, useState,useContext } from "react";
import { ServiceContext } from "./OurServices";


const ServiceDetails = (props) => {
    const [modal, setModal] = useState(false);
    const objList = useContext(ServiceContext)
    const toggleModal = () => {
        setModal(!modal);
    };

    useEffect(()=>{
        console.log(objList);
    })  



    return (
        <div className="sdContainer">
            <div className="sdLeft">
                <img src={simg} alt="" />
                <h2>{props.obj.title}</h2>
                <p> {props.obj.moredesc} </p>
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
                    <span>Base Price {props.obj.price} /-</span>
                    <p>Actual price may vary upon the amount of contents needed per service.</p>
                </div>
                <div className="Duration">
                    <h3>Guranteed delivery by</h3>
                    <span>{props.obj.duration} days</span>
                    
                </div>
                <Link to="/cart" className="btn btn-success">Add to Cart</Link>
                <button onClick={toggleModal} className="btn btn-primary">Book Service</button>
            </div>
            {modal && <Buy toggleModal={toggleModal} />}
        </div>
    )
}

export default ServiceDetails