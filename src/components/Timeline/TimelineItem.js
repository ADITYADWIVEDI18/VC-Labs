import React from 'react';

const TimelineItem = ({ index, title, content, align }) => {
  const isRight = align === 'right';
  const timelineSideClass = isRight ? 'flex-row-reverse md:flex-row' : '';

  return (
    <div className={`mb-24 relative right-7 md:flex-col justify-between items-center w-full ${timelineSideClass}`}>
     
      <div className="flex-1 md:block hidden"></div>
     
      <div className="relative z-20 flex items-center justify-center bg-[#F9E0F3] scale-[1.8] text-black rounded-full w-8 mt-1">
        <h1 className="font-semibold text-lg">{index}.</h1>
      </div>

      <div className="flex-1 relative left-16 bottom-12 mt-4 md:mt-0">
        <div className="bg-white text-black rounded-lg shadow-lg w-full px-6 py-4">
          <h3 className=" font-grotesk mb-3 font-bold text-3xl">{title}</h3>
          <p className=" font-grotesk text-[#8A8A8A] text-xl leading-snug">{content}</p>
        </div>
      </div>
      
    </div>
  );
};

export default TimelineItem;
