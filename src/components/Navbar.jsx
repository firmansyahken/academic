import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navs = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Notes",
      path: "/note",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Repositories",
      path: "/repository",
    },
  ];

  return (
    <>
      <div className="hidden sm:block top-0 sticky w-full bg-white z-[10] border border-b-1 ">
        <div className="px-4 py-6 flex justify-between items-center container mx-auto max-w-[1200px]">
          <h1 className="text-lg font-semibold">Firmansyahken</h1>
          <ul className="space-x-12 text-sm text-gray-500">
            {navs.map((nav, index) => (
              <Link
                className={`${
                  currentPath == nav.path && "font-semibold text-md text-black"
                }`}
                to={nav.path}
                key={index}
              >
                {nav.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="block sm:hidden top-0 sticky w-full bg-white z-[10] border border-b-1 ">
        <div className="px-4 py-6 flex justify-between items-center container mx-auto max-w-[1200px]">
          <h1 className="text-lg font-semibold">Firmansyahken</h1>
          <div
            onClick={() => setActive(!active)}
            className={`hamburger ${active && "active"} cursor-pointer`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div
        className={`${
          active ? "right-[0] mr-2" : "right-[-100%]"
        } z-[10] transition-all fixed sm:hidden bg-white px-8 py-6 border border-1`}
      >
        <ul className="space-y-4 text-sm text-gray-500 grid">
          {navs.map((nav, index) => (
            <Link
              onClick={() => setActive(!active)}
              className={`${
                currentPath == nav.path && "font-semibold text-md text-black"
              }`}
              to={nav.path}
              key={index}
            >
              {nav.name}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
