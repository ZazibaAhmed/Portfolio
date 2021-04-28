import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ img }) => {
  return (
    <div className="skill-card-container">
      <div className="skill-card">
        <img src={img} alt="skill" />
      </div>
    </div>
  );
};

export default SkillCard;
