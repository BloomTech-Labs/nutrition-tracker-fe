import React from "react";

import { Col, Row } from "./../../Global/styled";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { getMacroProgress } from "../../../store/actions/macroProgress";

import ProgressCarbs from "./charts/ProgressCarbs";
import ProgressFats from "./charts/ProgressFats";
import ProgressProtein from "./charts/ProgressProtein";

import { useFetchByDispatch } from "../../../custom-hooks/useFetchByDispatch";

export default function Macros() {
  const firebaseID = useSelector(state => state.firebase.auth.uid);
  const progressPeriod = useSelector(state => state.progressPeriod);

  const {
    actual_fats,
    target_fats,
    actual_carbs,
    target_carbs,
    actual_protein,
    target_protein,
    labels
  } = useSelector(state => state.macroProgress);

  useFetchByDispatch(getMacroProgress, {
    firebaseID,
    ...progressPeriod
  });

  return (
    <MacroWrapper>
      {console.log("ACTUAL CARBS", actual_carbs)}
      {console.log("TARGET CARBS", target_carbs)}
      {console.log("ACTUAL FATS", actual_fats)}
      {console.log("TARGET FATS", target_fats)}
      {console.log("ACTUAL PROTEIN", actual_protein)}
      {console.log("TARGET PROTEIN", target_protein)}

      <Row>
        <Col>
          <ProgressCarbs
            actual_carbs={actual_carbs}
            target_carbs={target_carbs}
            labels={labels}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProgressFats
            actual_fats={actual_fats}
            target_fats={target_fats}
            labels={labels}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProgressProtein
            actual_protein={actual_protein}
            target_protein={target_protein}
            labels={labels}
          />
        </Col>
      </Row>
    </MacroWrapper>
  );
}

const MacroWrapper = styled.div`
  margin-bottom: 8rem;
`;
