import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import TableRow from './SmallerComponents/tableRow';
import httpService from '../Services/httpService'
import apiUrl from '../config.json'
import ESewa from './SmallerComponents/eSewa';
const Cart = (props) => {
  let totalPrice = 0;
  const handleBuy= async ()=>{
    const endPoint= apiUrl.apiUrl+"/api/buy"
    const jwt = localStorage.getItem("jwt");
    try{
    const {data} =  await httpService.post(endPoint, JSON.parse(sessionStorage.getItem("userProducts")),
      {
        headers: {
          Authorization: `Bearer ${jwt}`
        },
      }
     
    ); 
  
    }catch(ex)
    {
      console.log(ex.data);
    }
 
  }


    return ( 
        <div>
          <div hidden={true}>{JSON.parse(sessionStorage.getItem("userProducts"))!==null?JSON.parse(sessionStorage.getItem("userProducts")).map((product)=> totalPrice+=product.count*product.price):0}</div>
       <Table striped  hover size="sm" style={{width:"300%"}}>
  <thead>
    <tr>
      <th>#</th>
      <th>Particular</th>
      <th>Count</th>
      <th></th>
      <th>
        Each Price
      </th>
      <th>
        Total Price
      </th>
    </tr>
  </thead>
  <tbody>
   {
   
  
   JSON.parse(sessionStorage.getItem("userProducts"))!==null?JSON.parse(sessionStorage.getItem("userProducts")).map((product)=> <TableRow
  key = {product.id}
   product = {product}
   handleIncrement = {props.handleIncrement}
   handleDecrement = {props.handleDecrement}

   />
   
  
  
  
  
   
   )
   :<></>
   
   
   
   }
  
   <tr className="border no-border" scope="row">
     <td> Total</td> 
     <td>

     </td>
     <td ></td>
     <td></td>
     <td ></td>
     <td>{totalPrice}</td>
   </tr>
  </tbody>

</Table>
<button onClick={handleBuy}> Buy </button>




        </div >
     );
}
 
export default Cart;