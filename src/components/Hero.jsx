import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center relative">
      <div
        className="w-full h-auto relative overflow-hidden pb-24"
        style={{
          backgroundImage: "linear-gradient(to bottom, #161B39, #3655E2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="absolute z-0 object-center">
          <img
            src="https://www.netlify.com/images/home/composable-platform-stack-shells.svg"
            alt="Shells"
            className="w-full h-full object-cover z-0 opacity-40"
          />
        </div>

        <div className="flex flex-col justify-center backdrop-blur-0 items-center py-24 px-5 text-[#f6f6f7] z-10 text-center mb-20">
          <h1 className="font-black text-3xl md:text-6xl mb-4">
            Connect Everything.
          </h1>
          <h1 className="font-black text-3xl md:text-6xl">Build Anything.</h1>
          <p className="w-full max-w-[730px] text-lg md:text-xl mt-8 mb-6">
            Netlify is the modern development platform for Enterprises to
            realize the speed, agility and performance of a scalable, composable
            web architecture.
          </p>
          <span className="flex flex-wrap gap-5 items-center justify-center mb-20">
            <button className="bg-[#ccc1c1] font-bold hover:bg-[#cee1c1] text-[#363535] px-5 py-2 rounded-md">
              Explore Platform
            </button>
            <button className="border-[#ccc1c1] border font-bold text-white px-5 py-2 rounded-md">
              Request Demo
            </button>
          </span>
        </div>
      </div>
      <div className="bg-[#1F3397] w-full max-w-[800px] rounded-2xl h-[400px] border border-[#ccc1c1] absolute text-white mx-auto bottom-[-200px] flex justify-center items-center overflow-hidden">
        <div className="relative z-10 text-white">
          <img
            src="https://www.netlify.com/images/home/composable-platform-stack-shells.svg"
            alt="Shells"
            className="w-full object-contain z-10"
          />
          <p className="z-20">Marketing</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
