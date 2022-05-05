import React, { Component } from "react";
import Input from "./input";
import httpService from "../../Services/httpService";
import apiUrl from "../../config.json";
class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    item: "",
    data: [],
  };
  handleChange = async ({ currentTarget: input }) => {
    this.setState({ item: input.value });
    const tagName = this.state.item.trim();

    const { data } = await httpService.get(
      apiUrl.apiUrl + "/api/products/search?tagName=" + tagName
    );
    this.setState({ data });
    this.props.onProductSearch(data);
    console.log(this.props);
  };
  handleEnter = (e) => {
    if (e.key === "Enter") {
      window.location = "/search/" + this.state.item;
    }
  };
  render() {
    return (
      <div style={{ width: "400px" }}>
        <input
          name="item"
          onChange={this.handleChange}
          value={this.state.item}
          type="text"
          className="form-control w-200"
          id="item"
          placeholder="Search....."
          onKeyDown={this.handleEnter}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
