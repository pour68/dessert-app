import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div id="main" className="main">
      <div className="overlay">
        <Navbar />

        <Hero />
      </div>
    </div>
  );
}

export default App;
