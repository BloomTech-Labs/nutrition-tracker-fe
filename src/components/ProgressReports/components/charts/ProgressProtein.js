import React from "react";
import { Line } from "react-chartjs-2";

export default function ProgressProtein({
  actual_protein,
  target_protein,
  labels
}) {
  const data = () => {
    return {
      labels: labels,
      datasets: [
        {
          label: "Actual Protein",
          data: actual_protein,
          fill: false,
          borderColor: "#A68588",
          pointBackgroundColor: "#F5C6CB"
        },
        {
          label: "Target Protein",
          data: target_protein,
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
