import { Link } from 'react-router-dom';


const Projects = () => {
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
          </div>
    </>
  )
}

export default Projects;
