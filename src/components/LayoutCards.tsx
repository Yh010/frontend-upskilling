import React, { useState } from "react";

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
  return (
    <div className="min-h-screen bg-gray-100 py-10 relative">
      {current && (
        <div className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"></div>
      )}
      {current && (
        <div className="h-[600px] fixed inset-0 z-20 m-auto bg-white w-72 rounded-2xl border border-neutral-200 p-4">
          <img
            src={current.src}
            alt={current.title}
            className="w-full aspect-square rounded-xl"
          />
          <div className="flex flex-col justify-between items-start">
            <div className="flex justify-between w-full items-start py-4 gap-2">
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-bold text-xs tracking-tight text-black">
                  {current.title}
                </h2>
                <p className="text-[10px] text-neutral-500">
                  {current.description}
                </p>
              </div>
              <a
                href={current.ctaLink}
                className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
              >
                {current.ctaText}
              </a>
            </div>
            <div className="h-60 overflow-auto">{current.content()}</div>
          </div>
        </div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card, idx) => {
          return (
            <button
              key={card.title}
              onClick={() => setCurrent(card)}
              className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-14 aspect-square rounded-lg"
                />
                <div className="flex flex-col items-start gap-2">
                  <h2 className="font-bold text-xs tracking-tight text-black">
                    {card.title}
                  </h2>
                  <p className="text-[10px] text-neutral-500">
                    {card.description}
                  </p>
                </div>
              </div>

              <a
                href={card.ctaLink}
                className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
              >
                {card.ctaText}
              </a>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default LayoutCards;
