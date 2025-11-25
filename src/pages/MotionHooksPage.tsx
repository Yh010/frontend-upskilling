import React, { useRef, useState } from "react";
import MotionHooks from "../components/MotionHooks";
import { useMotionValueEvent, useScroll, motion } from "motion/react";

function MotionHooksPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#0f0f0f", "#1e1e2f", "#16212f"];
  const [background, setBackground] = useState(backgrounds[0]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setBackground(backgrounds[Math.floor(latest * backgrounds.length)]);
  });
  return (
    <motion.div
      ref={containerRef}
      animate={{
        background: background,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="flex min-h-screen justify-center items-center bg-neutral-900"
    >
      <MotionHooks />
    </motion.div>
  );
}

export default MotionHooksPage;
