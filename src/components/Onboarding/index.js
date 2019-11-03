import React from "react";
import { Route } from "react-router-dom";
import { Container } from "./styles";
import TopBar from "./TopBar";
import DietaryGoal from "./DietaryGoal";
import Sex from "./Sex";
import BasicInfo from "./BasicInfo";
import WeightGoal from "./WeightGoal";

class Onboarding extends React.Component {
  state = {};

  render() {
    const { path } = this.props.match;
    return (
      <Container direction="column" justify="center" fluid={true}>
        <TopBar />
        <Route path={`${path}/dietary-goal`} component={DietaryGoal} />
        <Route path={`${path}/sex`} component={Sex} />
        <Route path={`${path}/basic-info`} component={BasicInfo} />
        <Route path={`${path}/weight-goal`} component={WeightGoal} />
      </Container>
    );
  }
}
export default Onboarding;
