import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import Dashboard from './components/Dashboard/Dashboard.jsx';
import Aboutus from './components/Aboutus/Aboutus.jsx';
function App() {

  return (
    <>
     <Routes>
      {/* <Route path="/" element={<Dashboard />} /> */}
     <Route path="/aboutus" element={<Aboutus />} />
     </Routes> 
    </>
  );
}

export default App
