import { useAnimate, motion, stagger } from "motion/react";
import React, { useEffect } from "react";

export const AnimatedText = () => {
  const text =
    "Yash is the best designer the world has ever seen. Whoever thinks otherwise, F*#K Y@&";
  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      }
    );
  };
  return (
    <div
      ref={scope}
      className="max-w-4xl text-white mx-auto font-bold text-4xl"
    >
      {text.split(" ").map((item, idx) => (
        <motion.span
          key={item + idx}
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          className="inline-block"
        >
          {item} &nbsp;
        </motion.span>
      ))}
    </div>
  );
};
