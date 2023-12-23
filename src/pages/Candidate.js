import React from 'react';
import { Link } from 'react-router-dom';

const CandidateDetails = () => {
  return (
    <div>
      <h2>Candidate Details</h2>
      <p>First Name: Swati</p>
      <p>Highest Degree Passout Year: June 2024</p>
      <p>Technologies/Languages: Java, Python,C, C++, Nodejs, Reactjs, Mysql, Mongodb, HTML, CSS, JavaScript,Full Stack Web Developer</p>
    </div>
  );
};

const ResumeDownloadLink = () => {
  return (
    
    <div>
      <Link to={"./Resume"}>
                    <li>Download Resume</li>
                </Link>
    </div>
  );
};

const BMICalculationLink = () => {
  return (
    <div>
      <h2>BMI Calculation</h2>
      <Link to={"./BMI"}>
                    <li>BMI Calculator</li>
                </Link>
    </div>
  );
};

function Candidate() {
  return (
    <div className="App">
      <header className="App-header">
        <CandidateDetails />
        <ResumeDownloadLink />
        <BMICalculationLink />
      </header>
    </div>
  );
}

export default Candidate;
