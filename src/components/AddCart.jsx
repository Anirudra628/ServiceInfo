import Cart from "./Cart"
import "./AddCart.css"
import React, { useEffect, useState, useContext } from "react";
import Buy from "./Buy"
import Signup from "./Signup";

import { useNavigate } from "react-router-dom";
import Login from "./Login";

const AddCart = (props) => {

    const [login, setlogin] = useState(false);
    let route = '/cart';
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    let flag = false;
    const toggleModal = () => {
        setModal(!modal);
    };

    const [deletecart, sedelete] = useState([<Cart price={10000} />, <Cart price={10000} />, <Cart price={10000} />]);
    const [totsum, deletesum] = useState();
    let sum = 0;
    const handelDelete = (deleteItem) => {
        let afterDelete = deletecart.filter((item) => item != deleteItem);
        //console.log(afterDelete);
        sedelete(afterDelete);
        deletesum(totsum - 10000);
    }
    const calculatesum = () => {
        deletecart.map((item) => {
            sum = sum + 10000;
            deletesum(sum);
            console.log("lol");
        });
    }

    useEffect(() => {
        console.log("Inside cart component");
        console.log("flag inside cart" + " " + flag);
        calculatesum();
    }, []); 

    if (localStorage.getItem('islogin'))
        flag = true;

    if (flag)
        return (
            <div className="addCart">
                <div className="cartLeft">
                    <h2>Cart Items</h2>
                    {(deletecart.length === 0 && <p>There is no Item, in your Cart. Go back, and select Add to Cart opption to insert an item, inyour cart.</p>)}
                    {deletecart.map((item) => (
                        <>
                            <Cart deletecart={item} key={deletecart.indexOf(item)} handledelete={handelDelete} />
                        </>

                    )
                    )}

                </div>
                <div className="cartRight">
                    <h3>Total Price</h3>
                    <h5>{totsum} /-</h5>
                    <div className="coupon ">
                        <input type="text" placeholder="Apply Coupon Code Here" />
                        <button className="btn btn-success mx-3">Apply</button>
                    </div>
                    <div className="offerSection">
                        <div className="offer">
                            <p>Get upto 5% off By Using HDFC Cradit Card</p>
                        </div>
                        <div className="offer">
                            <p>Get upto 5% off By Using HDFC Cradit Card</p>
                        </div>
                        <div className="offer">
                            <p>Get upto 5% off By Using HDFC Cradit Card</p>
                        </div>
                        <div className="offer">
                            <p>Get upto 5% off By Using HDFC Cradit Card</p>
                        </div>
                        <div className="offer">
                            <p>Get upto 5% off By Using HDFC Cradit Card</p>
                        </div>
                    </div>
                    <button onClick={toggleModal} id="checkout" className="btn btn-primary">Proceed to Check Out</button>
                </div>
                {modal && <Buy toggleModal={toggleModal} />}
            </div>

        )
    else
        return <Login route = {route}/>
}

export default AddCart