import React from 'react';

const ToDoCard = ({ heading, subheading, image }) => {
  return (
    <div className='min-w-[30vw] bg-[#F9E0F3] font-grotesk flex flex-col flex-wrap justify-center m-5 p-8 rounded-xl overflow-hidden'>
        <div className='text-4xl font-semibold text-black '>{heading}</div>
        <div className='text-lg text-[#636363]'>{subheading}</div>
        <div className=' scale-[0.75] max-w-full h-auto'><img src={require(`../images/todo/${image}`)} alt={heading} /></div>
    </div>
  )
}

export default ToDoCard;
