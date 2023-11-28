import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Partners />
    </div>
  );
}

export default App;
