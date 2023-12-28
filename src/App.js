import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import Projects from "Portfolio/src/pages/Projects.jsx";
import PowerPoints from './pages/PowerPoints.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import "../src/styles/index.css";
import DigitalMedia from "./pages/DigitalMedia.jsx";
import Biography from "./pages/Biography.jsx";
import Resume from "./pages/Resume.jsx"; 
import Contact from "./pages/Contact.jsx";
import Applications from "Portfolio/src/pages/Applications.jsx";
import Websites from "./pages/Websites.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/powerpoints" element={<PowerPoints />} />
        <Route path="/digitalmedia" element={<DigitalMedia />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
