import React from "react";
import { useSelector } from "react-redux";
import { useFetchByDispatch } from "../../../custom-hooks/useFetchByDispatch";
import { getWeightProgress } from "../../../store/actions/progressOverviewActions";
import { getAverageMacrosConsumed } from "../../../store/actions/progressOverviewActions";
import { Col, Row } from "../../Global/styled";
import MacroProgress from "./charts/MacroProgress";
import WeightProgress from "./charts/WeightProgress";

const Overview = () => {
  const firebaseID = useSelector(state => state.firebase.auth.uid);
  const progressPeriod = useSelector(state => state.progressPeriod);
  const { start_date } = useSelector(state => state.progressPeriod);

  const { averageMacros, weightsOverTime } = useSelector(
    state => state.progressOverview
  );

  useFetchByDispatch(getWeightProgress, {
    firebaseID,
    ...progressPeriod
  });

  useFetchByDispatch(getAverageMacrosConsumed, {
    firebaseID,
    start_date
  });

  return (
    <>
      <Row>
        <Col>
          <WeightProgress weightsOverTime={weightsOverTime} />
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
