import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-[1200px] pb-12 sm:pb-16 flex flex-col sm:flex-row justify-between">
        <div className="w-full sm:w-[20%]">
          <Sidebar />
        </div>
        <div className="w-full sm:w-[80%] px-2 sm:px-4 py-6">
          <div className="px-4 sm:px-6 py-8 border border-1">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
