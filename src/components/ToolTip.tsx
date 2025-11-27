import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const ToolTip = () => {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [placement, setPlacement] = useState("right");

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMouse({ x, y });

    const distTop = y;
    const distBottom = rect.height - y;
    const distLeft = x;
    const distRight = rect.width - x;

    const min = Math.min(distTop, distBottom, distLeft, distRight);

    if (min === distTop) setPlacement("top");
    else if (min === distBottom) setPlacement("bottom");
    else if (min === distLeft) setPlacement("left");
    else if (min === distRight) setPlacement("right");
  };

  const calculatePosition = (x: number, y: number, placement: string) => {
    const offset = 10;

    switch (placement) {
      case "top":
        return { x: x - 20, y: y - 50 - offset };
      case "bottom":
        return { x: x - 20, y: y + offset };
      case "left":
        return { x: x - 100 - offset, y: y - 16 };
      case "right":
        return { x: x + offset, y: y - 16 };
      default:
        return { x, y };
    }
  };

  useEffect(() => {
    if (hovered) {
      setPosition(calculatePosition(mouse.x, mouse.y, placement));
    }
  }, [mouse, hovered]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0d1b2a]">
      <div className="relative inline-block">
        <motion.button
          onHoverStart={() => {
            setHovered(true);
          }}
          onHoverEnd={() => {
            setHovered(false);
          }}
          onMouseMove={handleMouseMove}
          className="py-2 px-4 bg-black rounded-md text-white"
        >
          tooltip
        </motion.button>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "44px", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              style={{ top: position.y, left: position.x }}
              className="absolute rounded-md shadow-md bg-neutral-900 text-white min-w-6 flex justify-center items-center w-auto whitespace-nowrap px-4"
            >
              <div>hey there</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
