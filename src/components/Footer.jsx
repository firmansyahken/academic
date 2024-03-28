import React from "react";

const Footer = () => {
  return (
    <div className="border border-t-1">
      <div className="py-12 px-4 mx-auto max-w-[1200px] flex-row sm:flex-col justify-between items-center">
        <div>
          <p className="text-sm">
            Created by ❤️{" "}
            <a className="underline" href="https://github.com/firmansyahken">
              Firmansyahken
            </a>{" "}
            2024
          </p>
          <p className="text-sm">Inspired by academicpages</p>
        </div>
        <p className="text-sm text-center sm:text-right mt-12 sm:mt-0">
          Powered by ⚛︎ React
        </p>
      </div>
    </div>
  );
};

export default Footer;
