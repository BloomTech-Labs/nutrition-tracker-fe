import React from "react";
import { PillButton, Header, Row, Col } from "./styles";

const Sex = ({ history, path }) => {
  const handleClick = sex => {
    // update sex
    history.push(`${path}/activity-level`);
  };

  return (
    <>
      <Row>
        <Col justify="center">
          <Header>Are you Male or Female?</Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton onClick={() => handleClick("m")} outline color="primary">
            Male
          </PillButton>
        </Col>
        <div className="w-100"></div>
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
