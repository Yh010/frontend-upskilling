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

const AppStoreCard = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.button layout onClick={() => setExpand(!expand)} className={`relative ${expand ? "fixed inset-0 mx-auto my-auto w-2/5 h-full" : "h-1/2 w-1/4"}`}>
        <img src="/COC.png" className="absolute inset-0 rounded-lg h-full w-full" />
        {expand && (
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.005 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-white absolute bottom-0 w-full text-sm"
          >
            <div className="relative w-full text-left">
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

              <span className="relative px-4 block py-3 font-semibold">
                Clash of Clans is a popular mobile strategy game developed by Supercell.
                In the game, players build and upgrade their own village, train troops,
                and attack other players to earn resources.
              </span>
            </div>
          </motion.div>
        )}


      </motion.button>
    </div >

  )
}

const Tabs = () => {

  const TABS = ["Button1", "Button2", "Button3", "Button4"] as const;
  const [transitionType, setTransitionType] = useState<
    "Button1" | "Button2" | "Button3" | "Button4"
  >("Button1");



  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex justify-between w-fit px-4 py-1 items-center space-x-4 rounded-xl border border-[#c7c7d0] shadow-sm mb-2">
        {TABS.map((tab) => (
          <motion.button className="relative rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e] border-[#b1a7a6]"
            onClick={() => setTransitionType(tab)}>
            {transitionType === tab ? (
              <motion.div layoutId="tab-indicator" className="absolute inset-0 rounded-lg bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black flex justify-center items-center">
              </motion.div>) : null}
            <span className="relative text-inherit">{tab}</span>
          </motion.button>
        ))}
      </div>
    </div >

  )
}
const KeyframePractice = () => {
  const [transitionType, setTransitionType] = useState<
    "SimpleButton" | "Switch" | "AppStoreCard" | "Tabs"
  >("SimpleButton");

  const transitions = {
    SimpleButton: <SimpleButton />,
    Switch: <Switch />,
    AppStoreCard: <AppStoreCard />,
    Tabs: <Tabs />
  };

  const transitionDescriptions = {
    SimpleButton: "Simple scale-up and translate animation.",
    Switch: "Switch animation",
    AppStoreCard: "Rotating coin with heartbeat background",
    Tabs: "Tabs"
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
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType === "AppStoreCard" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("AppStoreCard")}
        >
          Simple card
        </button>
        <button
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType === "Tabs" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("Tabs")}
        >
          Tabs
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