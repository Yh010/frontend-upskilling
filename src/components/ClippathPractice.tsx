
import { useState } from "react";


const TextReveal = () => {

    return (
        <div className="relative text-5xl font-bold w-full items-center justify-center flex">
            <span className="[clip-path:inset(0_0_50%_0)] absolute text-amber-200">
                Clip Path
            </span>
            <span className="[clip-path:inset(50%_0_0_0)] absolute text-amber-800">
                Clip Path
            </span>
        </div>
    )
}

const Orbit = () => {
    return (
        <div className="h-7/10 w-3/4 flex justify-center items-center">
            <img src="/Crazy.png" className="rounded-3xl animate-reveal" />
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

const ClippathPractice = () => {
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
                    Multi color Text
                </button>
                <button
                    className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType === "Orbit" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
                    onClick={() => setTransitionType("Orbit")}
                >
                    Image Reveal
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

export default ClippathPractice;