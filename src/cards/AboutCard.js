import React from 'react';
import testimonial from "../images/testimonial.jpeg";

const AboutCard = (props) => {
  return (
    <div className="p-4 bg-[#F1F5FF] rounded-lg shadow-lg m-4 w-full sm:w-1/2 lg:w-1/3">
      <div className='flex flex-col sm:flex-row'>
        <div className='flex-shrink-0'><img className='h-[230px] w-full sm:w-auto rounded-lg' src={testimonial} alt="Testimonial" /></div>
        <div className='p-5'>
          <p className="text-lg text-gray-800 mb-2 font-grotesk">{props.intro}</p>
          <ul className="list-disc list-inside text-gray-600 font-grotesk">
            <span className='text-lg text-gray-800 mb-2 font-grotesk'>My specialisation includes:</span>
            {props.specialisation.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex mt-4 justify-between">
        <button className=" hover:bg-blue-600 hover:text-white bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-2xl w-1/2 mx-1">LinkedIn</button>
        <button className=" hover:bg-blue-600 hover:text-white bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-2xl w-1/2 mx-1">Twitter</button>
      </div>
    </div>
  );
};

export default AboutCard;
