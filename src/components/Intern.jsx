import React from "react";
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
  return (
    <>
      <h1 className="title">Internship</h1>
      {internData.map((inten, id) => (
        <div key={id}>
          <h1 className="title">{inten.internTitle}</h1>
          <div className="align intern">
            <p>{inten.discription}</p>
            <img src={inten.picture} alt={inten.internTitle} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Intern;
