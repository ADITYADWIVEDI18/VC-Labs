import React from 'react';

const ToDoCard = ({ heading, subheading, image }) => {
  return (
    <div className='w-full md:w-[590px] h-auto md:h-[662px] scale-90 bg-[#F9E0F3] font-grotesk flex flex-col justify-evenly my-3 p-8 rounded-xl overflow-hidden'>
      <div className=' max-h-[200px] max-w-full md:max-w-[494px] mb-4 md:mb-0'>
        <div className='text-[24px] md:text-[48px] font-semibold text-[#01185C] mb-4 leading-[32px] md:leading-[61.25px]'>
          {heading}
        </div>
        <div className='text-[18px] md:text-[24px] font-normal text-[#636363] mb-4 leading-[24px] md:leading-[30.62px]'>
          {subheading}
        </div>
      </div>
      <div className='flex justify-center items-center max-h-[341px] max-w-full md:max-w-[494px]'>
        <img className='max-w-full h-auto' src={require(`../images/todo/${image}`)} alt={heading} />
      </div>
    </div>
  );
}

export default ToDoCard;
