import React from "react";
import LinkIcon from "../assets/icons/link.svg";
import { BADGES } from "../utils/Constant";

const RepoItem = (props) => {
  return (
    <>
      <div className="hover:bg-gray-100 px-4 py-6 border border-1">
        <div className="flex justify-between">
          <h2
            onClick={() => (window.location.href = `${props.link}`)}
            className="text-md cursor-pointer hover:underline font-semibold"
          >
            {props.name}
          </h2>
          {props.homepage ? (
            <img
              onClick={() => (window.location.href = `${props.homepage}`)}
              className="w-[24px] cursor-pointer"
              src={LinkIcon}
              alt="icon"
            />
          ) : (
            <span></span>
          )}
        </div>
        <p className="w-[80%] text-sm text-gray-500">{props.description}</p>
        <div className="flex justify-between items-center mt-4">
          {props.lang ? (
            <span
              className={`${
                BADGES[props.lang]
                  ? BADGES[props.lang]
                  : "bg-slate-200 text-black"
              } py-2 px-4 text-xs`}
            >
              {props.lang}
            </span>
          ) : (
            <span />
          )}
          <small className="text-gray-500">{props.created}</small>
        </div>
      </div>
    </>
  );
};

export default RepoItem;
