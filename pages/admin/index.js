import React from "react";
import Home from "./home/home";
import Sidebar from "./sidebar";

export default function index() {
  return (
    <>
      <style jsx global>{`
        footer {
          display: none;
        }
      `}</style>

      <div className="flex ">
        <Sidebar />
        <div className=" h-screen  w-full">
          <Home />
        </div>
      </div>
    </>
  );
}
