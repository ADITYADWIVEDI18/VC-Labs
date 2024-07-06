import React, { useState } from 'react';

const WhyUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const hoverTexts = [
    "With a qualified team of SDRs and strong foundational systems, we utilize trigger events to filter the prospects that require your product and services, rather than aiming at random people thus making the conversion process faster, easier and revenue-oriented",
    "Our system is designed to be transferable, ensuring you get leads with or without us, making your process seamless and efficient.",
    "We offer a hyper-personalized content system to help build your personal brand, making you stand out in your industry."
  ];

  const defaultTexts = [
    "Unlimited-High Intent Prospecting to book qualified calls",
    "A transferable system that gets you leads with-or-without us",
    "A hyper-personalised content system to build a personal brand"
  ];

  return (
    <div className="h-full w-full flex justify-center items-center min-h-screen">
      <div className="w-full flex flex-col items-center py-[120px] gap-[100px] h-full">
        <div className="font-anton text-[72px] text-[#00185C] text-center h-[108px] leading-[108.39px]">
          Why us?
        </div>
        <div className="flex flex-wrap justify-center gap-[64px] items-center max-w-[1240px] w-full sm:mx-96">
          {[1, 2, 3].map((number) => (
            <div
              key={number}
              className="bg-[#F9E0F3] w-full max-w-[370.67px] h-[495px] rounded-[24px] p-[24px] flex flex-col justify-center items-start transition-colors duration-300 hover:bg-[#396DFF] cursor-pointer flex-grow "
              onMouseEnter={() => setHoveredCard(number)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <p className={`text-[64px] sm:text-[64px] font-anton ${hoveredCard === number ? 'hidden' : 'text-[#95317D]'}`}>
                {number}.
              </p>
              <p className={`font-grotesk text-center mb-24 leading-[38.28px] ${hoveredCard === number ? 'text-white text-xl font-normal text-center' : 'text-black font-bold text-3xl'}`}>
                {hoveredCard === number ? hoverTexts[number - 1] : defaultTexts[number - 1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
