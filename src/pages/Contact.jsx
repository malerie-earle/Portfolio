import { NetlifyForm, Honeypot } from 'react-netlify-forms';
import "../styles/index.css";
import bioPic from "../images/20201024_130748.png";
import { useEffect, useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className = "contactGrid">

      
      <div className = "asideContact">
        <h2>Get In Touch:</h2>
        <h3>Malerie Earle</h3><br />
        <p>Feel free to reach out! I'm always open to new opportunities and projects.</p>
        <p>malerie.earle@gmail.com</p>
        <ul>
          <li>
            <a href="http://www.linkedin.com/in/malerieearle0821" target="_blank">LinkedIn Profile</a>
          </li>
          <li>
            <a href="https://github.com/malerie-earle" target="_blank">GitHub Profile</a>
          </li>
          <li>
          <a href="#" target="_blank">Portfolio Website</a>
          </li>
        </ul>
      </div>


      <div className = "ContactForm">
      {success && (
          <p style={{ color: "green" }}>Thanks for your message! </p>
        )}
      <form
        name="contact" 
        method="POST" 
        data-netlify="true"
        >
            <input type="hidden" name="form-name" value="contact" />
            <textarea id="standard-basic" label="name" name="name" />
            <textarea id="standard-basic" label="email" name="email" />
            <textarea multiline id="standard-basic" label="message" name="message" />
            <button className = "contactBtn" type="submit">Send</button>
          </form>

    <div className = "rightSide">
      <img src = {bioPic} alt = "Bio Pic" className = "bioPicContact" />
    </div>
    </div>
  </div>   
</div>
  )}
export default Contact;
