import React from 'react';
import testimonialImage from "../images/testimonialImage.jpeg";

const TestimonialCard = (props) => {
  return (
    <div className='flex h-[35vmin] w-[40vmax] bg-white text-[#3F3F3F] flex-col rounded-xl m-4 hover:bg-[#F9E1F3]'>
      
      <div className='w-4/5 h-4/5 p-4'>{props.content}</div>
      
      <div className='flex flex-row border items-center'>
       
        <div className='h-16 p-4'>
          <img src={testimonialImage} alt="testimonial" className=' scale-[2.0] h-full rounded-full' />
        </div>
      
        <div className=' flex flex-col ml-4'>
          <span className='font-bold text-black block'>{props.name}</span>
          <span className='text-[#6E6E6E]'>{props.designation}</span>
        </div>
      
      </div>

    </div>
  )
}

export default TestimonialCard;
