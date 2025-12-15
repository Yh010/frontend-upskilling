import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";

const WorkExperienceItems = [
  {
    StartYear: "2025",
    StartMonth: "September",
    EndYear: "Present",
    EndMonth: "Present",
    JobTitle: "Application developer 1 at",
    CompanyLogo: (
      <img src="/oracle.png" alt="Oracle" className="rounded-full" />
    ),
    CompanyShortName: "Oracle",
    CompanyFullName: "Oracle Financial Services",
    Description: [
      "Worked on Oracle Banking Digital Experience (OBDX)",
      "Built reusable UI components using React and Tailwind",
      "Collaborated with backend teams for API integration",
    ],
    Team: "OBDX",
    BgColor: "#efc7c2",
  },
  {
    StartYear: "2025",
    StartMonth: "September",
    EndYear: "Present",
    EndMonth: "Present",
    JobTitle: "Application developer 1 at",
    CompanyLogo: (
      <img src="/oracle.png" alt="Oracle" className="rounded-full" />
    ),
    CompanyShortName: "Oracle",
    CompanyFullName: "Oracle Financial Services",
    Description: [
      "Worked on Oracle Banking Digital Experience (OBDX)",
      "Built reusable UI components using React and Tailwind",
      "Collaborated with backend teams for API integration",
    ],
    Team: "OBDX",
    BgColor: "#80ed99",
  },
  {
    StartYear: "2025",
    StartMonth: "September",
    EndYear: "Present",
    EndMonth: "Present",
    JobTitle: "Application developer 1 at",
    CompanyLogo: (
      <img src="/oracle.png" alt="Oracle" className="rounded-full" />
    ),
    CompanyShortName: "Oracle",
    CompanyFullName: "Oracle Financial Services",
    Description: [
      "Worked on Oracle Banking Digital Experience (OBDX)",
      "Built reusable UI components using React and Tailwind",
      "Collaborated with backend teams for API integration",
    ],
    Team: "OBDX",
    BgColor: "#ede0d4",
  },
];

const WorkExperience = () => {
  const [activeWorkEx, setActiveWorkEx] = useState<any>(null);

  const CloseWorkEx = () => {
    setActiveWorkEx(null);
  };

  const SetWorkEx = (idx: any) => {
    setActiveWorkEx(null);
    setActiveWorkEx(idx);
  };

  function darkenHex(hex: string, amount = 15) {
    const num = parseInt(hex.replace("#", ""), 16);

    const r = Math.max(0, (num >> 16) - amount);
    const g = Math.max(0, ((num >> 8) & 0x00ff) - amount);
    const b = Math.max(0, (num & 0x0000ff) - amount);

    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className="px-2 py-10">
      <div className="w-1/3 text-center text-3xl">Work Experience</div>

      <div className="py-10 space-y-4">
        {WorkExperienceItems.map((item, idx) => (
          <div key={idx} className="group flex justify-center items-center">
            <div className="w-1/3  text-center text-[#adb5bd]">
              <div>{`${item.StartYear} - ${item.EndYear}`}</div>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="flex justify-around items-center">
                <div className="flex justify-center items-center gap-x-2">
                  <div>{item.JobTitle}</div>
                  <div
                    className="border-2 rounded-lg flex justify-center items-center py-1 px-3 gap-x-2"
                    style={{
                      backgroundColor: item.BgColor,
                      borderColor: darkenHex(item.BgColor, 18),
                    }}
                  >
                    <div className="h-6 w-6 flex justify-center item py-0.5">
                      {item.CompanyLogo}
                    </div>
                    <div>{item.CompanyShortName}</div>
                    <div className="text-sm text-[#6c757d] font-light">
                      {item.Team}
                    </div>
                  </div>
                </div>

                {activeWorkEx !== idx && (
                  <motion.button
                    onClick={() => {
                      SetWorkEx(idx);
                    }}
                    initial={false}
                    //whileHover={{ opacity: 1 }}
                    className=" opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronDown />
                  </motion.button>
                )}
                {activeWorkEx === idx && (
                  <button
                    onClick={() => {
                      CloseWorkEx();
                    }}
                  >
                    <ChevronUp />
                  </button>
                )}
              </div>
              {activeWorkEx === idx && (
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[#495057]">
                  {item.Description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
