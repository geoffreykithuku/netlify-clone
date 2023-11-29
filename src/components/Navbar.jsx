import React, { useState } from "react";
import { Menu, Search, X, ArrowRight, ChevronDown } from "lucide-react";
import Alert from "./Alert";
import logo from "../assets/logo.png";
import PlatformDropdown from "./PlatformDropdown";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdown(false);
    }, 200);
  };
  return (
    <nav className="bg-white flex mx-auto items-center font-semibold text-base  backdrop-blur-sm  bg-opacity-90 z-10 flex-col  w-full top-0 sticky">
      <Alert />
      <div className="px-5 flex justify-between items-center w-full lg:px-[60px] relative py-1">
        <span className="me-6">
          <img src={logo} alt="" className="w-full" />
        </span>
        <ul className="xl:flex items-start justify-start hidden gap-5 me-auto">
          <li
            className="flex items-center gap-1"
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
          >
            <p>Platform</p>
            <ChevronDown />
            {dropdown && <PlatformDropdown />}
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
        <span className="flex gap-5 ml-5 justify-center items-center">
          <Search size={18} />
          <p className="hidden xl:block">Contact</p>
          <button className="flex-shrink-0">Sign In</button>
          <button className="hidden xl:block bg-[var(--bg-primary)] text-white px-3 py-2 rounded">
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
        <div className="xl:hidden w-full absolute top-[60px] lg:px-12 bg-white pb-5 z-20">
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
