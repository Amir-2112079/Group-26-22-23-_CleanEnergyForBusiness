import "../CSSContents/Survey.css";
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

  // eslint-disable-next-line no-empty-pattern
  const [] = useState([]);
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
                <option value="50" label="50"></option>
                <option value="100" label="100"></option>
                <option value="150" label="150"></option>
                <option value="200" label="200"></option>
                <option value="250" label="250"></option>
                <option value="300" label="300"></option>
                <option value="350" label="350"></option>
                <option value="400" label="400"></option>
                <option value="450" label="450"></option>
                <option value="500" label="500"></option>
                <option value="550" label="550"></option>
                <option value="600" label="600"></option>
                <option value="650" label="650"></option>
                <option value="700" label="700"></option>
                <option value="750" label="750"></option>
                <option value="800" label="800"></option>
                <option value="850" label="850"></option>
                <option value="900" label="900"></option>
                <option value="950" label="950"></option>
                <option value="1000" label="1000"></option>
              </datalist>
              <br /> <br />
              <button type="submit" id="submitButton">
                Save Survey
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;
