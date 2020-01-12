import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateBasicInfo } from "../../../store/actions/onboardingActions";
import { CalendarSVG, RulerSVG, ScaleSVG } from "../../Global/icons";
import { Col, Form, H2, PillButton, Row } from "../../Global/styled";
import InputGroupWithIcon from "./InputGroupWithIcon";

class BasicInfo extends React.Component {
  state = {
    date_of_birth: "",
    feet: 0,
    inches: 0,
    weight: 0
  };

  // Handles basic info to onboarding reducer state
  handleSubmit = e => {
    e.preventDefault();
    const { date_of_birth, feet, inches, weight } = this.state;

    // Action to add basic info to onboarding reducer
    this.props.updateBasicInfo({
      date_of_birth: date_of_birth,
      height: heightToMetric(feet, inches),
      weight: weightToMetric(weight)
    });

    // pushes us to next route after basic info was updated
    if (date_of_birth && feet && inches && weight) {
      this.props.history.push(`${this.props.path}/weight-goal`);
    } else {
      alert("You need to fill out all info before proceeding.");
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // If no data from previous route, sends you back to landing
    if (!this.props.activityLevel) return <Redirect to="/landing" />;

    return (
      <>
        <Row>
          <Col justify="center" align="center" height="80px">
            <H2>Let's get some basic info!</H2>
          </Col>
        </Row>
        <Form onSubmit={this.handleSubmit} id="formSubmit">
          <Row>
            <Col direction="column" align="flex-start">
              <h3>Birth Date</h3>
              <InputGroupWithIcon
                id="birthdatePicker"
                type="date"
                name="date_of_birth"
                icon={CalendarSVG}
                placeholder="MM/DD/YYYY"
                handleChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col direction="column" align="flex-start">
              <h3>Height</h3>
              <InputGroupWithIcon
                id="heightFeetInput"
                type="number"
                name="feet"
                icon={RulerSVG}
                placeholder="ft."
                handleChange={this.handleChange}
              />
            </Col>
            <Col direction="column" align="flex-start" justify="flex-end">
              <InputGroupWithIcon
                id="heightInchesInput"
                type="number"
                name="inches"
                icon={RulerSVG}
                placeholder="in."
                handleChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col direction="column" align="flex-start">
              <h3>Weight</h3>
              <InputGroupWithIcon
                id="weightInput"
                type="number"
                name="weight"
                icon={ScaleSVG}
                placeholder="lbs."
                handleChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row className="fixed-bottom">
            <Col>
              <PillButton id="submitButton" type="submit" color="success">
                Next
              </PillButton>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

// Converts height to centimeters
function heightToMetric(feet, inches) {
  const feetInches = feet * 12;
  const totalInches = feetInches + Number(inches);
  return Math.round(totalInches * 2.54);
}

// Converts weight to kilograms
function weightToMetric(lbs) {
  return lbs * 0.453592;
}

const mapStateToProps = state => {
  return {
    activityLevel: state.onboarding.activityLevel
  };
};

export { BasicInfo };
export default connect(mapStateToProps, { updateBasicInfo })(BasicInfo);
