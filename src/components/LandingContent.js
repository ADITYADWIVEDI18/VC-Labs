import React from 'react'

const LandingContent = () => {
  return (
    <div className="text-center  w-[90vw] sm:w-[70vw] mx-auto py-10 sm:py-20 space-y-6 sm:space-y-10">
        <div className="text-4xl sm:text-6xl font-anton tracking-wide leading-snug">
          <span>Build a brand and get </span>
          <span className="text-[#BAF9DC]">Leads via Linkedin and X </span>
          <span className="block sm:inline ml-0 sm:ml-4">without lifting a finger</span>
        </div>
        <div className="text-xl  sm:text-3xl font-extralight font-grotesk">
          We help you build a Founder-led Sales System within 6 months.
        </div>
        <div>
          <button className="bg-white text-black font-bricol text-lg font-bold px-8 py-2 rounded-lg">
            Book a call
          </button>
        </div>
    </div>
  )
}

export default LandingContent;
