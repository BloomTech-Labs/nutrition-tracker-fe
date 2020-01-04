import moment from "moment-timezone";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faAppleAlt,
  faTimes,
  faUtensils,
  faWeight
} from "@fortawesome/free-solid-svg-icons";
import { useFetchByDispatch } from "../../custom-hooks/useFetchByDispatch";
import {
  fetchDailyLog,
  updateCurrentTimeZone
} from "../../store/actions/dailyLogActions";
import MacroBudgets from "../Global/MacroBudgets";
import Flywheel from "../Global/flywheel-menu/Flywheel";
import { Col, Container, Row } from "../Global/styled";
import CaloricBudget from "./components/CaloricBudget";
import DisplaySettings from "./components/DisplaySettings";
import FatSecretAttribution from "./components/FatSecretAttribution";
import Pagination from "./components/Pagination";
import TimeLog from "./components/TimeLog";
import useGroupBy from "./custom hooks/useGroupBy";

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

const currentTimeZone = moment.tz.guess();

const DailyLog = props => {
  const dispatch = useDispatch();

  const {
    budgets,
    consumed,
    dailyLog,
    fetchDailyLogSuccess,
    currentDate
  } = useSelector(state => state.dailyLog);
  const firebaseID = useSelector(state => state.firebase.auth.uid);

  const [interval, setInterval] = useState(30);
  const groupedDailyLog = useGroupBy(interval, dailyLog);

  useFetchByDispatch(fetchDailyLog, {
    firebaseID,
    currentDate,
    currentTimeZone
  });

  useFetchByDispatch(updateCurrentTimeZone, { currentTimeZone });

  const updateInterval = interval => setInterval(interval);
  const updateCurrentDate = newDate => dispatch(updateCurrentDate(newDate));

  return (
    <Container height={props.height} fluid>
      <CaloricBudget
        total={budgets.caloricBudget}
        consumed={consumed.caloriesConsumed}
      />
      <FatSecretAttribution />
      <MacroBudgets
        currentDate={currentDate}
        currentTimeZone={currentTimeZone}
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
