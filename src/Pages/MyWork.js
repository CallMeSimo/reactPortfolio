import { useEffect, useState } from "react";

export default function MyWork() {
  const [githubUser, setGithubUser] = useState([]);

  const fetchGithubUser = async () => {
    const api = await fetch("https://api.github.com/users/CallMeSimo");
    const jsonApi = await api.json();
    setGithubUser(jsonApi);
    console.log(jsonApi);
  };

  useEffect(() => {
    fetchGithubUser();
  }, []);

  return (
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
          <p>
            <span className="">Description:</span>
            <br />
            {githubUser.bio}
          </p>
          <div className="githubStats">
            <span>Created at: {githubUser.created_at}</span>
            <span>Followers: {githubUser.followers}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
