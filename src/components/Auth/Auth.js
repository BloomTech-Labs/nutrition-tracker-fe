import React from "react";
import styled from "styled-components";
import { Input, Button, Form } from "reactstrap";
import * as firebase from "firebase/app";
import "firebase/auth";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };

    this.authenticate = this.authenticate.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  authenticate = (email, password) => {
    // e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    // console.log("hello world");
  };

  changeHandler(e) {
    e.preventDefault();
    this.setState = { [e.target.name]: e.target.value };
  }
  render() {
    return (
      <AuthWrapper>
        <h1>Hello, world!</h1>
        <Form onSubmit={() => this.authenticate("test@test.com", "password")}>
          <Input
            placeholder="email"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <Input
            name="password"
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <Button>submit</Button>
        </Form>
      </AuthWrapper>
    );
  }
}

const AuthWrapper = styled.div`
  h1 {
    margin-top: 0;
  }
`;

export default Auth;
