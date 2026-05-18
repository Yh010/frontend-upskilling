import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const sidebarVariants = {
    open: {
      width: "16rem",
    },
    closed: {
      width: "4.5rem",
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: -10,
    },
  };

  const listAnimation = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: -1,
      },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={open ? "open" : "closed"}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        variants={sidebarVariants}
        className="fixed top-0 left-0 h-full bg-white shadow-xl"
      >
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="absolute top-4 right-4 rounded-md bg-neutral-900 px-3 py-1 text-white z-10"
        >
          {open ? "Close" : "Menu"}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 text-lg font-bold text-neutral-900"
            >
              Sidebar
            </motion.div>
          )}
        </AnimatePresence>

        <motion.nav
          variants={listAnimation}
          className="mt-8 divide-y divide-neutral-200"
        >
          <motion.button
            variants={itemVariants}
            className="w-full p-4 text-left hover:bg-neutral-100"
          >
            Dashboard
          </motion.button>
          <motion.button
            variants={itemVariants}
            className="w-full p-4 text-left hover:bg-neutral-100"
          >
            Settings
          </motion.button>
          <motion.button
            variants={itemVariants}
            className="w-full p-4 text-left hover:bg-neutral-100"
          >
            Profile
          </motion.button>
        </motion.nav>
      </motion.div>
    </motion.div>
  );
}
