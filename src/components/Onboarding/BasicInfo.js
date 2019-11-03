import React from "react";
import InputGroupWithIcon from "./InputGroupWithIcon";
import { Row, Col, Header, PillButton } from "./styles";
import { CalendarSVG, RulerSVG, ScaleSVG } from "../../assets/svg-icons";

const BasicInfo = () => {
  return (
    <>
      <Row>
        <Col justify="center">
          <Header>Let's get some basic info!</Header>
        </Col>
      </Row>
      <Row>
        <Col direction="column" align="flex-start">
          <h3>Birth Date</h3>
          <InputGroupWithIcon icon={CalendarSVG} placeholder="MM/DD/YYYY" />
        </Col>
      </Row>
      <Row>
        <Col direction="column" align="flex-start">
          <h3>Height</h3>
          <InputGroupWithIcon icon={RulerSVG} placeholder="ft." />
        </Col>
        <Col direction="column" align="flex-start" justify="flex-end">
          <InputGroupWithIcon icon={RulerSVG} placeholder="in." />
        </Col>
      </Row>
      <Row>
        <Col direction="column" align="flex-start">
          <h3>Weight</h3>
          <InputGroupWithIcon icon={ScaleSVG} placeholder="lbs." />
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton color="success">Next</PillButton>
        </Col>
      </Row>
    </>
  );
};

export default BasicInfo;
