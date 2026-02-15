import { useState } from "react";
import { motion } from "framer-motion";

const SimpleButton = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative h-4/5 w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div animate={{ scale: play ? 1.5 : 1, y: play ? -40 : 0 }} className="h-20 w-20 bg-gray-500 rounded-2xl"></motion.div>
      </div>

      <button className="absolute bottom-0 inset-x-0 mx-auto w-fit px-4 py-2 self-center mb-4 border hover:bg-[#f8f9fa] font-inter
 rounded-xl hover:text-black font-semibold flex justify-center items-center hover:scale-[1.01] duration-150 ease-out active:scale-[0.97] bg-[#f5f3f4] text-[#252422] shadow-xs border-[#d3d3d3]" onClick={() => setPlay((prev) => !prev)}>
        Play animation
      </button>

    </div>
  )
}

const Switch = () => {
  const [switchOn, setSwitchOn] = useState(false);
  const toggle = () => {
    setSwitchOn(!switchOn);
  }
  return (
    <div className="h-full w-full flex justify-center items-center">
      <motion.button layout onClick={toggle} className={`h-14 w-1/5 rounded-full flex ${switchOn ? "justify-end bg-yellow-400" : "bg-[#e9ecef] justify-start"} items-center px-2`}>
        <motion.div layout transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }} className={`${switchOn ? "bg-blue-400" : "bg-[#adb5bd]"} h-12 w-12 rounded-full`}>

        </motion.div>
      </motion.button>

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
    "SimpleButton" | "Switch" | "HeartBeatCoin"
  >("SimpleButton");

  const transitions = {
    SimpleButton: <SimpleButton />,
    Switch: <Switch />,
    HeartBeatCoin: <HeartBeatCoin />,
  };

  const transitionDescriptions = {
    SimpleButton: "Simple scale-up and translate animation.",
    Switch: "Switch animation",
    HeartBeatCoin: "Rotating coin with heartbeat background",
  };




  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-100">
      <div className="flex justify-between w-1/2 px-4 py-1 items-center space-x-4 rounded-xl border border-[#c7c7d0] shadow-sm mb-2">
        <button
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e] ${transitionType === "SimpleButton" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("SimpleButton")}
        >
          Simple transition
        </button>
        <button
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType === "Switch" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("Switch")}
        >
          Switch animation
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