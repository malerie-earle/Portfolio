// import { useState } from "react";
// import "../styles/index.css";
// import "../styles/transitions.css";
// const useFade = (initialState = true, duration = 1000) => {
//   const [inProp, setInProp] = useState(initialState);

//   const fadeIn = () => {
//     setInProp(true);
//   };

//   const fadeOut = () => {
//     setInProp(false);
//   };

//   return {
//     inProp,
//     fadeStyles: {
//       transition: `opacity ${duration}ms ease-in-out`,
//       opacity: inProp ? 1 : 0,
//     },
//     fadeIn,
//     fadeOut,
//   };
// };

// export default useFade;


// import healinghands from "../images/healinghands.png";
// import codingfingers from "../images/codingfingers.png";
// import logo from "../images/c2cLogo.png";
// import { Link } from "react-router-dom";
// import { CSSTransition } from 'react-transition-group';
// import useFade from '../hooks/useFade';
// import "../styles/index.css";
// import "../styles/transitions.css";
// import { useEffect, useState, useRef } from 'react';
// import selfie from "../images/Screenshot 2023-07-27 at 12.39.58 PM.png";
// import digdev from "../images/digitaldeveloper.png";
// const Home = () => {
//   const { inProp, fadeStyles, fadeIn } = useFade(false, 3000); 

//   useEffect(() => {
//     fadeIn();
//   }, []);

//   return (
//     <>
//     <div className="home">
//       {/* <Link to="/home">
//         <img src={logo} alt="care 2 code logo" style={fadeStyles} className = "c2cLogo"/>
//       </Link>
//       <img src = {selfie} alt = "self portrait" className = "selfie" /> */}
//       </div>
//       <div className = "main" >
//         {/* <h1>Malerie Earle</h1>

//         <img src = {digdev} alt = "digital developer" className = "digdev" /> */}
//     </div>
//     </>

//   );
// };

// export default Home;

