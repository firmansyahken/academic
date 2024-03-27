import React, { useMemo, useState } from "react";
import ListItem from "../components/ListItem";
import { BASE_API } from "../utils/Constant";
import BarSkeleton from "../components/skeletons/BarSkeleton";

const Notes = () => {
  const [data, setData] = useState(null);

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
        {data
          ? data.map((item, index) => <ListItem key={index} name={item.name} />)
          : [1, 2, 3, 4, 5, 6].map((i) => (
              <BarSkeleton key={i} className="h-16 mb-4" />
            ))}
      </ul>
    </>
  );
};

export default Notes;
