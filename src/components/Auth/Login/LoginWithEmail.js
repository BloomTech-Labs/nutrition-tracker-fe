import React, { Component } from "react";

import { Form } from "reactstrap";
import { Row, Col, Input, H2, PillButton } from "../../Global/styled";
import { EmailSVG } from "../../Global/icons";

import { login } from "../../../store/actions/firebaseAuth";
import { connect } from "react-redux";

class LoginWithEmail extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  // Life is change, you need to know how to handle it
  handleInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  // does the login thing, ya know?
  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <>
        <H2>
          <EmailSVG width="38" height="38" margin="0 20px 4px 0" />
          Login with email
        </H2>
        <Form onSubmit={this.handleLogin} id="loginForm">
          <Row>
            <Col height="50px" align="center">
              <Input
                name="email"
                type="text"
                placeholder="Email"
                onChange={this.handleInputChange}
                id="emailInput"
              />
            </Col>
          </Row>
          <Row>
            <Col height="50px" align="center">
              <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleInputChange}
                id="passwordInput"
              />
            </Col>
          </Row>
          <Row className="fixed-bottom">
            <Col>
              <PillButton className="login" type="submit" color="success">
                Login
              </PillButton>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export { LoginWithEmail };
export default connect(null, { login })(LoginWithEmail);
