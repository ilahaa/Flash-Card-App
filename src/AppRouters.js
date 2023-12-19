import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Home";
import FlashCard from "./FlashCard";
import Footer from "./components/Footer";

const AppRouters = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/flashcard" element={<FlashCard />} />
          </Routes>
          <Footer />
        </header>
      </div>
    </Router>
  );
};

export default AppRouters;
