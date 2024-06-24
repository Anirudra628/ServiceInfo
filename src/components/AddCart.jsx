import Cart from "./Cart"
import "./AddCart.css"
import React, { useEffect, useState, useContext } from "react";
import Buy from "./Buy";
import { useLocation,useNavigate } from "react-router-dom";
import Login from "./Login";

const AddCart = (props) => {
    let route = '/cart';
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const location = useLocation();
    const obj = location.state?. obj || {};
    let serviceId = obj._id;
    let flag = false;
    const toggleModal = () => {
        setModal(!modal);
    };

    const [cartitems, sedelete] = useState(obj);
    const [totsum, deletesum] = useState();
    let sum = 0;
    if (localStorage.getItem('islogin')){
        flag = true;
        
    }

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
    const handelDelete = (deleteItem) => {
        let afterDelete = cartitems.filter((item) => item != deleteItem);
        //console.log(afterDelete);
        sedelete(afterDelete);
        deletesum(totsum - 10000);
    }
    const calculatesum = () => {
        cartitems.map((item) => {
            sum = sum + 10000;
            deletesum(sum);
            console.log("lol");
        });
    }
    useEffect(() => {
        calculatesum();
    }, []); 

    
    if (flag){

        return (
            <div className="addCart">
                <div className="cartLeft">
                    <h2>Cart Items</h2>
                    {(cartitems.length === 0 && <p>There is no Item, in your Cart. Go back, and select Add to Cart opption to insert an item, inyour cart.</p>)}
                    {cartitems.map((item) => (
                        <>
                            <Cart cartitems={item} key={cartitems.indexOf(item)} handledelete={handelDelete} />
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
    }
    else
        return <Login route = {route}/>
}

export default AddCart