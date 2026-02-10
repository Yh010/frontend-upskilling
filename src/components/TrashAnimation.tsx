import { TrashIcon } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";

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

const TrashAnimation = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [confirmDelete, setConfirmDelete] = useState<Boolean>(false);
  const [showOnlySelected, setShowOnlySelected] = useState<boolean>(false);

  const cards = [1, 2, 3, 4];

  const visibleCards = showOnlySelected ? cards.filter((id) => selectedItems.includes(id)) : cards;

  return (
    <div className="min-h-screen flex justify-center items-center bg-neutral-100">
      <div className="border h-100 w-1/2 flex flex-col rounded-3xl border-[#b1a7a6] shadow-xs">
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full justify-center grid grid-cols-2 gap-4 px-4">
            {visibleCards.map((id) => (
              <Card
                key={id}
                idx={id}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            ))}
          </div>
        </div>

        <div className="h-16 flex justify-center items-center mb-4 relative">
          {selectedItems.length !== 0 && !confirmDelete && (
            <button
              className="absolute px-4 py-2 self-center mb-4 border hover:bg-[#fae1dd] font-inter
 rounded-xl hover:text-[#f94144] font-semibold flex justify-center items-center duration-140 ease-out bg-[#f5f3f4] text-[#252422] shadow-xs border-[#d3d3d3]"
              onClick={() => {
                setConfirmDelete(true)
                setShowOnlySelected(true);
              }}
            >
              <div className="flex justify-center items-center space-x-2">
                <TrashIcon />
                <span>Add to Trash</span>
              </div>
            </button>
          )}
          {confirmDelete && (
            <button
              className="absolute px-4 py-2 self-center mb-4 border bg-[#ef233c] font-inter
 rounded-xl font-semibold flex justify-center items-center duration-140 ease-out text-white shadow-xs border-[#d3d3d3]"
            >
              <div className="flex justify-center items-center">
                <span>Trash collectibles</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrashAnimation;
