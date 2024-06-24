import React from "react";
import "./About.css";
import abtimg from "../assets/abtImg.jpg"

const About = () => {
    return (
        <div className="card text-bg-dark mb-3 my-5" >
            <div className="card-body abt">
                <div className="abtLeft">
                    <h5 className="card-title">About Us</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi illo repellendus ipsam distinctio eligendi possimus reprehenderit temporibus, ad enim perspiciatis! Molestias fugiat impedit, quisquam odit corrupti voluptates velit distinctio reiciendis!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <div className="abtRight">
                    <img src={abtimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;