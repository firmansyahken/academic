import React from "react";
import Background from "../assets/images/notfoundbg.jpg";

const NotFound = () => {
  return (
    <>
      <div className="notfound" />
      <div className="notfound_content">
        <h1 className="px-6 text-6xl sm:text-7xl font-semibold text-white">
          404 Sumimasen
        </h1>
      </div>
      <div className="curve-top" />
      <div className="curve-bottom" />
    </>
  );
};

export default NotFound;
