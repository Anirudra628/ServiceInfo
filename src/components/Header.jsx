import "./Header.css"
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import Home from "./Home";
import { createContext, useContext, useEffect, useState } from "react";
import Signup from "./Signup";
import { Link,useNavigate } from "react-router-dom";
import Authentication from "./Authentication";
import { Button } from "bootstrap";

const context = createContext();
const Header = () => {
    const [visibleSingup, setVisibleSingup] = useState(false);
    const handelVisibleSign = () => {
        setVisibleSingup(!visibleSingup);
    }
    const navigate =  useNavigate();

    let login = 'LogIn';
    if (localStorage.getItem('islogin'))
        login = 'LogOut';
    else
        login = 'LogIn';

    useEffect(()=>{
        console.log("Inside header having login" + login);
    });

    const gotologin = ()=>{
        navigate('/login', { state: { login } });
    }

    return (
        <>
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand bName">ServiceIT</a>
                    <div className="headerRight">
                        <form className="d-flex fCon" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <FaSearch />
                        </form>
                        <button onClick = {gotologin} className="signin">{login}</button>
                        <h2></h2>

                        <Link to="/signup" className="signin">Signup</Link>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default Header