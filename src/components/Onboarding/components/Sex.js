import React from "react";
import { connect } from "react-redux";
import { PillButton, Row, Col, H2 } from "../../Global/styled";
import { updateSex } from "../../../store/actions/onboardingActions";

const Sex = props => {
  const { history, path } = props;

  const handleClick = sex => {
    props.updateSex(sex);
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

export default connect(
  null,
  { updateSex }
)(Sex);
