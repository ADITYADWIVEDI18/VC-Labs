import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';
import testimonialImage from "../images/testimonial.jpeg"; // Use a descriptive name

const Testimonial = () => {
  const testimonials = [ // Use a plural name for clarity
    {
      content: "We help you build a Founder-led Sales System within 6 months.We help you build a Founder-led Sales System within 6 months.We help you build a Founder-led Sales System within 6 months.We help you build a Founder-led Sales System within 6 months.",
      name: "Xyz",
      designation: "Abc",
    },
    {
      content: "We help you build a Founder-led Sales System within 6 months.We help you build a Founder-led Sales System within 6 months.We help you build a Founder-led Sales System within 6 months.We help you build a Founder-led Sales System within 6 months.",
      name: "Xyz",
      designation: "Abc",
    },
  ];

  return (
    <div className='w-full bg-[#396DFF] p-16'>

      <div className='  max-w-[1440px] mx-auto'>

        <p className=' text-white text-center font-anton text-4xl md:text-6xl leading-[108.39px] mb-8 md:mb-12'>Testimonials</p>
      
          
          <div className='flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 '>
          <div className='md:w-2/5 scale-90'>
            <img className='rounded-xl scale-[.95] w-full h-auto ' src={testimonialImage} alt="Testimonial" />
          </div>

          <div className='flex flex-col gap-10 md:w-2/5 flex-wrap justify-center items-center'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                designation={testimonial.designation}
                className='rounded-lg'
              />
            ))}
          </div>
          
       

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
