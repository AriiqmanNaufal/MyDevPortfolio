import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaPython,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiMysql } from "react-icons/si";

const Skills: React.FC = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact className="spin-slow" /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  // Duplicate the array for seamless scrolling
  const repeatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Tech Stack</h2>
      <div className="skills-container">
        <div className="slider-container">
        <div className="slider-track">
          {repeatedSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div></div>
      </div>
    </section>
  );
};

export default Skills;
