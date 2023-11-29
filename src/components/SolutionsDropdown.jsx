import React from "react";

const SolutionsDropdown = () => {
  return (
    <div className="hidden md:block absolute max-w-[550px] bg-white w-full backdrop-blur-sm bg-opacity-90  custom-shadow-2 transition-all duration-800 ease-out top-14 rounded-lg overflow-hidden text-sm">
      <div className="flex w-full rounded-lg">
        <div className="bg-[#eaf5f4] p-6 text-[#464242] w-[50%]">
          <h1 className="text-sm text-[#2e2727] mb-5"> WHY NETLIFY?</h1>

          <ul className="underline flex flex-col gap-3">
            <li>Customers</li>
            <li>Case Studies</li>
            <li>ROI Calculator</li>
            <li>Security at Netlify</li>
            <li>Whitepaper</li>
          </ul>
        </div>
        <div className="bg-white w-full p-6">
          <h1 className="text-sm text-[#2e2727] mb-5"> USE CASES</h1>
          <ul className="flex justify-between gap-3 underline flex-col pb-5 border-b">
            <li>Company Websites</li>
            <li>E-commerce</li>
            <li>Web Apps</li>
            <li>Large Sites</li>
          </ul>
          <span className="flex justify-center items-start mt-3 w-full flex-col">
            <p className=" text-[#565656] font-light">
              Don't see your solution? We can help.
            </p>
            <p>Chat with a Netlify expert.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SolutionsDropdown;
