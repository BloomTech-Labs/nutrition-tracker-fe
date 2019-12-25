import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

const BiannualCarbs = ({ carbs }) => {
  const dynamicDate = x =>
    moment()
      .subtract(x, "days")
      .format("MM/DD");
  const data = () => {
    return {
      labels: [
        `${dynamicDate(180)}`,
        `${dynamicDate(150)}`,
        `${dynamicDate(120)}`,
        `${dynamicDate(90)}`,
        `${dynamicDate(60)}`,
        `${dynamicDate(30)}`,
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

export default BiannualCarbs;
