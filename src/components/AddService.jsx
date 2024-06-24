import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddService() {
    let open = true;
    const [title,settitle] = useState("");
    const [description,setdescription] = useState("");
    const [moredesc,setdetails] = useState("");
    const [price,setprice] = useState("");
    const [duration,setduration] = useState("");
    const history = useNavigate();

    const toggleModal = () => {
        close(!open);
        history('/services');

    };

    const add = async(e)=>{
        e.preventDefault();
        let addservice = await fetch('http://localhost:3000/addservice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                moredesc: moredesc,
                price: price,
                duration: duration
            })
        });

        addservice = await addservice.json();
        if(addservice)
            console.log(addservice);
    }

    return (
        <>
            {open && 
                <div className="modal-wrapper">
                    <div className="modal-content">
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                        <h1>Title</h1>
                        <form onSubmit={add}>
                            <div>
                                <label htmlFor="title">title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => settitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="description">Description</label>
                                <input
                                    type="description"
                                    id="description"
                                    value={description}
                                    onChange={(e) => setdescription(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="price">Price</label>
                                <input
                                    type="text"
                                    id="price"  
                                    value={price}
                                    onChange={(e) => setprice(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="moredesc">Details</label>
                                <input
                                    type="text"
                                    id="moredesc"
                                    value={moredesc}
                                    onChange={(e) => setdetails(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="duration">Duration</label>
                                <input
                                    type="text"
                                    id="duration"
                                    value={duration}
                                    onChange={(e) => setduration(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit">Add</button>
                        </form>
                    </div>

                </div>
            }
        </>
    );
}

export default AddService