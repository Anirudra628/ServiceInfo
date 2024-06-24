import "./ImageSlider.css"
import frontImg from '../assets/frontImg.jpg';
import OurServices from "./OurServices";
import { useState } from "react";
import { Link } from "react-router-dom";


const ImageSlider = (props) => {

    return (
        <>
            <div className="container">
                <div className="left">
                    <h2>Welcome to ServiceIT</h2>
                    <p>Here all your It soloution are available...</p>
                    <Link to="/services"  className="btn btn-primary">Know More</Link>

                </div>
                <div className="right">
                    <img src={frontImg} alt="" />
                </div>
            </div>


        </>
    )
}

export default ImageSlider