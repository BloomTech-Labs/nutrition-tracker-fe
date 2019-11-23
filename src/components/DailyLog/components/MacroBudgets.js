import React from 'react'

import {Row, Col, H3 } from "../../Global/styled";

const MacroBudgets = props => {
  const {
    fatsConsumed,
    fatsTotal,
    carbsConsumed,
    carbsTotal,
    protienConsumed,
    protienTotal,
  } = props;
  
  return (
    <>
      <Row>
        <Col direction="column" justify="center" align="center">
          <H3>Fats</H3>
          <h4>{fatsConsumed}g</h4>
          <h4>{fatsTotal}g</h4>
        </Col>
        <Col direction="column" justify="center" align="center">
          <H3>Carbs</H3>
          <h4>{carbsConsumed}g</h4>
          <h4>{carbsTotal}g</h4>
        </Col>
        <Col direction="column" justify="center" align="center">
          <H3>Protein</H3>
          <h4>{protienConsumed}g</h4>
          <h4>{protienTotal}g</h4>
        </Col>
      </Row>
    </>
  )
}

export default MacroBudgets
