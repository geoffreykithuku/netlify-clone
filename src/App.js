
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Solutions from "./components/Solutions";

function App() {
  return (
    <div className="App flex flex-col">
   
      <Navbar />
      <Hero />
      <About />
      <Solutions />
    </div>
  );
}

export default App;
