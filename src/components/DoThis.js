import React from "react";
import { info } from "../utils/DoThat";

const DoThis = () => {
  return (
    <div className="w-full bg-[#F1F5FF] text-black font-grotesk space-y-8 p-4 md:p-8 lg:p-20">
      {info.map((item, index) => (
        <div key={index} className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between py-6 md:py-10">
          <div className={`w-full md:w-[481px] lg:w-[546px] flex flex-col gap-3 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight" style={{ fontFamily: 'Space Grotesk', fontWeight: 700 }}>
              {item.heading}
            </div>
            <div className="text-lg md:text-xl lg:text-2xl text-[#717171] leading-normal" style={{ fontFamily: 'Space Grotesk', fontWeight: 400 }}>
              {item.subheading}
            </div>
          </div>
          <div className={`w-full md:w-[609px] flex justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} mt-4 md:mt-0`}>
            <img className="rounded-xl" src={require(`../images/todo/${item.image}`)} alt={item.heading} />
          </div>
        </div>
      ))}
      <div className="max-w-[1240px] mx-auto flex justify-center items-center">
        <button className="bg-black text-white font-bricol text-sm md:text-base font-bold px-6 md:px-12 py-3 md:py-4 rounded-lg">
          Book a call
        </button>
      </div>
    </div>
  );
};

export default DoThis;
