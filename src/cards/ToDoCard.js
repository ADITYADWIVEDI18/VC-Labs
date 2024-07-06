import React from 'react';

const ToDoCard = ({ heading, subheading, image }) => {
  return (
    <div className= '  w-full md:w-[590px] h-[662px] scale-90 bg-[#F9E0F3] font-grotesk flex flex-col justify-center my-3 p-8 rounded-xl overflow-hidden'>
     
      <div className='text-[48px] font-semibold text-[#01185C] mb-4 leading-[61.25px]'>
        {heading}
      </div>
     
      <div className='text-[24px] font-normal text-[#636363] mb-4 leading-[30.62px]'>
        {subheading}
      </div>
      
      <div className='flex justify-center'>
        <img className='max-w-full h-auto' src={require(`../images/todo/${image}`)} alt={heading} />
      </div>
      
    </div>
  )
}

export default ToDoCard;
