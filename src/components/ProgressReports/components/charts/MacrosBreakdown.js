import React from "react";
import { Line } from "react-chartjs-2";

export default function MacroChart({ actuals, goals, labels, info }) {
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

  const min = array =>
    Math.min.apply(Math, array) >= 10
      ? Math.floor(Math.max.apply(Math, array) / 10) * 10 - 10
      : 0;

  const max = array => Math.ceil(Math.max.apply(Math, array) / 10) * 10 + 10;

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: min(actuals),
            max: max(actuals)
          }
        }
      ]
    }
  };

  return <Line data={data} options={options} />;
}
