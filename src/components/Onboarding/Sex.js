import React from "react";
import styled from "styled-components";
import { PillButton, Header, Row, Col } from "./styles";

const Sex = () => {
  return (
    <>
      <Row>
        <Col justify="center">
          <Header>Are you Male or Female?</Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton outline color="primary">
            Male
          </PillButton>
        </Col>
        <div className="w-100"></div>
        <Col>
          <PillButton outline color="primary">
            Female
          </PillButton>
        </Col>
      </Row>
    </>
  );
};

export default Sex;
