import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Partners from "./components/Partners";
import Achievements from "./components/Achievements";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Partners />
      <Achievements />
      <CTA />
    </div>
  );
}

export default App;
