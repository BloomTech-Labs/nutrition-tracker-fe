import React from "react";
import { useSelector } from "react-redux";
import { useFetchByDispatch } from "../../../custom-hooks/useFetchByDispatch";
import { getWeightProgress } from "../../../store/actions/progressOverviewActions";
import { getCaloriesConsumed } from "../../../store/actions/progressOverviewActions";
import { getAverageMacrosConsumed } from "../../../store/actions/progressOverviewActions";
import { Col, Row } from "../../Global/styled";
import LineChart from "./charts/LineChart";
import MacroProgress from "./charts/MacroProgress";
import WeightProgress from "./charts/WeightProgress";

const Overview = () => {
  const firebaseID = useSelector(state => state.firebase.auth.uid);
  const progressPeriod = useSelector(state => state.progressPeriod);
  const { start_date } = useSelector(state => state.progressPeriod);

  const {
    averageMacros,
    weightsOverTime,
    actual_calories,
    target_calories,
    calorie_labels
  } = useSelector(state => state.progressOverview);

  useFetchByDispatch(getAverageMacrosConsumed, {
    firebaseID: "12345",
    start_date
  });

  useFetchByDispatch(getWeightProgress, {
    firebaseID: "dave",
    ...progressPeriod
  });

  useFetchByDispatch(getCaloriesConsumed, {
    firebaseID: "12345",
    ...progressPeriod
  });

  const min = array =>
    Math.min.apply(Math, array) >= 10
      ? Math.floor(Math.max.apply(Math, array) / 10) * 10 - 10
      : 0;

  const max = array => Math.ceil(Math.max.apply(Math, array) / 10) * 10 + 10;

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
            min: min(actual_calories),
            max: max(actual_calories)
          }
        }
      ]
    }
  };

  return (
    <>
      <Row>
        <Col>
          <WeightProgress weightsOverTime={weightsOverTime} />
        </Col>
      </Row>
      <Row>
        <Col>
          <LineChart
            actuals={actual_calories}
            goals={target_calories}
            labels={calorie_labels}
            info={calorie_info}
            options={calorieOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <MacroProgress averageMacros={averageMacros} />
        </Col>
      </Row>
    </>
  );
};

export default Overview;
