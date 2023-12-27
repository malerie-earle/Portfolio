import bioPic from "../images/20201024_130748.png";
import linkedIn from "../images/LinkedIn_Logo.png";
import gitHub from "../images/gitHub.jpg";

const About = () => {
  return (
    <>
    <div className = "aboutSection">
      <h1 className = "aboutTitle">About Me</h1>

      <hr className = "aboutHr" />
      <br />
      <div className = "mainSection">

      <div className = "bio">
        <h2>Malerie Jacqueline Debra Earle</h2>
        <br />

        <div className = "leftAside">
        <img src = {bioPic} alt = "Malerie Picture" className = "bioPic" />
        <a href="https://awesome-github-stats.azurewebsites.net/index.html??cardType=github&theme=radical&preferLogin=false">    
        <img  
          alt="malerie-earle's GitHub Stats" 
          src="https://awesome-github-stats.azurewebsites.net/user-stats/malerie-earle?cardType=github&theme=radical&preferLogin=false" 
          className="gitHubStats"
          />  </a>
      </div>
      
      <div className = "skills">
        <h3>Skills & Experience</h3>
        <p>Coding Languages:</p>
        <br />
        <ul>
          <li>
          HTML
          </li>
          <li>
          CSS
          </li>
          <li>
          JavaScript 
          </li>
          <li>
          React JS 
          </li>
          <li>
          Python
          </li>
        
        <br />
        <p>
          Computer Programs:
        </p>
        <br />

        <li>
          IDEs: PyCharm, Visual Studio Code, RoboMaster, Terminal
        </li>
        <li>
          Microsoft Suite (Office, PowerPoint, Excel, Publisher, Sharepoint, Teams)
        </li>
        <li>
          Google (Drive, Documents, Presentations, Search Queries)
        </li>
        <li>
          Miscellaneous (Discord, GitHub, Figma, Zoom, AWS Services, Meditech, various video and photo editing software )
        </li>
        </ul>
        <br />

        <p>
          Experience:
        </p>
        <br />
        <p>Coming Soon...</p>
        <br />
      </div>
      </div>
      </div>


    <div className = "socials">
      <p className = "socialP">Learn More:</p>

      
      <br />
      <a href="https://www.linkedin.com/in/malerieearle0821">
      <img src = {linkedIn} alt = "Linked In" className = "linkedIn" />
      </a>
      <a href= "https://github.com/malerie-earle">
      <img src = {gitHub} alt = "GitHub" className = "gitHub" />
      </a>
    </div>
    </div>

    </>
  )
}

export default About;
