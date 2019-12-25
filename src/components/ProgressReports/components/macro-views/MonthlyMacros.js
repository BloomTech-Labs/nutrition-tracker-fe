import React, { useEffect } from "react";

import { Col, Row } from "../../../Global/styled";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { getMonthlyMacroProgress } from "../../../../store/actions/macroProgress";

import MonthlyCarbs from "../charts/MonthlyCarbs";
import MonthlyFats from "../charts/MonthlyFats";
import MonthlyProtein from "../charts/MonthlyProtein";

export default function MonthlyMacros() {
  const dispatch = useDispatch();

  const user_id = useSelector(state => state.firebase.auth.uid);

  const fats = useSelector(state => state.macroProgress.monthly_fats);
  const carbs = useSelector(state => state.macroProgress.monthly_carbs);
  const protein = useSelector(state => state.macroProgress.monthly_protein);

  useEffect(() => {
    dispatch(getMonthlyMacroProgress(user_id));
  }, [dispatch, getMonthlyMacroProgress, user_id]);

  return (
    <MacroWrapper>
      {console.log("CARBS", carbs)}
      {console.log("FATS", fats)}
      {console.log("PROTEIN", protein)}
      <Row>
        <Col>
          <MonthlyCarbs carbs={carbs} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MonthlyFats fats={fats} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MonthlyProtein protein={protein} />
        </Col>
      </Row>
    </MacroWrapper>
  );
}

const MacroWrapper = styled.div`
  margin-bottom: 8rem;
`;
