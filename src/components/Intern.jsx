import React, { useEffect, useRef, useState } from "react";
import "../styles/internStyle.css";
import image from "../assets/rsun.jpg";

const internData = [
  {
    internTitle: "web development with PHP",
    discription:
      "Successfully completed a 15-day intensive internship at RSUN Technology, specializing in advanced web development with PHP. Gained hands-on experience in building dynamic websites, implementing back-end functionalities, and following secure coding standards. Developed strong problem-solving skills, worked collaboratively within a team environment, and consistently maintained high code quality. Acquired practical knowledge in database integration, server-side scripting, and website deployment, contributing to real-time project development under professional supervision.",
    picture: image,
  },
];

const Intern = () => {
  const internRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (internRef.current) {
      observer.observe(internRef.current);
    }

    return () => {
      if (internRef.current) observer.unobserve(internRef.current);
    };
  }, []);

  return (
    <>
      <h1 className="title">Internship</h1>
      {internData.map((inten, id) => (
        <div key={id}>
          <h1 className="title">{inten.internTitle}</h1>
          <div
            
            ref={internRef}
          >
            <p className={`align intern ${isVisible ? "animate" : ""}`}>{inten.discription}</p>
            <img src={inten.picture} alt={inten.internTitle} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Intern;
