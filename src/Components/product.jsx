import React, { Component } from "react";
import Card from "./SmallerComponents/card";
import httpService from "../Services/httpService";
import apiUrl from "../config.json";
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
  render() {
    const { id, name, price, onStock, description, pic } = this.state;
    return (
      <div
        className="s-card-container 
      s-overflow-hidden
      aok-relative
      s-expandheight
      s-include-content-margin
      s-latency-cf-section
      s-card-border"
        style={{ height: "200px", width: "45%" }}
      >
        <Card
          id={id}
          Name={name}
          price={price}
          onStock={onStock}
          Description={description}
          pic={pic}
        />
        <button className="btn btn-success" onClick={()=>this.props.handleBuy(this.state)}>Buy</button>
      </div>
    );
  }
}

export default Product;
