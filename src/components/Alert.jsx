import React, { useState } from "react";
import { X } from "lucide-react";
const Alert = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="text-white bg-[var(--bg-primary)] text-center sm:flex items-center justify-center font-semibold w-full px-10 py-[8px] text-sm hidden ">
      <p className="text-center w-[90%]">
        Introducing the Netlify Composable Web Platform - 
         <span className="underline"> Learn More!</span>
      </p>
      <span className="items-end ms-auto">
        <X size={16} strokeWidth={4} onClick={()=>setShow(!show)}/>
      </span>
    </div>
  );
};

export default Alert;
