import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import theme from "../theme";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { H3, H4 } from "../styled";
import { fetchNutritionBudgets, fetchDailyLog } from "../../../store/actions/dailyLogActions";

const DataWheel = props => {
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
        dispatch(fetchNutritionBudgets(firebaseID))
      }
    },
    [firebaseID, dispatch]
  );

  useEffect(
    () => {
      if (fetchBudgetFailure === false && fetchBudgetStart === false) {
        switch (props.macroName) {
          case "Fats":
            setMacroData({
              consumed: consumed.fatsConsumed,
              total: budgets.fatBudget,
              percentTotal: Math.round(
                consumed.fatsConsumed / budgets.fatBudget * 100
              ),
              colors: {
                dataColors: "#FFE9AD, #FFE9AD33",
                borderColor: "#E4D099",
                hoverBorderColor: "#D5C28F",
                hoverBackgroundColor: "#FED872"
              }
            });
            break;
          case "Carbs":
            setMacroData({
              consumed: consumed.carbsConsumed,
              total: budgets.carbBudget,
              percentTotal: Math.round(
                consumed.carbsConsumed / budgets.carbBudget * 100
              ),
              colors: {
                dataColors: "#A1BFDF, #A1BFDF33",
                borderColor: "#829BB6",
                hoverBorderColor: "#778EA6",
                hoverBackgroundColor: "#5F98E5"
              }
            });
            break;
          case "Protein":
            setMacroData({
              consumed: consumed.proteinConsumed,
              total: budgets.proteinBudget,
              percentTotal: Math.round(
                consumed.proteinConsumed / budgets.proteinBudget * 100
              ),
              colors: {
                dataColors: "#F5C6CB, #F5C6CB33",
                borderColor: "#BC9599",
                hoverBorderColor: "#A68588",
                hoverBackgroundColor: "#FD7888"
              }
            });
            break;
          default:
            setMacroData({});
        }
        setDataFetched(true);
      } else {
        setDataFetched(false)
      }
    },
    [
      fetchBudgetStart,
      fetchBudgetFailure,
      props.macroName,
      consumed,
      budgets,
      dispatch
    ]
  );

  const options = {
    cutoutPercentage: 75,

    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          let dataIndex = tooltipItem.index;
          let dataLabel = data.labels[dataIndex];
          let dataVal = data.datasets[0].data[dataIndex];
          return ` ${dataLabel}: ${dataVal}%`;
        }
      }
    },
    maintainAspectRatio: false
  };
  if (!dataFetched) {
    return <h1>Loading...</h1>;
  }
  // console.log("[macroData]", macroData);
  return (
    <BudgetContainer>
      <Doughnut
        options={options}
        data={dataGenerator(
          [macroData.percentTotal, 100 - macroData.percentTotal],
          macroData.colors.dataColors,
          macroData.colors.borderColor,
          macroData.colors.hoverBackgroundColor,
          macroData.colors.hoverBorderColor
        )}
      />
      <Budgets
        dividerColor={macroData.colors.borderColor}
        percentTotal={macroData.percentTotal}
      >
        <H3>
          {macroData.consumed}g
        </H3>
        <div />
        <H4>
          {macroData.total}g
        </H4>
      </Budgets>
      <BudgetHeader>
        {props.macroName}
      </BudgetHeader>
    </BudgetContainer>
  );

  function dataGenerator(
    data,
    dataColors,
    borderColor,
    hoverBackgroundColor,
    hoverBorderColor
  ) {
    let percentTotal = data[0];
    let overBudget = percentTotal >= 100;

    if (overBudget) {
      data[0] = 100;
      data[1] = 0;
    }

    const dataset = {
      datasets: [
        {
          backgroundColor: overBudget
            ? [theme.color.danger, theme.color.danger]
            : dataColors.split(","),
          borderColor,
          hoverBackgroundColor: overBudget
            ? theme.color.danger
            : hoverBackgroundColor,
          hoverBorderColor,
          data: data
        }
      ],

      labels: ["Consumed", "Total"]
    };

    return dataset;
  }
};

const BudgetContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;

  width: 100%;
  max-width: 150px;

  padding: 0 5px;

  /* border: 1px solid black; */

  canvas {
    z-index: 1;
  }
`;

const BudgetHeader = styled(H3)`
  position: absolute;
  align-self: center;

  top: 155px;

  width: 100%;
  margin-left: -5px;

  @media (max-width: 480px) {
    font-size: 4.2vw;
    top: 34vw;
  }

  @media (max-width: 360px) {
    font-size: 4.2vw;
    top: 38vw;
  }
`;

const Budgets = styled.div`
  position: absolute;
  align-self: center;

  width: 100%;
  margin-left: -5px;

  h3 {
    color: ${props =>
      props.percentTotal >= 100 ? `${theme.color.danger}` : "black"};
  }

  div {
    width: 50px;
    margin-bottom: 3px;
    border-bottom: 2px solid ${props => props.dividerColor};
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 4.2vw;
    }

    h4 {
      font-size: 3.2vw;
    }
  }
`;

export default DataWheel;
