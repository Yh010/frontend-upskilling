import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const Particles = () => {
  const [exploding, setIsExploding] = useState(false);
  const [particles, setParticles] = useState<any>([]);

  const generateParticles = () => {
    const newParticles = [];
    const buttonWidth = 250;
    const buttonHeight = 40;
    const particlesPerRow = 40;
    const rows = 8;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < particlesPerRow; col++) {
        const xPos = (col / particlesPerRow) * buttonWidth - buttonWidth / 2;
        const yPos = (row / rows) * buttonHeight - buttonHeight / 2;

        // Calculate delay based on x position (right to left)
        const normalizedX = col / particlesPerRow; // 0 to 1
        const baseDelay = (1 - normalizedX) * 0.5; // Right side starts first

        newParticles.push({
          id: `${row}-${col}`,
          startX: xPos,
          startY: yPos,
          endX: xPos + (Math.random() * 100 - 50),
          endY: yPos + (Math.random() * 100 - 50) - 30, // Slight upward bias
          size: Math.random() * 3 + 2,
          delay: baseDelay + Math.random() * 0.1,
          duration: Math.random() * 0.4 + 1.5,
        });
      }
    }

    return newParticles;
  };

  const handleClick = () => {
    setIsExploding(true);
    setParticles(generateParticles());

    setTimeout(() => {
      setIsExploding(false);
      setParticles([]);
    }, 2000);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="relative flex justify-center items-center px-2">
        <motion.button
          className="border-4 py-2 px-4 cursor-grab rounded-xl border-black bg-white z-1 overflow-visible"
          onClick={handleClick}
          whileHover={{ scale: exploding ? 1 : 1.05 }}
          whileTap={{ scale: exploding ? 1 : 0.95 }}
          animate={{
            clipPath: exploding ? "inset(0 100% 0 0)" : "inset(0 0% 0 0)",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ width: "250px" }}
        >
          <span>Click me</span>
        </motion.button>
        <AnimatePresence>
          {exploding &&
            particles.map((particle: any) => (
              <motion.div
                key={particle.id}
                className="absolute bg-black rounded-full pointer-events-none"
                style={{
                  width: particle.size,
                  height: particle.size,
                  left: "50%",
                  top: "50%",
                }}
                initial={{
                  x: particle.startX,
                  y: particle.startY,
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  x: particle.endX,
                  y: particle.endY,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  ease: "easeOut",
                }}
              />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
