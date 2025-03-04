//import { useState } from "react";
import helldiverLogo from "./assets/helldivers_salute.jpg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <img src={helldiverLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Edgar Temkin's Portfolio</h1>
      <p className="read-the-docs">בובי ז'וז'י</p>
    </>
  );
}

export default App;
