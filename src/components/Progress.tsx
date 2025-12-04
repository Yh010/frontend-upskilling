import React, { useState } from "react";
import { motion } from "framer-motion";

const Progress = () => {
  const [progress1, setProgress1] = useState(75);
  const [progress2, setProgress2] = useState(75);
  const [progress3, setProgress3] = useState(75);

  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const segmentLength = circumference * 0.3;
  const gapLength = circumference * 0.0333;

  const createSegmentProps = (progress: any, startOffset: any) => {
    const filledLength = (segmentLength * progress) / 100;
    return {
      strokeDasharray: `${filledLength} ${circumference}`,
      strokeDashoffset: -startOffset,
    };
  };

  const segment1Start = 0;
  const segment2Start = segmentLength + gapLength;
  const segment3Start = (segmentLength + gapLength) * 2;
  const active = hovered1 ? 1 : hovered2 ? 2 : hovered3 ? 3 : 0;

  return (
    <div className="min-h-screen flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 p-6 dark:text-neutral-100">
      <div className="relative">
        <svg className="transform -rotate-90" width="240" height="240">
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="16"
            strokeDasharray={`${segmentLength} ${circumference}`}
            strokeDashoffset={-segment1Start}
            strokeLinecap="round"
          />
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="16"
            strokeDasharray={`${segmentLength} ${circumference}`}
            strokeDashoffset={-segment2Start}
            strokeLinecap="round"
          />
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="16"
            strokeDasharray={`${segmentLength} ${circumference}`}
            strokeDashoffset={-segment3Start}
            strokeLinecap="round"
          />

          <motion.g
            animate={{
              scale: hovered1 ? 1.15 : 1,
              opacity: active === 0 || active === 1 ? 1 : 0.3,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ transformOrigin: "120px 120px" }}
          >
            <circle
              cx="120"
              cy="120"
              r={radius}
              fill="none"
              stroke="#14b8a6"
              strokeWidth="20"
              {...createSegmentProps(progress1, segment1Start)}
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 8px #14b8a6)",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
            />
          </motion.g>

          <motion.g
            animate={{
              scale: hovered2 ? 1.15 : 1,
              opacity: active === 0 || active === 2 ? 1 : 0.3,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ transformOrigin: "120px 120px" }}
          >
            <circle
              cx="120"
              cy="120"
              r={radius}
              fill="none"
              stroke="#ec4899"
              strokeWidth="20"
              {...createSegmentProps(progress2, segment2Start)}
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 8px #ec4899)",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            />
          </motion.g>

          <motion.g
            animate={{
              scale: hovered3 ? 1.15 : 1,
              opacity: active === 0 || active === 3 ? 1 : 0.3,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ transformOrigin: "120px 120px" }}
          >
            <circle
              cx="120"
              cy="120"
              r={radius}
              fill="none"
              stroke="#d97706"
              strokeWidth="20"
              {...createSegmentProps(progress3, segment3Start)}
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 8px #d97706)",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
            />
          </motion.g>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-5xl font-bold">109</div>
          <div className="text-gray-400 text-lg">1018</div>
        </div>
      </div>
      <div className="mt-12 space-y-4 w-full max-w-md">
        <motion.div
          onHoverStart={() => setHovered1(true)}
          onHoverEnd={() => setHovered1(false)}
          animate={{
            scale: hovered1 ? 1.05 : 1,
            opacity: active === 0 || active === 1 ? 1 : 0.3,
          }}
        >
          <label className="text-teal-400 text-sm font-medium mb-2 block">
            Progress 1 (Teal): {progress1}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={progress1}
            onChange={(e) => setProgress1(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
          />
        </motion.div>
        <motion.div
          onHoverStart={() => setHovered2(true)}
          onHoverEnd={() => setHovered2(false)}
          animate={{
            scale: hovered2 ? 1.05 : 1,
            opacity: active === 0 || active === 2 ? 1 : 0.3,
          }}
        >
          <label className="text-pink-400 text-sm font-medium mb-2 block">
            Progress 2 (Pink): {progress2}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={progress2}
            onChange={(e) => setProgress2(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
          animate={{
            scale: hovered3 ? 1.05 : 1,
            opacity: active === 0 || active === 3 ? 1 : 0.3,
          }}
        >
          <label className="text-amber-600 text-sm font-medium mb-2 block">
            Progress 3 (Amber): {progress3}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={progress3}
            onChange={(e) => setProgress3(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Progress;
