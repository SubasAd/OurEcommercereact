import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import TableRow from './SmallerComponents/tableRow';
const Cart = (props) => {
 props= props.products?props:{products:[]}
    return ( 
        <>
       <Table striped bordered hover size="sm">
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
   {props.products.map((product)=>
    <TableRow
  key = {product.id}
   product = {product}
   handleIncrement = {props.handleIncrement}
   handleDecrement = {props.handleDecrement}
   />)}
  
   
  </tbody>
</Table>
        </>
     );
}
 
export default Cart;