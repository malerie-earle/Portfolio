import React from 'react';
// import "../styles/App.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import "../styles/index.css";
import bioPic from "../images/20201024_130748.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
      
      <form className='cf'>
        <h2>Send a Message</h2>
          <input type='text' placeholder='Name' name='user_name' />
          <input type='email' placeholder='Email address' name='user_email' />

          <textarea name='message' type='text' placeholder='Message'></textarea>
      
        <input type='submit' value='Submit' id='input-submit' />
      </form>
    </div>
    <div className = "rightSide">
      <img src = {bioPic} alt = "Bio Pic" className = "bioPicContact" />
    </div>
    </div>
    </div>
  );
}
export default Contact;
