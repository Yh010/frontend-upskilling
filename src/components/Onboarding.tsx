import { useState } from "react";

const Onboarding = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-100">
      <div className="border h-130 w-3/4 flex flex-col justify-around items-center rounded-3xl border-[#c7c7d0] shadow-sm overflow-hidden">
        <span className="font-[inter] text-4xl">What is the process ?</span>
        <div className="flex space-x-3">
          <div className="h-80 bg-[#eff1ed] w-72 rounded-xl flex flex-col items-center justify-center py-2 px-4">
            <div className="h-1/9 w-full">
              <div className="h-6 w-6 rounded-full bg-white text-blue-400 text-center">
                1
              </div>
            </div>
            <div className="h-1/3 w-full space-y-3">
              <div className="font-semibold text-2xl font-roboto">
                Get a Quote
              </div>
              <div className="font-medium text-sm text-[#8d99ae] font-roboto">
                The hover states your website is missing
              </div>
            </div>
            <div className="h-1/2 w-full relative">
              <div className="mx-auto inset-0 h-full w-4/5 bg-white flex flex-col px-4 py-2 justify-between items-center shadow-sm rounded-lg absolute animate-mexicocardenter">
                <div className="w-full flex flex-col justify-center items-center py-2 space-y-1">
                  <div className="h-1 w-1/2 bg-[#e7ecef] rounded-full"></div>
                  <div className="h-1 w-3/4 bg-[#e7ecef] rounded-full"></div>
                </div>
                <div className="flex w-full">
                  <div className="w-1/4">
                    <img src="/italy.png" className="h-12 w-12 rounded-md" />
                  </div>
                  <div className="w-3/4 h-10 flex flex-col px-3">
                    <div className="font-light text-sm text-[#8d99ae] font-roboto">
                      Italy
                    </div>
                    <div className="font-bold text-lg text-black font-roboto">
                      $4,250
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-start py-2 space-y-1">
                  <div className="h-1 w-3/4 bg-[#eef4ed] rounded-full"></div>
                  <div className="h-1 w-1/2 bg-[#eef4ed] rounded-full"></div>
                </div>
              </div>
              <div className="mx-auto inset-0 h-full w-4/5 bg-white flex flex-col px-4 py-2 px-4 justify-center items-center shadow-sm rounded-lg absolute animate-dubaicard">
                <div className="w-full flex flex-col justify-center items-center py-2 space-y-1">
                  <div className="h-1 w-1/2 bg-[#e7ecef] rounded-full"></div>
                  <div className="h-1 w-3/4 bg-[#e7ecef] rounded-full"></div>
                </div>
                <div className="flex w-full">
                  <div className="w-1/4">
                    <img src="/italy.png" className="h-12 w-12 rounded-md" />
                  </div>
                  <div className="w-3/4 h-10 flex flex-col px-3">
                    <div className="font-light text-sm text-[#8d99ae] font-roboto">
                      Italy
                    </div>
                    <div className="font-bold text-lg text-black font-roboto">
                      $4,250
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-start py-2 space-y-1">
                  <div className="h-1 w-3/4 bg-[#eef4ed] rounded-full"></div>
                  <div className="h-1 w-1/2 bg-[#eef4ed] rounded-full"></div>
                </div>
              </div>
              <div className="h-full w-4/5 bg-white flex flex-col px-4 py-2 justify-center items-center shadow-sm rounded-lg absolute mx-auto inset-0 animate-bangalorecard">
                <div className="w-full flex flex-col justify-center items-center py-2 space-y-1">
                  <div className="h-1 w-1/2 bg-[#e7ecef] rounded-full"></div>
                  <div className="h-1 w-3/4 bg-[#e7ecef] rounded-full"></div>
                </div>
                <div className="flex w-full">
                  <div className="w-1/4">
                    <img src="/italy.png" className="h-12 w-12 rounded-md" />
                  </div>
                  <div className="w-3/4 h-10 flex flex-col px-3">
                    <div className="font-light text-sm text-[#8d99ae] font-roboto">
                      Italy
                    </div>
                    <div className="font-bold text-lg text-black font-roboto">
                      $4,250
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-start py-2 space-y-1">
                  <div className="h-1 w-3/4 bg-[#eef4ed] rounded-full"></div>
                  <div className="h-1 w-1/2 bg-[#eef4ed] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 bg-[#eff1ed] w-72 rounded-xl flex flex-col items-center justify-center py-2 px-4">
            <div className="h-1/9 w-full">
              <div className="h-6 w-6 rounded-full bg-white text-blue-400 text-center">
                2
              </div>
            </div>
            <div className="h-1/3 w-full space-y-3">
              <div className="font-semibold text-2xl font-roboto">
                Confirm and pay
              </div>
              <div className="font-medium text-sm text-[#8d99ae] font-roboto">
                The hover states your website is missing
              </div>
            </div>
            <div className="h-1/2 w-full">animation</div>
          </div>{" "}
          <div className="h-80 bg-[#eff1ed] w-72 rounded-xl flex flex-col items-center justify-center py-2 px-4">
            <div className="h-1/9 w-full">
              <div className="h-6 w-6 rounded-full bg-white text-blue-400 text-center">
                3
              </div>
            </div>
            <div className="h-1/3 w-full space-y-3">
              <div className="font-semibold text-2xl font-roboto">
                Enjoy your trip
              </div>
              <div className="font-medium text-sm text-[#8d99ae] font-roboto">
                The hover states your website is missing
              </div>
            </div>
            <div className="h-1/2 w-full">animation</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 text-center text-[#66666e]">hou</div>
    </div>
  );
};

export default Onboarding;
