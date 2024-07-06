import React from 'react';
import testimonialImage from "../images/testimonialImage.jpeg";

const TestimonialCard = (props) => {
  return (
    <div className=' flex flex-col h-auto md:h-[320px] w-full max-w-xl bg-white text-[#3F3F3F] rounded-xl  hover:bg-[#F9E1F3] scale-90 '>
      
      {/* Testimonial Content */}
      <div className='p-4 h-auto md:h-[250px] overflow-hidden'>
        <p className='font-[Space Grotesk] font-normal text-lg md:text-2xl leading-tight'>
          {props.content}
        </p>
      </div>
      
      {/* Author Image and Details */}
      <div className='flex items-center border-t border-gray-300 p-4 gap-3 h-auto md:h-[72px] justify-start'>
        <div className='w-[60px] h-[60px]'>
          <img src={testimonialImage} alt="testimonial" className='rounded-full w-full h-full object-cover' />
        </div>
        
        <div className='flex flex-col justify-center items-start'>
          <span className='font-bold text-black'>{props.name}</span>
          <span className='text-[#6E6E6E]'>{props.designation}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard;
