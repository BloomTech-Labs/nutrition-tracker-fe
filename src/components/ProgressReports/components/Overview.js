import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeightProgress } from "../../../store/actions/progressOverviewActions";
import { getAverageMacrosConsumed } from "../../../store/actions/progressOverviewActions";
import { Col, Row } from "../../Global/styled";
import MacroProgress from "./charts/MacroProgress";
import WeightProgress from "./charts/WeightProgress";

const Overview = () => {
  const dispatch = useDispatch();

  const isLoaded = useSelector(state => state.firebase.profile.isLoaded);
  const firebaseID = useSelector(state => state.firebase.auth.uid);
  const progressPeriod = useSelector(state => state.progressPeriod);

  const { averageMacros, weightsOverTime } = useSelector(
    state => state.progressOverview
  );

  useEffect(() => {
    if (isLoaded) {
      const { time_zone, start_date, end_date, period } = progressPeriod;
      dispatch(
        getWeightProgress(
          /*firebaseID*/ "dave",
          time_zone,
          start_date,
          end_date,
          period
        )
      );

      dispatch(getAverageMacrosConsumed(/*firebaseID*/ "12345", start_date));
    }
  }, [isLoaded, progressPeriod, dispatch]);

  return (
    <>
      <Row>
        <Col>
          <MacroProgress averageMacros={averageMacros} />
        </Col>
      </Row>
      <Row>
        <Col>
          <WeightProgress weightsOverTime={weightsOverTime} />
        </Col>
      </Row>
    </>
  );
};

export default Overview;
