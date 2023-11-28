import React from "react";

const CTA = () => {
  return (
    <div className="my-20 md:top-0 lg:top-[150px] xl:top-[100px] sm:top-0 relative flex flex-col items-center justify-center">
      <h1 className="text-center font-black text-3xl md:text-5xl mb-3 mt-20">
        Ready to try Netlify?
      </h1>
      <button className="bg-[var(--bg-primary)] text-white font-bold text-lg px-5 py-2 rounded-md mt-5 md:mt-10">
        Request demo
      </button>
    </div>
  );
};

export default CTA;
