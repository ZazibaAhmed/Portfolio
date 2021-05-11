import React from "react";
import "./Projects.scss";
import { Element } from "react-scroll";

import eSececure from "../../assets/projects/eSecure.png";
import proshop from "../../assets/projects/proshop.png";
import secureSociety from "../../assets/projects/societyManagement.png";
import ms1 from "../../assets/projects/medisquare1.png";
import xmart from "../../assets/projects/xmart1.png";

import { ProjectCard } from "./components/ProjectCard";

const projects = [
  {
    name: "eSecureSoft Technologies Ltd",
    description:
      "Main website for eSecureSoft Technologies Ltd built using React & React-Bootstrap",
    img: eSececure,
    live: "http://esecuresoftbd.com/",
    code: "",
  },
  {
    name: "Xmart",
    description:
      "Multi-vendor E-commerce site built using Angular,Angular Material & Django",
    img: xmart,
    live: "http://xmart.esecuresoft.com.bd:4200/",
    code: "",
  },
  {
    name: "Secure Soceity",
    description:
      "A society managemnet system using React, Redux, Material-UI & Django",
    img: secureSociety,
    live: "",
    code: "",
  },
  {
    name: "MediSquare Health Ltd",
    description:
      "a platform for rpg document using HTML, CSS, Bootstrap and Vanilla JavaScript",
    img: ms1,
    live: "",
    code: "",
  },
  {
    name: "Pro Shop",
    description:
      "An E-commerce platform with React, Redux, Node, Express & MongoDB",
    img: proshop,
    live: "https://pro-shop-123.herokuapp.com/",
    code: "https://github.com/ZazibaAhmed/E-commerce-MERN",
  },
];

const Projects = () => {
  return (
    <Element name="projects">
      <div className="projects-container">
        <h1 className="title">Projects</h1>
        <hr />
        <div className="grid-container">
          <div className="grid">
            {projects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
