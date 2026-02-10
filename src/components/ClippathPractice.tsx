
import { DownloadCloudIcon } from "lucide-react";
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
    const [leo, setLeo] = useState(true);

    return (
        <div className="relative h-3/5 w-3/5 flex justify-center items-center">

            <img src="/lion.png" className="absolute rounded-3xl h-full w-full animate-reveal" />
            <img src="/panda.png" className={`absolute rounded-3xl h-full w-full ${leo ? "animate-unreveal" : "animate-reveal"}`} />
            <button className="border absolute top-1 bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black rounded-lg shadow-sm py-1 px-4 font-semibold" onClick={() => setLeo((prev) => !prev)}>
                Change theme
            </button>
        </div>

    )
}

const DownloadProgress = () => {
    const [startDownload, setStartDownload] = useState(false);

    return (
        <div className="relative h-3/5 w-3/5 flex justify-center items-center">
            <button
                className={`absolute px-4 py-2 self-center mb-4 border hover:bg-[#e4fadd] font-inter
 rounded-xl font-semibold flex justify-center items-center duration-140 ease-out bg-[#f5f3f4] text-[#252422] shadow-xs border-[#d3d3d3] ${startDownload ? "animate-startdownload" : ""}`}
                onClick={() => {
                    setStartDownload(true)
                }}
            >
                <div className="flex justify-center items-center space-x-2">
                    <DownloadCloudIcon />
                    <span>Download Image</span>
                </div>
            </button>
            {startDownload && <div className="absolute w-full h-full animate-imagereveal">
                <div className="relative w-full h-full">
                    <img src="/lion.png" className="absolute rounded-3xl h-full w-full" />
                    <div className="absolute rounded-3xl h-full w-full bg-white animate-loadimage">
                    </div>
                    <div className="absolute bottom-0 w-full">
                        <div className="h-2 w-full bg-[#e5e5e5] overflow-hidden">
                            <div className="h-full w-0 bg-[#4ade80] animate-progressFill" />
                        </div>
                    </div>

                </div>
                <button className="mt-4 absolute center w-full border rounded-lg bg-[#c3efd3] border-[#d3d3d3] font-semibold text-[#145a2d] animate-imageloadcomplete">
                    100% complete
                </button>
            </div>}
        </div>

    )
}

const ClippathPractice = () => {
    const [transitionType, setTransitionType] = useState<
        "TextReveal" | "Orbit" | "HeartBeatCoin" | "DownloadProgress"
    >("TextReveal");

    const transitions = {
        TextReveal: <TextReveal />,
        Orbit: <Orbit />,
        HeartBeatCoin: <HeartBeatCoin />,
        DownloadProgress: <DownloadProgress />
    };

    const transitionDescriptions = {
        TextReveal: "Each letter in the word is shown with a slight delay",
        Orbit: "Element orbiting around another element",
        HeartBeatCoin: "Change mood with the click of a button",
        DownloadProgress: ""
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
                    Theme changer
                </button>
                <button
                    className={`rounded-lg border shadow-sm py-1 px-4 font-semibold text-[#66666e]  ${transitionType === "DownloadProgress" ? "bg-[#ffc300]  hover:bg-[#ffd60a]  border-[#fb8500] text-black" : "border-[#b1a7a6]"}`}
                    onClick={() => setTransitionType("DownloadProgress")}
                >
                    Download progress
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