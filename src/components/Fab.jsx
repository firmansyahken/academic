import React, { useMemo, useState } from "react";

const Fab = (props) => {
  const [mode, setMode] = useState(false);

  useMemo(() => {
    mode
      ? document.body.setAttribute("data-mode", "reading")
      : document.body.removeAttribute("data-mode");
  }, [mode]);

  return (
    <>
      <ul className="grid fixed right-[0] top-[80%] sm:top-[15%]">
        <button
          onClick={() => (window.location.href = `${props.repo}`)}
          className="mx-auto bg-white border border-1 px-2 py-2"
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6716 6.763L5.58013 15.8544L5.41376 18.8492L8.40856 18.6829L17.5 9.59142M14.6716 6.763L16.0204 5.41421C16.8014 4.63316 18.0677 4.63316 18.8488 5.41421V5.41421C19.6298 6.19526 19.6298 7.46159 18.8488 8.24264V8.24264L17.5 9.59142M14.6716 6.763L17.5 9.59142"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => setMode(!mode)}
          className={`mx-auto ${
            mode ? "bg-black" : "bg-white"
          } border border-1 px-2 py-2`}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="-1 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3H8.4C9.35478 3 10.2705 3.37928 10.9456 4.05442C11.6207 4.72955 12 5.64522 12 6.6V21C12 20.2839 11.7155 19.5972 11.2092 19.0908C10.7028 18.5845 10.0161 18.3 9.3 18.3H3V3Z"
              stroke={mode ? "#ffffff" : "#000000"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 3H15.6C14.6452 3 13.7295 3.37928 13.0544 4.05442C12.3793 4.72955 12 5.64522 12 6.6V20.7C12 19.9839 12.2845 19.2972 12.7908 18.7908C13.2972 18.2845 13.9839 18 14.7 18H21V3Z"
              stroke={mode ? "#ffffff" : "#000000"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </ul>
    </>
  );
};

export default Fab;
