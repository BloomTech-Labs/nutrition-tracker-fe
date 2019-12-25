import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

export default function QuarterlyProtein({ protein }) {
  const dynamicDate = x =>
    moment()
      .subtract(x, "days")
      .format("MM/DD");
  const data = () => {
    return {
      labels: [
        `${dynamicDate(90)}`,
        `${dynamicDate(84)}`,
        `${dynamicDate(77)}`,
        `${dynamicDate(70)}`,
        `${dynamicDate(63)}`,
        `${dynamicDate(56)}`,
        `${dynamicDate(49)}`,
        `${dynamicDate(42)}`,
        `${dynamicDate(35)}`,
        `${dynamicDate(28)}`,
        `${dynamicDate(21)}`,
        `${dynamicDate(14)}`,
        `${dynamicDate(7)}`,
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
          data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
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
}
