"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe esse culpa quas voluptatem.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "" 
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe esse culpa quas voluptatem.",
    stack: [{ name: "Next,js" }, { name: "tailwind.css" }, { name: "node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "" 
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe esse culpa quas voluptatem.",
    stack: [{ name: "Next,js" }, { name: "tailwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "" 
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slideindex
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
       }}
      className="min-h-[65vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[15px] h-[50%]">
              {/* outline num */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-cyan-400 transition-all duration-500 capitalize">
                {project.category} Project                
              </h2>
              {/* project description */}
              <p className="text-white/60">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-cyan-400">
                      {item.name}
                      {/* removing the last comma */}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* underline */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 mt-2">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-cyan-400"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* live project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-cyan-400"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-8 rounded-xl"
              onSlideChange={handleSlideChange} 
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[360px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                    </div>
                    {/* image */}
                    <div className="relative w-full h-full rounded-xl">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover rounded-xl"
                        alt=""
                      />
                    </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons xl:bottom-0*/}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_2px)] xl:top-0 xl:bottom-0 z-10 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-cyan-400/40 hover:bg-cyan-400-hover text-primary text-[22px] w-[34px] h-[34px] flex justify-center items-center transition-all rounded-xl" 
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>    
  );
};

export default Work;
