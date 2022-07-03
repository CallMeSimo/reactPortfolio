import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedPage from "./Components/AnimationHandler";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer";

import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import MyWork from "./Pages/MyWork.js";
import NotFound from "./Pages/NotFound.js";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="ContentContainer">
          <AnimatedPage>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/MyWork" element={<MyWork />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatedPage>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
