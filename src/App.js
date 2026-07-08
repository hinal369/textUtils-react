import { Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Team from './components/Team';
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    const navbar = document.getElementById("navbar");
    const icon = document.getElementById("icon");
    const accordion = document.getElementById('accordionExample');
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#182a39";
      document.body.style.color = "white";
      navbar.classList.remove("bg-body-tertiary");
      navbar.classList.add("bg-dark");
      icon.classList.remove("fa-moon-o");
      icon.classList.add("fa-sun-o");
      icon.style.color = "yellow";
      // document.getElementsByClassName("accordion-body").backgroundColor = '#182a39';
      accordion.style.setProperty('--bs-accordion-bg', '#182a39');
      accordion.style.setProperty('--bs-accordion-color', '#ffffff');
      accordion.style.setProperty('--bs-accordion-btn-color', '#ffffff');
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      navbar.classList.remove("bg-dark");
      navbar.classList.add("bg-body-tertiary");
      icon.classList.remove("fa-sun-o");
      icon.classList.add("fa-moon-o");
      icon.style.color = "black";
      // document.getElementsByClassName("accordion-body").backgroundColor = '#ffffff';
      accordion.style.setProperty('--bs-accordion-bg', '#ffffff');
      accordion.style.setProperty('--bs-accordion-color', '#000000');
      accordion.style.setProperty('--bs-accordion-btn-color', '#000000');
      showAlert("Light mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      {/* Not passing title here will correctly trigger the JavaScript default parameter */}
      <Navbar aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            index
            element={
              <TextForm
                heading="Enter the text to analyze "
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About />} />

          {/* <Route path="dashboard" element={<Dashboard />}> */}
          <Route path="dashboard">
            <Route index element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          <Route path="teams/:teamId/user/:userId?" element={<Team />} />
        </Routes>
        {/* <TextForm heading="Enter the text to analyze " showAlert={ showAlert }/> */}
      </div>
    </>
  );
}

export default App;
