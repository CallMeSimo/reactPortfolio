import { useEffect, useState } from "react";
import AnimatedPage from "../Components/AnimationHandler";

import ProjectCard from "../Components/ProjectCard.jsx";
import projectJson from "../projects.json";

export default function MyWork() {
  const [githubUser, setGithubUser] = useState([]);
  const [projectsData, setProjectsData] = useState([]);

  const fetchGithubUser = async () => {
    const api = await fetch("https://api.github.com/users/CallMeSimo");
    const jsonApi = await api.json();
    setGithubUser(jsonApi);
    console.log(jsonApi);
  };

  useEffect(() => {
    fetchGithubUser();
  }, []);

  useEffect(() => {
    setProjectsData(projectJson);
  }, []);

  // const images = document.querySelectorAll("img");

  // images.forEach((image) => {
  //   image.addEventListener("error", function handelImageError() {
  //     const imageDefault = "https://via.placeholder.com/400";
  //     image.src = { imageDefault };
  //   });
  // });

  return (
    <AnimatedPage>
      <div className="contentContainer">
        <div className="githubProfile">
          <div
            className="githubHeader"
            onClick={() => {
              window.location.href = `${githubUser.html_url}`;
            }}
          >
            <img src={githubUser.avatar_url} />
            <h2>
              Simo
              <br />
              CallMeSimo
            </h2>
          </div>
          <div className="githubProfileInfo">
            <span className="subTitle">Description:</span>
            <p>{githubUser.bio}</p>
            <div className="githubStats">
              <span>Created at: {githubUser.created_at}</span>
              <span>Followers: {githubUser.followers}</span>
            </div>
          </div>
        </div>
        <div className="projects">
          {projectsData.map((i) => (
            <ProjectCard
              imgSrc={i.imgSrc}
              caption={i.alt}
              projectTitle={i.title}
              url={i.url}
            />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}
