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
      "We help you hit those revenue numbers, book appointments and general qualified-leads by optimizing on real-time performance metrics.",
  },
];

const Process = () => {
  return (
    <div className="w-full bg-[#F1F5FF] flex flex-col md:flex-row justify-around items-center py-12 px-8 md:px-16 gap-12 md:gap-20">
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 md:gap-12 w-full max-w-md md:max-w-[496.34px]">
        <button className="border border-[#2E2E2E] text-[#515050] text-2xl md:text-3xl font-semibold rounded-2xl px-6 py-3 font-grotesk">
          Our Process
        </button>
        <div className="font-anton text-3xl md:text-5xl text-black tracking-tight">
          We follow this simple <br /> 5 step process:
        </div>
      </div>
      <div className="w-full max-w-[631.02px] h-[800px]">
        <TimelineContainer events={events} />
      </div>
    </div>
  );
};

export default Process;
