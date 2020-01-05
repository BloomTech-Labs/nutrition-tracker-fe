import React from "react";
import { Line } from "react-chartjs-2";

export default function ProgressCarbs({ actual_carbs, target_carbs, labels }) {
  const data = () => {
    return {
      labels: labels,
      datasets: [
        {
          label: "Actual Carbs",
          data: actual_carbs,
          fill: false,
          borderColor: "#829BB6",
          pointBackgroundColor: "#A1BFDF"
        },
        {
          label: "Target Carbs",
          data: target_carbs,
          fill: false,
          borderColor: "#444",
          pointBackgroundColor: "gray"
        }
      ]
    };
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100
          }
        }
      ]
    }
  };

  return <Line data={data} options={options} />;
}
