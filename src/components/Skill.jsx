import React from "react";
import SkillDonut from "./SkillDonut";

const skills = [
  { skill: "HTML", percent: 90 },
  { skill: "CSS", percent: 85 },
  { skill: "JavaScript", percent: 75 },
  { skill: "React", percent: 70 },
  { skill: "Python", percent: 80 },
  { skill: "php", percent: 40 },
  { skill: "c/c++", percent: 80 },
  { skill: "sql", percent: 40 },
];

const Skills = () => {
  return (
    <>
      <h1 className="title">Skills</h1>
      {/* align class is aboutStyles */}
      <div className="skill-place align">
        <div className="skill">
          {skills.map((s, idx) => (
            <SkillDonut key={idx} skill={s.skill} percent={s.percent} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
