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
    <div>
      <div className='font-anton text-[2em] sm:text-[3em] text-black py-10 sm:py-20 text-center'>Why us?</div>
      <div className='relative flex flex-col sm:flex-row gap-6 pb-10 sm:pb-20 items-center'>
        {[1, 2, 3].map((number) => (
          <div
            key={number}
            className='bg-[#F9E0F3] w-[80vw] sm:w-[25vw] h-[50vmin] rounded-2xl p-4 flex flex-col justify-start transition-colors duration-300 hover:bg-[#396DFF] hover:justify-center hover:overflow-scroll'
            onMouseEnter={() => setHoveredCard(number)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <p className={`text-[3em] sm:text-[4em] font-semibold ${hoveredCard === number ? 'hidden' : 'text-[#95317D]'}`}>
              {number}.
            </p>
            <p className={`font-bold font-grotesk text-[1em] sm:text-[1.5em] ${hoveredCard === number ? 'text-white text-xl font-thin' : 'text-black'}`}>
              {hoveredCard === number ? hoverTexts[number - 1] : defaultTexts[number - 1]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
