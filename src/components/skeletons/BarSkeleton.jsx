import React from "react";

const BarSkeleton = (props) => {
  return (
    <>
      <div className={`${props.className} w-full bg-slate-200 animate-pulse`}></div>
    </>
  );
};

export default BarSkeleton;
