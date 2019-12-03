import React from "react";
import styled from "styled-components";

import { Row, Col, H3 } from "../../Global/styled";
import theme from "../../Global/theme";

const MacroBudgets = props => {
  const {
    fatsConsumed,
    fatsTotal,
    carbsConsumed,
    carbsTotal,
    protienConsumed,
    protienTotal
  } = props;

  const percentFatBudget = Math.round(
    props.fatsConsumed / props.fatsTotal * 100
  );
  const percentCarbBudget = Math.round(
    props.carbsConsumed / props.carbsTotal * 100
  );
  const percentProteinBudget = Math.round(
    props.protienConsumed / props.protienTotal * 100
  );

  return (
    <Row>
      <Col direction="column" justify="center" align="center">
        <H3>Fats</H3>
        <FatConsumed percentFatBudget={percentFatBudget}>
          {fatsConsumed}g
        </FatConsumed>
        <h4>
          {fatsTotal}g
        </h4>
      </Col>
      <Col direction="column" justify="center" align="center">
        <H3>Carbs</H3>
        <CarbsConsumed percentCarbBudget={percentCarbBudget}>
          {carbsConsumed}g
        </CarbsConsumed>
        <h4>
          {carbsTotal}g
        </h4>
      </Col>
      <Col direction="column" justify="center" align="center">
        <H3>Protein</H3>
        <ProteinConsumed percentProteinBudget={percentProteinBudget}>
          {protienConsumed}g
        </ProteinConsumed>
        <h4>
          {protienTotal}g
        </h4>
      </Col>
    </Row>
  );
};

const FatConsumed = styled.h4`
  color: ${props =>
    props.percentFatBudget >= 100 ? `${theme.color.danger}` : "black"};
`;

const CarbsConsumed = styled.h4`
  color: ${props =>
    props.percentCarbBudget >= 100 ? `${theme.color.danger}` : "black"};
`;

const ProteinConsumed = styled.h4`
  color: ${props =>
    props.percentProteinBudget >= 100 ? `${theme.color.danger}` : "black"};
`;

export default MacroBudgets;
