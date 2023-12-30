import { Link } from "react-router-dom";
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"; 
import searchIcon from "../images/search.png";

const Nav = () => {
  return (

  <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top">
  <div className="container-fluid"> 

    <div className="navbar-header">
      <Link className="navbar-brand" to ="/">malerie.</Link>
    </div>

{/* about */}
    <ul className="navbar-nav">
<li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to="#" id="dropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    About
  <span className="caret"></span></Link>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li className="dropdown-item"><Link to="/about">About Me</Link></li>
    <li className="dropdown-item"><Link to="/biography">Bio</Link></li>
    <li className="dropdown-item"><Link to="/resume">Resume</Link></li>
  </ul>
</li>


{/* projects */}
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" id="dropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          Projects
        <span className="caret"></span></Link>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li className = "dropdown-item" ><Link to="/projects">Projects Overview</Link></li>
          <li className = "dropdown-item"><Link to="/websites">Websites</Link></li>
          <li className = "dropdown-item"><Link to="/applications">Applications</Link></li>
          <li className = "dropdown-item"><Link to="/powerpoints">PowerPoints</Link></li>
          <li className = "dropdown-item"><Link to="/digitalmedia">Digital Media</Link></li>
        </ul>
      </li>

  {/* services */}
      <li className="dropdown">
        <Link className="dropdown-toggle" to="/services">
          Services
        </Link></li>

  {/* contact me */}
      <li className="dropdown">
        <Link className="dropdown-toggle" to="/contact">
          Contact Me
        </Link></li>
      

{/* search bar */}
        <form className="d-flex">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            <img src = {searchIcon} alt = "Search Icon" className = "searchIcon" />
          </button>
        </form> 

        </ul>
      </div>
  </nav>
  )}
export default Nav;











//     <>
//       <div className="navBar">
//       <nav>
//         <Link to = "/">
//         <div className = "navBox" id = "nav1">
//             <h3>Home</h3></div></Link>
//         <Link to = "/about">
//         <div className = "navBox" id = "nav2">
//             <h3>About</h3></div></Link>

//         <Link to = "/projects">
//         <div className = "navBox" id = "nav3">
//             <h3>Projects</h3></div></Link>

//         <Link to = "/services">
//         <div className = "navBox" id = "nav4">
//             <h3>Services</h3></div></Link>

//         <Link to = "/contact">
//         <div className = "navBox" id = "nav5">
//             <h3>Contact</h3></div></Link>

//     </nav>
//     </div>
//     <Outlet />
//     </>
//   )
// };

