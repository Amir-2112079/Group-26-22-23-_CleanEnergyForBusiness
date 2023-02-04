import '../CSSContents/Co2Calculator.css'
import React, { useState } from "react";

function Co2Calculator() {

    const [electricity, setElectricity] = useState(0);
    const [gas, setGas] = useState(0);
    const [vehicleMileage, setVehicleMileage] = useState(0);
    const [co2Output, setCo2Output] = useState(0);

    const calculateCo2 = () => {
        const electricityCo2 = electricity * 0.5;
        const gasCo2 = gas * 0.2;
        const vehicleCo2 = vehicleMileage * 0.1;
        setCo2Output(electricityCo2 + gasCo2 + vehicleCo2);
    };

    return (
        <div className="co2-calculator">
            <div >
                <label>Electricity Usage (kWh):</label>
                <input
                    type="number"
                    value={electricity}
                    onChange={(e) => setElectricity(e.target.value)}
                />
            </div>
            <div>
                <label>Gas Usage (therms):</label>
                <input
                    type="number"
                    value={gas}
                    onChange={(e) => setGas(e.target.value)}
                />
            </div>
            <div>
                <label>Vehicle Mileage (miles):</label>
                <input
                    type="number"
                    value={vehicleMileage}
                    onChange={(e) => setVehicleMileage(e.target.value)}
                />
            </div>
            <button onClick={calculateCo2}>Calculate CO2 Output</button>
            <div>
                <label>CO2 Output (metric tons):</label>
                <input type="text" value={co2Output} readOnly />
            </div>
        </div>
    );


};

export default Co2Calculator;
