import React from "react";
import "./index.css"
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import About from "./routes/About";
import MyCats from "./routes/MyCats";

import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/MyCats" element={<MyCats />} />      
    </Routes>

    </>
  );
}

export default App;
