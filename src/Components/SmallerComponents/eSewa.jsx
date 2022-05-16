import React, { Component } from 'react';
import httpService from '../../Services/httpService';
const ESewa = ({amt,psc,pdc,txAmt,pid,scd,su,fu}) => {
 const payThroughesewa=()=>{
  
    const url ="https://uat.esewa.com.np/epay/main";
     const params ={amt,psc,pdc,txAmt,pid,scd,su,fu}
    httpService.post(url,params);
 


 }
    return ( <>
    <button className="btn btn-sucess m-1" onClick={payThroughesewa} > Pay through eSewa</button>
    </> );
}
 
export default ESewa;