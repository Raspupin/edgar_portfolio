import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import aboutData from "./data/aboutMeInfo.json";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function App() {
  return (
    <Router>
      <Navbar data={aboutData} />
      <Hero />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About data={aboutData} />} />
      </Routes>
    </Router>
  );
}

export default App;
