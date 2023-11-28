import React from "react";
import twilio from "../assets/twilio.svg";
import mattel from "../assets/mattel.svg";
import riot_games from "../assets/riot-games.svg";
import google from "../assets/google.svg";
import unilever from "../assets/unilever.svg";
import peloton from "../assets/peloton.svg";
const Partners = () => {
  return (
    <div className="my-8 flex items-center justify-center flex-col gap-6 px-5">
      <h1 className="font-black text-3xl md:text-4xl text-center">Enterprises run on Netlify</h1>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mx-auto px-5 ">
        <span className=" max-h-20 h-full w-full max-w-[120px] flex items-center justify-center ">
          <img src={twilio} alt="" className="w-full h-full" />
        </span>
        <span className=" max-h-20 h-full w-full max-w-[120px] flex items-center justify-center ">
          <img src={mattel} alt="" className="w-full h-full" />
        </span>
        <span className=" max-h-20 h-full w-full max-w-[120px] flex items-center justify-center ">
          <img src={riot_games} alt="" className="w-full h-full"/>
        </span>
        <span className=" max-h-20 h-full w-full max-w-[120px] flex items-center justify-center ">
          <img src={google} alt="" className="w-full h-full" />
        </span>
        <span className=" max-h-20 h-full w-full max-w-[120px] flex items-center justify-center ">
          <img src={unilever} alt="" className="w-full h-full" />
        </span>
        <span className=" max-h-20 h-full w-full max-w-[120px] flex items-center justify-center ">
          <img src={peloton} alt="" className="w-full h-full" />
        </span>
      </div>
    </div>
  );
};

export default Partners;
