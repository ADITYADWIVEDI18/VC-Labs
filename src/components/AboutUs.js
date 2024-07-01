import React from 'react';
import AboutCard from '../cards/AboutCard';

const AboutUs = () => {
  const infoAbout = [
    {
      intro: "I’m Sushrut, Founder of VC media  Labs",
      specialisation: ["LinkedIn and X personal branding", "Client acquisition system set up"]
    },
    {
      intro: "I’m Yashika Sharma, Co-Founder of VC media  Labs",
      specialisation: ["Outbound link generation", "Building sales asset and lead magnets"]
    },
  ];

  return (
    <div className="w-full p-6 bg-white m-16">
      <div className='flex flex-col mx-16 my-8 sm:flex-row items-center mb-8'>
        <span className='font-anton text-[2em] sm:text-[4em] text-black'>About us</span>
        <span className='font-grotesk font-thin text-[3em] text-[#F9E0F3] mx-2'> |</span>
        <span className='w-96 text-[#6E6E6E] font-grotesk text-center sm:text-left sm:ml-4'>
          We at VC Media help business owners build a founder-led sales system within 6 months
        </span>
      </div>
      <div className="flex flex-wrap justify-center">
        {infoAbout.map(({ intro, specialisation }, index) => (
          <AboutCard
            key={index}
            intro={intro}
            specialisation={specialisation}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
