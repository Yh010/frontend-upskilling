import { AngryIcon, AppleIcon, BotIcon, Code2Icon, DownloadIcon, Microscope, SmileIcon } from "lucide-react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

const IterationCount = () => {
  return (
    <div className="flex space-x-6 animate-yashmarquee border">
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

const CardHover = () => {
  return (
    <div className="border h-4/5 w-1/2 rounded-2xl border-[#b1a7a6] shadow-sm px-2 pb-2 flex items-end justify-center overflow-hidden group">
      <div className="w-full px-4 py-2 border border-[#dad7cd] rounded-lg bg-[#edede9] flex flex-col translate-y-[calc(100%+10px)] group-hover:translate-y-0 transition duration-300 cubic-bezier(0.19, 1, 0.22, 1)">
        <span className="text-sm font-medium">
          Project Name
        </span>
        <span className="text-[#66666e] text-sm font-light">
          Project Description
        </span>
      </div>
    </div>
  )
}
const DownloadArrow = () => {
  return (
    <div className="border border-[#c7c7d0] shadow-sm h-30 w-30 rounded-full overflow-hidden group flex flex-col justify-center items-center relative">
       <SmileIcon className="absolute h-20 w-20 translate-y-[calc(-150%)] group-hover:translate-y-0 transition duration-300 cubic-bezier(0.19, 1, 0.22, 1) fill-amber-400"/> 
       <AngryIcon className="absolute h-20 w-20 group-hover:translate-y-[calc(150%)] transition duration-300 cubic-bezier(0.19, 1, 0.22, 1) fill-red-600"/>  
    </div>
  )
}

const Toast = () => {
  return (
    <div>
      Toast
    </div>
  )
}

const KeyframePractice = () => {
  const [transitionType, setTransitionType] = useState<
    "IterationCount" | "CardHover" | "DownloadArrow" | "Toast"
  >("IterationCount");

  const transitions = {
    IterationCount: <IterationCount />,
    CardHover: <CardHover />,
    DownloadArrow: <DownloadArrow />,
    Toast : <Toast/>
  };

  const transitionDescriptions = {
    IterationCount: "Infinite iteration count",
    CardHover: " Description of the project is revealed when you hover over the card.",
    DownloadArrow: "The angry face moves down when you hover over the button, and there's the happy one coming from the top at the same time.",
    Toast : <Toast/>
  };




  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-100">
      <div className="flex justify-between w-1/2 px-4 py-1 items-center space-x-4 rounded-xl border border-[#c7c7d0] shadow-sm mb-2">
        <button
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e] ${transitionType==="IterationCount" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("IterationCount")}
        >
          Iteration Count
        </button>
       <button
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType==="CardHover" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("CardHover")}
        >
          CardHover
        </button>
         <button
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType==="DownloadArrow" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("DownloadArrow")}
        >
          DownloadArrow
        </button>
         <button
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType==="Toast" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("Toast")}
        >
          Toast
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