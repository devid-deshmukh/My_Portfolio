import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Contact from "./pages/Contacts";
import Footer from "./components/Footer";
import "./styles/App.css"
 // Only one dot!

function App() {
  return (
  <>
    <Navbar/>
    <main>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </main>
    <Footer/>

    </>




  );
}

export default App;