import React, { useEffect, useState } from "react";
const GitUserCard = () => {
  const [traindingRepo, setTraindingRepo] = useState([]);
  const [loadingLogo, setLoadingLogo] = useState(false);
  const getTrendingRepos = async () => {
    const trandingRepo = await fetch(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories"
    );
    const trandingRepoJson = await trandingRepo.json();
    if (trandingRepo) {
      setLoadingLogo(true);
      setTraindingRepo(trandingRepoJson.items);
    } else {
      setLoadingLogo(false);
    }
    // const trandingRepos = await fetch(
    //   `https://api.github.com/users/amanshuklaa`
    // );
    // const trandingReposJson = await trandingRepos.json();
    // console.log(trandingReposJson);
    // setTraindingRepo(trandingReposJson);
    // console.log("my way is my way");
    // console.log(traindingRepo);
  };
  useEffect(() => {
    getTrendingRepos();
  }, []);
  return (
    <>
      {loadingLogo ? (
        <div class="ui grid link cards">
          {traindingRepo.map((data) => {
            return (
              <a
                key={data.id}
                href={data.owner.html_url}
                target="_blank"
                style={{ padding: 20 }}
                className="repo text-center"
              >
                <div class="card" key={data.id}>
                  <div className="image">
                    <img className="imgLogo" src={data.owner.avatar_url} />
                  </div>
                  <div class="content">
                    <div class="header">{data.owner.login}</div>
                    <div class="meta">
                      <a>{data.owner.type}</a>
                    </div>
                    <div class="description">{data.description}</div>
                  </div>

                  <span>
                    <i class="fork icon"></i>
                    {data.forks}
                  </span>
                  <br />
                  <span>
                    <i class="star icon"></i>
                    {data.stargazers_count}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <div class="ui segment">
          <div class="ui active inverted dimmer">
            <div class="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      )}
    </>
  );
};

export default GitUserCard;
