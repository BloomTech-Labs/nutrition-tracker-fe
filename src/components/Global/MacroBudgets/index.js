import moment from "moment-timezone";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDailyLog, fetchNutritionBudgets } from "../../../store/actions/dailyLogActions";
import { Col, Row } from "../styled";
import DataWheel from "./components/DataWheel";

const currentTimeZone = moment.tz.guess();

const MacroBudgets = props => {
  let macrosAdded;

  if (props.macrosAdded) macrosAdded = props.macrosAdded;


  const dispatch = useDispatch();
  const firebaseID = useSelector(state => state.firebase.auth.uid);
  const isLoaded = useSelector(state => state.firebase.profile.isLoaded);
  const {
    budgets,
    consumed,
    fetchBudgetFailure,
    fetchBudgetStart
  } = useSelector(state => state.dailyLog);

  const [macroData, setMacroData] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if(isLoaded && props.date)
      dispatch(fetchDailyLog(firebaseID, props.date, currentTimeZone))
  }, [isLoaded, firebaseID, props.date, currentTimeZone, dispatch]
  );

  useEffect(
    () => {
      if(isLoaded) {
        dispatch(fetchNutritionBudgets(firebaseID));
      }
    },
    [isLoaded, firebaseID, dispatch]
  );

  useEffect(
    () => {
      if (fetchBudgetFailure === false && fetchBudgetStart === false) {
        setMacroData({
          fat: {
            name: macrosAdded ? `F: ${macrosAdded.fat}g` : "Fats",
            consumed:
              Math.round(consumed.fatsConsumed + (macrosAdded ? macrosAdded.fat : 0)),
            added: macrosAdded ? Math.round(macrosAdded.fat / budgets.fatBudget * 100) : null,
            total: budgets.fatBudget,
            percentTotal: Math.round(
              consumed.fatsConsumed / budgets.fatBudget * 100
            ),
            colors: {
              dataColors: macrosAdded
                ? ["#FFE9AD", "#FFE9AD", "#FFE9AD33"]
                : ["#FFE9AD", "#FFE9AD33"],
              borderColor: "#E4D099",
              hoverBorderColor: "#D5C28F",
              hoverBackgroundColor: "#FED872"
            }
          },
          carbs: {
            name: macrosAdded ? `C: ${macrosAdded.carbs}g` : "Carbs",
            consumed:
              Math.round(consumed.carbsConsumed + (macrosAdded ? macrosAdded.carbs : 0)),
            added: macrosAdded ? Math.round(macrosAdded.carbs / budgets.carbBudget * 100) : null,
            total: budgets.carbBudget,
            percentTotal: Math.round(
              consumed.carbsConsumed / budgets.carbBudget * 100
            ),
            colors: {
              dataColors: macrosAdded
                ? ["#A1BFDF", "#A1BFDF", "#A1BFDF33"]
                : ["#A1BFDF", "#A1BFDF33"],
              borderColor: "#829BB6",
              hoverBorderColor: "#778EA6",
              hoverBackgroundColor: "#5F98E5"
            }
          },
          protein: {
            name: macrosAdded ? `P: ${macrosAdded.protein}g` : "Protien",
            consumed:
              Math.round(consumed.proteinConsumed +
              (macrosAdded ? macrosAdded.protein : 0)),
            added: macrosAdded ? Math.round(macrosAdded.protein / budgets.proteinBudget * 100) : null,
            total: budgets.proteinBudget,
            percentTotal: Math.round(
              consumed.proteinConsumed / budgets.proteinBudget * 100
            ),
            colors: {
              dataColors: macrosAdded
                ? ["#F5C6CB", "#F5C6CB", "#F5C6CB33"]
                : ["#F5C6CB", "#F5C6CB33"],
              borderColor: "#BC9599",
              hoverBorderColor: "#A68588",
              hoverBackgroundColor: "#FD7888"
            }
          }
        });
        setDataFetched(true);
      } else {
        setMacroData({});
        setDataFetched(false);
      }
    },
    [
      fetchBudgetStart,
      fetchBudgetFailure,
      consumed,
      budgets,
      macrosAdded,
      dispatch
    ]
  );

  if (!dataFetched) {
    return <h1>Loading...</h1>;
  }
  // console.log("[macroData]", macroData);
  return (
    <>
      <Row noGutters>
        <Col direction="column" justify="center" align="center" xs={4}>
          <DataWheel macroData={macroData.fat} />
        </Col>
        <Col direction="column" justify="center" align="center" xs={4}>
          <DataWheel macroData={macroData.carbs} />
        </Col>
        <Col direction="column" justify="center" align="center" xs={4}>
          <DataWheel macroData={macroData.protein} />
        </Col>
      </Row>
    </>
  );
};

export default MacroBudgets;
