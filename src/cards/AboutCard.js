import React from 'react';
import testimonial from "../images/testimonial.jpeg";

const AboutCard = (props) => {
  return (
    <div className="p-6 bg-[#F1F5FF] rounded-[16px] shadow-lg m-4 w-full sm:w-[519px] flex flex-col justify-between gap-[15px]">
    
      <div className='flex flex-col sm:flex-row gap-[24px]'>
        <div className='flex-shrink-0'>
          <img className='w-full sm:w-[182px] h-[230px] rounded-[19px]' src={testimonial} alt="Testimonial" />
        </div>
        <div className='p-5 flex flex-col gap-[16px]'>
          <p className="text-lg text-gray-800 font-grotesk">{props.intro}</p>
          <div>
            <span className='text-lg text-gray-800 mb-2 font-grotesk'>My specialisation includes:</span>
            <ul className="list-disc list-inside text-gray-600 font-grotesk">
              {props.specialisation.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex mt-4 justify-between gap-2">
        <button className="hover:bg-blue-600 hover:text-white bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-[56px] w-[48%]">LinkedIn</button>
        <button className="hover:bg-blue-600 hover:text-white bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-[56px] w-[48%]">Twitter</button>
      </div>
    </div>
  );
};

export default AboutCard;
