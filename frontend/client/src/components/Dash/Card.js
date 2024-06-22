import React, { useState } from "react";
import "./Dash.css";

const Card = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className={`card-details ${isExpanded ? "show" : ""}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Card;
