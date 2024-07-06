import React from 'react';
import ToDoCard from '../cards/ToDoCard';
import { info } from '../utils/ToDoInfo';
import DoThis from './DoThis';

const WhatToDo = () => {
    return (
        <div className='bg-white w-full min-h-full pb-8 flex flex-col justify-center items-center p-8 gap-8'>
            <div className='text-center'>
                <p className='font-anton text-[#01185C] text-[3em] sm:text-[4em] md:text-6xl mt-10'>What we do?</p>
            </div>

            <div className='flex flex-wrap justify-center items-center'>
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
    );
};

export default WhatToDo;
