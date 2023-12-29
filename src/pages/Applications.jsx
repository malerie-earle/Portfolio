import { Link } from 'react-router-dom';
import github from "../images/github.png";
import app1 from "../images/gofetch.png";
import app2 from "../images/reactoween.png";

const Applications = () => {
  return (
    <>
      <div className="projects">
        
        <h1>Projects</h1><br />

        <hr />

          <div className = "projectTop">
            <Link to = "/projects">
            <h3 className = "linkH3" >Websites</h3></Link>

            <Link to = "/projects#applications">
            <h3 className = "linkH3">Applications</h3></Link>

            <Link to = "/powerpoints">
            <h3 className = "linkH3">Powerpoints</h3></Link>
            <Link to = "#">
            <h3 className = "linkH3">& More...</h3></Link>
          </div>

        <h2 className="headings" id = "applications">Applications:</h2>
        <div className="project">


          <div className="websites">
            <a href="https://gofetch11.netlify.app" target="_blank" rel="noreferrer">
              <img className="website" src={app1} alt="Go Fetch" />
            </a>
            <figcaption className="websiteLabel">
              Website created for software development program assignment using ReactJS.
            </figcaption>
            <a href = "https://github.com/malerie-earle/GoFetch" target="_blank" rel="noreferrer">
            <img className="githubLogo" src={github} alt="GitHub Logo" /></a>
          </div>


          <div className="websites">
            <a href="https://react-o-ween.netlify.app" target="_blank" rel="noreferrer">
              <img className="website" src={app2} alt="React-O-Ween" />
            </a>
            <figcaption className="websiteLabel">
              Website created for software development program assignment using ReactJS.
            </figcaption>
            <a href = "https://github.com/malerie-earle/ReactOWeen" target="_blank" rel="noreferrer">
            <img className="githubLogo" src={github} alt="GitHub Logo" /></a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Applications;
