import React, {useEffect, useState} from "react";
import moment from "moment-timezone";
import * as bundle from "../../vendor/moment-timezone-bundle.json";
import {useDispatch, useSelector} from "react-redux";
import useGroupBy from "./custom hooks/useGroupBy";
import { Container} from "../Global/styled";
import CaloricBudget from "./components/CaloricBudget";
import MacroBudgets from "./components/MacroBudgets";
import Pagination from "./components/Pagination";
import TimeLog from "./components/TimeLog";
import DisplaySettings from "./components/DisplaySettings";
import {fetchNutritionBudgets, fetchDailyLog} from "../../store/actions/dailyLogActions";

const DailyLog = ({ height }) => {
  const dispatch = useDispatch();
  const budgets = useSelector(state => state.dailyLog.budgets);
  const consumed = useSelector(state => state.dailyLog.consumed);
  const dailyLog = useSelector(state => state.dailyLog.dailyLog);
  const currentTimeZone = moment.tz.guess();

  const [currentDate, setCurrentDate] = useState(moment.tz(currentTimeZone).format("YYYY-MM-DD"));
  const [interval, setInterval] = useState(30);
  const groupedDailyLog = useGroupBy(interval, dailyLog);

  useEffect(() => {
    dispatch(fetchNutritionBudgets());
    dispatch(fetchDailyLog(currentDate, currentTimeZone)); 
  }, [dispatch, currentTimeZone, currentDate]);

  const updateInterval = interval => {
    setInterval(interval);
  }

  const updateDate = date => {
    setCurrentDate(date);
  }

  return (
    <Container fluid height={height}>
      <CaloricBudget consumed={consumed.caloriesConsumed} total={budgets.caloricBudget} />
      <MacroBudgets
        fatsConsumed={consumed.fatsConsumed}
        fatsTotal={budgets.fatBudget}
        carbsConsumed={consumed.carbsConsumed}
        carbsTotal={budgets.carbBudget}
        protienConsumed={consumed.proteinConsumed}
        protienTotal={budgets.proteinBudget}
      />
      <Pagination currentDate={currentDate} updateDate={updateDate} currentTimeZone={currentTimeZone}/>
      <DisplaySettings updateInterval={updateInterval} interval={interval}/>
      <TimeLog dailyLog={groupedDailyLog}/>
    </Container>
  );
}

export default DailyLog;
