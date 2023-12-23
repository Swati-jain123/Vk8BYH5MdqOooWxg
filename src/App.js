
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Resume from './pages/Resume';
import React from 'react';
// import { Link } from 'react-router-dom';
import BMI from './pages/BMI';

import Candidate from './pages/Candidate';

const App = () => {
 
  return (
    <div className='app'>
    

<BrowserRouter>
 
    <Routes>
        <Route path="/" element={<Candidate/>} />
       
        <Route path="/BMI"element={<BMI/>}/>
        
        <Route path="/Resume"element={<Resume/>}/>
       
    </Routes>
   </BrowserRouter>

    </div>

    
  );
};


export default App;
