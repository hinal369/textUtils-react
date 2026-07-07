import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";


function App() {
  const [ mode, setMode ] = useState("light");
  const toggleMode = () => {
    const navbar = document.getElementById("navbar");
    const icon = document.getElementById("icon");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#182a39";
      document.body.style.color = "white";
      navbar.classList.remove("bg-body-tertiary");
      navbar.classList.add("bg-dark");
      icon.classList.remove("fa-moon-o");
      icon.classList.add("fa-sun-o");
      icon.style.color = "yellow";  
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      navbar.classList.remove("bg-dark");
      navbar.classList.add("bg-body-tertiary");
      icon.classList.remove("fa-sun-o");
      icon.classList.add("fa-moon-o");
      icon.style.color = "black";
    }
  }
  return (
    <>
      {/* Not passing title here will correctly trigger the JavaScript default parameter */}
      <Navbar aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze "/>
      </div>
    </>
  );
}

export default App;
