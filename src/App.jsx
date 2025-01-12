import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home2 from "./Components/Home2";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
