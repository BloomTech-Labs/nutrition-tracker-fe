import React from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useConfigPieChart from "../custom-hooks/useConfigPieChart";

const MacroProgress = averageMacros => {
  const {
    getAverageMacrosStart,
    getAverageMacrosSuccess,
    getAverageMacrosFailure
  } = useSelector(state => state.progressOverview);

  const { data, options, chartConfigured } = useConfigPieChart({
    averageMacros
  });

  return (
    <ChartWrapper>
      {getAverageMacrosStart && <h3>Loading...</h3>}
      {getAverageMacrosFailure && (
        <h3>Could not retrive data. Try again later.</h3>
      )}
      {getAverageMacrosSuccess && chartConfigured && (
        <>
          <h3>Average Macros over Time</h3>
          <Pie data={data} options={options} />
        </>
      )}
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 280px;

  margin-bottom: 8rem;
`;

export default MacroProgress;
