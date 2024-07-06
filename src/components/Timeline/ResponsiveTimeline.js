import React from 'react';

const ResponsiveTimeline = ({ index, title, content }) => {
  return (
    <div className=' flex flex-col md:flex-row items-start md:items-center mb-8'>
      
      <div className="flex flex-col justify-center items-center h-full bg-white p-4 rounded-xl relative md:left-16 md:bottom-12 mt-4 md:mt-0">
      <div className="relative z-20 flex items-center justify-center bg-[#F9E0F3] scale-[1.8] text-black rounded-full w-8 h-8 mt-1">
        <h1 className="font-semibold text-lg">{index}.</h1>
      </div>
        <div className=" flex flex-col justify-center items-center bg-white text-black rounded-lg shadow-lg w-full px-6 py-4">
          <h3 className="font-grotesk mb-3 font-bold text-3xl">{title}</h3>
          <p className="font-grotesk text-[#8A8A8A] text-xl leading-snug">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTimeline;
