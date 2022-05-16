import React, { Component } from "react";
import httpService from "../Services/httpService";
import apiUrl from "../config.json";
import Toastmsg from "./SmallerComponents/Toastmsg";
class Product extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const jwt = localStorage.getItem("jwt");

      const { data } = await httpService.get(
        apiUrl.apiUrl + "/api/products/" + id + "/",
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      this.setState(data);
    } catch (e) {
      window.location = "/login";
    }
  }
  componentDidUpdate(prevProps, prevState) {
    this.componentDidMount();
  }
  render() {
    const { id, name, price, onStock, description, pic } = this.state;
    return (
      <div className="d-flex flex-row" style={{ width: "100%" }}>
        <div className="p-2">
          <img src={pic} alt={name} />
        </div>

        <div className=" width-auto m-2 p-2">
          <h5 className="card-title">{name}</h5>
          <h6> Price : {price}</h6>
          <h6>On Stock : {onStock}</h6>
          <p className="card-text">{description}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.handleBuy(this.state);
              this.setState({ AddedtoCart: true });
            }}
          >
            Buy
          </button>
          {this.state.AddedtoCart ? (
            <Toastmsg
              show={this.state.AddedtoCart}
              setShow={(val) => this.setState({ AddedtoCart: val })}
              bg="success"
              msg="Added to Cart"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default Product;
