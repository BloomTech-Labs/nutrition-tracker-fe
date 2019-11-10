import React, { Component } from "react";

import { Form } from "reactstrap";
import { Row, Col, Input, H2, PillButton } from "../../Global/styled";
import { EmailSVG } from "../../Global/icons";

class LoginWithEmail extends Component {
  state = {
    password: "",
    email: ""
  };

  handleInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <H2>
          <EmailSVG width="38" height="38" margin="0 20px 4px 0" />
          Login with email
        </H2>
        <Form onSubmit={this.handleLogin}>
          <Row>
            <Col height="50px" align="center">
              <Input
                name="email"
                type="text"
                placeholder="Email"
                onChange={this.handleInputChange}
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

export default LoginWithEmail;
