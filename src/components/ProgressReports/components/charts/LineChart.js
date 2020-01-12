import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

export default function LineChart({ actuals, goals, labels, info, options }) {
  const data = () => {
    return {
      labels: labels,
      datasets: [
        {
          label: info.title_1,
          data: actuals,
          fill: false,
          borderColor: info.color_1,
          pointBackgroundColor: info.color_2
        },
        {
          label: info.title_2,
          data: goals,
          fill: false,
          borderColor: "#444",
          pointBackgroundColor: "gray"
        }
      ]
    };
  };

  return <Line data={data} options={options} />;
}
