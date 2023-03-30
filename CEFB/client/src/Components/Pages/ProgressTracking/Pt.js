import "./Pt.css";
//import { Bar } from "react-chartjs-2";
//import { Chart as ChartJS } from "chart.js/auto";
import React, { useEffect, useState } from "react";
import axios from "axios";
//import { chartData } from "./Data/2022";
import { Link } from "react-router-dom";

function ProgressTracking({ chartData }) {
  const [survey, setSurveys] = useState([]);

  useEffect(() => {
    loadSurvey();
  }, []);

  const loadSurvey = async () => {
    try {
      const SurveyResult = await axios.get("http://localhost:8080/survey");
      setSurveys(SurveyResult.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Progress-Tracking">
      <h1>Progress Tracking:</h1>
      <div className="SurveyTabe-Container">
        {survey.length > 0 ? (
          <table id="SurveyTable">
            <thead>
              <tr>
                {/*<th scope="col">Survey ID</th>*/}
                <th scope="col">Business Name</th>
                {/*<th scope="col">Location</th>*/}
                {/* <th scope="col">Type Of Business</th>*/}
                {/* <th scope="col">Utility Provider</th> */}
                <th scope="col">CO2 Emmision</th>
              </tr>
            </thead>
            <tbody>
              {survey.map((survey) => (
                <tr key={survey.surveyId}>
                  {/* <td>{survey.surveyId}</td>*/}
                  <td>{survey.businessName}</td>
                  {/* <td>{survey.location}</td>*/}
                  {/*<td>{survey.typeOfBusiness}</td>*/}
                  {/* <td>{survey.utilProvider}</td>*/}
                  <td>{survey.co2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No survey results found.</p>
        )}
      </div>
      <br />
      <div className="co2">
        <label>Calculate Your Co2 Emmision</label>
        {/* <Bar height="400px" width="450px" data={chartData} /> */}
      </div>
      <div className="button-container">
        {/* Use the Link component to create a link to the Co2Calculator component */}
        <Link to="/co2">
          <button className="button">Go to Co2 Calculator</button>
        </Link>
      </div>
    </div>
  );
}

export default ProgressTracking;
