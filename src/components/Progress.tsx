import React, { useState } from "react";
import { motion } from "motion/react";

const Progress = () => {
  const [progress1, setProgress1] = useState(75);
  const [progress2, setProgress2] = useState(75);
  const [progress3, setProgress3] = useState(75);

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

          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="#14b8a6"
            strokeWidth="16"
            {...createSegmentProps(progress1, segment1Start)}
            strokeLinecap="round"
            className={`transition-all duration-300`}
            style={{
              filter: "drop-shadow(0 0 8px #14b8a6)",
              transformOrigin: "center",
            }}
            // onMouseEnter={() => setHoveredSegment(1)}
            // onMouseLeave={() => setHoveredSegment(null)}
          />
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="#ec4899"
            strokeWidth="16"
            {...createSegmentProps(progress2, segment2Start)}
            strokeLinecap="round"
            className={`transition-all duration-300`}
            style={{
              filter: "drop-shadow(0 0 8px #ec4899)",
              transformOrigin: "center",
            }}
            // onMouseEnter={() => setHoveredSegment(1)}
            // onMouseLeave={() => setHoveredSegment(null)}
          />
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="#d97706"
            strokeWidth="16"
            {...createSegmentProps(progress3, segment3Start)}
            strokeLinecap="round"
            className={`transition-all duration-300`}
            style={{
              filter: "drop-shadow(0 0 8px #d97706)",
              transformOrigin: "center",
            }}
            // onMouseEnter={() => setHoveredSegment(1)}
            // onMouseLeave={() => setHoveredSegment(null)}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-white text-5xl font-bold">109</div>
          <div className="text-gray-400 text-lg">1018</div>
        </div>
      </div>
      <div className="mt-12 space-y-4 w-full max-w-md">
        <div>
          <label className="text-teal-400 text-sm font-medium mb-2 block">
            Segment 1 (Teal): {progress1}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={progress1}
            onChange={(e) => setProgress1(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
          />
        </div>
        <div>
          <label className="text-pink-400 text-sm font-medium mb-2 block">
            Segment 2 (Pink): {progress2}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={progress2}
            onChange={(e) => setProgress2(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
          />
        </div>
        <div>
          <label className="text-amber-600 text-sm font-medium mb-2 block">
            Segment 3 (Amber): {progress3}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={progress3}
            onChange={(e) => setProgress3(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
