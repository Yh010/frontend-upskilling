import React from "react";
import { motion, useAnimate } from "motion/react";

export const AnimationSequences = () => {
  const [scope, animate] = useAnimate();
  const startAnimating = async () => {
    animate(
      ".loader",
      {
        opacity: 1,
        width: "2rem",
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      ".loader",
      {
        rotate: 360 * 4,
      },
      {
        duration: 2,
      }
    );
    await animate(
      ".loader",
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      ".text",
      {
        display: "none",
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      "button",
      {
        width: "5rem",
        borderRadius: "1000px",
      },
      {
        duration: 0.3,
      }
    );
    await animate(
      "button",
      {
        opacity: 1,
        scale: [0, 1.2, 0.8, 1],
        backgroundImage: "linear-gradient(to right,#00ff99,#00ccff)",
      },
      {
        duration: 0.8,
      }
    );
    animate(
      "button",
      {
        backgroundImage: "linear-gradient(to right,#00ff99,#00ccff)",
      },
      {
        duration: 0.8,
      }
    );
    animate(
      ".check-icon",
      {
        opacity: 1,
      },
      {
        duration: 0.1,
      }
    );
    animate(
      ".check-icon path",
      {
        pathLength: 1,
      },
      {
        duration: 0.3,
      }
    );
  };

  return (
    <div
      ref={scope}
      className="relative w-120 h-20 flex justify-center items-center"
    >
      <motion.button
        onClick={startAnimating}
        style={{ width: "30rem" }}
        className="h-20 rounded-lg bg-linear-to-r flex justify-center items-center from-purple-500 via-violet-600 to-indigo-600 text-white font-medium cursor-pointer"
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="loader h-5 w-5 text-white"
          initial={{
            width: "0rem",
          }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>
        <span className="text">Pay $10</span>
      </motion.button>

      <motion.svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="#FFFFFF"
        strokeWidth={3}
        style={{
          opacity: 0,
        }}
        className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
      >
        <motion.path
          initial={{
            pathLength: 0,
          }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeInOut",
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </motion.svg>
    </div>
  );
};
