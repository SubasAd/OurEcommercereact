import React from 'react';
import PaginatingButton from './paginatingButton';
const TableRow = ({product,handleIncrement,handleDecrement}) => {
    return ( <tr>
      <td>
        {product.Sn}
      </td>
      <td>
        {product.name}
      </td>
      <td>
        {product.count}
      </td>
        <td>
          <PaginatingButton product = {product} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        </td>
        <td>
          {product.price}
        </td>
        <td>
          {product.price*product.count}
        </td>
      </tr>  );
}
 
export default TableRow;