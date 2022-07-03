import React from "react";

export default function ProjectCard({ imgSrc, alt, projectTitle, url }) {
  return (
    <div
      className="project"
      onClick={() => {
        window.location.href = `${url}`;
      }}
    >
      <img onError={"https://via.placeholder.com/400"} src={imgSrc} alt={alt} />
      <div className="projectOverlay">
        <h3>{projectTitle}</h3>
      </div>
    </div>
  );
}
