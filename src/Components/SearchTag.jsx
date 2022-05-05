import React, { Component, useEffect } from "react";
import httpService from "../Services/httpService";
import Mesh from "./mesh";
import apiUrl from "../config.json";

class SearchTag extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) this.componentDidMount();
  };
  componentDidMount = async () => {
    const endpoint =
      apiUrl.apiUrl +
      "/api/products/search?tagName=" +
      this.props.match.params.item;

    const { data } = await httpService.get(endpoint);
    console.log(data)
    this.setState({ data });
  };
  render() {
    return (
      <>
        <Mesh products={this.state.data} />
      </>
    );
  }
}

export default SearchTag;
