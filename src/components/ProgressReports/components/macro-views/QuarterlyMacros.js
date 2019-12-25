import React, { useEffect } from "react";

import { Col, Row } from "../../../Global/styled";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { getQuarterlyMacroProgress } from "../../../../store/actions/macroProgress";

import QuarterlyCarbs from "../charts/QuarterlyCarbs";
import QuarterlyFats from "../charts/QuarterlyFats";
import QuarterlyProtein from "../charts/QuarterlyProtein";

export default function QuarterlyMacros() {
  const dispatch = useDispatch();

  const user_id = useSelector(state => state.firebase.auth.uid);

  const fats = useSelector(state => state.macroProgress.quarterly_fats);
  const carbs = useSelector(state => state.macroProgress.quarterly_carbs);
  const protein = useSelector(state => state.macroProgress.quarterly_protein);

  useEffect(() => {
    dispatch(getQuarterlyMacroProgress(user_id));
  }, [dispatch, getQuarterlyMacroProgress, user_id]);

  return (
    <MacroWrapper>
      {console.log("CARBS", carbs)}
      {console.log("FATS", fats)}
      {console.log("PROTEIN", protein)}
      <Row>
        <Col>
          <QuarterlyCarbs carbs={carbs} />
        </Col>
      </Row>
      <Row>
        <Col>
          <QuarterlyFats fats={fats} />
        </Col>
      </Row>
      <Row>
        <Col>
          <QuarterlyProtein protein={protein} />
        </Col>
      </Row>
    </MacroWrapper>
  );
}

const MacroWrapper = styled.div`
  margin-bottom: 8rem;
`;
