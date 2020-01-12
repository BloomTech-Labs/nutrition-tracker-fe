import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateWeightGoal } from "../../../store/actions/onboardingActions";
import { ScaleSVG } from "../../Global/icons";
import {
  Col,
  Form,
  H2,
  Input,
  PillButton,
  Row,
  SlideBar
} from "../../Global/styled";
import InputGroupWithIcon from "./InputGroupWithIcon";

class WeightGoal extends React.Component {
  state = {
    target_rate: 0.0,
    target_weight: metricToImperial(this.props.weight_kg)
  };

  // handles adding target rate and date to redux
  handleSubmit = e => {
    e.preventDefault();
    const { target_rate, target_weight } = this.state;
    this.props.updateWeightGoal({
      target_weight_kg: weightToMetic(target_weight),
      target_rate: target_rate
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

  updateTargetWeight = e => {
    this.setState({target_weight: e.target.value}, () => {
      this.setState({target_rate: 0});
    });
  };

  updateTargetRate = e => {
    this.setState({target_rate: Number(e.target.value)});
  };

  render() {
    // decon props
    const { weight_kg, height_cm, date_of_birth } = this.props;
    const { target_weight, target_rate } = this.state;

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
                value={target_weight}
                icon={ScaleSVG}
                placeholder="lbs."
                handleChange={this.updateTargetWeight}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <SlideBar style={{display: weightToMetic(target_weight) === weight_kg ? "none" : "block" }}>
                <Input
                  name="target_rate"
                  type="range"
                  value={weightToMetic(target_weight) === weight_kg ? 0 : target_rate}
                  min={weightToMetic(target_weight) >= weight_kg ? 0 : -2}
                  max={weightToMetic(target_weight) <= weight_kg ? 0 :  2}
                  step={0.5}
                  onChange={this.updateTargetRate}
                />
                <div>
                  {this.state.target_rate === 0
                    ? <h3>Maintain</h3>
                    : this.state.target_rate > 0
                    ? <h3>{`Gain ${this.state.target_rate} pounds per week`}</h3>
                    : this.state.target_rate < 0
                    ? <h3>{`Loose ${this.state.target_rate} pounds per week`}</h3>
                    : <h3>Maintain</h3>}
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

function metricToImperial(kg) {
  return Math.floor(kg / 0.453592);
}

const mapStateToProps = state => {
  return {
    weight_kg: state.onboarding.weight_kg,
    height_cm: state.onboarding.height_cm,
    date_of_birth: state.onboarding.date_of_birth
  };
};

export { WeightGoal };
export default connect(mapStateToProps, { updateWeightGoal })(WeightGoal);
