import React from 'react'

const CTA = () => {
  return (
    <div className="relative top-[200px] md:top-[450px] xl:top-[200px] py-20">
      <div className='mt-10 flex flex-col items-center justify-center '>
        <h1 className='text-center font-black  text-3xl  md:text-5xl mb-3'>Ready to try Netlify?</h1>
        <button className="bg-[var(--bg-primary)] text-white font-bold text-lg px-5 py-2 rounded-md mt-10">
          Request demo
        </button>
      </div>
    </div>
  );
}

export default CTA