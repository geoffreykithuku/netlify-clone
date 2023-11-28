import React from "react";
import logo from "../assets/logo.png";
import riot_games from "../assets/riot-games.svg";
import { Slash } from "lucide-react";
import profile from "../assets/profile.jpg";
const Achievements = () => {
  return (
    <div className="mb-[100px]">
    <div
      className="text-white pt-20  px-3 sm:px-5 overflow-visible h-[155vw] sm:h-[100vw] md:h-[80vw] lg:h-[40vw] xl:h-[30vw]"
      style={{
        backgroundImage: "linear-gradient(to right, #1B215E, #233395, #2C4DE1)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="mx-auto w-fit grid grid-cols-1 sm:grid-cols-3 mb-20 gap-5">
        <span className="text-center">
          <h1 className="font-black text-3xl md:text-4xl">35M+</h1>
          <p className="text-center font-bold text-lg">
            Websites deployed on Netlify
          </p>
        </span>
        <span className="text-center">
          <h1 className="font-black text-3xl md:text-4xl">4M+</h1>
          <p className="text-center font-bold text-lg">Developers</p>
        </span>
        <span className="text-center">
          <h1 className="font-black text-3xl md:text-4xl">99.99%</h1>
          <p className="text-center font-bold text-lg">Uptime SLA</p>
        </span>
      </div>

      <div className="bg-white rounded-3xl custom-shadow  md:mx-10 lg:mx-24 w-fit md:p-10 p-5 mb-20">
        <div className="flex justify-start items-center">
          <span className="max-w-[150px] max-h-[100px] w-full h-full">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </span>
          <span>
            <Slash size={48} color="#e4e4e4" strokeWidth={1} />
          </span>
          <span className="max-w-[150px] max-h-[100px] w-full h-full ml-2">
            <img
              src={riot_games}
              alt="Riot Games"
              className="w-full h-full object-contain"
            />
          </span>
        </div>
        <p className="text-black text-xl sm:text-2xl my-5 md:leading-10 leading-8 font-medium mb-5">
          "We aspire to be the most player-focused gaming company in the world,
          and Netlify absolutely carries the same spirit of aspiring to be the
          most developer-focused technology company in the world…{" "}
          <strong className="strong">
            Ultimately, there was a sense of deep collaboration, understanding
            and meeting our business requirements, and providing extremely
            knowledgeable and highly professional solutions every single step
            along the way."
          </strong>
        </p>
        <div className="text-black text-sm flex gap-5 items-center pt-5">
          <span className="rounded-[50%] max-w-[80px]">
            <img src={profile} alt="" className="w-full rounded-[50%] h-full" />
          </span>
          <span>
            <h2 className="font-bold text-lg mb-2">Jason Rose</h2>
            
            <p>Senior Web Developer,</p>
            
            <p>Riot Games</p>
          </span>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Achievements;
