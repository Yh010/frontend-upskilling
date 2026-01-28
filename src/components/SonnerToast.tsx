import { useState } from "react";

const SonnerToast = () => {
  const [toastNum, setToastNum] = useState(1) ;
  const AddToast = () =>{
    setToastNum((prev) => prev+1)
  }

  const Card = ({ idx }: { idx: number }) =>{
    return (
      <div className="absolute w-1/4 h-10 border border-slate-400 bg-zinc-800 hover:bg-zinc-600
 rounded-xl text-white flex justify-center items-center" style={{transform: `translateY(${idx * -14}px) scale(${1 - idx * 0.04 })`,  zIndex: 100 - idx,}}>
          Toast
        </div>
    )
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-neutral-100">
      <div className="relative w-full flex justify-center">
         {
       new Array(toastNum).fill(0).map((key,idx)=>(
        <Card idx={idx} key={idx}/>
       ))
      }
      </div>
     
      <button className="px-4 py-2 border border-slate-400 bg-zinc-800 hover:bg-zinc-600
 rounded-xl text-white flex justify-center items-center" onClick={AddToast}>
        add toast
      </button>
    </div>
  );
};

export default SonnerToast;
