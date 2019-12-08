import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataWheel from "./components/DataWheel";
import { Row, Col } from "../styled";
import { fetchNutritionBudgets } from "../../../store/actions/dailyLogActions";

const MacroBudgets = props => {
  let macrosAdded;

  if (props.macrosAdded) macrosAdded = props.macrosAdded;
  // const macrosAdded = {
  //   fat: 2,
  //   carbs: 3,
  //   protein: 1
  // };

  // const macrosAdded = undefined;

  const dispatch = useDispatch();
  const firebaseID = useSelector(state => state.firebase.auth.uid);
  const {
    budgets,
    consumed,
    fetchBudgetFailure,
    fetchBudgetStart
  } = useSelector(state => state.dailyLog);
  const [macroData, setMacroData] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(
    () => {
      if (firebaseID) {
        dispatch(fetchNutritionBudgets(firebaseID));
      }
    },
    [firebaseID, dispatch]
  );

  useEffect(
    () => {
      if (fetchBudgetFailure === false && fetchBudgetStart === false) {
        setMacroData({
          fat: {
            name: `Fats${macrosAdded ? `: ${macrosAdded.fat}g` : ""}`,
            consumed:
              consumed.fatsConsumed + (macrosAdded ? macrosAdded.fat : 0),
            added: macrosAdded ? macrosAdded.fat : null,
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
            name: `Carbs${macrosAdded ? `: ${macrosAdded.carbs}g` : ""}`,
            consumed:
              consumed.carbsConsumed + (macrosAdded ? macrosAdded.carbs : 0),
            added: macrosAdded ? macrosAdded.carbs : null,
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
            name: `Fats${macrosAdded ? `: ${macrosAdded.protein}g` : ""}`,
            consumed:
              consumed.proteinConsumed +
              (macrosAdded ? macrosAdded.protein : 0),
            added: macrosAdded ? macrosAdded.protein : null,
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
