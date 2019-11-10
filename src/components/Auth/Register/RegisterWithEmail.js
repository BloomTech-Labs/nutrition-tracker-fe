import React, { Component } from "react";

import { Row, Col, Form, Input, Header, PillButton } from "../../Global/styled";
import { EmailSVG } from "../../Global/icons";
import { register } from "../../../store/actions/firebaseAuth";
import { connect } from "react-redux";

class RegisterWithEmail extends Component {
  state = {
    name: "",
    password: "",
    email: ""
  };

  handleInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state.name, this.state.email, this.state.password);
  };
  render() {
    return (
      <>
        <Header>
          <EmailSVG width="38" height="38" margin="0 10px 0 0" />
          Register with email
        </Header>
        <Form onSubmit={this.handleRegister}>
          <Row>
            <Col>
              <Input
                name="name"
                placeholder="Username"
                type="text"
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                name="email"
                type="text"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
            </Col>
          </Row> */}
          <Row className="fixed-bottom">
            <Col style={{ marginBottom: "30px" }}>
              <PillButton
                className="login"
                type="submit"
                color="success"
                outline
              >
                Register
              </PillButton>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { register }
)(RegisterWithEmail);
