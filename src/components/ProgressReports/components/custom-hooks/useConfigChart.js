import moment from "moment-timezone";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useConfigChart = () => {
  const { weightsOverTime, getWeightProgressSuccess } = useSelector(
    state => state.progressOverview
  );

  const isLoaded = useSelector(state => state.firebase.profile.isLoaded);

  const [data, setData] = useState(null);
  const [options, setOptions] = useState({});
  const [chartConfigured, setChartConfigured] = useState(false);

  useEffect(() => {
    if (isLoaded && getWeightProgressSuccess) {
      const labels = weightsOverTime.map(record => {
        return moment(record.observation_date).format("M/DD");
      });

      const targetData = weightsOverTime.map(record => {
        return Number(record.target_goal_weight_lbs);
      });

      const actualsData = weightsOverTime.map(record => {
        return Number(record.actual_weight_lbs);
      });

      console.log("[labels]", labels);
      console.log("[targetData]", targetData);
      console.log("[actualsData]", actualsData);

      const data = () => {
        return {
          labels,
          datasets: [
            {
              label: "Actual Weight",
              data: actualsData,
              fill: false,
              borderColor: "red",
              pointBackgroundColor: "red",
              borderWidth: 1
            },
            {
              label: "Target Weight",
              data: targetData,
              fill: false,
              pointRadius: 0,
              borderWidth: 1,
              borderColor: "green"
            }
          ]
        };
      };

      const options = {
        legend: {
          position: "bottom",
          fullWidth: true
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 168,
                max: 184
              }
            }
          ]
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
  }, [isLoaded, getWeightProgressSuccess]);

  return { data, options, chartConfigured };
};

export default useConfigChart;
