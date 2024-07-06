import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the menu after clicking on a link
  };

  return (
    <div className=' border-b border-[#000000] w-full flex flex-row justify-between lg:justify-around md:justify-around sm:justify-between bg-[#396DFF] text-white px-6 py-4'>
      <span className='font-anton text-[24px] cursor-pointer' onClick={() => scrollToSection('home')}>
        VCMEDIA LABS
      </span>

      {/* Logo and Hamburger Menu */}
      <div className='flex items-center justify-center'>
        {/* Menu Links */}
        <ul className={`text-grotesk text-[16px] flex flex-col md:flex-row gap-4 md:gap-10 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li className='cursor-pointer hover:text-gray-200' onClick={() => scrollToSection('what-do-we-do')}>
            What do we do
          </li>
          <li className='cursor-pointer hover:text-gray-200' onClick={() => scrollToSection('why-us')}>
            Why us
          </li>
          <li className='cursor-pointer hover:text-gray-200' onClick={() => scrollToSection('testimonials')}>
            Testimonials
          </li>
          <li className='cursor-pointer hover:text-gray-200' onClick={() => scrollToSection('about-us')}>
            About us
          </li>
        </ul>
      </div>

      <div
        className="hidden md:block cursor-pointer hover:text-[#396DFF] bg-white text-black font-bricol text-[13px] font-bold px-[24px] py-[8px] rounded-lg mt-4 md:mt-0"
        onClick={() => scrollToSection('book-a-call')}
      >
        Book a call
      </div>

      {/* Hamburger Menu Icon */}
      <div className='block md:hidden'>
        <button onClick={toggleMenu} className='text-white focus:outline-none focus:bg-[#1a365d]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
