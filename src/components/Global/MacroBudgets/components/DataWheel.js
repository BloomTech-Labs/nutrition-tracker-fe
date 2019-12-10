import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { H3, H4 } from "../../styled";
import theme from "../../theme";

const DataWheel = ({macroData}) => {
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
  
  return (
    <BudgetContainer>
      <Doughnut
        options={options}
        data={dataGenerator(
          macroData.added 
            ? [macroData.percentTotal, macroData.added, 100 - macroData.percentTotal - macroData.added]
            : [macroData.percentTotal, 100 - macroData.percentTotal],
          macroData.colors.dataColors,
          macroData.colors.borderColor,
          macroData.colors.hoverBackgroundColor,
          macroData.colors.hoverBorderColor
        )}
      />
      <Budgets
        dividerColor={macroData.colors.borderColor}
        percentTotal={macroData.percentTotal + (macroData.added ? macroData.added : 0)}
      >
        <H3>
          {`${macroData.added ? "≈ " : ""}${macroData.consumed}`}g
        </H3>
        <div />
        <H4>
          {macroData.total}g
        </H4>
      </Budgets>
      <BudgetHeader>
        {macroData.name}
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
    let percentLeft = macroData.added ? data[2] : data[1];
    let overBudget = percentLeft <= 0;
    
    if (overBudget) {
      data[0] = 100;
      data[1] = 0;
      if(macroData.added) {
        data[2] = 0;
      }
    }

    const dataset = {
      datasets: [
        {
          backgroundColor: overBudget
            ? [theme.color.danger, theme.color.danger]
            : dataColors,
          borderColor,
          hoverBackgroundColor: overBudget
            ? theme.color.danger
            : hoverBackgroundColor,
          hoverBorderColor,
          data: data
        }
      ],

      labels: macroData.added ? ["Consumed", "Added", "Total"] : ["Consumed", "Total"]
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
