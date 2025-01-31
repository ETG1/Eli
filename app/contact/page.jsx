"use client";

import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

//components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "(+27) 71 234 5678",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "elithegreat018@gmail.com",
  },
  {
    icon: <IoLocation />,
    title: "Location",
    description: "Johannesburg, South Africa",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[65vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="flex-1">
            <h2 className="text-[32px] mb-8 font-bold text-primary dark:text-white">Let's Connect</h2>
            <form className="flex flex-col gap-6">
              {/* input group */}
              <div className="flex gap-6">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
              </div>
              {/* subject */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="programming">Programming</SelectItem>
                  <SelectItem value="collaboration">Collaboration</SelectItem>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[42px] h-[42px] xl:w-[62px] xl:h-[62px] bg-primary/5 dark:bg-[#27272c] text-cyan-400 rounded-md flex items-center justify-center">
                      <div className="text-[18px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-primary/60 dark:text-white/60">{item.title}</p>
                      <h3 className="text-md text-primary dark:text-white">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
