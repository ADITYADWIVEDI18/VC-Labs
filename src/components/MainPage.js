import React from "react";
import landpageImage from "../images/landpage.png"; 
import { Image } from "../utils/Image";
import Marquee from "./Marquee";
import LandingContent from "./LandingContent";
import WhatToDo from "./WhatToDo";
import DoThis from "./DoThis";
import WhyUs from "./WhyUs";
import Footer from "./Footer";
import Process from "./Process";
import Testimonial from "./Testimonial";
import AboutUs from "./AboutUs";
import BookCall from "./BookCall";


const MainPage = () => {
  return (
    <div className="w-full h-[1558px] bg-[#396DFF] text-white flex flex-col items-center justify-evenly ">


      <LandingContent/>      

      <div className="bg-[#7499FF] p-16 rounded-2xl">
        <img src={landpageImage} alt="calendar" />
      </div>

      <div><Marquee/></div>
      <div><WhatToDo/></div>

      <DoThis />
      
      <div className="font-anton bg-[#396DFF] text-[#BFFFDB] flex flex-col sm:flex-row justify-evenly w-full py-16 space-y-8 sm:space-y-0 sm:space-x-8">
    <div className="text-center sm:text-left">
        <span className="text-[3em] sm:text-[6em]">150M+</span>
        <span className="text-xl sm:text-2xl font-grotesk block"><br />Views generated</span>
    </div>
    <div className="text-center sm:text-left">
        <span className="text-[3em] sm:text-[6em]">100K+</span>
        <span className="text-xl sm:text-2xl font-grotesk block"><br />Followers earned</span>
    </div>
    <div className="text-center sm:text-left">
        <span className="text-[3em] sm:text-[6em]">350+</span>
        <span className="text-xl sm:text-2xl font-grotesk block"><br />Calls booked</span>
    </div>
</div>



      <WhyUs/>

      <Process/>

      <Testimonial/>

      <AboutUs/>

      <BookCall/>
      
      <Footer/>

    </div>
  );
};

export default MainPage;