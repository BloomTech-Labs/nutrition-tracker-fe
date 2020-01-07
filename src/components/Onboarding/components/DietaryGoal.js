import React from "react";

import { PillButton, Row, Col, H2 } from "../../Global/styled";

import { useDispatch } from "react-redux";
import { updateDailyGoal } from "../../../store/actions/onboardingActions";

// This component has been disabled!!!!
const DietaryGoal = ({ history, path }) => {
  // this is a functional component so we are going to set useDispatch up
  const dispatch = useDispatch();

  const handleClick = daily_goal => {
    // using dispatch to run our action
    dispatch(updateDailyGoal(daily_goal));
    history.push(`${path}/sex`);
  };

  return (
    <>
      <Row>
        <Col justify="center" align="center" height="50px">
          <H2>What's your dietary goal?</H2>
        </Col>
      </Row>

      <Row>
        <Col>
          <PillButton
            id="loseButton"
            onClick={() => handleClick("lose")}
            outline
            color="primary"
          >
            Lose Weight
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton
            id="gainButton"
            onClick={() => handleClick("gain")}
            outline
            color="primary"
          >
            Gain Weight
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton
            id="maintainButton"
            onClick={() => handleClick("maintain")}
            outline
            color="primary"
          >
            Eat Healthier
          </PillButton>
        </Col>
      </Row>
    </>
  );
};

export default DietaryGoal;
