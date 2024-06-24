import React from "react";
import './Contact.css';
import { CiMail, CiPhone } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="form1">
                <h2>Contact Us</h2>
                <div className="contact-details">
                    <div className="mail c-item">
                        <CiMail />
                        <span> &nbsp; sudiptam332@gmail.com</span>
                    </div>
                    <div className="phone c-item">
                        <CiPhone />
                        <span> &nbsp; 6290458955</span>
                    </div>
                    <p className="c-item">Address : Rajarhat, KajialPara, <br /> Kolkata - 700135, West Bengal, India</p>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100025120327440"><FaFacebookF /></a>
                    <a href="https://twitter.com/Mondol2000"><FaTwitter /></a>
                    <a href="https://www.instagram.com/sudiptam332/"><FaInstagramSquare /></a>
                    <a href="https://www.linkedin.com/in/sudiptam332/"><FaLinkedin /></a>
                </div>
            </div>
            <div className="form2">
                <form name="submit-to-google-sheet" id="contact-form">
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                    <span id="msg"></span>
                    <button className="btn-submit" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
