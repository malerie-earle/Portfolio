import { Outlet, Link } from "react-router-dom";
import "../styles/index.css"; 
const Nav = () => {
  return (
    <>
      <div className="navBar">
      <nav>
        <Link to = "/">
        <div className = "navBox" id = "nav1">
            <h3>Home</h3></div></Link>
        <Link to = "/about">
        <div className = "navBox" id = "nav2">
            <h3>About</h3></div></Link>

        <Link to = "/projects">
        <div className = "navBox" id = "nav3">
            <h3>Projects</h3></div></Link>

        <Link to = "/services">
        <div className = "navBox" id = "nav4">
            <h3>Services</h3></div></Link>

        <Link to = "/contact">
        <div className = "navBox" id = "nav5">
            <h3>Contact</h3></div></Link>

    </nav>
    </div>
    <Outlet />
    </>
  )
};

export default Nav;
