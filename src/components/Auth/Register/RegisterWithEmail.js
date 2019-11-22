import React, { Component } from "react";

import { Form } from "reactstrap";
import { Row, Col, Input, H2, PillButton } from "../../Global/styled";
import { EmailSVG } from "../../Global/icons";
import { register } from "../../../store/actions/firebaseAuth";
import { connect } from "react-redux";

class RegisterWithEmail extends Component {
  state = {
    name: "",
    password: "",
    email: ""
  };

  // Makes data fluid, like water. Data doesn't fill the input, it becomes the input
  handleInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  // Handles email auth action and sends onboarding info to back end
  handleRegister = e => {
    e.preventDefault();
    this.props.register(
      this.state.name,
      this.state.email,
      this.state.password,
      this.props.onboardingInfo
    );
  };

  render() {
    return (
      <>
        <H2>
          <EmailSVG width="38" height="38" margin="0 30px 4px 0" />
          Register with email
        </H2>
        <Form onSubmit={this.handleRegister}>
          <Row>
            <Col height="50px" align="center">
              <Input
                name="name"
                placeholder="Username"
                type="text"
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
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
                Register
              </PillButton>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default connect(null, { register })(RegisterWithEmail);
