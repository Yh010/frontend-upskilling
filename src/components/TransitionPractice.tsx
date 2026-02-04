import { TrashIcon } from "lucide-react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

interface CardProps {
  idx: number;
  selectedItems: number[];
  setSelectedItems: Dispatch<SetStateAction<number[]>>;
}
const Card = ({ idx, selectedItems, setSelectedItems }: CardProps) => {
  return (
    <div
      className="w-full h-10 rounded-xl bg-[#f5f3f4] text-[#252422] shadow-xs font-semibold
                  flex justify-center items-center border border-[#d3d3d3] relative"
    >
      <span className="absolute">New Toast Created</span>
      <input
        type="checkbox"
        className="absolute top-1 right-1 accent-red-500"
        checked={selectedItems.includes(idx)}
        onChange={(e) => {
          setSelectedItems((prev) =>
            e.target.checked ? [...prev, idx] : prev.filter((id) => id !== idx),
          );
        }}
      ></input>
    </div>
  );
};
const Hover = () => {
  return (
    <div>
      hover
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
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [confirmDelete, setConfirmDelete] = useState<Boolean>(false);
  const [showOnlySelected, setShowOnlySelected] = useState<boolean>(false);
  const [transitionType, setTransitionType] = useState<
    "hover" | "CardHover" | "DownloadArrow" | "Toast"
  >("hover");

  const cards = [1, 2, 3, 4];

  const visibleCards = showOnlySelected
    ? cards.filter((id) => selectedItems.includes(id))
    : cards;
  const transitions = {
    hover: <Hover />,
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
    </div>
  );
};

export default TransitionPractice;