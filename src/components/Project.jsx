import React from "react";
import "../styles/projectStyle.css";
import port from "../assets/portimg.jpg";
import clg from "../assets/clgapply1.jpeg";
import atm from "../assets/atm.jpg";
import admin from "../assets/admin.png";
import insta from "../assets/insta.jfif";

const Projects = () => {
  const projectData = [
    {
      title: "Admin Dashboard",
      description:
        "I built dynamic, responsive websites using PHP, HTML, CSS, JavaScript, and MySQL, focusing on secure back-end development and seamless database integration. Working within an agile team, I contributed to real-time web projects while following secure coding standards, version control with Git, and clean code practices. I also gained practical experience in website deployment, server-side scripting, and debugging.",
      image: admin,
      tags: ["HTML", "CSS", "PHP", "MySQL"],
      link: "https://dashlogin.infinityfreeapp.com/",
    },
    {
      title: "Instagram Clone",
      description:
        "I developed a responsive Instagram clone using React.js, HTML5, CSS3, and JavaScript, featuring a component-based architecture and state management. Mock post data was handled using JSON, with a strong focus on dynamic content rendering, modular styling, and a smooth, user-friendly interface across devices.",
      image: insta,
      tags: ["React", "CSS", "JSON"],
      link: "",
    },
    {
      title: "Personal Portfolio",
      description:
        "This mini project involves creating my own Portfolio. The portfolio includes my personal details, skills, and projects, along with the source code for each project. The portfolio is developed using HTML, CSS, and ReactJS to provide a functional and interactive presentation.",
      image: port,
      tags: ["React", "API", "UI/UX"],
      link: "https://port-six-umber.vercel.app/",
    },
    {
      title: "College Application Management",
      description:
        "This mini project for the College Application allows the user to choose between Engineering or Arts as their preferred course of study. After selecting the course, the program checks whether the user meets the eligibility criteria for the chosen program. If the user is eligible, they can proceed to fill in further details for the application.",
      image: clg,
      tags: ["C", "C++", "C/C++"],
      link: "https://github.com/Op0778/College-application.git",
    },
    {
      title: "ATM Machine UI",
      description:
        "This mini project is focused on the ATM Machine User Interface (UI). The program simulates the functionality of an ATM, allowing users to check their bank balance, withdraw funds, and make deposits. The code implements these core features of an ATM machine.",
      image: atm,
      tags: ["Python", "GUI", "Tkinter"],
      link: "https://github.com/Op0778/Atm.git",
    },
  ];

  const ProjectCard = ({ title, description, image, tags, link }) => (
    <div className="project-card">
      <img src={image} className="project-img" alt={title} />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span className="project-tag" key={idx}>
              #{tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View Project
        </a>
      </div>
    </div>
  );

  return (
    <>
      <h1 className="title">My Projects</h1>
      <section className="projects-section align">
        <div className="projects-container">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
