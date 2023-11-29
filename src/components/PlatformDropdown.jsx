import React from "react";
import platform from "../assets/platform.png";
const PlatformDropdown = () => {
  return (
    <div className="hidden md:block absolute max-w-[750px] bg-white w-full backdrop-blur-sm bg-opacity-90  custom-shadow-2 transition-all duration-800 ease-out top-14 rounded-lg overflow-hidden">
      <div className="flex w-full rounded-lg">
        <div className="bg-[#eaf5f4] p-6 text-[#3c3c3c] w-full">
          <h1 className="text-sm text-[#2e2727] mb-5"> THE NETLIFY PLATFORM</h1>
          <p className=" mb-5 text-[#3c3c3c]">
            <strong>Instantly build and deploy </strong> your sites to our
            global network from Git. Custom domains, https, deploy previews,
            rollbacks and much more.
          </p>
          <ul className="underline">
            <li>Explore the Platform</li>
            <li>Netlify Conenct</li>
            <li>Netlify Core</li>
            <li>Netlify Create</li>
          </ul>
        </div>
        <div className="bg-white w-full p-6">
          <h1 className="text-sm text-[#2e2727] mb-5"> KEY FEATURES</h1>
          <ul className="flex justify-between gap-8 text-sm underline ">
            <span className="flex flex-col gap-4 w-full">
              <li>Enterprise team Management</li>
              <li>SDK</li>
              <li>Edge Funtions</li>
              <li>Deploy Previews</li>
              <li>Forms</li>
            </span>
            <span className="flex flex-col gap-4 w-full">
              <li>Identity</li>
              <li>Security</li>
              <li>Analytics</li>
              <li>Split Testing</li>
              <li>Integration</li>
              <li>Changelog</li>
            </span>
          </ul>
        </div>
      </div>
      <div className="w-full bg-white flex h-[50px]">
        <span className="w-full flex justify-between items-center px-5 text-sm">
          <p className="text-[#343434]">ECOSYSTEM</p>
          <p className="underline">Tech Partners</p>
          <p className="underline">Agency Partners</p>
        </span>
        <span className="w-full">
          <img src={platform} alt="" className="w-full h-full object-cover " />
        </span>
      </div>
    </div>
  );
};

export default PlatformDropdown;
