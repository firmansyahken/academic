import React, { useMemo, useState } from "react";
import RepoItem from "../components/RepoItem";
import { BASE_API } from "../utils/Constant";

const Repositories = () => {
  const [data, setData] = useState([]);

  useMemo(() => {
    fetch(
      `${BASE_API}/users/firmansyahken/repos`
    )
      .then((r) => r.json())
      .then((response) => {
        setData(response);
        console.log(response);
      });
  }, []);
  return (
    <>
      <ul>
        {data.map(repo => (
            <RepoItem 
                key={repo.id}
                name={repo.full_name}
                description={repo.description}
                created={repo.created_at}
                lang={repo.language}
                homepage={repo.homepage}
                link={repo.html_url}
            />
        ))}
      </ul>
    </>
  );
};

export default Repositories;
