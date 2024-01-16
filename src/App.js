

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarnew from './Components/navbarnew';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Projects from './Components/Project';
import Resume from './Components/Resume';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbarnew />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/upload-resume" element={<Resume />} />


      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;

