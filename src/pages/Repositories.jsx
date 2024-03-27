import React, { useMemo, useState } from "react";
import RepoItem from "../components/RepoItem";
import { BASE_API } from "../utils/Constant";
import BarSkeleton from "../components/skeletons/BarSkeleton";

const Repositories = () => {
  const [data, setData] = useState(null);

  useMemo(() => {
    fetch(`${BASE_API}/users/firmansyahken/repos`)
      .then((r) => r.json())
      .then((response) => {
        setData(response);
      });
  }, []);
  return (
    <>
      <ul>
        {data
          ? data.map((repo) => (
              <RepoItem
                key={repo.id}
                name={repo.full_name}
                description={repo.description}
                created={repo.created_at}
                lang={repo.language}
                homepage={repo.homepage}
                link={repo.html_url}
              />
            ))
          : [1, 2, 3, 4, 5, 6].map((i) => <BarSkeleton key={i} className="h-24"/>)}
      </ul>
    </>
  );
};

export default Repositories;
