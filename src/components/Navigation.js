import React from 'react'

const Navigation = () => {
  return (
    <div className='flex flex-row justify-between bg-[#396DFF] text-white px-6 py-4'>
      <span className='font-anton text-xl'>VCMEDIA LABS</span>
        <ul className='text-grotesk flex flex-row gap-10'>
          <li>What do we do</li>
          <li>Why us</li>
          <li>Testimonials</li>
          <li>About us</li>
        </ul>
        <button className="bg-white text-black font-bricol text-[13px] font-bold px-[24px] py-[8px] rounded-lg">Book a call</button>
    </div>
  )
}

export default Navigation