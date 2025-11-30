import React from "react";
import { motion } from "motion/react";
import { LucideLinkedin } from "lucide-react";

const UnderlineEffect = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 p-6 dark:text-neutral-100 space-x-8 mx-auto max-w-sm  md:max-w-4xl lg:max-w-full lg:px-12 md:px-8 antialiased  px-4 py-20">
      <div className="relative inline-block">
        <h1 className="text-6xl flex font-bold gap-x-3">
          Your LinkedIn{" "}
          <LucideLinkedin className="bg-blue-800 fill-white p-1 rounded-lg rotate-12 h-12 w-12" />
          <span className="relative inline-block">
            DMs
            {/* Scribble SVG */}
            <svg
              className="absolute left-0 -bottom-2 w-full"
              viewBox="0 0 200 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M5 15 Q 40 10, 80 12 T 150 13 Q 180 14, 195 12"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>
          </span>
          . Reimagined.
        </h1>
      </div>
    </div>
  );
};

export default UnderlineEffect;
