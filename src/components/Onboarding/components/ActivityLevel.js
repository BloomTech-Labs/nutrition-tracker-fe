import React from "react";

import { PillButton, H2, Row, Col } from "../../Global/styled";

import { useDispatch, useSelector } from "react-redux";
import { updateActivityLevel } from "../../../store/actions/onboardingActions";

import { Redirect } from "react-router-dom";

const ActivityLevel = props => {
  const dispatch = useDispatch();

  const { history, path } = props;

  const handleClick = activityLevel => {
    dispatch(updateActivityLevel(activityLevel));
    history.push(`${path}/basic-info`);
  };

  const sex = useSelector(state => state.onboardingReducer.sex);

  if (!sex) return <Redirect to="/landing" />;

  return (
    <>
      <Row>
        <Col justify="center">
          <H2>How active are you?</H2>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton onClick={() => handleClick(1.2)} outline color="primary">
            Sedentary
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton
            onClick={() => handleClick(1.375)}
            outline
            color="primary"
          >
            Light
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton onClick={() => handleClick(1.55)} outline color="primary">
            Moderate
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton
            onClick={() => handleClick(1.725)}
            outline
            color="primary"
          >
            Very
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton onClick={() => handleClick(1.9)} outline color="primary">
            Extra
          </PillButton>
        </Col>
      </Row>
    </>
  );
};

export default ActivityLevel;
