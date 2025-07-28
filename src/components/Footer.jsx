import React from "react";
import "../styles/footStyle.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const footData = [
  { icon: <BsGithub />, link: "https://github.com/Op0778/", title: "Github" },
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/om-prakash-46202a283/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    title: "Linkedin",
  },
];

const Footer = () => {
  return (
    <div className="foot">
      <div className="">
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
      <div className="bottom">
        <p>Developed by omprakash @2025</p>
      </div>
    </div>
  );
};

export default Footer;
