import React from "react";
import { connect } from "react-redux";
import InputGroupWithIcon from "./InputGroupWithIcon";
import { Row, Col, Header, PillButton } from "../styles";
import { CalendarSVG, RulerSVG, ScaleSVG } from "../../../assets/svg-icons";
import { updateBasicInfo } from "../../../actions/onboardingActions";

class BasicInfo extends React.Component {
  state = {
    dateOfBirth: "",
    feet: "",
    inches: "",
    weight: ""
  };

  handleClick = () => {
    const { dateOfBirth, feet, inches, weight } = this.state;

    this.props.updateBasicInfo({
      dateOfBirth,
      height: heightToMetric(feet, inches),
      weight: weightToMetic(weight)
    });

    //this.props.history.push(`${this.props.path}/weight-goal`);
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { dateOfBirth, feet, inches, weight } = this.state;
    console.log(this.state);
    return (
      <>
        <Row>
          <Col justify="center">
            <Header>Let's get some basic info!</Header>
          </Col>
        </Row>
        <Row>
          <Col direction="column" align="flex-start">
            <h3>Birth Date</h3>
            <InputGroupWithIcon
              type="date"
              name="dateOfBirth"
              icon={CalendarSVG}
              value={dateOfBirth}
              placeholder="MM/DD/YYYY"
              handleChange={this.handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col direction="column" align="flex-start">
            <h3>Height</h3>
            <InputGroupWithIcon
              type="number"
              name="feet"
              icon={RulerSVG}
              value={feet}
              placeholder="ft."
              handleChange={this.handleChange}
            />
          </Col>
          <Col direction="column" align="flex-start" justify="flex-end">
            <InputGroupWithIcon
              type="number"
              name="inches"
              icon={RulerSVG}
              value={inches}
              placeholder="in."
              handleChange={this.handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col direction="column" align="flex-start">
            <h3>Weight</h3>
            <InputGroupWithIcon
              type="number"
              name="weight"
              icon={ScaleSVG}
              value={weight}
              placeholder="lbs."
              handleChange={this.handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PillButton onClick={this.handleClick} color="success">
              Next
            </PillButton>
          </Col>
        </Row>
      </>
    );
  }
}

function heightToMetric(feet, inches) {
  return Math.round((feet / 12 + inches) * 2.54);
}

function weightToMetic(lbs) {
  return Math.round(lbs * 0.453592);
}

export default connect(
  null,
  { updateBasicInfo }
)(BasicInfo);
