import React from "react";
import { Pie } from "react-chartjs-2";

const MacroProgress = () => {
  const data = () => {
    return {
      labels: ["Fat", "Carbs", "Protein"],
      datasets: [
        {
          data: [70, 10, 20],
          backgroundColor: ["#FFE9AD", "#A1BFDF", "#F5C6CB"],
          borderColor: ["#E4D099", "#829BB6", "#A68588"]
        }
      ]
    };
  };

  const options = {
    cutoutPercentage: 75,
    tooltips: {
      // callback runs before tool-tip is rendered
      callbacks: {
        label: (tooltipItem, data) => {
          // grabs the index of the current tool-tip item
          let dataIndex = tooltipItem.index;
          // grabs the label for the current tool-tip
          let dataLabel = data.labels[dataIndex];
          // grabs the current data value for the dataset
          let dataVal = data.datasets[0].data[dataIndex];
          // reformats tool-tip to be displayed as percentage
          return ` ${dataLabel}: ${dataVal}%`;
        }
      }
    }
  };

  return <Pie data={data} options={options} />;
};

export default MacroProgress;
