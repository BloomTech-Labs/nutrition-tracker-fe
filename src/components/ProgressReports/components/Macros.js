import React from "react";

import { Col, Row } from "../../Global/styled";
import styled from "styled-components";

import CarbsProgress from "./charts/CarbsProgress";
import FatsProgress from "./charts/FatsProgress";
import ProteinProgress from "./charts/ProteinProgress";

const Macros = () => {
  return (
    <MacroWrapper>
      <Row>
        <Col>
          <CarbsProgress />
        </Col>
      </Row>
      <Row>
        <Col>
          <FatsProgress />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProteinProgress />
        </Col>
      </Row>
    </MacroWrapper>
  );
};

const MacroWrapper = styled.div`
  margin-bottom: 8rem;
`;

export default Macros;
