import React, { useEffect, useState,useContext } from 'react';
import "./Loging_Signup.css";
import { useNavigate, Link } from 'react-router-dom';


const Signup = (props) => {
  useEffect(() => {
    console.log("reloading sign up");
  }, []);

  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  
  const [visibleLogin, setVisibleLogin] = useState(false);


  useEffect (()=>{
    console.log("visible"+ " "+ visibleLogin);
  },[]);

  const closeSignup = () => {
    setVisibleLogin(true);
    console.log(visibleLogin);
    console.log(props.route);
    navigate(props.route);
    setflag(false);
  };

  const createuser = async (e) => {
    e.preventDefault();
    try {
      const signup = await fetch("http://localhost:3000/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            { name: name, 
              email : email, 
              password: password })
      });

      const response = await signup.json();
      if (signup.ok) {
        alert('Signup successful');
       // navigate('/login');
      } else {
        alert(response.error);
        setPassword("");
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  if (!visibleLogin)
    return (
      <div className="modal-wrapper">
        <div className="modal-content">
          <button className="close-modal" onClick={closeSignup}>
            X
          </button>
          <h1>Sign Up</h1>
          <div className="slCon">
            <form onSubmit={createuser}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={name}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <Link to='/login' className='signup'>Do you have an account?</Link>
        </div>
      </div>
    );
};

export default Signup;