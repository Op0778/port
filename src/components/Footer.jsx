import "../styles/footStyle.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const footData = [
  { icon: <BsGithub />, link: "https://github.com/Op0778/", title: "GitHub" },
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/om-prakash-46202a283/",
    title: "LinkedIn",
  },
];

const Footer = ({ scrollToSection, refs }) => {
  const handleNavClick = (ref) => {
    if (ref && scrollToSection) {
      scrollToSection(ref);
    }
  };

  return (
    <div className="foot">
      <div className="top">
        <div>
          {footData.map((foot, idx) => (
            <div className="icon" key={idx}>
              <a
                href={foot.link}
                target="_blank"
                title={foot.title}
                rel="noopener noreferrer"
              >
                {foot.icon}
              </a>
            </div>
          ))}
        </div>
        <div>
          <nav>
            <li onClick={() => handleNavClick(refs.aboutRef)}>About</li>
            <li onClick={() => handleNavClick(refs.skillRef)}>Skill</li>
            <li onClick={() => handleNavClick(refs.projectRef)}>Projects</li>
            <li onClick={() => handleNavClick(refs.internRef)}>Internship</li>
            <li onClick={() => handleNavClick(refs.contactRef)}>Contact</li>
          </nav>
        </div>
      </div>
      <div className="bottom">
        <p>Developed by Om Prakash © 2025</p>
      </div>
    </div>
  );
};

export default Footer;
