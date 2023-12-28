import { Link } from "react-router-dom";
import myResume from "../media/Resume - Malerie 3.8.23 Admin.pdf";

const Resume = () => {
  return (
    <>
    <div className = "aboutSection">
      <h1 className = "aboutTitle">Resume - Malerie Earle</h1>

      <hr className = "aboutHr" />
      <br />
      <div className = "mainSection">

        <iframe src =  {myResume} width = "90%" height = "500px" />
 
       </div>
    </div>
    </>
  )
}

export default Resume;
