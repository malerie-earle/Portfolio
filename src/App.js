import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import Projects from "./pages/Projects.jsx";
import PowerPoints from './pages/PowerPoints.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import "../src/styles/index.css";
import DigitalMedia from "./pages/DigitalMedia.jsx";
import Biography from "./pages/Biography.jsx";
import Resume from "./pages/Resume.jsx"; 
import Contact from "./pages/Contact.jsx";
import Applications from "./pages/Applications.jsx";
import Websites from "./pages/Websites.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
 return (
    <BrowserRouter>
      <Nav />
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