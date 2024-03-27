import React, { useMemo, useState } from "react";
import ListItem from "../components/ListItem";
import { BASE_API } from "../utils/Constant";

const Notes = () => {
  const [data, setData] = useState([]);

  useMemo(() => {
    fetch(`${BASE_API}/repos/firmansyahken/catatan/contents/`)
      .then((r) => r.json())
      .then((response) => {
        setData(response);
    });
  }, []);

  return (
    <>
      <h1 className="text-xl font-semibold mb-6">Catatan Materi</h1>
      <ul>
        {data.map((item, index) => (
            <ListItem key={index} name={item.name}/>
        ))}
      </ul>
    </>
  );
};

export default Notes;
