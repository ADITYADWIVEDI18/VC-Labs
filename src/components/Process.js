import React from "react";
import TimelineContainer from "./Timeline/TimelineContainer";

const events = [
  {
    heading: "Building the Foundations",
    smallContent:
      "Before kicking off, we interview you to understand your work, competitors, your offer, target audience, and your brand values.",
  },
  {
    heading: "Creating Sales Assets",
    smallContent:
      "We help you build sales assets, in the form of videos/documents, that help you sell your service.",
  },
  {
    heading: "Branding Strategy",
    smallContent:
      "Step one is convert your profile in a landing page: profile optimization. Then we build you a content strategy to build authority, gain followers, and invite leads.",
  },
  {
    heading: "Building a multi-channel lead gen system",
    smallContent:
      "To help you attract quality leads, we build you a scalable Founder-led Sales System within 6 months.",
  },
  {
    heading: "Performance-oriented metrics",
    smallContent:
      "We help you hit those revenue numbers, book appointments and general qualified-leads by optimizing on real-time performance metrics. ",
  },
];

const Process = () => {
  return (
    <div className="w-full h-full bg-[#F1F5FF] flex flex-col md:flex-row justify-center items-center md:items-start">
     
      <div className="w-full  h-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left p-4 md:p-8">
       
        <div className="flex flex-col  justify-center items-start h-full">
          <button className="border border-[#2E2E2E] ml-8 text-[#515050] text-2xl font-semibold  rounded-2xl px-8 py-3 font-grotesk">
            Our Process
          </button>
          <div className=" border p-6  font-anton text-5xl leading-loose [word-spacing:5px] text-wrap md:text-5xl text-black mt-4 tracking-tight">
            We follow this simple <br />5 step process:
          </div>
        </div>

      </div>

      <div className="w-full md:w-1/2 p-4 md:p-8">
        <TimelineContainer events={events} />
      </div>
    </div>
  );
};

export default Process;
