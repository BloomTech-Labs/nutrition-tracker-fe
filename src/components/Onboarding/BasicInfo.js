import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Label } from "reactstrap";
import { Row, Col, Header, Input, PillButton } from "./styles";
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
          <InputGroup style={{ marginBottom: "10px" }}>
            <Input placeholder="MM/DD/YYYY" />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <CalendarSVG width={23} height={23} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col direction="column" align="flex-start">
          <h3>Height</h3>
          <InputGroup style={{ marginBottom: "10px" }}>
            <Input placeholder="ft." />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <RulerSVG margin="3 0 0 0" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col direction="column" align="flex-start" justify="flex-end">
          <InputGroup style={{ marginBottom: "10px" }}>
            <Input placeholder="in." bsSize="lg" />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <RulerSVG margin="3 0 0 0" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col direction="column" align="flex-start">
          <h3>Weight</h3>
          <InputGroup>
            <Input placeholder="lbs." bsSize="lg" />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <ScaleSVG margin="3 0 0 0" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
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
