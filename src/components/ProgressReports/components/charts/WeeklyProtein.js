import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

const WeeklyProtein = ({ protein }) => {
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
          label: "Actual Protein",
          data: protein,
          fill: false,
          borderColor: "#A68588",
          pointBackgroundColor: "#F5C6CB"
          // borderWidth: 1
        },
        {
          label: "Target Protein",
          data: [20, 20, 20, 20, 20, 20, 20],
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
            min: 10,
            max: 35
          }
        }
      ]
    }
  };

  return <Line data={data} options={options} />;
};

export default WeeklyProtein;
