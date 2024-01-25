import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing/Landing";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { WeGrow } from "./Pages/WeGrow/WeGrow";
import { Kit } from "./Pages/Kit/Kit";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wegrow" element={<WeGrow />} />
          <Route path="/kit" element={<Kit />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
