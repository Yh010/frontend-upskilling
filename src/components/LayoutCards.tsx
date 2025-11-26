import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

function LayoutCards() {
  const cards = [
    {
      description: "Lana Del Rey",
      title: "Summertime Sadness",
      src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => (
        <p className="text-[10px] text-neutral-500">
          Lana Del Rey, known for her cinematic sound and nostalgic themes, has
          inspired millions with her emotional songwriting and haunting vocals.
          <br />
          <br />
          Her music frequently explores love, loss, and the complexities of
          Americana culture.
          <br />
          Lana Del Rey, known for her cinematic sound and nostalgic themes, has
          inspired millions with her emotional songwriting and haunting vocals.
          <br />
          <br />
          Her music frequently explores love, loss, and the complexities of
          Americana culture.
          <br /> Lana Del Rey, known for her cinematic sound and nostalgic
          themes, has inspired millions with her emotional songwriting and
          haunting vocals.
          <br />
          <br />
          Her music frequently explores love, loss, and the complexities of
          Americana culture.
        </p>
      ),
    },
    {
      description: "The Weeknd",
      title: "Blinding Lights",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      ctaText: "Listen",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => (
        <p className="text-[10px] text-neutral-500">
          The Weeknd blends R&B, pop, and electronic influences, creating a
          unique and atmospheric style recognized worldwide.
          <br />
          <br />
          His work often reflects themes of desire, escapism, and emotional
          turmoil.
        </p>
      ),
    },
    {
      description: "Billie Eilish",
      title: "Ocean Eyes",
      src: "https://assets.aceternity.com/demos/metallica.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => (
        <p className="text-[10px] text-neutral-500">
          Billie Eilish's whispery vocals and experimental production styles
          have reshaped modern pop.
          <br />
          <br />
          Her music explores vulnerability, self-reflection, and raw emotional
          storytelling.
        </p>
      ),
    },
    {
      description: "Taylor Swift",
      title: "Cardigan",
      src: "https://assets.aceternity.com/demos/metallica.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => (
        <p className="text-[10px] text-neutral-500">
          Taylor Swift is celebrated for narrative-driven songwriting, blending
          folk, pop, and indie influences.
          <br />
          <br />
          Her work frequently delves into relationships, identity, and the
          emotional intricacies of growing up.
        </p>
      ),
    },
    {
      description: "Frank Ocean",
      title: "Nights",
      src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
      ctaText: "Listen",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => (
        <p className="text-[10px] text-neutral-500">
          Frank Ocean is known for his genre-bending approach, blending R&B,
          alternative, and soulful minimalism.
          <br />
          <br />
          His lyrics often explore identity, longing, and deeply personal
          experiences.
        </p>
      ),
    },
  ];
  const [current, setCurrent] = useState<any>(null);
  const ref = useOutsideClick(() => setCurrent(null));
  return (
    <div className="min-h-screen bg-gray-100 py-10 relative">
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"
        ></motion.div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="h-[500px] fixed inset-0 z-20 m-auto bg-white w-72 rounded-2xl border border-neutral-200 p-4 overflow-hidden"
        >
          <motion.img
            layoutId={`cardImage-${current.title}`}
            src={current.src}
            alt={current.title}
            className="w-full aspect-square rounded-xl"
          />
          <div className="flex flex-col justify-between items-start">
            <div className="flex justify-between w-full items-start py-4 gap-2">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`cardTitle-${current.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`cardDesc-${current.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {current.description}
                </motion.p>
              </div>
              <motion.a
                layoutId={`cardctaText-${current.title}`}
                href={current.ctaLink}
                className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
              >
                {current.ctaText}
              </motion.a>
            </div>
            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                ease: "easeInOut",
              }}
              className="h-60 overflow-auto pb-20 mask-[linear-gradient(to_top,transparent_20%,black_80%)]"
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card, idx) => {
          return (
            <motion.button
              layoutId={`card-${card.title}`}
              key={card.title}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event from bubbling
                setCurrent(card);
              }}
              className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200"
            >
              <div className="flex gap-4 items-center">
                <motion.img
                  layoutId={`cardImage-${card.title}`}
                  src={card.src}
                  alt={card.title}
                  className="h-14 aspect-square rounded-lg"
                />
                <div className="flex flex-col items-start gap-2">
                  <motion.h2
                    layoutId={`cardTitle-${card.title}`}
                    className="font-bold text-xs tracking-tight text-black"
                  >
                    {card.title}
                  </motion.h2>
                  <motion.p
                    layoutId={`cardDesc-${card.title}`}
                    className="text-[10px] text-neutral-500"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>

              <motion.a
                layoutId={`cardctaText-${card.title}`}
                href={card.ctaLink}
                className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
              >
                {card.ctaText}
              </motion.a>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default LayoutCards;
