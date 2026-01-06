import React, { useState, type Dispatch, type SetStateAction } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import type { ContentType } from "../../contentContext.js";

type NavbarProps = {
  setContent: Dispatch<SetStateAction<ContentType>>;
};

const Navbar = ({ setContent }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<ContentType>("home");

  const navItems: { label: string; value: ContentType }[] = [
    { label: "Home", value: "home" },
    { label: "Experience", value: "experience" },
    { label: "Projects", value: "projects" },
    { label: "Motion", value: "motion" },
    { label: "Certificates", value: "certificates" },
    { label: "Blogs & Media", value: "blogsNmedia" },
    { label: "Contact", value: "contactme" },
  ];

  function SetActiveContent(item: ContentType) {
    setActive(item);
    setContent(item);
  }

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-[#EFEFEF] z-50 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-6 h-6 bg-[#1A1A1A] rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="font-medium text-[#1A1A1A] tracking-tight">
              Portfolio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => SetActiveContent(item.value)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors duration-200 ${
                  active === item.value
                    ? "bg-[#F3F3F3] text-[#1A1A1A] font-medium"
                    : "text-[#666666] hover:bg-[#F3F3F3] hover:text-[#1A1A1A]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1A1A1A] hover:bg-[#F3F3F3] p-1 rounded-md transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#EFEFEF] animate-in slide-in-from-top duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setActive(item.value);
                  setIsOpen(false);
                }}
                className="flex items-center justify-between w-full px-4 py-3 text-sm text-[#1A1A1A] hover:bg-[#F3F3F3] rounded-lg transition-colors"
              >
                {item.label}
                <ChevronRight size={14} className="text-[#CCCCCC]" />
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
