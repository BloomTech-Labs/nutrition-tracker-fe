import React from "react";
import {Col, Row} from "../../Global/styled";
import MacroProgress from "./charts/MacroProgress";
import WeightProgress from "./charts/WeightProgress";

const Overview = () => {
  return (
    <>
      <Row>
        <Col>
          <WeightProgress />
        </Col>
      </Row>
      <Row>
        <Col>
          <MacroProgress />
        </Col>
      </Row>
    </>
  );
};

export default Overview;
