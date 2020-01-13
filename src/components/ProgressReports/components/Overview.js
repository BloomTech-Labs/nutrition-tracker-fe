import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useFetchByDispatch } from "../../../custom-hooks/useFetchByDispatch";
import { getWeightActuals } from "../../../store/actions/progressOverviewActions";
import { getWeightTargets } from "../../../store/actions/progressOverviewActions";
import { getCaloriesConsumed } from "../../../store/actions/progressOverviewActions";
import { getAverageMacrosConsumed } from "../../../store/actions/progressOverviewActions";
import { Col as BS_Col, Row } from "../../Global/styled";
import LineChart from "./charts/LineChart";

const Overview = () => {
  const firebaseID = useSelector(state => state.firebase.auth.uid);
  const progressPeriod = useSelector(state => state.progressPeriod);
  const { start_date } = useSelector(state => state.progressPeriod);

  const {
    weight_actuals,
    weight_targets,
    weight_labels,
    actual_calories,
    target_calories,
    calorie_labels
  } = useSelector(state => state.progressOverview);

  useFetchByDispatch(getAverageMacrosConsumed, {
    firebaseID,
    start_date
  });

  useFetchByDispatch(getWeightTargets, {
    firebaseID,
    ...progressPeriod
  });

  useFetchByDispatch(getWeightActuals, {
    firebaseID,
    ...progressPeriod
  });

  useFetchByDispatch(getCaloriesConsumed, {
    firebaseID,
    ...progressPeriod
  });

  // TODO: change min and max to -5 and + 5
  const weight_min = (arr1, arr2) => {
    const min1 = Math.round(Math.min.apply(Math, arr1) / 5) * 5 - 5;
    const min2 = Math.round(Math.min.apply(Math, arr2) / 5) * 5 - 5;
    return min1 > min2 ? min2 : min1;
  };
  // TODO: change min and max to -5 and + 5

  const weight_max = (arr1, arr2) => {
    const max1 = Math.round(Math.max.apply(Math, arr1) / 5) * 5 + 5;
    const max2 = Math.round(Math.max.apply(Math, arr2) / 5) * 5 + 5;
    return max1 > max2 ? max1 : max2;
  };

  const calories_min = array =>
    Math.min.apply(Math, array) >= 200
      ? Math.round(Math.min.apply(Math, array) / 200) * 200 - 200
      : 0;

  const calories_max = array =>
    Math.round(Math.max.apply(Math, array) / 100) * 100 + 200;

  const calorie_info = {
    title_1: "Actual Calories",
    title_2: "Target Calories",
    color_1: "#E4D099",
    color_2: "#FFE9AD"
  };

  const calorieOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: calories_min(actual_calories),
            max: calories_max(actual_calories),
            callback: value => `${value} cal`
          }
        }
      ]
    }
  };

  const weight_info = {
    title_1: "Actual Weights",
    title_2: "Target Weights",
    color_1: "#dc3545",
    color_2: "#000000"
  };

  const weightOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: weight_min(weight_targets, weight_actuals),
            max: weight_max(weight_targets, weight_actuals),
            callback: value => `${value} lbs`
          }
        }
      ]
    }
  };

  return (
    <>
      <Row>
        <Col direction="column" align="center">
          <h3>Weight - Actuals vs Targets</h3>
          <LineChart
            actuals={weight_actuals}
            goals={weight_targets}
            labels={weight_labels}
            info={weight_info}
            options={weightOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col direction="column" align="center">
          <h3>Calories - Actuals vs Targets</h3>
          <LineChart
            actuals={actual_calories}
            goals={target_calories}
            labels={calorie_labels}
            info={calorie_info}
            options={calorieOptions}
          />
        </Col>
      </Row>
    </>
  );
};

const Col = styled(BS_Col)`
  margin: 2rem 0;
`;

export default Overview;
