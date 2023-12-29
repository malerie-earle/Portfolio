import bioPic from "../images/20201024_130748.png";
import linkedIn from "../images/LinkedIn_Logo.png";
import gitHub from "../images/gitHub.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    <div className = "aboutSection">
      <h1 className = "aboutTitle">Malerie Jacqueline Debra Earle</h1>

      <hr className = "aboutHr" />
      <br />

      <div className = "mainSection">

      <div className = "bio">
     

      <div className = "linkBar">
        <Link to = "/biography">
        <p className = "abtLinks1">Biography</p></Link>

        <Link to = "/resume">
        <p className = "abtLinks2">Resume</p></Link>
        </div>


        <div className = "leftAside">
        <img src = {bioPic} alt = "Malerie" className = "bioPic" />

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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg" className = "iconAbt" alt = "bash" />
        <p>Bash</p>
        </div>

        <div className = "iconDiv">
        <img src = "https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=128&color=currentColor" className = "iconAbt" alt = "bootstrap" />
        <p>Bootstrap</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" className = "iconAbt" alt = "CSS" />      
        <p>CSS</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"  className = "iconAbt" alt = "HTML" />
        <p>HTML</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  className = "iconAbt" alt = "JavaScript" />
        <p>JavaScript</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"  className = "iconAbt" alt = "Java" />
        <p>Java</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"className = "iconAbt" alt = "Jest" />
        <p>Jest</p>
        </div>
          
        <div className = "iconDiv">
        <img src = "https://icongr.am/simple/json.svg?size=128&color=currentColor&colored=false" className = "iconAbt" alt = "JSON" />
        <p>JSON</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"  className = "iconAbt" alt = "Material UI" />
        <p>Material UI</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"  className = "iconAbt" alt = "MatLab" />
        <p>MatLab</p>
        </div>
        
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" className = "iconAbt" alt = "Next JS" />
        <p>Next JS</p> 
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" className = "iconAbt" alt = "Node JS" />
        <p>Node JS</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" className = "iconAbt" alt = "NPM" />
        <p>NPM</p>
        </div>

        <div className = "iconDiv">
        <img src = "https://icongr.am/simple/prettier.svg?size=128&color=currentColor&colored=false"  className = "iconAbt" alt = "Prettier" />
        <p>Prettier</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"  className = "iconAbt" alt = "Python" />
        <p>Python</p>
        </div>
          
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"  className = "iconAbt" alt = "React" />
        <p>React</p>
        </div>

        <div className = "iconDiv">
        <img src = "https://icongr.am/simple/reactrouter.svg?size=128&color=currentColor&colored=false"  className = "iconAbt" alt = "React Router" />
        <p>React Router</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"  className = "iconAbt" alt = "Tailwind CSS" />
        <p>Tailwind CSS</p>
        </div>
        
        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className = "iconAbt" alt = "TypeScript" />
        <p>TypeScript</p>
        </div>

        <div className = "iconDiv">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg"  className = "iconAbt" alt = "Webpack" />
        <p>Webpack</p>
        </div>
      </div>
        </div>
       
<div className = "rightAside">

    <h4 className = "exCert" >Experience & Certifications</h4>

    <a href = "https://www.credly.com/badges/6134d41d-381a-427f-931d-e0053391e808/linked_in?t=s5dce1">
    <img src = "https://images.credly.com/size/680x680/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png" alt = "AWS Certificate" className = "AWScert" /></a>
   
    <img src = "https://github-readme-stats.vercel.app/api?username=malerie-earle&theme=radical&show_icons=true&hide_border=false&count_private=true" />

    <img src = "https://github-readme-stats.vercel.app/api/top-langs/?username=malerie-earle&theme=radical&show_icons=true&hide_border=false&layout=compact" />


<div className = "programIcons">
    
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className = "iconAbt2" alt = "AWS Certificate" />

  <img src="https://icongr.am/simple/audacity.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Audacity" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original-wordmark.svg"  className = "iconAbt2" alt = "Chrome" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" className = "iconAbt2" alt = "Devicon" />

  <img src = "https://icongr.am/simple/discord.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Discord" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"  className = "iconAbt2" alt = "Facebook" />
    
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"  className = "iconAbt2" alt = "Figma"/>
    
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original-wordmark.svg"  className = "iconAbt2" alt = "Firefox" />

  <img src = "https://icongr.am/simple/fontawesome.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "FontAwesome" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg"  className = "iconAbt2" alt = "Gimp" />
    
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"  className = "iconAbt2" alt = "Git" />
    
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"  className = "iconAbt2" alt = "GitHub" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"  className = "iconAbt2" alt = "Google" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"  className = "iconAbt2" alt = "XCode" />

  <img src = "https://icongr.am/simple/imgur.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Imgur" />

  <img src = "https://icongr.am/simple/indeed.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Indeed" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg"  className = "iconAbt2" alt = "LinkedIn" />

  <img src = "https://icongr.am/simple/microsoft.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Microsoft" />

  <img src = "https://icongr.am/simple/microsoftexcel.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Microsoft Excel" />

  <img src = "https://icongr.am/simple/microsoftoffice.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Microsoft Office" />

  <img src = "https://icongr.am/simple/microsoftpowerpoint.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Microsoft PowerPoint" />

  <img src = "https://icongr.am/simple/microsoftteams.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Microsoft Teams" />

  <img src = "https://icongr.am/simple/microsoftword.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Microsoft Word" />

  <img src = "https://icongr.am/simple/netlify.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Netlify" />

  <img src = "https://icongr.am/simple/pinterest.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Pinterest" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original-wordmark.svg"  className = "iconAbt2" alt = "Pycharm" />

  <img src = "https://icongr.am/simple/reddit.svg?size=128&color=currentColor&colored=false"  className = "iconAbt" alt = "Reddit" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"  className = "iconAbt2" alt = "Salesforce" />
    
  <img src = "https://icongr.am/simple/skype.svg?size=128&color=currentColor&colored=false" className = "iconAbt2" alt = "Skype"  />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg"  className = "iconAbt2" alt = "Trello" />

  <img src = "https://icongr.am/simple/udemy.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Udemy" />

  <img src = "https://icongr.am/simple/unsplash.svg?size=128&color=currentColor&colored=false" className = "iconAbt2" alt = "Unsplash"  />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain-wordmark.svg"  className = "iconAbt2" alt = "Visual Studio" />

  <img src = "https://icongr.am/simple/vlcmediaplayer.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "VLC Media Player" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"  className = "iconAbt2" alt = "VS Code" />

  <img src = "https://icongr.am/simple/w3c.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "W3C" />

  <img src = "https://icongr.am/simple/zoom.svg?size=128&color=currentColor&colored=false"  className = "iconAbt2" alt = "Zoom" />
</div>
</div>
    
    </div>
    </div>
    </div>
    </>
  )
}
export default About;
