import React from "react";
import Nav from "../src/components/Nav.js";
import Home from "./Home.js";
import FlashCard from "./FlashCard.js";
import ContactMe from "./ContactMe.js"
function App() {
  return (
    <div className="App">
    <header className="App-header">
      <Nav />
      <Home />
      <FlashCard />
      <ContactMe />
    </header>
  </div>
  );
}

export default App;
