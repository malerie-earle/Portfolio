import { Link } from "react-router-dom";


const Biography = () => {
  return (
    <>
    <div className = "aboutSection">
      <h1 className = "aboutTitle">Biography</h1>

      <hr className = "aboutHr" />
      <br />
      <div className = "mainSection">

      <div className = "biography">
        <h2>Malerie Jacqueline Debra Earle</h2>
        <br />

        <p>Graduating with a Bachelor's in Nursing from Memorial University of Newfoundland and Labrador in 2014, I embarked on a fulfilling career in healthcare. From in-hospital roles to remote positions, I honed my skills across diverse healthcare landscapes. However, the challenges posed by the pandemic and the systemic issues within healthcare led me to seek new avenues for impact.</p>
        <br />

        <p>In May 2023, I embraced an opportunity—a full scholarship through TechNL—to delve into the dynamic world of software development. Enrolled in the Software Development program at Keyin College, I've embraced this journey to merge my healthcare experience with technical prowess, seeking innovative solutions at the intersection of technology and wellness.</p>
        <br />
        
        <p>With a foundation built on customer service excellence, my tenure as a Customer Service Representative at S & P Data instilled in me exceptional communication skills vital for engaging with diverse audiences. I've excelled in roles such as a Registered Nurse at Fonemed (811 Healthline) and ExamOne, demonstrating proficiency in telehealth counseling, medical assessments, and administrative tasks.</p><br />


        <p>My journey extends beyond healthcare—I've fostered proficiency in technology and computer programs such as Microsoft Word, Excel, and PowerPoint. Proficient in data entry and armed with robust communication skills, I navigate effortlessly between independent work and collaborative team environments.</p><br />


        <p>Driven by an innate curiosity and a knack for problem-solving, I've discovered a love for software development. This journey has allowed me to combine my tech-savvy nature with a penchant for enhancing user experiences. I've found joy in contributing to projects, leveraging my strong work ethic, adaptability, and dedication.</p><br />

        <p>I'm actively seeking part-time opportunities to deepen my technical experience in the software development realm. Eager to contribute my diverse skill set and passion for continuous learning, I aspire to innovate and create within the software development space.</p><br />

        <p>Feel free to <Link className = "contactLink" to = "/contact">connect</Link> for potential collaborations or opportunities. Let's explore new horizons in software development and pioneer innovative solutions together.</p>

      </div>   
    </div>
    </div>
    </>
  )
}

export default Biography;
