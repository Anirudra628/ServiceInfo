import { useContext } from "react";
import cimg from "../assets/service1.jpeg"
import "./Cart.css"
import { MdDelete } from "react-icons/md";


const Cart = ({ deletecart, handledelete }) => {
    const ondelete = () => {
        handledelete(deletecart);
    }

 

    return (

        <div className="leftOuter">

            <div className="cartCon">
                <img src={cimg} alt="" />
                <div className="cRight">
                    <h5>Ms Office</h5>
                    <span>Price - 10000 /-</span>
                    <span>Duration - 4-5 days</span>
                </div>
                <MdDelete onClick={ondelete} className="delbt" />
            </div>
        </div>
    )
}

export default Cart