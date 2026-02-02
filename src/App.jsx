import Navbar from "./Layout/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Contact from "./pages/Contacts";
 // Only one dot!

function App() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>

    </>




  );
}

export default App;