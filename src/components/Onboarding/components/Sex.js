import React from "react";

import { PillButton, Row, Col, H2 } from "../../Global/styled";
import { useDispatch } from "react-redux";
import { updateSex } from "../../../store/actions/onboardingActions";

const Sex = props => {
  const dispatch = useDispatch();
  const { history, path } = props;

  const handleClick = sex => {
    dispatch(updateSex(sex));
    history.push(`${path}/activity-level`);
  };

  return (
    <>
      <Row>
        <Col justify="center">
          <H2>Are you Male or Female?</H2>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton onClick={() => handleClick("m")} outline color="primary">
            Male
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton onClick={() => handleClick("f")} outline color="primary">
            Female
          </PillButton>
        </Col>
      </Row>
    </>
  );
};

export default Sex;
