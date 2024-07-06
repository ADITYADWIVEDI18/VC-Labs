import React from 'react';
import AboutCard from '../cards/AboutCard';

const AboutUs = () => {
  const infoAbout = [
    {
      intro: "I’m Sushrut, Founder of VC media Labs",
      specialisation: ["LinkedIn and X personal branding", "Client acquisition system set up"]
    },
    {
      intro: "I’m Yashika Sharma, Co-Founder of VC media Labs",
      specialisation: ["Outbound link generation", "Building sales asset and lead magnets"]
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
     
      <div className="w-full  p-6 sm:p-10 lg:p-16 bg-whitemx-auto">
      
        <div className='flex flex-col md:flex-row justify-center items-center mb-8 space-y-4 md:space-y-0 md:space-x-6'>
          <span className='font-anton text-[4em] lg:text-5xl text-[#00185C]'>About us</span>
          <span className='w-full md:w-96 text-sm sm:text-base md:text-lg lg:text-xl md:border-l-4 pl-2 border-gray-300 text-[#6E6E6E] font-grotesk text-center mt-4 md:mt-0'>
            We at VC Media help business owners build a founder-led sales system within 6 months
          </span>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-8 lg:gap-16">
          {infoAbout.map(({ intro, specialisation }, index) => (
            <AboutCard
              key={index}
              intro={intro}
              specialisation={specialisation}
              className="mb-8"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
