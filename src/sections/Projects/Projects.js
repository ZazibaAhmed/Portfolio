import React from "react";
import "./Projects.scss";

import eSececure from "../../assets/projects/eSecure.png";
import proshop from "../../assets/projects/proshop.png";

import { ProjectCard } from "./components/ProjectCard";

const projects = [
  {
    name: "eSecureSoft Technologies Ltd",
    description:
      "Main website for eSecureSoft Technologies Ltd built using React",
    img: eSececure,
    live: "http://esecuresoftbd.com/",
  },
  {
    name: "Xmart",
    description:
      "Multi-vendor E-commerce site built using Angular and Angular Material",
    img: eSececure,
    live: "",
  },
  {
    name: "Secure Soceity",
    description: "a platform for rpg built using React, Redux, Material-UI",
    img: proshop,
    live: "",
  },
  {
    name: "MediSquare Health Ltd",
    description:
      "a platform for rpg document using HTML, CSS, Bootstrap and Vanilla JavaScript",
    img: eSececure,
    live: "",
  },
  {
    name: "Pro Shop",
    description: "E-commerce site built using MERN",
    img: proshop,
    live: "https://pro-shop-123.herokuapp.com/",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="title">Projects</h1>
      <hr />
      <div className="grid-container">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
