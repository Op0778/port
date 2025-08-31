import React, { useEffect, useState } from "react";
import "../styles/internStyle.css";
import image from "../assets/rsun.jpg";
import technohacks from "../assets/technohacks.png";

const internData = [
  {
    internTitle: "Web Development with PHP",
    discription:
      "Successfully completed a 15-day intensive internship at RSUN Technology, specializing in advanced web development with PHP. Gained hands-on experience in building dynamic websites, implementing back-end functionalities, and following secure coding standards. Developed strong problem-solving skills, worked collaboratively within a team environment, and consistently maintained high code quality. Acquired practical knowledge in database integration, server-side scripting, and website deployment, contributing to real-time project development under professional supervision.",
    picture: image,
  },
  {
    internTitle: "Web Design & Development",
    discription:
      "During my 1-month Web Development Internship at Technohacks, I successfully completed 12 core projects focused on frontend development, backend integration, and responsive design. My responsibilities included integrating REST APIs for dynamic data handling, developing and optimizing user-friendly websites, and creating reusable React.js components. I also managed application state using React hooks and enhanced UI/UX with CSS3 and Bootstrap, resulting in scalable and visually appealing solutions.",
    picture: technohacks,
  },
];

const Intern = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observers = [];

    internData.forEach((_, index) => {
      const element = document.getElementById(`intern-${index}`);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...prev, index]);
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <h1 className="title">Internship</h1>
      {internData.map((inten, id) => (
        <div key={id}>
          <h1 className="title">{inten.internTitle}</h1>
          <div
            id={`intern-${id}`}
            className={`align intern ${id % 2 === 1 ? "reverse" : ""}`}
          >
            <p className={visibleItems.includes(id) ? "animated-box" : ""}>
              {inten.discription}
            </p>
            <img
              src={inten.picture}
              alt={inten.internTitle}
              className={visibleItems.includes(id) ? "animated-box-img" : ""}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Intern;
