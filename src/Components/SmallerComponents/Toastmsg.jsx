import React, { Component, useEffect, useState } from 'react';
import { Toast, ToastContainer } from "react-bootstrap";
const  Toastmsg  = ( {show,setShow,bg,msg}) => {

   
   
    return ( 

      <ToastContainer  position={"top-center"}>
        
        <Toast bg={bg} onClose={() => setShow(false)} show={show} delay={3000} autohide >
          <Toast.Body>{msg}</Toast.Body>
        </Toast>
        
      </ToastContainer>  
        
       
     );
}
 
export default Toastmsg;