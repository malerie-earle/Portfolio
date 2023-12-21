import { Outlet, Link } from "react-router-dom";
const Services = () => {
  return (
    <div className = "services">
      <br />
      <h1>Digital Services</h1><br />
      <hr /><br />
      <p className="lead">
        We offer a range of digital services to help you achieve your goals. Whether it's creating a website, improving website functionality, developing an online store or creating your very own app, there is something for everyone's price range and needs. The following is a list of some services available but always open to new ideas!
      </p><br />
      <ul>
        <li><Link to = "/projects"><span className = "bold">Web Design & Development:</span></Link><br />
          We design and develop websites for businesses of all sizes. Our team has extensive experience in creating responsive designs and cultivating your website to you.</li><br />
        <li><span className = "bold">App Development:</span><br />
          Responsive mobile-first design for all devices, including tablets and desktops. </li><br />
        <li><Link to = "/powerpoints"><span className = "bold">PowerPoint Presentations:</span></Link> <br />
          Great expertise in the skillful amalgamation of content structuring, visual design, and narrative storytelling to craft engaging, informative, and visually compelling presentations tailored for diverse professional and personal purposes, including business pitches, educational seminars, marketing campaigns, or family slideshows.</li><br />
        <li><span className = "bold">Video Creation:</span><br />
          We offer video creation for a wide variety of topics such as family events, weddings, engaging Public Service Announcements, memorial tributes and more!</li><br />
        <li><span className = "bold">Digital Documents:</span><br />
          We can offer any variety of documents such as technical writing, spreadsheets, posters, flyers, brochures/pamphlets, programs, word documents, letters, business cards, invitations, signs, greeting cards, and more! If you can imagine it, it can be created!</li><br />
        <li><span className = "bold">Marketing Materials:</span><br />
          In addition to any documents you may need, we can help with marketing and creating your brand. Ordering and designing promotional products that are fun and effective!</li><br />
        <li><span className = "bold">Simple Graphic Design:</span><br />
          We can help with simple graphic designs such as logo designs, wedding document themes, personal emblems, monograms, and more!</li><br />
        <li><span className = "bold">Data Organization and Input Processes:</span><br />
          Can help organize your data and make your business processes streamlined with new personalized software.</li><br />
      </ul>
    </div>
  )
}

export default Services;
