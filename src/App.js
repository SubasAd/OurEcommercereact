import React, { Component } from "react";
import Login from "./Components/login";
import { Route, Switch } from "react-router-dom";
import RegisterForm from "./Components/registerForm";
import NavBar from "./Components/SmallerComponents/NavBar";
import Product from "./Components/product";
import Sidebar from "./Components/SmallerComponents/Sidebar";
import Cart from "./Components/Cart";
import Off from "./Components/SmallerComponents/Off";
import SearchTag from "./Components/SearchTag";
import AddProduct from "./Components/addProduct";
class App extends Component {
  state = {
    products: [],
    userProducts: [],
  };
  componentDidMount() {
  };

  handleBuy = (e) => {


   
    const userProducts = [...this.state.userProducts];
    const product = {
      id: e.id,
      Sn: userProducts.length + 1,
      name: e.name,
      count: 1,
      price: e.price,
    };
    const pr = userProducts.find((pr) => pr.id == e.id);
    pr ? this.handleIncrement(pr)
      : userProducts.push(product);
    this.setState({ userProducts });
   
  };
  handleIncrement = (product) => {
   const userProducts = [...this.state.userProducts]
   const pr = userProducts.find((pr) => pr.id == product.id);
    pr.count++;
  this.setState({userProducts});
    

  };
  handleDecrement = (product) => {
    const userProducts = [...this.state.userProducts]
   const pr = userProducts.find((pr) => pr.id == product.id);
  pr.count =  pr.count>0?pr.count-1:pr.count;
  this.setState({userProducts});
  };

  render() {
    return (
      <div>
        <NavBar onProductSearch={this.handleProductsOnSearch} />
        <div className="d-flex flex-row m-1">
          <Off>
            <Sidebar />
          </Off>

          <Switch>
            <Route path="/register" exact component={RegisterForm} />
            <Route path="/login" exact component={Login} />
            <Route
              path="/products/:id"
              exact
              render={(props) => (
                <Product {...props} handleBuy={this.handleBuy} />
              )}
            />
            <Route path="/search/:item" component={SearchTag} />
            <Route
              path="/Cart"
              render={() => (
                <Cart
                  products={this.state.userProducts}
                  handleIncrement={this.handleIncrement}
                  handleDecrement={this.handleDecrement}
                />
              )}
            />
            <Route path="/" exact render={(props) => <SearchTag />} />
            <Route path="/AddProduct" exact component={AddProduct} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
