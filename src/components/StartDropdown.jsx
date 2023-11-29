import React from "react";

const StartDropdown = () => {
  return (
    <div className="hidden md:block absolute max-w-[550px] bg-white w-full backdrop-blur-sm bg-opacity-90  custom-shadow-2 transition-all duration-800 ease-out top-14 rounded-lg overflow-hidden text-sm">
      <div className="flex w-full rounded-lg">
        <div className="bg-[#eaf5f4] p-6 text-[#464242] w-[50%]">
          <h1 className="text-sm text-[#2e2727] mb-5"> WHERE TO START</h1>

          <ul className="underline flex flex-col gap-3">
            <li>Docs</li>
            <li>Templates</li>
            <li>Resources & Guides</li>
            <li>Composable Commerce 101</li>
            <li>Work with a Patner Agency</li>
          </ul>
        </div>
        <div className="bg-white w-full p-6">
          <h1 className="text-sm text-[#2e2727] mb-5"> PROJECT KICKSTARTS</h1>
          <ul className="flex gap-16 underline">
            <span className="flex flex-col gap-3">
              <li>NextJS</li>
              <li>Jamstack</li>
              <li>React</li>
              <li>Vue</li>
              <li>Svelte</li>
            </span>
            <span className="flex flex-col gap-3">
              <li>Gatsby</li>
              <li>WordPress</li>
              <li>Nuxt</li>
              <li>Sitecore</li>
                          <li>Svelte</li>
                          <li>+more</li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartDropdown;
