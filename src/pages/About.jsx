import bioPic from "../images/20201024_130748.png";
import linkedIn from "../images/LinkedIn_Logo.png";
import gitHub from "../images/gitHub.jpg";
const About = () => {
  return (
    <>
    <div className = "aboutSection">
      
      <div className = "topAbout">
      <h1 className = "aboutTitle">About Me</h1>
      <hr />
        <img src = {bioPic} alt = "Malerie Picture" className = "bioPic" />
      </div>
      <div className = "aside">
      <h3>Skills & Experience</h3>
      <br />
      <p>Coding Languages:</p>
      <br />
      <ul>
        <li>
        HTML
        </li>
        <li>
        CSS
        </li>
        <li>
        JavaScript 
        </li>
        <li>
        React JS 
        </li>
        <li>
        Python
        </li>
      <p>
      <br />

        Computer Programs:
      </p>
      <br />
      <li>
        IDEs: PyCharm, Visual Studio Code, RoboMaster, Terminal
      </li>
      <li>
        Microsoft Suite (Office, PowerPoint, Excel, Publisher, Sharepoint, Teams)
      </li>
      <li>
        Google (Drive, Documents, Presentations, Search Queries)
      </li>
      <li>
        Miscellaneous (Discord, GitHub, Figma, Zoom, AWS Services, Meditech, various video and photo editing software )
      </li>
      </ul>
      <br />

      <p>
        Experience:
      </p>
      <br />
      <p>Coming Soon...</p>
    </div>
      <div className = "bio">
      <h2>Malerie Jacqueline Debra Earle</h2>
      <br />
      <p>
      Hello, I'm Malerie Earle, a motivated and dedicated professional currently enrolled in the Software Development program at Keyin College with expected graduation date of August 31, 2024. I am actively seeking part-time employment to further my technical experience in the field.
      </p>
      <br />
      <p>
      I have chosen the software development course to incorporate my current knowledge within healthcare, customer service and other technical computer skills. I have found from a young age that I enjoy working on computers in various forms and have become a "tech person" among family and friends. I often notice errors in websites and software and think to myself I could improve this. I wanted to give myself a chance to learn the basics and see how I find it. So far in our program I have found that I am excelling in my projects and assisting others with theirs. I am excited and looking forward to exploring this sector more in depth and expanding my career.
      </p>
      <br />
      <p>
      With a Bachelor's degree in Nursing from Memorial University of Newfoundland and Labrador, I possess a diverse background in customer service, healthcare, and now, software development. My experience as a Customer Service Representative at S & P Data has honed my communication skills, allowing me to handle incoming and outgoing calls on various topics, including billing, technical support, sales, and customer issues related to commercial satellite TV.
      </p>
      <br />
      <p>
      During my time as a Registered Nurse at Fonemed (811 Healthline) and ExamOne, I excelled in telehealth counseling, medical assessments, and administrative tasks. I am detail-oriented, possess excellent time management and critical thinking abilities, and have a knack for problem-solving. My work in healthcare settings such as Labrador Grenfell Health and Central Health has further developed my organizational skills and attention to detail.
      </p>
      <br />
      <p>
      In addition to my healthcare expertise, I am proficient in various technology and computer programs, including Microsoft Word, Excel, and PowerPoint. I am skilled in data entry, possess strong verbal and written communication abilities, and thrive both as an independent worker and a team player.
      </p>
      <br />
      <p>
      As I pursue my software development career, I am eager to leverage my diverse skills and passion for continuous learning. I believe my strong work ethic, adaptability, and dedication make me a valuable asset to any organization.
      </p>
      <br />
      <p>
      Feel free to reach out if you have any opportunities or would like to connect. I am excited to explore new avenues in the software development field and contribute to innovative projects.
      </p>
      </div>
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
    </>
  )
}

export default About
