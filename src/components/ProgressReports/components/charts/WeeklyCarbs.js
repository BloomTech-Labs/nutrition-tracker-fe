import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

const WeeklyCarbs = ({ carbs }) => {
  const dynamicDate = x =>
    moment()
      .subtract(x, "days")
      .format("MM/DD");
  const data = () => {
    return {
      labels: [
        `${dynamicDate(6)}`,
        `${dynamicDate(5)}`,
        `${dynamicDate(4)}`,
        `${dynamicDate(3)}`,
        `${dynamicDate(2)}`,
        `${dynamicDate(1)}`,
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
          data: [10, 10, 10, 10, 10, 10, 10],
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
};

export default WeeklyCarbs;
