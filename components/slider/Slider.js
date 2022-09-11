import React from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <>
      <style jsx>{`
        .main {
          width: 100%;
        }
      `}</style>
      <div className=" h-screen flex items-center justify-center">
        <h1 className="text-8xl font-bold mb-10 text-slate-800">
          Next E-Commerce Shop
        </h1>
      </div>
    </>
  );
}
