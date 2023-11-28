import React from "react";
import { ArrowRight, Boxes, Fuel, LineChart, Network, PersonStanding, Rocket, Siren, Sparkles, Swords } from "lucide-react";
import product_card from "../assets/product-card.svg";
import product_card_2 from "../assets/product-card-2.svg";
import product_card_3 from "../assets/product-card-3.svg";


const Solutions = () => {
  return (
    <div className="flex justify-center items-center mb-6 w-full flex-col px-5 md:px-20">
      <div className="grid grid-cols-3 justify-center items-center">
        <div className="items-center w-full flex justify-center flex-nowrap ">
          <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-[#1527b2] to-[#3D65C1] font-extrabold md:text-4xl text-2xl">
            3 Solutions
          </h1>
        </div>
        <div className="items-center mx-auto w-[50%] sm:w-full flex justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="87"
            height="96"
            viewBox="0 0 87 96"
            fill="none"
            ariahidden="true"
          >
            <path
              stroke="url(#a)"
              stroke-width=".649"
              d="m70.918 57.691-23.493-15.6-.873-.577-.043-.029-.05-.014-.966-.265-.042-.012h-4.754l-.043.011-.965.266-.05.014-.043.029-.873.578-23.493 15.6-.871.579-.059.039-.037.06-.4.64-.049.08V62.373l.05.079.4.64.037.06.058.04.87.579 23.494 15.6.873.578.043.028.05.014.965.265.043.012h4.754l.042-.012.966-.265.05-.014.043-.028.872-.579 23.494-15.6.87-.579.06-.039.036-.06.4-.64.05-.079v-3.285l-.05-.079-.4-.64-.037-.06-.058-.039-.87-.58Z"
            ></path>
            <path
              stroke="url(#b)"
              stroke-width=".649"
              d="m70.918 44.729-23.493-15.6-.873-.578-.043-.029-.05-.014-.966-.265-.042-.012h-4.754l-.043.012-.965.265-.05.014-.043.029-.873.578-23.493 15.6-.871.58-.059.038-.037.06-.4.64-.049.08V49.41l.05.079.4.64.037.06.058.04.87.579 23.494 15.6.873.578.043.028.05.014.965.266.043.011h4.754l.042-.011.966-.266.05-.014.043-.028.872-.578 23.494-15.6.87-.58.06-.039.036-.06.4-.64.05-.079v-3.285l-.05-.079-.4-.64-.037-.06-.058-.039-.87-.58Z"
            ></path>
            <path
              stroke="url(#c)"
              stroke-width=".649"
              d="m70.918 32.691-23.493-15.6-.873-.577-.043-.029-.05-.014-.966-.265-.042-.012h-4.754l-.043.012-.965.265-.05.014-.043.029-.873.578-23.493 15.6-.871.579-.059.039-.037.06-.4.64-.049.08V37.373l.05.079.4.64.037.06.058.04.87.579 23.494 15.6.873.578.043.028.05.014.965.266.043.011h4.754l.042-.011.966-.266.05-.014.043-.029.872-.578 23.494-15.6.87-.579.06-.039.036-.06.4-.64.05-.079v-3.285l-.05-.079-.4-.64-.037-.06-.058-.039-.87-.58Z"
            ></path>
            <path
              stroke="url(#d)"
              stroke-width="1.299"
              d="M36.336 3.559a12.338 12.338 0 0 1 13.94 0l30.068 20.586c3.36 2.3 5.368 6.11 5.368 10.18v27.35c0 4.07-2.009 7.88-5.368 10.18L50.276 92.441a12.338 12.338 0 0 1-13.94 0L6.267 71.855A12.338 12.338 0 0 1 .9 61.675v-27.35c0-4.07 2.009-7.88 5.368-10.18L36.336 3.559Z"
            ></path>
            <defs>
              <linearGradient
                id="a"
                x1="7.056"
                x2="87.563"
                y1="76.02"
                y2="50.284"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#112CAF"></stop>
                <stop offset="1" stop-color="#5CEBDF"></stop>
              </linearGradient>
              <linearGradient
                id="b"
                x1="7.056"
                x2="87.563"
                y1="63.057"
                y2="37.321"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#112CAF"></stop>
                <stop offset="1" stop-color="#5CEBDF"></stop>
              </linearGradient>
              <linearGradient
                id="c"
                x1="7.056"
                x2="87.563"
                y1="51.02"
                y2="25.284"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#112CAF"></stop>
                <stop offset="1" stop-color="#5CEBDF"></stop>
              </linearGradient>
              <linearGradient
                id="d"
                x1="-10.29"
                x2="117.479"
                y1="87.787"
                y2="64.433"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#112CAF"></stop>
                <stop offset="1" stop-color="#5CEBDF"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="items-center w-full flex justify-center">
          <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-[#2866BE] to-[#2866BE] font-extrabold md:text-4xl text-2xl">
            1 Platform
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#E9F7FF] rounded-3xl mx-auto  mt-8 items-center justify-center p-3 gap-3">
        <div className="flex flex-col pt-5 rounded-2xl bg-white h-full ">
          <div className=" px-5">
            <p className="text-sm">NETLIFY CONNECT</p>
            <h1 className="text-[28px] mb-5 font-black">Unify all content</h1>
            <p className="text-base mb-5">
              Netlify Connect is a data unification layer that gives web teams
              the freedom to create world-class websites, online stores, and
              applications with data from any existing or new content source.
            </p>
            <ul className="text-sm flex flex-col gap-4 mb-5">
              <li className="flex gap-5 items-center justify-start">
                <span className="p-2 rounded-[50%] bg-[#e9f7ff]">
                  <Boxes size={16} color="#8f72d5" strokeWidth={2} />
                </span>
                <p>Unify your content sources</p>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <span className="p-2 rounded-[50%] bg-[#e9f7ff]">
                  <Sparkles size={16} color="#8f72d5" strokeWidth={2} />
                </span>

                <p>Modernize your web architecture</p>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <span className="p-2 rounded-[50%] bg-[#e9f7ff]">
                  <PersonStanding size={16} color="#8f72d5" strokeWidth={2} />
                </span>
                <p>Unlock your web performance</p>
              </li>
            </ul>
            <span className="flex underline font-bold gap-1 mb-5 ">
              <a href="#">Learn More</a>
              <ArrowRight size={18} color="#8f72d5" strokeWidth={1} />
            </span>
          </div>
          <div className="w-full mx-auto ">
            <img
              src={product_card}
              alt=""
              className="w-full object-cover h-full"
            />
          </div>
        </div>
        <div className="flex flex-col  rounded-2xl bg-white h-full pt-5 ">
          <div className=" mx-5">
            <p className="text-sm">NETLIFY CORE</p>
            <h1 className="text-[28px] mb-5 font-black">Deploy faster</h1>
            <p className="text-base mb-5">
              Netlify Core is a frontend cloud solution for developers to build
              and deploy future-proof digital solutions with modern, composable
              tooling that works with all modern frameworks.
            </p>
            <ul className="text-sm flex flex-col gap-4 mb-5">
              <li className="flex gap-5 items-center justify-start">
                <span className="p-2 rounded-[50%] bg-[#e9f7ff]">
                  <Rocket size={16} color="#8f72d5" strokeWidth={2} />
                </span>

                <p>Build digital experiences with greater speed</p>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <span className="p-2 rounded-[50%] bg-[#e9f7ff]">
                  <Network size={16} color="#8f72d5" strokeWidth={2} />
                </span>
                <p>Preview and collaborate with a single workflow</p>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <span className="p-2 rounded-[50%] bg-[#e9f7ff]">
                  <LineChart size={16} color="#8f72d5" strokeWidth={2} />
                </span>
                <p>Deploy websites and applications at scale</p>
              </li>
            </ul>
            <span className="flex underline font-bold gap-1 mb-5 ">
              <a href="#">Learn More</a>
              <ArrowRight size={18} color="#8f72d5" strokeWidth={1} />
            </span>
          </div>
          <div className="w-full mx-auto ">
            <img
              src={product_card_2}
              alt=""
              className="w-full object-cover h-full"
            />
          </div>
        </div>
        <div className="flex flex-col  rounded-2xl bg-white h-full pt-5 ">
          <div className=" mx-5">
            <p className="text-sm">NETLIFY CREATE</p>
            <h1 className="text-[28px] mb-5 font-black">
              Click, edit, publish
            </h1>
            <p className="text-base mb-5">
              Netlify Create gives digital teams the freedom to autonomously
              perform content and website updates faster than ever before with
              an intuitive visual editor.
            </p>
            <ul className="text-sm flex flex-col gap-4 mb-5">
              <li className="flex gap-5 items-center justify-start">
                <span className="p-2 rounded-[50%] bg-[#e9f7ff]">
                  <Fuel size={16} color="#8f72d5" strokeWidth={2} />
                </span>

                <p>Unblock your team</p>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <span className="p-2 rounded-[50%] bg-[#e9f7ff]">
                  <Swords size={16} color="#8f72d5" strokeWidth={2} />
                </span>
                <p>Eliminate marketer - developer dependency</p>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <span className="p-2 rounded-[50%] bg-[#e9f7ff]">
                  <Siren size={16} color="#8f72d5" strokeWidth={2} />
                </span>
                <p>Multiply web team productivity</p>
              </li>
            </ul>
            <span className="flex underline font-bold gap-1 mb-5 ">
              <a href="#">Learn More</a>
              <ArrowRight size={18} color="#8f72d5" strokeWidth={1} />
            </span>
          </div>
          <div className="w-full mx-auto mt-5 ">
            <img
              src={product_card_3}
              alt=""
              className="w-full object-cover h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
