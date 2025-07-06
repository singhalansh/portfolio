import React from "react";
import Left from "./Left";
import Right from "./Right";

function Hero() {
    return (
        <div className="z-[200] h-fit lg:min-h-[100vh] flex flex-col lg:flex-row relative overflow-hidden">
            <Left />
            <Right />
        </div>
    );
}

export default Hero;
