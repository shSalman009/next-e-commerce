import Image from "next/image";
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
            <div className="main my-2">
                <Image
                    width={100}
                    height={60}
                    src="/bg.jpg"
                    layout="responsive"
                />
            </div>
        </>
    );
}
