import "./Pt.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ProgressTracking({ chartData }) {
  const [survey, setSurveys] = useState([]);

  useEffect(() => {
    loadSurvey();
  }, []);

  const loadSurvey = async () => {
    const SurveyResult = await axios.get("http://localhost:8080/Survey_log");
    setSurveys(SurveyResult.data);
  };
  return (
    <div className="Progress-Tracking">
      <h1>ProgressTracking:</h1>
      <div className="SurveyTabe-Container">
        <table id="SurveyTable">
          <tr>
            <th scope="col">Survey ID</th>
            <th scope="col">Business Name</th>
            <th scope="col">Location</th>
            <th scope="col">Type Of Business</th>
            <th scope="col">Utility Provider</th>
            <th scope="col">CO2</th>
          </tr>
          {survey.map((survey, index) => (
            <tr>
              <td>{survey.surveyId}</td>
              <td>{survey.businessName}</td>
              <td>{survey.location}</td>
              <td>{survey.typeOfBusiness}</td>
              <td>{survey.utilProvider}</td>
              <td>{survey.co2}</td>
            </tr>
          ))}
        </table>
      </div>
      <br />
      <div className="co2">
        <label>Current CO2 Emissions:</label>
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default ProgressTracking;
