import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Nav from './components/Nav.jsx';
import Projects from './pages/Websites.jsx';
import PowerPoints from './pages/PowerPoints.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import "../src/styles/index.css";
import DigitalMedia from "./pages/DigitalMedia.jsx";
function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/powerpoints" element={<PowerPoints />} />
        <Route path="/digitalmedia" element={<DigitalMedia />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
