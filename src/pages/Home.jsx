import React, { useMemo, useState } from "react";
import { marked } from "marked";
import { BASE_API } from "../utils/Constant";

const Home = () => {
  const [data, setData] = useState("");

  useMemo(() => {
    fetch(
      `${BASE_API}/repos/firmansyahken/firmansyahken/contents/README.md?ref=main`
    )
      .then((r) => r.json())
      .then((response) => {
        setData(atob(response.content));
      });
  }, []);

  return (
    <>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: marked.parse(data) }}
      ></div>
    </>
  );
};

export default Home;
