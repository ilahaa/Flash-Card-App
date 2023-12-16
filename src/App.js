import Home from "./Home";
import FlashCard from "./FlashCard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
        <FlashCard />
        <Footer />
      </header>
    </div>
  );
}

export default App;
