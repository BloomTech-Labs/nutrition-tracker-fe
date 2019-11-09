import React from "react";
import { Row, Col, Header, PillButton } from "../styles";
import { CalendarSVG, ScaleSVG } from "../../../assets/svg-icons";
import InputGroupWithIcon from "./InputGroupWithIcon";
import { updateWeightGoal } from "../../../actions/onboardingActions";

class WeightGoal extends React.Component {
  handleClick = () => {
    this.props.history.push(`${this.props.path}/registration-options`);
  };

  handleChange = e => {};

  render() {
    const { date_of_birth, height, weight } = this.state;

    return (
      <>
        <Row>
          <Col justify="center">
            <Header>Let's set some goals!</Header>
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

export default WeightGoal;
