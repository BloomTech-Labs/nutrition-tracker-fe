import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useFetchByDispatch } from "../../../custom-hooks/useFetchByDispatch";
import { getMacroProgress } from "../../../store/actions/macroProgress";
import { Col, Row } from "./../../Global/styled";
import LineChart from "./charts/LineChart";

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

  const min = array =>
    Math.min.apply(Math, array) >= 10
      ? Math.floor(Math.max.apply(Math, array) / 10) * 10 - 10
      : 0;

  const max = array => Math.ceil(Math.max.apply(Math, array) / 10) * 10 + 10;

  const fatOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: min(actual_fats),
            max: max(actual_fats)
          }
        }
      ]
    }
  };

  const carbOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: min(actual_carbs),
            max: max(actual_carbs)
          }
        }
      ]
    }
  };

  const proteinOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: min(actual_protein),
            max: max(actual_protein)
          }
        }
      ]
    }
  };

  return (
    <MacroWrapper>
      <Row>
        <Col>
          <LineChart
            actuals={actual_carbs}
            goals={target_carbs}
            labels={labels}
            info={fats_info}
            options={fatOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <LineChart
            actuals={actual_fats}
            goals={target_fats}
            labels={labels}
            info={carbs_info}
            options={carbOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <LineChart
            actuals={actual_protein}
            goals={target_protein}
            labels={labels}
            info={protein_info}
            options={proteinOptions}
          />
        </Col>
      </Row>
    </MacroWrapper>
  );
}

const MacroWrapper = styled.div`
  margin-bottom: 8rem;
`;
