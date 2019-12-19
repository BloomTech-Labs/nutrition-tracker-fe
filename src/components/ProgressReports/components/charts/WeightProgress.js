import React from 'react'
import { Line } from "react-chartjs-2";

/*

  From End Point:
  
    Arrays:
      range of dates

      x = applicable_date
      y = 
      180 + -2 * (x - Date(10/4))

*/

/*
  160 - 180 = -20
  10/14 - 10/4 = 10

  -20/10 = -2
*/

/*
  start weight
  start date
  weekly_weight_loss_goal / 7
*/


const WeightProgress = () => {
  const data = () => {
    return {
      labels: [
        "10/04", // 180
        "10/05", // 180 + (- 2 * 1)
        "10/06", // 180 + (- 2 * 2)
        "10/07", // 180 + (- 2 * 3)
        "10/08", // 180 + (- 2 * 4)
        "10/09", // 180 - 2 * 5
        "10/10", // 180 - 2 * 6
        "10/11", // 180 - 2 * 7
        "10/12", // 180 - 2 * 8
        "10/13", // 180 - 2 * 9
        "10/14", // 180 - 2 * 10
        "10/15"  // 180 - 2 * 11
      ],
      datasets: [
        {
          label: "Target",
          data: [180, 178, 176, 174, 172, 170, 168, 166, 164, 162, 160],
          fill: false,
          borderColor: "black",
          borderDash: [10, 5] // [dashLength, spaceLength]
        },
        {
          label: "Weight",
          data: [180, 179, 174, 174, 173, 169, 167, 166, 165, 161, 160],
          fill: false,
          borderColor: "red",
          pointBackgroundColor: "red",
          borderWidth: 1
        }
      ]
    };
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 140,
            max: 200
          }
        }
      ]
    }
  };
  
  return (
    <Line data={data} options={options} />
  )
}

export default WeightProgress;
