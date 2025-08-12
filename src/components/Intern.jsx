import React, { useRef, useEffect, useState } from "react";
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
    const currentRef = internRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <>
      <h1 className="title">Internship</h1>
      {internData.map((inten, id) => (
        <div key={id}>
          <h1 className="title">{inten.internTitle}</h1>
          <div className="align intern" ref={internRef}>
            <p className={isVisible ? "animated-box" : ""}>
              {inten.discription}
            </p>
            <img
              src={inten.picture}
              alt={inten.internTitle}
              className={isVisible ? "animated-box-img" : ""}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Intern;
