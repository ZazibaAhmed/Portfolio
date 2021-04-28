import React from "react";
import "./Skills.scss";
import { Element } from "react-scroll";

import SkillCard from "./components/SkillCard";

import html from "../../assets/skills/html5.svg";
import css from "../../assets/skills/css.svg";
import sass from "../../assets/skills/sass.svg";
import bootstrap from "../../assets/skills/bootstrap.svg";
import js from "../../assets/skills/js.svg";
import react from "../../assets/skills/react.svg";
import angular from "../../assets/skills/angular.svg";
import mongodb from "../../assets/skills/mongodb.svg";
import express from "../../assets/skills/express.svg";
import nodejs from "../../assets/skills/nodejs.svg";
import vscode from "../../assets/skills/vscode.svg";
import postgresql from "../../assets/skills/postgresql.svg";
import git from "../../assets/skills/git.svg";

const Skills = () => {
  return (
    <Element name="skills">
      <div className="skills-container">
        <h1 className="title">Skills</h1>
        <hr />
        <div className="grid-container">
          <div className="grid">
            <SkillCard img={html} />
            <SkillCard img={css} />
            <SkillCard img={sass} />
            <SkillCard img={bootstrap} />
            <SkillCard img={react} />
            <SkillCard img={angular} />
            <SkillCard img={js} />
            <SkillCard img={nodejs} />
            <SkillCard img={mongodb} />
            <SkillCard img={express} />
            <SkillCard img={postgresql} />
            <SkillCard img={git} />
            <SkillCard img={vscode} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
