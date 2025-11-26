import React from "react";
import { motion } from "motion/react";

export const AnimationSequences = () => {
  return (
    <div>
      <button
        style={{ width: "30rem" }}
        className="h-20 rounded-lg bg-linear-to-r from-purple-500 via-violet-600 to-indigo-600 text-white font-medium"
      >
        Pay
      </button>
    </div>
  );
};
