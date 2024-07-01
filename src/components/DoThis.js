import React from "react";
import { info } from "../utils/DoThat";

const DoThis = () => {
    return (
        <div className="w-full bg-[#F1F5FF] text-black p-20">
            {info.map((item, index) => (
                <div key={index} className="px-4 py-10 flex flex-row font-grotesk justify-around gap-6">
                    <div className={`flex flex-col justify-center w-[30vw] px-4 ${index % 2 === 0 ? "" : "order-last"}`}>
                        <div className="text-[2em] font-bold">{item.heading}</div>
                        <div className="text-[1.5em] w-[30vw]  text-[#717171]">{item.subheading}</div>
                    </div>
                    <div className=" rounded-xl">
                        <img src={require(`../images/todo/${item.image}`)} alt={item.heading} />
                    </div>
                </div>
            ))}
            <div className="flex justify-center pt-24">
                <button className="bg-black text-white font-bricol text-[13px] font-bold px-32 py-4 rounded-lg">
                    Book a call
                </button>
            </div>
        </div>
    );
};

export default DoThis;
