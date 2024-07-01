import React from "react";
import { info } from "../utils/DoThat";

const DoThis = () => {
  return (
    <div className="w-full bg-[#F1F5FF] text-black p-8 md:p-20">
      {info.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-10">
          <div className={`md:w-1/2 md:order-${index % 2 === 0 ? '1' : '2'}`}>
            <div className="text-3xl md:text-4xl font-bold">{item.heading}</div>
            <div className="text-lg md:text-xl text-[#717171]">{item.subheading}</div>
          </div>
          <div className={`md:w-1/2 md:order-${index % 2 === 0 ? '2' : '1'} flex justify-center`}>
            <img className="rounded-xl max-w-full" src={require(`../images/todo/${item.image}`)} alt={item.heading} />
          </div>
        </div>
      ))}
      <div className="flex justify-center pt-12 md:pt-24">
        <button className="bg-black text-white font-bricol text-sm md:text-base font-bold px-8 md:px-32 py-3 md:py-4 rounded-lg">
          Book a call
        </button>
      </div>
    </div>
  );
};

export default DoThis;
