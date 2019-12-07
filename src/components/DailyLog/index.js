import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "../Global/styled";
import moment from "moment-timezone";
import useGroupBy from "./custom hooks/useGroupBy";
import CaloricBudget from "./components/CaloricBudget";
import MacroBudgets from "./components/MacroBudgets";
import Pagination from "./components/Pagination";
import TimeLog from "./components/TimeLog";
import DisplaySettings from "./components/DisplaySettings";
import {
  fetchDailyLog
} from "../../store/actions/dailyLogActions";

import Flywheel from "../Global/flywheel-menu/Flywheel";
import {
  faAppleAlt,
  faUtensils,
  faWeight,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import FatSecretAttribution from "./components/FatSecretAttribution";
let childButtonIcons = [
  {
    icon: faAppleAlt,
    name: "Food",
    isaLink: true,
    linkPath: "/food-item/search"
  },
  { icon: faUtensils, name: "Recipe", isaLink: false },
  { icon: faWeight, name: "Weight", isaLink: false }
];

const DailyLog = props => {
  const {
    budgets,
    consumed,
    dailyLog,
    fetchDailyLogSuccess
  } = useSelector(state => state.dailyLog);

  const dispatch = useDispatch();

  const firebaseID = useSelector(state => state.firebase.auth.uid);

  const currentTimeZone = moment.tz.guess();
  const today = moment.tz("2019-11-24", currentTimeZone).format("YYYY-MM-DD");

  const [currentDate, setCurrentDate] = useState(today);
  const [interval, setInterval] = useState(30);

  const groupedDailyLog = useGroupBy(interval, dailyLog);

  useEffect(
    () => {
      if (firebaseID)
        dispatch(
          firebaseID && fetchDailyLog(firebaseID, currentDate, currentTimeZone)
        );
    },
    [currentDate, currentTimeZone, dispatch, firebaseID]
  );

  const updateInterval = interval => setInterval(interval);
  const updateCurrentDate = newDate => setCurrentDate(newDate);

  return (
    <Container height={props.height} fluid>
      <CaloricBudget
        total={budgets.caloricBudget}
        consumed={consumed.caloriesConsumed}
      />
      <FatSecretAttribution />
      
        <MacroBudgets
          // fatsTotal={budgets.fatBudget}
          // carbsTotal={budgets.carbBudget}
          // protienTotal={budgets.proteinBudget}
          // fatsConsumed={consumed.fatsConsumed}
          // carbsConsumed={consumed.carbsConsumed}
          // protienConsumed={consumed.proteinConsumed}
        />
      <Pagination
        currentDate={currentDate}
        currentTimeZone={currentTimeZone}
        updateCurrentDate={updateCurrentDate}
      />
      <DisplaySettings
        interval={interval}
        currentDate={currentDate}
        updateInterval={updateInterval}
        currentTimeZone={currentTimeZone}
      />
      {fetchDailyLogSuccess && <TimeLog dailyLog={groupedDailyLog} />}
      <Row>
        <Col>
          <Flywheel
            maintButtonIcon={faTimes}
            childButtonIcons={childButtonIcons}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DailyLog;
