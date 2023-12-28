import { NetlifyForm, Honeypot } from 'react-netlify-forms';
import "../styles/index.css";
import bioPic from "../images/20201024_130748.png";

const Contact = () => {

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
  <NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field' data-netlify="true">
    {({ handleChange, success, error }) => (
      <>
        <Honeypot />
        {success && <p>Thanks for contacting us!</p>}
        {error && (
          <p>Sorry, we could not reach our servers. Please try again later.</p>
        )}
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' onChange={handleChange} />
          <br />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='text' name='email' id='email' onChange={handleChange} />
          <br />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            type='text'
            name='message'
            id='message'
            rows='4'
            onChange={handleChange}
          />
          <br />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </>
    )}
  </NetlifyForm>
</div>
  
    <div className = "rightSide">
      <img src = {bioPic} alt = "Bio Pic" className = "bioPicContact" />
    </div>
    </div>
    </div>
  );
}
export default Contact;
