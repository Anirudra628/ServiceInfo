import React, { useContext } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { useEffect, useState } from "react";


const Authentication = (props) => {

    let flag = true;
    console.log(flag);

    

    if (flag)
    return <Login/>
    else
    return <Signup/>

}

export default Authentication;