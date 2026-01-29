import { useEffect, useState } from "react";
  const Card = ({ idx }: { idx: number }) => {
    const [entered, setEntered] = useState(false);

    useEffect(() => {
      requestAnimationFrame(() => setEntered(true));
    }, []);

    const depthScale = 1 - idx * 0.04;
    const enterScale = entered ? 1 : 0.005;

    return (
      <div
        className="absolute w-1/4 h-10 rounded-xl bg-[#f5f3f4] text-[#252422] shadow-xs font-semibold
                  flex justify-center items-center border border-[#d3d3d3]"
        style={{
          transform: `
            translateY(${idx * -10}px)
            scale(${depthScale * enterScale})
          `,
          zIndex: 100 - idx,
          transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        New Toast Created
      </div>
    );
  };

const SonnerToast = () => {
  const [toasts, setToasts] = useState<number[]>([]);
  const AddToast = () =>{
   setToasts((prev) => [...prev, Date.now()]);
  }
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-neutral-100">
      <div className="border h-100 w-1/2 flex flex-col rounded-3xl border-[#b1a7a6] shadow-xs">
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full flex justify-center">
          {toasts.length === 0 ? (
            <div>Click button to add toast</div>
          ) : (
            [...toasts].reverse().map((id, idx) => (
              <Card key={id} idx={idx} />
            ))
          )}
        </div>
      </div>
      
     
      <button className="px-4 py-2 self-center mb-4 border hover:bg-[#f8f9fa] font-inter
 rounded-xl hover:text-black font-semibold flex justify-center items-center hover:scale-[1.01] duration-150 ease-out active:scale-[0.97] bg-[#f5f3f4] text-[#252422] shadow-xs border-[#d3d3d3]" onClick={AddToast}>
        Add toast
      </button>

      </div>
      
    </div>
  );
};

export default SonnerToast;
