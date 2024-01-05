import myResume from "../media/MalerieResume-Jan124.pdf";

const Resume = () => {
  return (
    <>
    <div className = "aboutSection">
      <h1 className = "aboutTitle">Resume - Malerie Earle</h1>

      <hr className = "aboutHr" />
      <br />
      <div className = "mainSection">

        <iframe 
          title = "My Resume"
          src =  {myResume} width = "70%" height = "500px" />
 
       </div>
    </div>
    </>
  )
}

export default Resume;
