import { AppleIcon, BotIcon, Code2Icon, DownloadIcon, Microscope } from "lucide-react";
import { useState } from "react";

const IterationCount = () => {
  return (
    <div className="flex space-x-6 animate-yashmarquee border hover:[animation-play-state:paused]">
      <AppleIcon />
      <Microscope />
      <Code2Icon />
      <DownloadIcon />
      <BotIcon />
      <AppleIcon />
      <Microscope />
      <Code2Icon />
      <DownloadIcon />
      <BotIcon />

    </div>
  )
}

const CursorBlink = () => {
  return (
    <div className="animate-blink">
      |
    </div>
  )
}
const DownloadArrow = () => {
  return (
    <div className="animate-xTranslate hover:[animation-play-state:paused] border bg-amber-900 h-12 w-12 rounded-xl">

    </div>
  )
}

const TextReveal = () => {
  const [count, setCount] = useState(0);
  const paragraph = "Text animation";
  const wordArray = paragraph.split("");
  return (
    <div className="relative h-4/5 w-full">
      <div key={count} className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold overflow-hidden">
          {wordArray.map((char, i) => (
            <span
              key={i}
              className="inline-block animate-textReveal"
              style={{ animationDelay: `${i * 0.03}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

      </div>

      <button className="absolute bottom-0 inset-x-0 mx-auto w-fit px-4 py-2 self-center mb-4 border hover:bg-[#f8f9fa] font-inter
 rounded-xl hover:text-black font-semibold flex justify-center items-center hover:scale-[1.01] duration-150 ease-out active:scale-[0.97] bg-[#f5f3f4] text-[#252422] shadow-xs border-[#d3d3d3]" onClick={() => setCount((prev) => prev + 1)}>
        Replay animation
      </button>

    </div>
  )
}

const Orbit = () => {
  return (
    <div className="relative h-full w-full transform-3d perspective-[700px]">
      <div className="bg-yellow-400 h-18 w-18 rounded-full absolute inset-0 mx-auto my-auto">

      </div>
      <div className="bg-blue-400 h-8 w-8 rounded-full absolute inset-0 mx-auto my-auto animate-orbit">

      </div>
    </div>
  )
}

const HeartBeatCoin = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <div className="absolute bg-blue-600 rounded-full h-6 w-6 animate-heartbeat">

      </div>
      <div className="absolute bg-blue-600 rounded-full h-6 w-6 animate-heartbeat" style={{ animationDelay: '2s' }}>

      </div>
      <div className="absolute bg-amber-500 rounded-full h-12 w-12 flex justify-center items-center animate-CoinRotate">
        <span>$</span>
      </div>

    </div>

  )
}

const KeyframePractice = () => {
  const [transitionType, setTransitionType] = useState<
    "TextReveal" | "Orbit" | "HeartBeatCoin"
  >("TextReveal");

  const transitions = {
    TextReveal: <TextReveal />,
    Orbit: <Orbit />,
    HeartBeatCoin: <HeartBeatCoin />,
  };

  const transitionDescriptions = {
    TextReveal: "Each letter in the word is shown with a slight delay",
    Orbit: "Element orbiting around another element",
    HeartBeatCoin: "Rotating coin with heartbeat background",
  };




  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-100">
      <div className="flex justify-between w-1/2 px-4 py-1 items-center space-x-4 rounded-xl border border-[#c7c7d0] shadow-sm mb-2">
        <button
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e] ${transitionType === "TextReveal" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("TextReveal")}
        >
          Text Reveal
        </button>
        <button
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType === "Orbit" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("Orbit")}
        >
          Orbiting animation
        </button>
        <button
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType === "HeartBeatCoin" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("HeartBeatCoin")}
        >
          heartbeat coin
        </button>
      </div>
      <div className="border h-100 w-1/2 flex justify-center items-center rounded-3xl border-[#c7c7d0] shadow-sm overflow-hidden">
        {transitions[transitionType] ?? null}
      </div>
      <div className="w-1/2 text-center text-[#66666e]">
        {transitionDescriptions[transitionType] ?? null}
      </div>
    </div>
  );
};

export default KeyframePractice;