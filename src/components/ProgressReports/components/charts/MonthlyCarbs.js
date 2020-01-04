import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

export default function MonthlyCarbs({ carbs }) {
  const dynamicDate = x =>
    moment()
      .subtract(x, "days")
      .format("MM/DD");
  const data = () => {
    return {
      labels: [
        `${dynamicDate(30)}`,
        `${dynamicDate(27)}`,
        `${dynamicDate(24)}`,
        `${dynamicDate(21)}`,
        `${dynamicDate(18)}`,
        `${dynamicDate(15)}`,
        `${dynamicDate(12)}`,
        `${dynamicDate(9)}`,
        `${dynamicDate(6)}`,
        `${dynamicDate(3)}`,
        `${dynamicDate(0)}`
      ],
      datasets: [
        {
          label: "Actual Carbs",
          data: carbs,
          fill: false,
          borderColor: "#829BB6",
          pointBackgroundColor: "#A1BFDF"
          // borderWidth: 1
        },
        {
          label: "Target Carbs",
          data: [10, 10, 10, 10, null, 10, 10, 10, 10, 10, 10],
          fill: false,
          borderColor: "#444",
          pointBackgroundColor: "gray"
          // borderDash: [10, 5] // [dashLength, spaceLength]
        }
      ]
    };
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 5,
            max: 25
          }
        }
      ]
    }
  };

  return <Line data={data} options={options} />;
}
