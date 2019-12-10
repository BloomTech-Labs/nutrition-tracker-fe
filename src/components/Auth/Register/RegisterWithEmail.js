import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from "reactstrap";
import { register } from "../../../store/actions/firebaseAuth";
import { EmailSVG } from "../../Global/icons";
import { Col, H2, Input, PillButton, Row } from "../../Global/styled";

class RegisterWithEmail extends Component {
  state = {
    name: "temp",
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
        <Form onSubmit={this.handleRegister} id="registrationForm">
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
              <PillButton className="login" type="submit" color="success" id="registerSubmit">
                Register
              </PillButton>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export { RegisterWithEmail };
export default connect(null, { register })(RegisterWithEmail);
