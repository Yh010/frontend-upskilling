import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

const testimonials = [
  {
    src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&q=80",
    name: "Sarah Thompson",
    designation: "Product Designer, Lumina",
    quote:
      "Working with this platform has been an absolute joy. The experience is intuitive, the animations feel alive, and the final results consistently impress our clients.",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    name: "James Carter",
    designation: "Lead Developer, Horizon",
    quote:
      "The attention to detail is phenomenal. Every interaction feels carefully crafted, and the interface elevates our product in a way nothing else has.",
  },
  {
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&q=80",
    name: "Emily Rodriguez",
    designation: "Marketing Manager, Nova",
    quote:
      "Our team has seen a dramatic improvement in engagement. The fluid transitions and motion effects give our brand an unmistakable identity.",
  },
  {
    src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&q=80",
    name: "Sarah Thompson",
    designation: "Product Designer, Lumina",
    quote:
      "Working with this platform has been an absolute joy. The experience is intuitive, the animations feel alive, and the final results consistently impress our clients.",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    name: "James Carter",
    designation: "Lead Developer, Horizon",
    quote:
      "The attention to detail is phenomenal. Every interaction feels carefully crafted, and the interface elevates our product in a way nothing else has.",
  },
  {
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&q=80",
    name: "Emily Rodriguez",
    designation: "Marketing Manager, Nova",
    quote:
      "Our team has seen a dramatic improvement in engagement. The fluid transitions and motion effects give our brand an unmistakable identity.",
  },
  {
    src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&q=80",
    name: "Sarah Thompson",
    designation: "Product Designer, Lumina",
    quote:
      "Working with this platform has been an absolute joy. The experience is intuitive, the animations feel alive, and the final results consistently impress our clients.",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    name: "James Carter",
    designation: "Lead Developer, Horizon",
    quote:
      "The attention to detail is phenomenal. Every interaction feels carefully crafted, and the interface elevates our product in a way nothing else has.",
  },
  {
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&q=80",
    name: "Emily Rodriguez",
    designation: "Marketing Manager, Nova",
    quote:
      "Our team has seen a dramatic improvement in engagement. The fluid transitions and motion effects give our brand an unmistakable identity.",
  },
  {
    src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&q=80",
    name: "Sarah Thompson",
    designation: "Product Designer, Lumina",
    quote:
      "Working with this platform has been an absolute joy. The experience is intuitive, the animations feel alive, and the final results consistently impress our clients.",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    name: "James Carter",
    designation: "Lead Developer, Horizon",
    quote:
      "The attention to detail is phenomenal. Every interaction feels carefully crafted, and the interface elevates our product in a way nothing else has.",
  },
  {
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&q=80",
    name: "Emily Rodriguez",
    designation: "Marketing Manager, Nova",
    quote:
      "Our team has seen a dramatic improvement in engagement. The fluid transitions and motion effects give our brand an unmistakable identity.",
  },
];

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 p-6 dark:text-neutral-100 space-x-8 mx-auto max-w-sm  md:max-w-4xl lg:max-w-full lg:px-12 md:px-8 antialiased  px-4 py-20">
      <div className="relative h-40 w-1/4">
        <AnimatePresence>
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.src}
              initial={{
                opacity: 0,
                z: -100,
                scale: 0.9,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(idx) ? 1 : 0.7,
                z: isActive(idx) ? 0 : -100,
                scale: isActive(idx) ? 1.1 : 0.95,
                zIndex: isActive(idx) ? 40 : testimonials.length + 2 - idx,
                rotate: isActive(idx) ? 0 : randomRotateY(),
                y: isActive(idx) ? [0, -80, 0] : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              className="absolute inset-0 origin-bottom"
            >
              <img
                src={item.src}
                alt={item.name}
                width={500}
                height={500}
                className="h-full w-full rounded-3xl object-fit object-center"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-center space-x-6">
        <span>active index is {active}</span>
        <button
          onClick={handlePrev}
          className="cursor-pointer border rounded-full bg-neutral-800 p-1"
        >
          <MoveLeftIcon />
        </button>
        <button
          onClick={handleNext}
          className="cursor-pointer border rounded-full bg-neutral-800 p-1"
        >
          <MoveRightIcon />
        </button>
      </div>
    </div>
  );
};
