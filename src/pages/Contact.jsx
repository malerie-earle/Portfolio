import "../styles/index.css";
import bioPic from "../images/20201024_130748.png";
import { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      setSuccess(true);
      event.target.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
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


     <div className="ContactForm">
        {success && <p className="tyMessage" >Thanks for your message!</p>}
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />

            <button className="contactBtn" type="submit">Submit</button>
          </form>
      </div>

    <div className = "rightSide">
      <img src = {bioPic} alt = "Bio Pic" className = "bioPicContact" />
    </div>
    </div>
  </div>   

  )}
export default Contact;
