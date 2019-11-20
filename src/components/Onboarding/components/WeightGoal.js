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
    target_date: "",
    target_rate: 0,
    target_weight: 0
  };

  handleSubmit = () => {
    const { target_rate, target_weight } = this.state;
    this.props.updateWeightGoal({
      target_weight_kg: weightToMetic(target_weight),
      target_rate: Number(target_rate)
    });
    this.props.history.push("/register");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { weight_kg, height_cm, date_of_birth } = this.props;

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
          {/* <Row>
            <Col direction="column" align="flex-start">
              <h3>Target Date</h3>
              <InputGroupWithIcon
                name="target_date"
                type="date"
                icon={CalendarSVG}
                handleChange={this.handleChange}
              />
            </Col>
          </Row> */}
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

// function targetDate() {
//   return this.props;
// }

const mapStateToProps = state => {
  return {
    weight_kg: state.onboardingReducer.weight_kg,
    height_cm: state.onboardingReducer.height_cm,
    date_of_birth: state.onboardingReducer.date_of_birth
  };
};

export default connect(mapStateToProps, { updateWeightGoal })(WeightGoal);
