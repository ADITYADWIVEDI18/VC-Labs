import React from "react";
import LandingContent from "./LandingContent";
import WhatToDo from "./WhatToDo";
import DoThis from "./DoThis";
import WhyUs from "./WhyUs";
import Footer from "./Footer";
import Process from "./Process";
import Testimonial from "./Testimonial";
import AboutUs from "./AboutUs";
import BookCall from "./BookCall";
import Counter from "./Counter";


const MainPage = () => {
  return (
    <div className=" overflow-hidden ">


      <LandingContent/>      

      <WhatToDo/>

      <DoThis />
   

      <Counter/>

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