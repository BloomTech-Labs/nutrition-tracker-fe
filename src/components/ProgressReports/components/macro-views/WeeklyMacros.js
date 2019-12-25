import React, { useEffect } from "react";

import { Col, Row } from "../../../Global/styled";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { getWeeklyMacroProgress } from "../../../../store/actions/macroProgress";

import WeeklyCarbs from "../charts/WeeklyCarbs";
import WeeklyFats from "../charts/WeeklyFats";
import WeeklyProtein from "../charts/WeeklyProtein";

export default function WeeklyMacros() {
  const dispatch = useDispatch();

  const user_id = useSelector(state => state.firebase.auth.uid);

  const fats = useSelector(state => state.macroProgress.weekly_fats);
  const carbs = useSelector(state => state.macroProgress.weekly_carbs);
  const protein = useSelector(state => state.macroProgress.weekly_protein);

  useEffect(() => {
    dispatch(getWeeklyMacroProgress(user_id));
  }, [dispatch, getWeeklyMacroProgress, user_id]);

  return (
    <MacroWrapper>
      {console.log("CARBS", carbs)}
      {console.log("FATS", fats)}
      {console.log("PROTEIN", protein)}
      <Row>
        <Col>
          <WeeklyCarbs carbs={carbs} />
        </Col>
      </Row>
      <Row>
        <Col>
          <WeeklyFats fats={fats} />
        </Col>
      </Row>
      <Row>
        <Col>
          <WeeklyProtein protein={protein} />
        </Col>
      </Row>
    </MacroWrapper>
  );
}

const MacroWrapper = styled.div`
  margin-bottom: 8rem;
`;
