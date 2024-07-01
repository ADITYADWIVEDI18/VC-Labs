import React from 'react';
import testimonialImage from "../images/testimonialImage.jpeg";

const TestimonialCard = (props) => {
  return (
    <div className='flex flex-col md:flex-col h-auto md:min-h-[35vmin] w-[40vmax] bg-white text-[#3F3F3F] rounded-xl m-4 hover:bg-[#F9E1F3]'>
      
      {/* Testimonial Content */}
      <div className='w-full md:w-2/3 p-4'>
        {props.content}
      </div>
      
      {/* Author Image and Details */}
      <div className='flex w-1/3 items-center border-t md:border-none border-gray-300 p-4 md:p-0 md:pl-4'>
        <div className='h-16 w-16 md:min-h-24 md:min-w-24 p-1'>
          <img src={testimonialImage} alt="testimonial" className='rounded-full w-full h-full object-cover' />
        </div>
        
        <div className='flex flex-col ml-4 relative float-end'>
          <span className='font-bold text-black'>{props.name}</span>
          <span className='text-[#6E6E6E]'>{props.designation}</span>
        </div>
      </div>

    </div>
  )
}

export default TestimonialCard;
