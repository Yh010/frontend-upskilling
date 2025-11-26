import React, { useState } from "react";
import { motion } from "motion/react";

export const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "movingbutton",
      href: "/movingbutton",
    },
    {
      title: "animatedcard",
      href: "/animatedcard",
    },
    {
      title: "sidebar",
      href: "/sidebar",
    },
    {
      title: "motionhooks",
      href: "/motionhooks",
    },
    {
      title: "layout",
      href: "/layout",
    },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="py-40">
      <nav className="max-w-xl mx-auto bg-gray-100 rounded-full px-2 py-1 flex h-12 justify-center items-center">
        {navItems.map((item, idx) => {
          return (
            <a
              onMouseEnter={() => {
                setHovered(idx);
              }}
              onMouseLeave={() => {
                setHovered(null);
              }}
              href={item.href}
              key={item.title}
              className="w-full h-full flex justify-center items-center relative group text-center text-xs text-neutral-500"
            >
              <span className="relative z-20 group-hover:text-neutral-300 text-neutral-500">
                {item.title}
              </span>
              {hovered === idx && (
                <motion.div
                  layoutId="hover"
                  className="absolute inset-0 rounded-full w-full h-full bg-black"
                ></motion.div>
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
