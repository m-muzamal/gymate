import React, { useState } from "react";
import "./bmi.scss";

function BmiPage() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState(null);

  const handlClick = (e) => {
    e.preventDefault();

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBmi = parseFloat(bmiValue.toFixed(1));

    setBmi(roundedBmi);

    if (roundedBmi < 18.5) {
      setBmiStatus("Underweight");
    } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
      setBmiStatus("Normal");
    } else {
      setBmiStatus("Overweight");
    }
  };

  return (
    <section className="bmi">
      <div className="container">
        <h2 className="title-white">
          Let's Calculate Your <span className="red">BMI</span>
        </h2>
        <p className="txt">
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
        <form className="inputs">
          <input
            type="number"
            placeholder="Weight / kg"
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Height / cm"
            onChange={(e) => setHeight(e.target.value)}
          />
        </form>
        <div className="outputs">
          <p className="txt">
            Your BMI is: <span className="red">{bmi}</span>
          </p>
          <p className="txt">
            Your weight is: <span className="red">{bmiStatus}</span>
          </p>
        </div>
        <div className="batn">
          <button className="btn-primary" onClick={handlClick}>
            Calculate
          </button>
        </div>
      </div>
    </section>
  );
}

export default BmiPage;
