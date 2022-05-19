import React, { Component } from "react";
import Input from "./SmallerComponents/input";
import { login } from "../Services/login";
import Toastmsg from "./SmallerComponents/Toastmsg";
import httpService from "../Services/httpService";
import apiUrl from '../config.json'

class Login extends Component {
  Toast = null;

  state = {
    account: {
      username: "",
      password: "",
    },
    error: "",
    isLogin: false,
    Submitted: false,
  };
  handleChange = ({ currentTarget: input }) => {
    this.setState({ Submitted: false });
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
      const {data:products} =  await httpService.post(apiUrl.apiUrl+"/api/buy",[],
      {
        headers: {
          Authorization: `Bearer ${data.jwt}`
        },
      }
     
    );
    sessionStorage.setItem("userProducts",JSON.stringify(products)); 
      this.setState({ error: "" });
      window.location = "/";

      this.setState({ isLogin: true });
    } catch ({ response }) {
      if (response.status === 400) {
        this.setState({ error: response.data });

        localStorage.clear();
        sessionStorage.clear();
      }
      this.setState({ isLogin: false });
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

          <button
            onClick={() => this.setState({ Submitted: true })}
            type="submit"
            className="btn btn-primary  p-2 m-2"
          >
            Submit
          </button>
          {this.state.Submitted ? (
            this.state.isLogin ? (
              <Toastmsg
                show={this.state.Submitted}
                bg="success"
                msg="Successfully logged in"
                showfromparent={this.state.Submitted}
              />
            ) : (
              <Toastmsg
                show={this.state.Submitted}
                setShow={(val) => this.setState({ Submitted: val })}
                bg="danger"
                msg={this.state.error}
              />
            )
          ) : (
            <></>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
