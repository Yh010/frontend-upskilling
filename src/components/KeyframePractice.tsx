import { AngryIcon, AppleIcon, BotIcon, Code2Icon, DownloadIcon, Microscope, SmileIcon } from "lucide-react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

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

const Toast = () => {
  return (
    <div>
      Toast
    </div>
  )
}

const KeyframePractice = () => {
  const [transitionType, setTransitionType] = useState<
    "IterationCount" | "CursorBlink" | "DownloadArrow" | "Toast"
  >("IterationCount");

  const transitions = {
    IterationCount: <IterationCount />,
    CursorBlink: <CursorBlink />,
    DownloadArrow: <DownloadArrow />,
    Toast : <Toast/>
  };

  const transitionDescriptions = {
    IterationCount: "Infinite iteration count",
    CursorBlink: " Description of the project is revealed when you hover over the card.",
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
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType==="CursorBlink" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("CursorBlink")}
        >
          Cursor blink
        </button>
         <button
          className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType==="DownloadArrow" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("DownloadArrow")}
        >
          Animation fill mode
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