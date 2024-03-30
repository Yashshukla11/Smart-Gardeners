import { Routes, Route } from "react-router";
import { UserContextProvider } from "./Context/UserContext";
import { Landing } from "./Pages/Landing/Landing";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { Kit } from "./Pages/Kit/Kit";
import Login from "./Pages/Login/Login";
import { WeGrow } from "./Pages/WeGrow/WeGrow";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kit" element={<Kit />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wegrow" element={<WeGrow />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
