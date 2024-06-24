import React, { createContext, useRef, useState,useEffect } from 'react';


// Create a context
const LoginContext = createContext();

export const MyProvider = ({ children }) => {
  const [flag,setflag] = useState(false);

  useEffect(() => {
    //calculatesum();
    console.log("Inside context component");
}, []);
  
 function updateFlag(newflag){
  setflag(newflag);
  console.log("Inside context flag" + " " + flag);
  //console.log(children);
 }

 
  return (
    <LoginContext.Provider value={{flag,updateFlag}}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;