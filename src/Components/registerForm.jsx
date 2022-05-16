import React, { Component } from "react";
import Input from "./SmallerComponents/input";
import { register } from "../Services/user";
import { Toast, ToastContainer } from "react-bootstrap";
class RegisterForm extends Component {
  state = {
    user: {
      username: "",
      password: "",
      phone: 0,
      role: "User",
    },
    error:""
  };
  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };
  handleSubmit = async (e) => {
    this.setState({Submitted:true})
    e.preventDefault();
    const { user } = this.state;
    try {
      const { data } = await register(user);
      localStorage.setItem("jwt", data.jwt);
      this.setState({ error: "",isLogin:true });
      window.location="/";
    } catch ({response}) {
        
      if (response.status === 400) {
        this.setState({ error: response.data });
        localStorage.clear();
      }
    }
  };
  render() {
    const { user } = this.state;
    return (
      <div className="d-flex justify-content-center w-150 p-3">
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={user.username}
            onChange={this.handleChange}
            type="text"
          />
          <Input
            name="password"
            value={user.password}
            type="password"
            id="Password"
            label="Password"
            onChange={this.handleChange}
          />
          <Input
            name="phone"
            label="Phone"
            onChange={this.handleChange}
            type="text"
            value={user.phone}
          ></Input>
          {this.state.Submitted ? (
            <ToastContainer className="p-3" position="top-center">
               {this.state.isLogin
                   ?
              <Toast bg="success">
                <Toast.Body className=' dark text-white'>
                Registered and Logged in successfully
                </Toast.Body>
              </Toast>
              :
              <Toast className="d-inline-block m-1" bg="danger" animation= {true} delay={5000} autohide>
                <Toast.Body className=' dark text-white'>
                 {this.state.error}
                </Toast.Body>
              </Toast>
  }
            </ToastContainer>
          ) : (
            <></>
          )}
          <button type="submit" className="btn btn-primary  p-2 m-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
