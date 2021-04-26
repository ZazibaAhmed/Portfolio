import React from "react";
import "./ProjectCard.scss";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <div className="top">
          <h4>{project.name}</h4>
          <p>{project.description}</p>
        </div>
        <img src={project.img} alt="project" />
        <div className="bottom">
          {project.live === "" ? (
            ""
          ) : (
            <a href={project.live} rel="noopener noreferrer" target="_blank">
              view live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
