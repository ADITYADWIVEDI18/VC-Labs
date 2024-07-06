import React from 'react'
import ToDoCard from '../cards/ToDoCard';
import { info } from '../utils/ToDoInfo';
import DoThis from './DoThis';
const WhatToDo = () => {
   

    return (
        <div className='bg-white w-full min-h-full pb-8 flex flex-col justify-center items-center'>
            <div className=''>   
            <p className='  font-anton text-[4vmax] text-center text-black pl-16 pt-10'>What we do</p>
            </div>
           
            <div className=' flex flex-wrap justify-center items-center'>
            {info.map((item, index) => (
                <ToDoCard
                    key={index}
                    heading={item.heading}
                    subheading={item.subheading}
                    image={item.image}
                />
            ))}
            </div>

        </div>
    )
}

export default WhatToDo;
