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
    <section className="py-8 xl:py-11">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-x-8 gap-y-4 mx-auto">
          {stats.map((item, index) => {
            return ( 
              <div className="min-w-[200px] flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                <CountUp 
                  end={item.num} 
                  duration={5} 
                  delay={2}
                  className="text-4xl xl:text-4xl font-extrabold text-primary dark:text-white" 
                />
                <p className={`${
                  item.text.length < 12 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-primary/60 dark:text-white/60`}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>  
      </div>
    </section>
  );
};

export default Stats;
