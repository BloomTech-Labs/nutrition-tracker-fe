import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

const BiannualFats = ({ fats }) => {
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
          label: "Actual Fats",
          data: fats,
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

export default BiannualFats;
