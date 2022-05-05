import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class PaginatingButton extends Component {
   constructor(props){super(props)}

    render() { 
        return (
            <>
            <Button className="btn m-2 " onClick={()=>this.props.handleIncrement(this.props.product)}> +</Button>

            <Button className="btn m-2 btn-danger" onClick={()=>this.props.handleDecrement(this.props.product)}>-</Button>
            </>
        );
    }
}
 
export default PaginatingButton;