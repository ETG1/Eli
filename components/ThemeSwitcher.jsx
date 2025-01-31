"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon, BsLaptop } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  {
    name: "Light",
    icon: <BsSun className="text-xl" />,
    value: "light",
  },
  {
    name: "Dark",
    icon: <BsMoon className="text-xl" />,
    value: "dark",
  },
  {
    name: "System",
    icon: <BsLaptop className="text-xl" />,
    value: "system",
  },
];

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = themes.find((t) => t.value === theme) || themes[0];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 dark:bg-white/10 backdrop-blur-sm border border-primary/10 dark:border-white/10 text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/20 transition-all duration-300"
        >
          {currentTheme.icon}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-12 right-0 min-w-[150px] py-2 rounded-lg bg-white/80 dark:bg-white/10 backdrop-blur-md border border-primary/10 dark:border-white/10"
            >
              {themes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => {
                    setTheme(t.value);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-primary dark:text-white hover:bg-primary/5 dark:hover:bg-white/5 transition-colors"
                >
                  {t.icon}
                  <span>{t.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ThemeSwitcher; 