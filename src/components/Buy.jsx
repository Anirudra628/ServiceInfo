import React, { useState } from "react";
import "./Buy.css";
import qr from "../assets/qrCode.jpg"

const Buy = (props) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform actions like sending data to the server or processing it locally
        console.log('Form submitted:', formData);
        // Reset the form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: ''
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setFormData(prevState => ({
                ...prevState,
                pdfFile: file
            }));
        } else {
            alert("Please select a PDF file.");
        }
    };

    return (
        <>
            <div className="modal-wrapper">
                <div onClick={props.toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <button className="close-modal" onClick={props.toggleModal}>
                        X
                    </button>
                    <h2>Purches Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <div className="formLeft">
                                <div>
                                    <label htmlFor="firstName">First Name:</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="formRight">
                                <div>
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone Number:</label>
                                    <input
                                        type="numder"
                                        id="phone"
                                        name="phone"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="projectDetails">
                            <label htmlFor="projectDetails">Project Details:</label>
                            <input
                                type="text"
                                id="projectDetails"
                                name="projectDetails"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form">
                            <div className="formLeft">
                                <div>
                                    <label htmlFor="pname">Project Name:</label>
                                    <input
                                        type="text"
                                        id="pname"
                                        name="pname"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <h4 htmlFor="pdfFile">Upload Document:</h4>
                                    <p>You can Upload any relevent document here. Please upload file in a pdf format.</p>
                                    <input
                                        type="file"
                                        id="pdfFile"
                                        name="pdfFile"
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="formRight">
                                <div className="payment">
                                    <h3 htmlFor="payment">Payment:</h3>
                                    <img src={qr} alt="" />
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-success" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            )

        </>
    );
}

export default Buy;
