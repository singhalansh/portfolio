import React from "react";
import meimg from "../assets/me.png";

function Right() {
    return (
        <div className="w-1/2 h-screen overflow-visible relative bg-[#f8f8f8]">
            <img
                src={meimg}
                alt="ansh"
                className="absolute right-50 bottom-0 object-contain grayscale contrast-125 brightness-105 fade-in"
            />
        </div>
    );
}

export default Right;
