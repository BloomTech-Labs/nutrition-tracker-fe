import React from "react";
import { Row, Col, H2, PillButton } from "../../Global/styled";
import { CalendarSVG, ScaleSVG } from "../../../assets/svg-icons";
import InputGroupWithIcon from "./InputGroupWithIcon";
import { updateWeightGoal } from "../../../store/actions/onboardingActions";

class WeightGoal extends React.Component {
  handleClick = () => {
    // this.props.history.push(`${this.props.path}/registration-options`);
    this.props.history.push("/register");
  };

  handleChange = e => {};

  render() {
    // const { date_of_birth, height, weight } = this.state;

    return (
      <>
        <Row>
          <Col justify="center" align="center" height="80px">
            <H2>Let's set some goals!</H2>
          </Col>
        </Row>
        <Row>
          <Col direction="column" align="flex-start">
            <h3>Target Weight</h3>
            <InputGroupWithIcon
              icon={ScaleSVG}
              placeholder="lbs."
              handleChange={this.handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col direction="column" align="flex-start">
            <h3>Target Date</h3>
            <InputGroupWithIcon
              icon={CalendarSVG}
              placeholder="lbs."
              handleChange={this.handleChange}
            />
          </Col>
        </Row>
        <Row className="fixed-bottom">
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

export default WeightGoal;
