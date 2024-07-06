import React from 'react';
import { motion } from 'framer-motion';
import {Image} from '../utils/Image'; // Ensure this path is correct

const Marquee = () => {
  // Duplicate the images array to create a seamless loop
  const duplicatedImages = [...Image, ...Image];

  return (
    <div className="text-center py-8 overflow-hidden">
      <p className="font-grotesk text-lg md:text-xl mb-4">BRANDS WE HAVE WORKED WITH:</p>
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 10, // Adjust this value to increase speed
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <ul className="flex flex-row gap-8 py-8">
          {duplicatedImages.map(({ src, alt }, index) => (
            <li key={index} className="flex-none">
              <img
                src={require(`../images/work brand/${src}`)}
                alt={alt}
                className="h-12 w-auto md:h-16 lg:h-20 scale-[0.8]"
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Marquee;
