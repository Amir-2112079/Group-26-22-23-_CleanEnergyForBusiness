import "./Pt.css";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function ProgressTracking({ chartData }) {
  return (
    <div className="Progress-Tracking">
      <h1>ProgressTracking:</h1>
      <div className="co2">
        <label>Current CO2 Emissions:</label>
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default ProgressTracking;