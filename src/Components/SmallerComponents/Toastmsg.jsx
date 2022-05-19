import React, { Component, useEffect, useState } from 'react';
import { Toast, ToastContainer } from "react-bootstrap";
const  Toastmsg  = ( {show,setShow,bg,msg}) => {

   
   
    return ( 

      <ToastContainer  position={"top-end"}>
        
        <Toast bg={bg} onClose={() => setShow(false)} show={show} delay={10000} autohide >
          <Toast.Header>
            <img style={{width:"20" , height:"20"}} className="rounded me-2"/>
            <strong className="me-auto"> { msg }</strong>
          </Toast.Header>
          <Toast.Body> </Toast.Body>
        </Toast>
        
      </ToastContainer>  
        
       
     );
}
 
export default Toastmsg;