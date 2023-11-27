import React from 'react'

const About = () => {
  return (
    <div className="mt-[250px] flex justify-center items-center text-center flex-col gap-8 mb-20">
      <h1 className='font-black text-5xl mt-3'>Netlify Composable Web Platform</h1>
      <p className='text-lg max-w-[650px]'>
        Streamlined orchestration, simplified and unified workflows, and
        real-time updates across infrastructure, workflows, websites and teams —
        all supported by Enterprise-grade security, services, and a world-class
        partner ecosystem.
          </p>
          <button className='bg-[var(--bg-primary)] text-white font-bold text-lg px-5 py-2 rounded-md'>Explore Platform</button>
    </div>
  );
}

export default About