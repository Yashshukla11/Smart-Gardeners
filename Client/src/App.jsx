import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing/Landing";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { Grow} from "./Pages/Grow/grow";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grow" element={<Grow />} />
      </Routes>
    </>
  );
}

export default App;
