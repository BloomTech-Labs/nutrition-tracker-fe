import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useConfigChart from "../custom-hooks/useConfigChart";

const WeightProgress = weightsOverTime => {
  const {
    getWeightProgressStart,
    getWeightProgressSuccess,
    getWeightProgressFailure
  } = useSelector(state => state.progressOverview);

  // initializes the Line Chart's data and options
  const { data, options, chartConfigured } = useConfigChart({
    weightsOverTime
  });

  return (
    <ChartWrapper>
      {getWeightProgressStart && <h3>Loading...</h3>}
      {getWeightProgressFailure && (
        <h3>Could not retrive data. Try again later.</h3>
      )}
      {getWeightProgressSuccess && chartConfigured && (
        <>
          <h3>Actual Weight vs. Target</h3>
          <Line data={data} options={options} height={200} />
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
`;

export default WeightProgress;
