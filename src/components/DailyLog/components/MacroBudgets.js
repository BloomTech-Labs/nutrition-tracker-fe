import React from "react";
import { Row, Col} from "../../Global/styled";
import DataWheel from "../../Global/DataWheel";

const MacroBudgets = () => {
  return (
    <Row noGutters>
      <Col direction="column" justify="center" align="center" xs={4}>
        <DataWheel 
          macroName="Fats"
        />
      </Col>
      <Col direction="column" justify="center" align="center" xs={4}>
        <DataWheel 
          macroName="Carbs"
        />
      </Col>
      <Col direction="column" justify="center" align="center" xs={4}>
        <DataWheel 
          macroName="Protein"
        />
      </Col>
    </Row>
  );
};

export default MacroBudgets;
