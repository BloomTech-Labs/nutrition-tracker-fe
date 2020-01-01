import React from "react";
import { Col, Row } from "../../Global/styled";
import MacroProgress from "./charts/MacroProgress";
import WeightProgress from "./charts/WeightProgress";

const Overview = () => {
  return (
    <>
      {/* <Row>
        <Col>
          <MacroProgress />
        </Col>
      </Row> */}
      <Row>
        <Col>
          <WeightProgress />
        </Col>
      </Row>
    </>
  );
};

export default Overview;
