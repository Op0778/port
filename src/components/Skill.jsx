import SkillDonut from "./SkillDonut";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import js from "../assets/js.webp";
import react from "../assets/react.webp";
import mongo from "../assets/mongodb.webp";
import php from "../assets/php.webp";
import sql from "../assets/sql.webp";
import python from "../assets/python.webp";
import cpp from "../assets/cpp.webp";

const skills = [
  { skill: "HTML", percent: 90, image: html },
  {
    skill: "CSS",
    percent: 85,
    image: css,
  },
  { skill: "JavaScript", percent: 75, image: js },
  { skill: "React", percent: 70, image: react },
  { skill: "MongoDB", percent: 50, image: mongo },
  { skill: "php", percent: 40, image: php },
  { skill: "sql", percent: 40, image: sql },
  { skill: "Python", percent: 80, image: python },
  { skill: "c/c++", percent: 80, image: cpp },
];

const Skills = () => {
  return (
    <>
      <h1 className="title">Skills</h1>
      <div className="skill-place align">
        <div className="skill">
          {skills.map((s, idx) => (
            <SkillDonut
              key={idx}
              skill={s.skill}
              percent={s.percent}
              image={s.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
