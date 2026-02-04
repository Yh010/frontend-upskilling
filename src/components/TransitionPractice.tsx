import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

const Hover = () => {
  return (
    <div className="h-12 w-12 rounded-full bg-[#ffc300] hover:translate-y-[-20%] transition duration-300 ease-in-out">
      
    </div>
  )
}

const CardHover = () => {
  return (
    <div>
      CardHover
    </div>
  )
}
const DownloadArrow = () => {
  return (
    <div>
      DownloadArrow
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

const TransitionPractice = () => {
  const [transitionType, setTransitionType] = useState<
    "hover" | "CardHover" | "DownloadArrow" | "Toast"
  >("hover");

  const transitions = {
    hover: <Hover />,
    CardHover: <CardHover />,
    DownloadArrow: <DownloadArrow />,
    Toast : <Toast/>
  };

  const transitionDescriptions = {
    hover: "The end goal is to move the ball 20% upwards on hover.",
    CardHover: <CardHover />,
    DownloadArrow: <DownloadArrow />,
    Toast : <Toast/>
  };




  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-100">
      <div className="flex justify-between w-1/2 px-4 py-1 items-center space-x-4 rounded-xl border border-[#b1a7a6] shadow-xs mb-2">
        <button
          className={`rounded-lg border shadow-xs py-1 px-4 font-semibold text-[#66666e] ${transitionType==="hover" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("hover")}
        >
          hover
        </button>
       <button
          className={`rounded-lg border shadow-xs py-1 px-4 font-semibold text-[#66666e]  ${transitionType==="CardHover" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("CardHover")}
        >
          CardHover
        </button>
         <button
          className={`rounded-lg border shadow-xs py-1 px-4 font-semibold text-[#66666e]  ${transitionType==="DownloadArrow" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("DownloadArrow")}
        >
          DownloadArrow
        </button>
         <button
          className={`rounded-lg border shadow-xs py-1 px-4 font-semibold text-[#66666e]  ${transitionType==="Toast" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
          onClick={() => setTransitionType("Toast")}
        >
          Toast
        </button>
      </div>
      <div className="border h-100 w-1/2 flex justify-center items-center rounded-3xl border-[#b1a7a6] shadow-xs">
        {transitions[transitionType] ?? null}
      </div>
      <div className="w-1/2 text-center text-[#66666e]">
         {transitionDescriptions[transitionType] ?? null}
      </div>
    </div>
  );
};

export default TransitionPractice;