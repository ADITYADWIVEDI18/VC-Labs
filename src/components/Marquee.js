import React from 'react';
import { Image } from '../utils/Image';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="text-center">
      <p className="font-grotesk">BRANDS WE HAVE WORKED WITH:</p>

      <div className="">
        <ul className="moving flex flex-row  gap-[3em] pt-8">
          {Image.map(({ src, alt }) => (
            <li><img src={require(`../images/work brand/${src}`)} alt={alt} /></li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Marquee;
