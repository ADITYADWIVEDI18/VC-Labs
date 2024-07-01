import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';
import testimonial from "../images/testimonial.jpeg";

const Testimonial = () => {
    const infotestimonial = [
        {
            content: "We help you build a Founder-led Sales System within 6 months.We help you build a Founder-led Sales System within 6 months.We help you build a Founder-led Sales System within 6 months.We help you build a Founder-led Sales System within 6 months.",
            name: "Xyz",
            designation: "Abc"
        },
        {
            content: "We help you build a Founder-led Sales System within 6 months.",
            name: "Xyz",
            designation: "Abc"
        }
    ];

    return (
        <div className='w-full bg-[#396DFF] border pl-8 sm:pl-16 pt-8 sm:pt-16'>
            <p className='text-white font-anton text-2xl sm:text-4xl mb-8'>Testimonials</p>
            <div className='flex flex-col sm:flex-row justify-evenly items-center p-8 sm:p-16'>
                <div className='w-[75vw] sm:w-[25vmax] mb-8 sm:mb-0'>
                    <img className='rounded-xl w-full' src={testimonial} alt="testimonial" />
                </div>
                <div className='flex flex-col space-y-8'>
                    {infotestimonial.map(({ content, name, designation }, index) => (
                        <TestimonialCard
                            key={index}
                            content={content}
                            name={name}
                            designation={designation}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
