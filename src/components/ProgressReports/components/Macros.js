import React from "react";

import { Col, Row } from "./../../Global/styled";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { getMacroProgress } from "../../../store/actions/macroProgress";

import MacroChart from "./charts/MacrosBreakdown";

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

  const fats_info = {
    title_1: "Actual Fats",
    title_2: "Target Fats",
    color_1: "#E4D099",
    color_2: "#FFE9AD"
  };

  const carbs_info = {
    title_1: "Actual Carbs",
    title_2: "Target Carbs",
    color_1: "#829BB6",
    color_2: "#A1BFDF"
  };

  const protein_info = {
    title_1: "Actual Protein",
    title_2: "Target Protein",
    color_1: "#A68588",
    color_2: "#F5C6CB"
  };

  return (
    <MacroWrapper>
      <Row>
        <Col>
          <MacroChart
            actuals={actual_carbs}
            goals={target_carbs}
            labels={labels}
            info={fats_info}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <MacroChart
            actuals={actual_fats}
            goals={target_fats}
            labels={labels}
            info={carbs_info}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <MacroChart
            actuals={actual_protein}
            goals={target_protein}
            labels={labels}
            info={protein_info}
          />
        </Col>
      </Row>
    </MacroWrapper>
  );
}

const MacroWrapper = styled.div`
  margin-bottom: 8rem;
`;
