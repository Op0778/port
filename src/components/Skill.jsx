import SkillDonut from "./SkillDonut";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiCplusplus, SiExpress } from "react-icons/si";

const skills = [
  { skill: "HTML", percent: 90, icon: <FaHtml5 size={80} color="#E34F26" /> },
  { skill: "CSS", percent: 85, icon: <FaCss3Alt size={80} color="#1572B6" /> },
  {
    skill: "JavaScript",
    percent: 75,
    icon: <FaJs size={80} color="#F7DF1E" />,
  },
  {
    skill: "MongoDB",
    percent: 50,
    icon: <SiMongodb size={80} color="#47A248" />,
  },
  {
    skill: "Express",
    percent: 50,
    icon: <SiExpress size={80} color="#47A248" />,
  },
  { skill: "React", percent: 70, icon: <FaReact size={80} color="#61DAFB" /> },
  { skill: "Node", percent: 70, icon: <FaNodeJs size={80} color="green" /> },

  { skill: "PHP", percent: 40, icon: <FaPhp size={80} color="#777BB4" /> },
  { skill: "SQL", percent: 40, icon: <SiMysql size={80} color="#00618A" /> },
  {
    skill: "Python",
    percent: 80,
    icon: <FaPython size={80} color="#3776AB" />,
  },
  {
    skill: "C/C++",
    percent: 80,
    icon: <SiCplusplus size={80} color="#00599C" />,
  },
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
              icon={s.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
