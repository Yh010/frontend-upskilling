import { motion } from "motion/react";
import { useState } from "react";

export const ThreeDCard = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.07 },
  };

  const titleVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const subtitleVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.15 },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.15 },
  };

  const handleMove = (e: any) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // mouse pos inside card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // normalize between -0.5 and +0.5
    const normX = mouseX / rect.width - 0.5;
    const normY = mouseY / rect.height - 0.5;

    // max rotation angles
    const maxX = 20; // rotateX (top/bottom tilt)
    const maxY = 20; // rotateY (left/right tilt)

    setRotation({
      x: -(normY * maxX), // invert so top tilts backward
      y: normX * maxY,
    });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 p-6">
      <div style={{ perspective: "800px" }}>
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          onMouseMove={handleMove}
          onMouseLeave={resetRotation}
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          className="w-80 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-700 p-6 card"
        >
          <motion.h2
            variants={titleVariants}
            className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 card-title text-center"
          >
            Minimal Card
          </motion.h2>

          <motion.p
            variants={subtitleVariants}
            className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm leading-relaxed card-subtitle"
          >
            A clean, modern card component. You can now add your motion effects
            or 3D interactions on top of this structure.
          </motion.p>

          <motion.div
            variants={buttonVariants}
            className="mt-4 card-button flex justify-center items-center"
          >
            <button className="px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-medium">
              Button
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
