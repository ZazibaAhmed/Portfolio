import React from "react";
import "./Skills.scss";

import SkillCard from "./components/SkillCard";

const skills = [
  {
    name: "eSecureSoft Technologies Ltd",
    description:
      "Main website for eSecureSoft Technologies Ltd built using React",
    img: "",
    live: "http://esecuresoftbd.com/",
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="title">Skills</h1>
      <hr />
      <div className="grid-container">
        <SkillCard />
      </div>
    </div>
  );
};

export default Skills;
