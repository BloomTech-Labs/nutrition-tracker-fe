import React from "react";

import {
  Row,
  Col,
  H2,
  PillButton,
  Form,
  SlideBar,
  Input
} from "../../Global/styled";
import { ScaleSVG } from "../../Global/icons";

import InputGroupWithIcon from "./InputGroupWithIcon";

import { connect } from "react-redux";
import { updateWeightGoal } from "../../../store/actions/onboardingActions";

import { Redirect } from "react-router-dom";

class WeightGoal extends React.Component {
  state = {
    target_rate: 0,
    target_weight: 0
  };

  // handles adding target rate and date to redux
  handleSubmit = e => {
    e.preventDefault();
    const { target_rate, target_weight } = this.state;
    this.props.updateWeightGoal({
      target_weight_kg: weightToMetic(target_weight),
      target_rate: Number(target_rate)
    });
    if (target_weight) {
      this.props.history.push("/register");
    } else {
      alert("You need to fill out your target weight to continue.");
    }
  };

  // This function can handle change, can you?
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // decon props
    const { weight_kg, height_cm, date_of_birth } = this.props;

    // takes us back home if we are missing values for height, weight, and dob
    // if they aren't present then it will route to landing so onboarding can be filled out properly
    if (!weight_kg || !height_cm || !date_of_birth)
      return <Redirect to="/landing" />;

    return (
      <>
        <Row>
          <Col justify="center" align="center" height="80px">
            <H2>Let's set some goals!</H2>
          </Col>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col direction="column" align="flex-start">
              <h3>Target Weight</h3>
              <InputGroupWithIcon
                name="target_weight"
                type="number"
                icon={ScaleSVG}
                placeholder="lbs."
                handleChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <SlideBar>
                <Input
                  name="target_rate"
                  type="range"
                  min={-2}
                  max={2}
                  step={0.5}
                  onChange={this.handleChange}
                />
                <div>
                  {this.state.target_rate === 0
                    ? "Maintain"
                    : this.state.target_rate > 0
                    ? `Gain ${this.state.target_rate} pounds per week`
                    : this.state.target_rate < 0
                    ? `Loose ${this.state.target_rate} pounds per week`
                    : "Maintain"}
                </div>
              </SlideBar>
            </Col>
          </Row>
          <Row className="fixed-bottom">
            <Col>
              <PillButton type="submit" color="success">
                Next
              </PillButton>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

function weightToMetic(lbs) {
  return Math.round(lbs * 0.453592);
}

const mapStateToProps = state => {
  return {
    weight_kg: state.onboarding.weight_kg,
    height_cm: state.onboarding.height_cm,
    date_of_birth: state.onboarding.date_of_birth
  };
};

export default connect(mapStateToProps, { updateWeightGoal })(WeightGoal);
