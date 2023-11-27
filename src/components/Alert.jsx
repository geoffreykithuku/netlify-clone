import React, { useState } from "react";
import { X } from "lucide-react";
const Alert = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="text-white bg-[rgb(46,81,237)] text-center sm:flex items-center justify-center font-semibold w-full px-10 py-[8px] text-base hidden ">
      <p className="text-center w-[90%]">
        Introducing the Netlify Composable Web Platform -
        <span className="underline">Learn More!</span>
      </p>
      <span className="items-end ms-auto">
        <X size={16} strokeWidth={4} onClick={()=>setShow(!show)}/>
      </span>
    </div>
  );
};

export default Alert;
