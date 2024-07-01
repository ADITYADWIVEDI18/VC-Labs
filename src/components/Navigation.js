import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between bg-[#396DFF] text-white px-6 py-4'>

      {/* Logo and Hamburger Menu */}
      <div className='flex items-center justify-between'>
        <span className='font-anton text-xl'>VCMEDIA LABS</span>

        {/* Hamburger Menu Icon */}
        <div className='block md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none focus:bg-[#1a365d]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Links */}
      <ul className={`text-grotesk flex flex-col md:flex-row gap-4 md:gap-10 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <li className='cursor-pointer hover:text-gray-200'>What do we do</li>
        <li className='cursor-pointer hover:text-gray-200'>Why us</li>
        <li className='cursor-pointer hover:text-gray-200'>Testimonials</li>
        <li className='cursor-pointer hover:text-gray-200'>About us</li>
        <li className='cursor-pointer hover:text-gray-200 bg-white text-black font-bricol text-[13px] font-bold px-[24px] py-[8px] rounded-lg mt-4 md:mt-0'>
          Book a call
        </li>
      </ul>

    </div>
  );
};

export default Navigation;
