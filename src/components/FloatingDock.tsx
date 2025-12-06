import {
  Component,
  GitBranchPlus,
  Home,
  LogIn,
  Terminal,
  Twitch,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const items = [
  {
    icon: <Home />,
    tooltip: "Home",
  },
  {
    icon: <Terminal />,
    tooltip: "Terminal",
  },
  {
    icon: <Component />,
    tooltip: "Component",
  },
  {
    icon: <LogIn />,
    tooltip: "LogIn",
  },
  {
    icon: <GitBranchPlus />,
    tooltip: "GitBranchPlus",
  },
  {
    icon: <Twitch />,
    tooltip: "Twitch",
  },
];

const FloatingDock = () => {
  const [activeId, setActiveId] = useState<any>(null);

  return (
    <div className="min-h-screen flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 p-6 dark:text-neutral-100">
      <motion.div
        whileHover={{
          scaleX: 1.1,
        }}
        className="bg-neutral-800 min-w-1/3 flex justify-evenly items-center rounded-xl py-3 px-4 gap-x-2 overflow-visible"
      >
        {items.map((item, idx) => (
          <div className="relative flex flex-col items-center">
            <AnimatePresence>
              {idx == activeId && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    scale: 1.1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  className="absolute -top-15 bg-neutral-700 text-sm px-2 py-1 rounded-md whitespace-nowrap shadow-lg z-50"
                >
                  <span>{item.tooltip}</span>{" "}
                </motion.div>
              )}{" "}
            </AnimatePresence>
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.5,
                y: -15,
              }}
              onHoverStart={() => {
                setActiveId(idx);
              }}
              onHoverEnd={() => {
                setActiveId(null);
              }}
              className="rounded-full bg-neutral-700 p-2"
            >
              <div>{item.icon}</div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingDock;
