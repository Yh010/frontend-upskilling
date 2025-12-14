import { ChevronDown, ChevronUp, XCircleIcon } from "lucide-react";
import React, { useState } from "react";

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
    Description: "Developer",
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
    Description: "Developer",
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
    Description: "Developer",
    Team: "OBDX",
    BgColor: "#efc7c2",
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
  return (
    <div className="px-2 py-4 border-t-2 border-b-2">
      <div>Work Experience</div>

      <div>
        {WorkExperienceItems.map((item, idx) => (
          <div key={idx} className="flex justify-center items-center">
            <div className="w-1/3">
              <div>{`${item.StartYear} - ${item.EndYear}`}</div>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="flex justify-start items-center gap-x-2">
                <div>{item.JobTitle}</div>
                <div
                  className="border rounded-lg flex justify-center items-center py-1 px-3 gap-x-2"
                  style={{ backgroundColor: item.BgColor }}
                >
                  <div className="h-6 w-6 flex justify-center item py-0.5">
                    {item.CompanyLogo}
                  </div>
                  <div>{item.CompanyShortName}</div>
                  <div>{item.Team}</div>
                </div>
                {activeWorkEx !== idx && (
                  <button
                    onClick={() => {
                      SetWorkEx(idx);
                    }}
                  >
                    <ChevronDown />
                  </button>
                )}
                {activeWorkEx === idx && (
                  <button
                    onClick={() => {
                      CloseWorkEx();
                    }}
                  >
                    <XCircleIcon />
                  </button>
                )}
              </div>
              {activeWorkEx === idx && <div>{item.Description}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
