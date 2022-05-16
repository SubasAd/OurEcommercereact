import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import TableRow from './SmallerComponents/tableRow';
import ESewa from './SmallerComponents/eSewa';
const Cart = (props) => {
  let totalPrice = 0;
 


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





        </div >
     );
}
 
export default Cart;