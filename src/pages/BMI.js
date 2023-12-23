import React, { useState } from 'react';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBMIResult] = useState(null);

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) ) {
      // Invalid input, display an error
      setBMIResult('No input value found.');
    }
    else if(weightValue < 1.0 || weightValue > 300.0 ){
      setBMIResult('Error: Weight value should be between 1.0-300.0');
    }
    else if(heightValue < 0.1 || heightValue > 3.0){
      setBMIResult('Error: Height value should be between 0.1-3.0');
    } else {
      // Calculate BMI
      const bmi = (weightValue / Math.pow(heightValue, 2)).toFixed(1);
      setBMIResult(`Your BMI is: ${bmi}`);
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <label>
        Weight (Enter between 1.0-300.0 in (Kg) )             &nbsp; :      &nbsp;  
        <input type="text"  value={weight} onChange={(e) => setWeight(e.target.value)} />
          
      </label>
      <br />
      <br/>
      <label>
        Height  (Enter between 0.1-3.0 in (m))         &nbsp; &nbsp; &nbsp;      &nbsp; :   &nbsp; 
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
           
      </label>
      <br />
      <br/>
      &emsp; &emsp; <button onClick={calculateBMI}>Calculate BMI</button> 
      <br />
      {bmiResult && <p>{bmiResult}</p>}
    </div>
  );
};

export default BMI;
