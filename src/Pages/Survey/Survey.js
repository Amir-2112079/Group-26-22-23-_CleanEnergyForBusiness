import "./Survey.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Survey() {
  // JavaScript --> Ex: Function, etc.
  const TypeOfBusinessSelections = [
    { label: "Biofueler", value: "Biofueler" },
    { label: "Gym", value: "Gym" },
  ];
  const UtilityProvidersSelections = [
    { label: "Provider1", value: "Provider1" },
    { label: "Provider2", value: "Provider2" },
    { label: "Provider3", value: "Provider3" },
    { label: "Provider4", value: "Provider4" },
    { label: "Provider5", value: "Provider5" },
  ];

  const [survey, setSurveys] = useState([]);
  const navigateTo = useNavigate();

  const [surveyContent, setSurvey] = useState({
    businessName: "",
    location: "",
    typeOfBusiness: "",
    utilProvider: "",
    co2: "",
  });

  const { businessName, location, typeOfBusiness, utilProvider, co2 } =
    surveyContent;

  const onInputChange = (e) => {
    setSurvey({ ...surveyContent, [e.target.name]: e.target.value });
  };
  const onInputChangeDDBox = (selectedOption, { name }) => {
    setSurvey({ ...surveyContent, [name]: selectedOption.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/Survey", surveyContent);
    navigateTo("/");
  };

  return (
    // HTML
    <div className="Survey">
      <div className="Survey-Container">
        <h1>Survey</h1>
        <div className="Survey-Content">
          <div>
            <form onSubmit={(e) => onSubmit(e)}>
              <label>Business Name: </label>
              <input
                type={"text"}
                id="BusinessNameInput"
                placeholder="Input Business Name"
                name="businessName"
                value={businessName}
                onChange={(e) => onInputChange(e)}
                required
              />
              <br />
              <label>Location: </label>
              <input
                type={"text"}
                id="Location"
                placeholder="Input Location"
                name="location"
                value={location}
                onChange={(e) => onInputChange(e)}
                required
              />
              <br />
              <label>Type of Business: </label>
              <Select
                options={TypeOfBusinessSelections}
                id="TypeOfBusinessInput"
                placeholder="Please Select the Type of Your Business"
                name="typeOfBusiness"
                value={TypeOfBusinessSelections.find(
                  (option) => option.value === typeOfBusiness
                )}
                onChange={onInputChangeDDBox}
              />
              <br /> <br />
              <label>Current Utility Provider: </label>
              <Select
                options={UtilityProvidersSelections}
                id="UtilityProviderInput"
                placeholder="Please Select Your Current Utility Provider"
                name="utilProvider"
                value={UtilityProvidersSelections.find(
                  (option) => option.value === utilProvider
                )}
                onChange={onInputChangeDDBox}
              />
              <br /> <br />
              <label for="co2Emission">C02 Emission:</label>
              <input
                type="range"
                id="co2Emission"
                name="co2"
                value={co2}
                onChange={(e) => onInputChange(e)}
                list="co2EmissionValues"
              />
              <datalist id="co2EmissionValues">
                <option value="0" label="0"></option>
                <option value="5" label="5"></option>
                <option value="10" label="10"></option>
                <option value="15" label="15"></option>
                <option value="20" label="20"></option>
                <option value="25" label="25"></option>
                <option value="30" label="30"></option>
                <option value="35" label="35"></option>
                <option value="40" label="40"></option>
                <option value="45" label="45"></option>
                <option value="50" label="50"></option>
                <option value="55" label="55"></option>
                <option value="60" label="60"></option>
                <option value="65" label="65"></option>
                <option value="70" label="70"></option>
                <option value="75" label="75"></option>
                <option value="80" label="80"></option>
                <option value="85" label="85"></option>
                <option value="90" label="90"></option>
                <option value="95" label="95"></option>
                <option value="100" label="100"></option>
              </datalist>
              <br /> <br />
              <button type="submit" id="submitButton">
                Update Survey
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;
