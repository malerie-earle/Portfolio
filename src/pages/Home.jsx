import { TypeAnimation } from "react-type-animation";
import "../styles/index.css";
import "../styles/transitions.css";
import selfie from "../images/selfie.png";
import useFetch from "../hooks/useFetch.jsx";
import FlashingWords from "../components/FlashingWords.jsx";
import digDeveloper from "../images/digdeveloper.png";
import projectPic from "../images/WebDesign.png";
import powerpoints from "../images/ppTitle.png";
import digitalMedia from "../images/DigitalMedia.png";
import services from "../images/Services.png";
import { Link } from "react-router-dom";
import RainbowHover from "../components/RainbowHover.jsx";
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const { data: words, loading, error } = useFetch('https://lacy-polished-brownie.glitch.me/words/');
  const [randomizedWords, setRandomizedWords] = useState([]);

  useEffect(() => {
    if (words && words.length > 0) {
      const repeatedWords = [...words]; // Copy the original list
      // Repeat the list until it's long enough to cover the background
      while (repeatedWords.length < 500) {
        repeatedWords.push(...words); // Concatenate the original list
      }
      // Shuffle the concatenated list for randomness
      const shuffledWords = repeatedWords.sort(() => Math.random() - 0.5);
      setRandomizedWords(shuffledWords);
    }
  }, [words]);

  if (loading) {
    return (
    <>
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    </>
  )
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

      <div className = "wordBackground">
        <ul className = "adjList">
            {randomizedWords.map((word) => (
              <RainbowHover key={uuidv4()}>
                <li key={uuidv4()} id= {`${word.id}`}>{word}</li>
              </RainbowHover>
          ))}
        </ul>
      </div>

      {/* <div className="sideColumn" id="left">
      <ul className="adjList">
      {randomizedWordsLeft.map((word) => (
              <RainbowHover key={uuidv4()}>
                <li className="words">{word}</li>
              </RainbowHover>
            ))}
          </ul>
        </div> */}

      <div className="main">

        <div className="banner">
          <img src={selfie} alt="self portrait" className="selfie" />
          
          <div className = "typing">
          <TypeAnimation
            className="typingText"
            sequence={[
              `hello world!\nmy name is malerie.\n & I am MANY things...`,
              [],
            ]}
            speed={40}
            style={{ 
              whiteSpace: 'pre-line',
              display: 'inline-block', 
            }}
            repeat={1}
          />
            <br />
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
          
          














          {/* <div className="projectsHome">

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

            </div> */}
            {/* </div>
          </div> */}
        

          {/* <div className="sideColumn" id="right">
          <ul className="adjList">
            {randomizedWordsRight.map((word) => (
              <RainbowHover key={uuidv4()}>
                <li className="words">{word}</li>
              </RainbowHover>
            ))}
          </ul>
        </div> */}
        </div>

      {/* <footer>
        <p>
        © Copyright Malerie Earle - 2023
        </p>

        <a href="https://www.linkedin.com/in/malerieearle0821">
      LinkedIn
      </a>
      <a href= "https://github.com/malerie-earle">
      GitHub
      </a>
        
        </footer> */}


      </div>
      </div>
      
   </>
  );
};

export default Home;
