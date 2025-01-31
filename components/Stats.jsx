"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Years Of Experience",
    },
    {
        num: 5,
        text: "Projects Completed",
    },
    {
        num: 8,
        text: "Technologies Mastered",
    },
    {
        num: 498,
        text: "Code Commits",
    },
];

const Stats = () => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-3">
        {stats.map((item, index) => {
          return ( 
            <div className="flex gap-3 items-center" key={index}>
              <CountUp 
                end={item.num} 
                duration={5} 
                delay={2}
                className="text-3xl font-extrabold text-primary dark:text-white" 
              />
              <p className="text-sm text-primary/60 dark:text-white/60 max-w-[100px] leading-snug">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>  
    </div>
  );
};

export default Stats;
