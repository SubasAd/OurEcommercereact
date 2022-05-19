import React, { Component } from "react";
import Login from "./Components/login";
import httpService from "./Services/httpService";
import { Route, Switch } from "react-router-dom";
import RegisterForm from "./Components/registerForm";
import NavBar from "./Components/SmallerComponents/NavBar";
import Product from "./Components/product";
import Sidebar from "./Components/SmallerComponents/Sidebar";
import Cart from "./Components/Cart";
import SearchTag from "./Components/SearchTag";
import AddProduct from "./Components/addProduct";
import apiUrl from "./config.json";
class App extends Component {
  state = {
    products: [],
    userProducts: [],
    userName: "",
    isAdmin: false,
  };
  componentDidMount = async () => {
    try {
      const user = await httpService.post(
        apiUrl.apiUrl + "/api/userdetails",
        localStorage.getItem("jwt")
      );
     
      this.setState({ userName: user.data.username });
      this.setState({ isAdmin: user.data.roles[0] == "ROLE_ADMIN" });
    } catch (ex) {
      this.setState({ userName: "Anonymous", isAdmin: false });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    this.componentDidMount();
  }
  handleBuy = (e) => {
    const eachProduct =
      sessionStorage.getItem("userProducts") !== null
        ? sessionStorage.getItem("userProducts").split(",")
        : [];
    let userProducts = [];

    try {
      userProducts = JSON.parse(eachProduct);
    } catch (ex) {
      console.log(ex);
    }

    const product = {
      id: e.id,
      Sn: userProducts.length + 1,
      name: e.name,
      count: 1,
      price: e.price,
    };
    const pr = userProducts.find((pr) => pr.id === e.id);
    pr ? pr.count++ : userProducts.push(product);
    console.log(JSON.stringify(userProducts));
    this.setState({ userProducts });
    sessionStorage.removeItem("userProducts");
    sessionStorage.setItem("userProducts", JSON.stringify(userProducts));
  };
  handleIncrement = (product) => {
    const userProducts = [
      ...JSON.parse(sessionStorage.getItem("userProducts")),
    ];
    const pr = userProducts.find((pr) => pr.id === product.id);
    pr.count++;
    this.setState({ userProducts });
    sessionStorage.removeItem("userProducts");
    sessionStorage.setItem("userProducts", JSON.stringify(userProducts));
  };
  handleDecrement = (product) => {
    const userProducts = [
      ...JSON.parse(sessionStorage.getItem("userProducts")),
    ];
    const pr = userProducts.find((pr) => pr.id === product.id);
    pr.count = pr.count > 0 ? pr.count - 1 : pr.count;
    this.setState({ userProducts });
    sessionStorage.removeItem("userProducts");
    sessionStorage.setItem("userProducts", JSON.stringify(userProducts));
  };

  render() {
    return (
      <div>
        <NavBar
          onProductSearch={this.handleProductsOnSearch}
          isAdmin={this.state.isAdmin}
        />
        <div className="d-flex flex-row m-1">
          <Sidebar userName={this.state.userName} />

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
