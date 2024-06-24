import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './components/Contact'
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import About from './components/About';
import OurServices from './components/OurServices'
import ServiceDetails from './components/ServiceDetails';
import Home from './components/Home'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import AddCart from "./components/AddCart"
import Buy from './components/Buy';
import Authentication from './components/Authentication';
import { createContext, useEffect, useState,useRef } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';

import AddService from './components/AddService';


function App() {
  const [flag,setflag] = useState(true);
 // const navigate = useNavigate();
  
  const updateFlag = (newflag) => {
    console.log(newflag);
    setflag(newflag);
  }

  const [array_title, setarray_title] = useState(["1", "2", "3"]);
  let temp = [];

  const getallservices = async () => {
    var service = await fetch("http://localhost:3000/geteachservice");
    let parseddata = await service.json();
    parseddata.forEach(element => {
      temp.push(element);
      setarray_title(temp);
      //console.log(element);
    });


  };

  const context = createContext();
  useEffect(() => {
    console.log("Inside App");
  }, [flag]);


   if (flag)
    return(
    
    <>
    
      
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<OurServices servicelist={array_title} />} />
            <Route path='/servicedetails' element={<ServiceDetails />} />
            <Route path='/cart' element={<AddCart flag = {flag} updateflag = {updateFlag}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login flag = {flag} updateflag = {updateFlag}/>} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/addservice' element = {<AddService/>}/>
          </Routes>
          <Navbar />
        </BrowserRouter>



    </>
    )
 
  

 
}

export default App
