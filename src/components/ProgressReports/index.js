import React from "react";
import { Line } from "react-chartjs-2";

/*

render() {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0,0,100,0);
    ...
    return {
      ...
      backgroundColor: gradient
      ...
    }
  }

  return (<Line data={data} />)
}

*/

const ProgressReports = () => {
  const data = () => {
    return {
      labels: [
        "10/04",
        "10/05",
        "10/06",
        "10/07",
        "10/08",
        "10/09",
        "10/10",
        "10/11",
        "10/12",
        "10/13",
        "10/14",
        "10/15"
      ],
      datasets: [
        {
          label: "Target",
          data: [180, 178, 176, 174, 172, 170, 168, 166, 164, 162, 160],
          fill: false,
          borderColor: "green",
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
    <div className="App">
      <header className="App-header">
        <h1>Responsive Linear chart using Chart.js</h1>
      </header>
      <article className="canvas-container">
        <Line data={data} options={options}/>
      </article>
    </div>
  );
};

export default ProgressReports;
