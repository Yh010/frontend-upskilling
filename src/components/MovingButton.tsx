import React from "react";
import { motion } from "motion/react";

function MovingButton() {
  return (
    <motion.button
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 10, 0, 5, 0, 2.5, 0, 1, 0] }}
      whileHover={{
        // rotateX: 25,
        // rotateY: 10,
        rotate: 25,
        boxShadow: "0px 0.5px 5px rgba(8,112,184,0.7)",
        //y: -5,
      }}
      whileTap={{
        y: 100,
      }}
      style={{ translateZ: 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative group text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
    >
      MovingButton
      <span className="absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-full mx-auto blur-sm"></span>
    </motion.button>
  );
}

export default MovingButton;
