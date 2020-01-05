import React from "react";
import { Line } from "react-chartjs-2";

export default function ProgressFats({ actual_fats, target_fats, labels }) {
  const data = () => {
    return {
      labels: labels,
      datasets: [
        {
          label: "Actual Fats",
          data: actual_fats,
          fill: false,
          borderColor: "#E4D099",
          pointBackgroundColor: "#FFE9AD"
        },
        {
          label: "Target Fats",
          data: target_fats,
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
