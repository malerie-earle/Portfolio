import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../src/styles/index.css";
import NavBanner from "./components/NavBanner.jsx";
import About from './pages/About.jsx';
import Applications from "./pages/Applications.jsx";
import Biography from "./pages/Biography.jsx";
import Contact from "./pages/Contact.jsx";
import DigitalMedia from "./pages/DigitalMedia.jsx";
import Home from "./pages/Home.jsx";
import PowerPoints from './pages/PowerPoints.jsx';
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Services from './pages/Services.jsx';
import Websites from "./pages/Websites.jsx";
function App() {
 return (
    <BrowserRouter>
      <NavBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/power-points" element={<PowerPoints />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/digital-media" element={<DigitalMedia />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/websites" element={<Websites />} />
      </Routes>
    </BrowserRouter>
 );
}

export default App;