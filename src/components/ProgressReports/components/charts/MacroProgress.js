import React from "react";
import { Pie } from "react-chartjs-2";

const MacroProgress = () => {
  const data = () => {
    return {
      labels: ["Carbs", "Fat", "Protein"],
      datasets: [
        {
          // label: "Target",
          data: [10, 70, 20],
          // fill: false,
          backgroundColor: ["royalblue", "gold", "crimson"]
          // borderDash: [10, 5] // [dashLength, spaceLength]
        }
        // {
        //   label: "Weight",
        //   data: [180, 179, 174, 174, 173, 169, 167, 166, 165, 161, 160],
        //   fill: false,
        //   borderColor: "red",
        //   pointBackgroundColor: "red",
        //   borderWidth: 1
        // }
      ]
    };
  };

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           min: 140,
  //           max: 200
  //         }
  //       }
  //     ]
  //   }
  // };

  return <Pie data={data} />;
};

export default MacroProgress;
