import { HamburgerIcon } from "lucide-react";
import React from "react";

export const Responsive = () => {
  return (
    <div className="min-h-screen bg-slate-200 py-6">
      <div className="relative">
        <div className="text-4xl bg-white border flex justify-between mx-auto items-center border-neutral-200 px-2 py-2 shadow md:rounded-full max-w-4xl">
          <img
            src="https://placehold.co/48"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="md:flex hidden items-center gap-6 text-sm text-neutral-500 mr-10 hover:text-neutral-900">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
          <button className="md:hidden">
            <HamburgerIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
