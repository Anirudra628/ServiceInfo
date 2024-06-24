import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Loging_Signup.css";

import { useLocation } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, close] = useState(true);
    const history = useNavigate();
    // let flag = props.flag;
    // let updateFlag = props.updateFlag;
    const location = useLocation();
    const route = props.route ? props.route : "/";
    const login = location.state?.login || 'LogIn';

    useEffect(() => {
        console.log("Inside login component having"+ login);

    }, []);

   // const location = useLocation();
   

    //close login pop up functionality
    const toggleModal = () => {
        close(!open);
        localStorage.clear();
        history('/services');

    };

    if (login === 'LogOut'){
        //close(!open);
        localStorage.clear();
        history('/');
    }

    //Function to login a user
    const islogin = async (e) => {
        e.preventDefault();
        let login = await fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        });

        let response = await login.json();
        if (response.email) {
            alert('Login successful');
            console.log(login);
            localStorage.setItem('islogin', response.email);
            console.log(localStorage.getItem('islogin'));
            history(route);
        }   
        else {
            setPassword("");
            if (response.error)
                alert(response.error);
            localStorage.clear();
        }
    }



    //rendering the component's element     
    return (
        <>
            {open && 
                <div className="modal-wrapper">
                    <div className="modal-content">
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                        <h1>Login</h1>
                        <form onSubmit={islogin}>
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                        <Link to='/signup' className='signup' >Don't have an account?</Link>
                    </div>

                </div>
            }
        </>
    );
};

export default Login;
