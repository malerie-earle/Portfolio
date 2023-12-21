import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import "../styles/index.css";
import "../styles/transitions.css";
import selfie from "../images/Screenshot 2023-07-27 at 12.39.58 PM.png";
import useFetch from "../hooks/useFetch.jsx";
import FlashingWords from "../components/FlashingWords.jsx";
import digDeveloper from "../images/digdeveloper.png";
import projectPic from "../images/WebDesign.png";
import powerpoints from "../images/ppTitle.png";
import digitalMedia from "../images/DigitalMedia.png";
import services from "../images/Services.png";
import { Outlet, Link } from "react-router-dom";
import RainbowHover from "../components/RainbowHover.jsx";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const { data: words, loading, error } = useFetch('http://localhost:8000/words');
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!words || words.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <>
    <div className="home">

      <div className="sideColumn" id="left">
      <ul className="adjList">
  {words.slice(0, words.length / 2).map((word) => (
    <RainbowHover key={uuidv4()}>
      <li className="words">{word}</li>
    </RainbowHover>
  ))}
</ul>
      </div>

      <div className="main">

        <div className="banner">
          <img src={selfie} alt="self portrait" className="selfie" />
          
          <div className = "typing">
          <TypeAnimation
            className="typingText"
            sequence={[
              `hello world!\nmy name is Malerie,\n & I am MANY things...`,
              [],
            ]}
            speed={40}
            style={{ 
              whiteSpace: 'pre-line',
              display: 'inline-block', 
              fontSize: '2em' }}
            repeat={1}
          />
            <div className="flashing">
          <div className="flashWords">
            <FlashingWords />
          </div>
        </div>
          </div>

         
        </div>
        <hr />
        

        <div className="bottom">
          
          <img src={digDeveloper} alt="Digital Developer" className="digdev" />
          <div className="projectsHome">

          <Link to="/projects" className="glow-on-hover">
            <div className="projectHome" id="website-apps">
                <img src={projectPic} alt="Projects - Websites & Apps" className="projectPics" id="projectWebsite" /></div></Link>
              

            <Link to="/powerpoints" className="glow-on-hover">
            <div className="projectHome" id="powerpoints">
                <img src={powerpoints} alt="Projects - Powerpoints" className="projectPics" id="projectPowerpoints" />
                </div></Link>
            

            <Link to="/digitalmedia" className="glow-on-hover">
            <div className="projectHome" id="digital documents">
                <img src={digitalMedia} alt="Digital Media" className="projectPics" id="digMedia" />
                </div></Link>
            

            <Link to="/services" className="glow-on-hover">
            <div className="projectHome" id="services">
                <img src={services} alt="Services" className="projectPics" id="servicesHome" />
                </div></Link>

            </div>
            </div>
          </div>
        

        <div className="sideColumn" id="right">

        <ul className="adjList">
  {words.slice(words.length / 2).map((word) => (
    <RainbowHover key={uuidv4()}>
      <li className="words">{word}</li>
    </RainbowHover>
  ))}
</ul>

          </div>
      </div>

      <footer>
        <p>
        © Copyright Malerie Earle - 2023
        </p>

        <a href="https://www.linkedin.com/in/malerieearle0821">
      LinkedIn
      </a>
      <a href= "https://github.com/malerie-earle">
      GitHub
      </a>
        
        </footer>
      
   </>
  );
};

export default Home;
