import React, { Component } from "react";
import httpService from "../Services/httpService";
import Card from "./SmallerComponents/card";
import apiUrl from "../config.json";

class Mesh extends Component {
  apiEndpoint = apiUrl.apiUrl + "/api/products/";

  state = {
    products: [],
  };
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps, prevState) {}
  async componentDidMount() {
    const { data } = await httpService.get(this.apiEndpoint);
    this.setState({ products: data });
  }
  render() {
    const products = this.props.products
      ? this.props.products
      : this.state.products;

    return (
      <div className="d-flex flex-row m-1 ">
        <div className="mx-auto m-2">
          {products.length == 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {" "}
              <p>No products found</p>{" "}
            </div>
          ) : (
            <div className="row row-cols-4">
              {products.map((product) => (
                <Card
                  key={product.id}
                  Name={product.name}
                  price={product.price}
                  onStock={product.onStock}
                  Description={product.description}
                  pic={product.pic}
                  id={product.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Mesh;
