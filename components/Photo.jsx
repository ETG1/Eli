"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative"> 
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ 
          opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn"},
        }}>
          {/* Image */}
        <motion.div
        initial={{ opacity: 0 }} 
        animate={{ 
          opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut"},
        }}
        
        className="w-[248px] h-[248px] xl:w-[398px] xl:h-[298px] mix-blend-lighten absolute">
          <Image 
            src="/assets/Ph0t0.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
        {/* Circle */}
        <motion.svg 
          className="w-[250px] h-[250px] xl:w-[406px] xl:h-[320px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" 
            cy="253" 
            r="260" 
            stroke="#22d3ee" 
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 75", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
