import React from 'react';

const ResumeDownload = () => {
  // Add the link to your resume file
  const resumeLink = 'https://drive.google.com/file/d/17dUsjbQ4bLk3tFLgKANfP6NsrZL17xMV/view?usp=drivesdk';

  return (
    <div>
      <h2>Download Resume</h2>
      <p>Click the button below to download my resume:</p>
      
      <a href={resumeLink} >   <button>Download Resume</button> 
      <br/>
      <img src="resume.png" alt="Example" />
       
      </a>
    </div>
  );
};

export default ResumeDownload;
