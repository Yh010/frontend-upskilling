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

  return (
    <div className="relative">
      {/* Open Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-neutral-900 text-white rounded-md"
        >
          Menu
        </button>
      )}

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl`}
      >
        {/* Close Button INSIDE sidebar */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="absolute top-4 right-4 px-3 py-1 bg-neutral-900 text-white rounded-md"
        >
          ✕
        </button>

        {open && (
          <>
            <div className="p-4 font-bold text-neutral-900 text-lg">
              Sidebar
            </div>

            <nav className="divide-y divide-neutral-200 mt-8">
              <button className="w-full text-left p-4 hover:bg-neutral-100">
                Dashboard
              </button>
              <button className="w-full text-left p-4 hover:bg-neutral-100">
                Settings
              </button>
              <button className="w-full text-left p-4 hover:bg-neutral-100">
                Profile
              </button>
            </nav>
          </>
        )}
      </motion.div>
    </div>
  );
}
