import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useConfigPieChart = () => {
  const { averageMacros, getAverageMacrosSuccess } = useSelector(
    state => state.progressOverview
  );

  const isLoaded = useSelector(state => state.firebase.profile.isLoaded);

  const [data, setData] = useState(null);
  const [options, setOptions] = useState({});
  const [chartConfigured, setChartConfigured] = useState(false);

  useEffect(() => {
    if (isLoaded && getAverageMacrosSuccess) {
      const {
        avg_fat_consumed_g,
        avg_carbs_consumed_g,
        avg_protein_consumed_g
      } = averageMacros;

      const data = () => {
        return {
          labels: ["Fat", "Carbs", "Protein"],
          datasets: [
            {
              data: [
                avg_fat_consumed_g,
                avg_carbs_consumed_g,
                avg_protein_consumed_g
              ],
              backgroundColor: ["#FFE9AD", "#A1BFDF", "#F5C6CB"],
              borderColor: ["#E4D099", "#829BB6", "#A68588"]
            }
          ]
        };
      };

      const options = {
        cutoutPercentage: 75,
        legend: {
          position: "bottom",
          fullWidth: true
        },
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

      setData(data);
      setOptions(options);
      setChartConfigured(true);
    } else {
      setData(null);
      setOptions({});
      setChartConfigured(false);
    }
  }, [isLoaded, getAverageMacrosSuccess]);

  return { data, options, chartConfigured };
};

export default useConfigPieChart;
