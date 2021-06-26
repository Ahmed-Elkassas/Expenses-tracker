import React from "react";
import ChartBars from "./ChartBars";

import "./Chart.css";

const Chart = (props) => {
  const amountDataPoints = props.dataPoints.map((datapoint) => datapoint.value);

  const totalMax = Math.max(...amountDataPoints);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBars
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;
