import React from 'react';
import vclabs from '../images/vclabs.png';

const Footer = () => {
  return (
    <div className="bg-[#396DFF] font-grotesk flex flex-col text-white">
      
      <div className="flex flex-col md:flex-row justify-evenly py-8 md:py-16 space-y-8 md:space-y-0">
        
        {/* About VCMEDIA labs */}
        <div className="text-center md:text-left">
          <ul className="flex flex-col">
            <li className="font-bold text-2xl pb-3">About VCMEDIA labs</li>
            <li className="text-[#E0E0E0]">
              We help you build a<br /> Founder-led Sales System within <br /> 6 months.
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="text-center md:text-left">
          <ul className="flex flex-col gap-3">
            <li className="font-bold text-2xl">Socials</li>
            <li className="text-[#E0E0E0] text-lg">Instagram</li>
            <li className="text-[#E0E0E0] text-lg">Linkedin</li>
            <li className="text-[#E0E0E0] text-lg">x (twitter)</li>
          </ul>
        </div>
        
        {/* Form */}
        <div className="p-6 bg-transparent shadow-lg rounded-lg">
          <form className="flex flex-col space-y-3">
            <label className="font-semibold">Name</label>
            <input type="text" className="bg-transparent border rounded-lg text-[#E0E0E0] p-2" placeholder="Enter your name" />
            <label className="font-semibold">Phone number</label>
            <input type="text" className="bg-transparent border rounded-lg text-[#E0E0E0] p-2" placeholder="Enter your phone number" />
            <label className="font-semibold">Objective</label>
            <textarea className="bg-transparent border p-4 rounded-lg text-[#E0E0E0]" rows="4" cols="30" placeholder="Enter your objective"></textarea>
            <button className="w-full px-4 py-2 border bg-white rounded-lg text-black font-bold mt-4 hover:bg-gray-200 hover:text-blue-500 transition-colors duration-300">Submit</button>
          </form>
        </div>
        
      </div>

      {/* Image */}
      <div className="w-full">
        <img className="w-full" src={vclabs} alt="VC Labs" />
      </div>

    </div>
  );
};

export default Footer;
