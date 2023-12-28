import { Link } from 'react-router-dom';
import github from "../images/github.png";
import website1 from "../images/historyofcomputers.png";
import website2 from "../images/isleofavalonia.png";
import website3 from "../images/augotwedding.png";
import website4 from "../images/feliscatus.png";

const Websites = () => {
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

        
        
        <h2 className="headings">Websites: </h2>
        <div className="project">

          <div className="websites">
            <a href="https://historyofcomputers11.netlify.app" target="_blank">
              <img className="website" src={website1} alt="History of Computers" />
            </a>
            <figcaption className="websiteLabel">
              Website about the history of computers, created using HTML & CSS.
            </figcaption>
            <a href = "https://github.com/malerie-earle/HistoryOfComputers" target="_blank">
            <img className="githubLogo" src={github} alt="GitHub Logo" /></a>
          </div>


          <div className="websites">
            <a href="https://isleofavalonia.netlify.app" target="_blank">
              <img className="website" src={website2} alt="Isle of Avalonia" />
            </a>
            <figcaption className="websiteLabel">
              Website created for software development program assignment using HTML, CSS, & JavaScript.
            </figcaption>
            <a href = "https://github.com/malerie-earle/IsleofAvalonia" target="_blank">
            <img className="githubLogo" src={github} alt="GitHub Logo" /></a>
          </div>


          <div className="websites">
            <a href="https://augotwedding.netlify.app" target="_blank">
              <img className="website" src={website3} alt="Augot Wedding" />
            </a>
            <figcaption className="websiteLabel">
              Website created for software development program assignment using HTML & CSS.
            </figcaption>
            <a href = "https://github.com/malerie-earle/AugotWedding" target="_blank">
            <img className="githubLogo" src={github} alt="GitHub Logo" /></a>
          </div>


          <div className="websites">
            <a href="https://feliscatus.netlify.app" target="_blank">
              <img className="website" src={website4} alt="Felis Catus" />
            </a>
            <figcaption className="websiteLabel">
              Website created for software development program assignment using HTML & CSS.
            </figcaption>
            <a href = "https://github.com/malerie-earle/FelisCatus" target="_blank">
            <img className="githubLogo" src={github} alt="GitHub Logo" /></a>
          </div>
        </div>
      </div>
       
    </>
  )
}

export default Websites;
