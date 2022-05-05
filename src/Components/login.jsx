import React, { Component } from "react";
import Input from "./SmallerComponents/input";
import { login } from "../Services/login";

class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    error: "",
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account });
  };
  handleSubmit = async (e) => {
    const { account } = this.state;
    e.preventDefault();
    try {
      const { data } = await login(account);
      localStorage.setItem("jwt", data.jwt);
      this.setState({ error: "" });
      window.location = "/";
    } catch ({ response }) {
      console.log(response);
      if (response.status === 400) {
        this.setState({ error: response.data });
        localStorage.clear();
      }
    }
  };

  render() {
    const { account } = this.state;
    return (
      <div className="d-flex justify-content-center w-150 p-3">
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            type="text"
          />
          <Input
            name="password"
            value={account.password}
            type="password"
            id="Password"
            label="Password"
            onChange={this.handleChange}
          />

          <button type="submit" className="btn btn-primary  p-2 m-2">
            Submit
          </button>
        </form>
        <div>
          {this.state.error === "" ? (
            <div></div>
          ) : (
            <div>{this.state.error}</div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
