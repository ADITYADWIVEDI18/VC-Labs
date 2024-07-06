import React from 'react';
import landpageImage from "../images/landpage.png";
import Marquee from './Marquee';

const LandingContent = () => {
  return (
    <div className="text-center py-10 bg-[#396Dff] text-white">
    
      <div className="max-w-[75vmax] mx-auto px-4 scale-[1.1]">
        <div className="text-4xl sm:text-6xl font-anton tracking-wide leading-snug  mt-16">
          <p className=' leading-snug'>Build a brand and get <span className="text-[#BAF9DC]">Leads via Linkedin and X </span>without lifting a finger</p>
        </div>
      </div>

      <div className="max-w-[60vmax] text-white mx-auto mt-6 px-4">
        <div className="text-xl sm:text-2xl font-extralight font-grotesk">
          We help you build a Founder-led Sales System within 6 months.
        </div>
      </div>

      <div className="flex justify-center mt-6 sm:mt-12">
      <button className="bg-white text-[#000000] font-bricol text-sm md:text-base font-bold px-6 md:px-12 py-3 md:py-4 rounded-lg">
          Book a call
        </button>
      </div>

      <div className="relative mx-auto mt-10 sm:mt-20 w-full max-w-screen-lg max-h-[1022px] p-4 sm:p-16 flex justify-center items-center rounded-2xl bg-[#7499FF]">
        <img src={landpageImage} alt="Calendar" className="w-full max-w-[935px] h-auto object-cover rounded-2xl" />
      </div>

      <div className="mx-auto mt-10 sm:mt-20 w-full">
        <Marquee />
      </div>
    </div>
  );
};

export default LandingContent;
