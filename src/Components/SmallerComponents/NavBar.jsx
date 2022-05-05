import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Navbar,Container,Nav} from 'react-bootstrap'
import SearchBar from "./Searchbox";
class NavBar extends Component {
 constructor(props)
 {
   super(props);
   
 }


  render() {
    return (
      <div className="mb-1">
      
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand to="/">Our-ecommerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <SearchBar onProductSearch={this.props.onProductSearch}/>
        <NavLink className="nav-item nav-link" to="/">Items</NavLink>
        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
        <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    );
  }
}

export default NavBar;
