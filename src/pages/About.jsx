import bioPic from "../images/20201024_130748.png";
import linkedIn from "../images/LinkedIn_Logo.png";
import gitHub from "../images/gitHub.jpg";
import {Link} from "react-router-dom";
import awsCert from "../images/AWScert.png";

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

      <div className = "linkBar">
        <Link to = "/biography">
        <p className = "abtLinks1">Biography</p></Link>

        <Link to = "/resume">
        <p className = "abtLinks2">Resume</p></Link>
        </div>


        <div className = "leftAside">
        <img src = {bioPic} alt = "Malerie Picture" className = "bioPic" />

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
      
      <div className = "skills">
      
        <h4>Coding Languages:</h4>

        <div className = "abtIcons">
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg" className = "iconAbt"/>
        <p>Bash</p>
        </div>

        <div className = "iconDiv">
        <img src = "https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=128&color=currentColor" className = "iconAbt" />
        <p>Bootstrap</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" className = "iconAbt"/>      
        <p>CSS</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"  className = "iconAbt" />
        <p>HTML</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  className = "iconAbt" />
        <p>JavaScript</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"  className = "iconAbt" />
        <p>Java</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"className = "iconAbt" />
        <p>Jest</p>
        </div>
          
        <div className = "iconDiv">
        <img src = "https://icongr.am/simple/json.svg?size=128&color=currentColor&colored=false" className = "iconAbt"  />
        <p>JSON</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"  className = "iconAbt" />
        <p>Material UI</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"  className = "iconAbt" />
        <p>MatLab</p>
        </div>
        
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" className = "iconAbt"/>
        <p>Next JS</p> 
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" className = "iconAbt"  />
        <p>Node JS</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" className = "iconAbt"/>
        <p>NPM</p>
        </div>

        <div className = "iconDiv">
        <img src = "https://icongr.am/simple/prettier.svg?size=128&color=currentColor&colored=false"  className = "iconAbt" />
        <p>Prettier</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"  className = "iconAbt" />
        <p>Python</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"  className = "iconAbt" />
        <p>React</p>
        </div>

        <div className = "iconDiv">
        <img src = "https://icongr.am/simple/reactrouter.svg?size=128&color=currentColor&colored=false"  className = "iconAbt" />
        <p>React Router</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"  className = "iconAbt" />
        <p>Tailwind CSS</p>
        </div>
        
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className = "iconAbt"  />
        <p>TypeScript</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg"  className = "iconAbt" />
        <p>Webpack</p>
        </div>
      </div>
        </div>
       
<div className = "rightAside">

    <h4 className = "exCert" >Experience & Certifications</h4>

    <a href = "https://www.credly.com/badges/6134d41d-381a-427f-931d-e0053391e808/linked_in?t=s5dce1">
    <img src = "https://images.credly.com/size/680x680/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png" alt = "AWS Certificate" className = "AWScert" /></a>
   
    <a href="https://awesome-github-stats.azurewebsites.net/index.html??cardType=github&theme=radical&preferLogin=false">    
        <img  
          alt="malerie-earle's GitHub Stats" 
          src="https://awesome-github-stats.azurewebsites.net/user-stats/malerie-earle?cardType=github&theme=radical&preferLogin=false" 
          className="gitHubStats"
          />  </a>


<div className = "programIcons">
    
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className = "iconAbt2" />

  <img src="https://icongr.am/simple/audacity.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original-wordmark.svg"  className = "iconAbt2" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" className = "iconAbt2"/>

  <img src = "https://icongr.am/simple/discord.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"  className = "iconAbt2" />
    
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"  className = "iconAbt2" />
    
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original-wordmark.svg"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/fontawesome.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg"  className = "iconAbt2" />
    
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"  className = "iconAbt2" />
    
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  className = "iconAbt2" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"  className = "iconAbt2" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"  className = "iconAbt2" />
            
  <img src = "https://icongr.am/simple/zoom.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/imgur.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/indeed.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/microsoft.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/microsoftexcel.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/microsoftoffice.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/microsoftpowerpoint.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/microsoftteams.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/microsoftword.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/netlify.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/pinterest.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original-wordmark.svg"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/reddit.svg?size=128&color=currentColor&colored=false"  className = "iconAbt" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"  className = "iconAbt2" />
    
  <img src = "https://icongr.am/simple/skype.svg?size=128&color=currentColor&colored=false" className = "iconAbt2"  />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/udemy.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/unsplash.svg?size=128&color=currentColor&colored=false" className = "iconAbt2"  />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain-wordmark.svg"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/vlcmediaplayer.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"  className = "iconAbt2" />

  <img src = "https://icongr.am/simple/w3c.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" />

</div>
</div>
    
    </div>
    </div>
    </div>
    </>
  )
}

export default About;
