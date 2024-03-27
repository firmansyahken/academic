import React, { useState } from "react";
import { useMemo } from "react";
import { BASE_API } from "../utils/Constant";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [isZoom, setZoom] = useState(false);
  const [srcImage, setImage] = useState("");
  const perPage = 12;
  const [currentIndex, setCurrentIndex] = useState(perPage);
  const RAW_PATH =
    "https://raw.githubusercontent.com/firmansyahken/gallery/main/";

  useMemo(() => {
    fetch(`${BASE_API}/repos/firmansyahken/gallery/contents/isometric`)
      .then((r) => r.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  const handleZoom = (e) => {
    setImage(e.target.src);
    setZoom(!isZoom);
    return;
  };

  return (
    <>
      {isZoom && (
        <div
          onClick={() => setZoom(!isZoom)}
          className="fixed w-full h-screen bg-black/[.7] top-0 left-0 z-[30]"
        >
          <div className="absolute w-[90%] sm:w-[30%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img className="w-full" src={srcImage} alt="isometric" />
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-3">
        {data.slice(0, currentIndex).map((image, index) => (
          <img
            onClick={handleZoom}
            key={index}
            className="aspect-square object-cover border border-1 cursor-pointer"
            src={RAW_PATH + image.path}
            alt="isometric"
          />
        ))}
      </div>
      {data.length > currentIndex && (
        <button
          className="w-full text-md mt-6 border boder-1"
          onClick={() => setCurrentIndex(currentIndex + perPage)}
        >
          Loadmore
        </button>
      )}
    </>
  );
};

export default Gallery;
