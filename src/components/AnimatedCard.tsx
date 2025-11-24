import { Bell, FileText, Settings, X } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function AnimatedCard() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-72 min-h-[26rem] h-[28rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex flex-col p-4"
          >
            <h2 className="text-xl font-bold text-neutral-900">
              Modern Interface
            </h2>
            <p className="text-neutral-600 mt-1 text-sm">
              A minimal card with depth and clarity.
            </p>
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={() => setOpen(false)}
                className=" flex gap-2 items-center px-5 py-2 rounded-lg bg-neutral-900 text-white text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.15)] hover:bg-neutral-800 transition"
              >
                Explore <X className="h-4 w-4" />
              </button>
            </div>
            <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200"
              >
                <div className="flex items-center gap-3 p-4">
                  <FileText className="w-5 h-5 text-neutral-600" />
                  <span className="text-neutral-800 font-medium">
                    Documents
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4">
                  <Bell className="w-5 h-5 text-neutral-600" />
                  <span className="text-neutral-800 font-medium">
                    Notifications
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4">
                  <Settings className="w-5 h-5 text-neutral-600" />
                  <span className="text-neutral-800 font-medium">
                    Preferences
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4">
                  <Settings className="w-5 h-5 text-neutral-600" />
                  <span className="text-neutral-800 font-medium">
                    Preferences
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4">
                  <Settings className="w-5 h-5 text-neutral-600" />
                  <span className="text-neutral-800 font-medium">
                    Preferences
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!open && (
          <motion.div
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
          >
            <button
              onClick={() => setOpen(true)}
              className=" flex gap-2 items-center px-5 py-2 rounded-lg bg-neutral-900 text-white text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.15)] hover:bg-neutral-800 transition"
            >
              open
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AnimatedCard;
