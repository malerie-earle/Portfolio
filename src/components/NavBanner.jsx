import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom";
import bannerImg from "../images/bannerGif.gif";
import "../styles/index.css";

const NavBanner = () => {
  return (
    <div className = "bannerContainer">
        
      <Link to="/">
        <div className="bannerImage">
          <img src={bannerImg} alt="Banner" className="bannerGif" />
        </div>
      </Link>

        <div className="navbar">

          <DropdownButton className = "navFont" id="dropdown-basic-button" title="About">

            <Dropdown.Item className = "navFont" href="/about">
              About Me
            </Dropdown.Item><br />

            <Dropdown.Item className = "navFont" href="/biography">
              Bio
            </Dropdown.Item><br />
            
            <Dropdown.Item className = "navFont" href="/resume">
              Resume
            </Dropdown.Item><br />

          </DropdownButton>

</div>
</div>

  )
};
export default NavBanner;