import React, { useState } from "react";
import { Menu, Search, X, ArrowRight, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [show, setShow] = useState(true);

  return (
    <nav className="bg-white flex mx-auto py-[18px] items-center font-semibold text-lg">
      <div className="mx-5 flex justify-between items-center w-full lg:mx-12 relative">
        <p>Logo</p>
        <ul className="xl:flex items-start justify-start xl:gap-8 hidden gap-6">
          <li className="flex items-center gap-1">
            <p>Platform</p>
            <ChevronDown />
          </li>
          <li className="flex items-center gap-1">
            <p>Solutions</p>
            <ChevronDown />
          </li>
          <li>Integrations</li>
          <li className="flex items-center gap-1">
            <p>Start Building</p>
            <ChevronDown />
          </li>
          <li>Docs</li>
          <li>Pricing</li>
        </ul>
        <span className="flex lg:gap-6 gap-5 ml-5 justify-center items-center">
          <Search size={18} />
          <p className="hidden xl:block">Contact</p>
          <button>Sign In</button>
          <button className="hidden xl:block bg-[var(--bg-primary)] text-white px-3 py-1 rounded">
            Sign Up
          </button>
          <span className="xl:hidden">
            {show ? (
              <X size={18} strokeWidth={4} onClick={() => setShow(!show)} />
            ) : (
              <Menu size={18} strokeWidth={4} onClick={() => setShow(!show)} />
            )}
          </span>
        </span>
      </div>
      {/* mobile menu */}
      {show && (
        <div className="xl:hidden w-full absolute top-20 lg:px-12">
          <ul className="flex flex-col items-center justify-center  w-full px-5 ">
            <li className="flex justify-between w-full my-2 bg-[#e4dddd] py-2 px-2 rounded-md">
              <p>Platform</p>
              <ArrowRight />
            </li>
            <li className="flex justify-between w-full my-2 bg-[#e4dddd] py-2 px-2 rounded-md">
              <p>Solutions</p>
              <ArrowRight />
            </li>
            <li className="flex justify-between w-full my-2 bg-[#e4dddd] py-2 px-2 rounded-md">
              <p>Integrations</p>
              <ArrowRight />
            </li>
            <li className="flex justify-between w-full my-2 bg-[#e4dddd] py-2 px-2 rounded-md">
              <p>Start Building</p>
              <ArrowRight />
            </li>
            <li className="flex justify-between w-full my-2 bg-[#e4dddd] py-2 px-2 rounded-md">
              <p>Docs</p>
              <ArrowRight />
            </li>
            <li className="flex justify-between w-full my-2 bg-[#e4dddd] py-2 px-2 rounded-md">
              <p>Pricing</p>
              <ArrowRight />
            </li>
            <li className="flex justify-between w-full my-2 bg-[#e4dddd] py-2 px-2 rounded-md">
              <p>Contact</p>
              <ArrowRight />
            </li>

            <button className="bg-[var(--bg-primary)] text-white w-full py-2 rounded-md">
              Sign Up
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
