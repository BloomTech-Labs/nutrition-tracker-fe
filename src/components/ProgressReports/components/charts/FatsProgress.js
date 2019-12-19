import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

const FatsProgress = () => {
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
          label: "Actual Fats",
          data: [68, 64, 63, 68, 71, 69, 62],
          fill: false,
          borderColor: "#E4D099",
          pointBackgroundColor: "#FFE9AD"
          // borderWidth: 1
        },
        {
          label: "Target Fats",
          data: [70, 70, 70, 70, 70, 70, 70],
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
            min: 55,
            max: 80
          }
        }
      ]
    }
  };

  return <Line data={data} options={options} />;
};

export default FatsProgress;
