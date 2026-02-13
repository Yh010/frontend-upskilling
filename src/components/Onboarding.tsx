import { BedSingle, Car, Check, Hotel, HotelIcon, LoaderCircleIcon, Plane } from "lucide-react";

const BangaloreCard = () => {
  return (
    <div className="h-full w-4/5 bg-white flex flex-col px-4 py-2 justify-between items-center shadow-sm rounded-lg absolute mx-auto inset-0 animate-bangalorecard">
      <div className="w-full flex flex-col justify-center items-center py-2 space-y-1">
        <div className="h-1 w-1/2 bg-[#e7ecef] rounded-full"></div>
        <div className="h-1 w-3/4 bg-[#e7ecef] rounded-full"></div>
      </div>
      <div className="flex w-full">
        <div className="w-1/4">
          <img src="/bangalore.png" className="h-12 w-12 rounded-md" />
        </div>
        <div className="w-3/4 h-10 flex flex-col px-3">
          <div className="font-light text-sm text-[#8d99ae] font-roboto">
            Bangalore
          </div>
          <div className="font-bold text-lg text-black font-roboto">$1,250</div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start py-2 space-y-1">
        <div className="h-1 w-3/4 bg-[#eef4ed] rounded-full"></div>
        <div className="h-1 w-1/2 bg-[#eef4ed] rounded-full"></div>
      </div>
    </div>
  );
};

const DubaiCard = () => {
  return (
    <div className="mx-auto inset-0 h-full w-4/5 bg-white flex flex-col px-4 py-2 justify-between items-center shadow-sm rounded-lg absolute animate-dubaicard">
      <div className="w-full flex flex-col justify-center items-center py-2 space-y-1">
        <div className="h-1 w-1/2 bg-[#e7ecef] rounded-full"></div>
        <div className="h-1 w-3/4 bg-[#e7ecef] rounded-full"></div>
      </div>
      <div className="flex w-full">
        <div className="w-1/4">
          <img src="/dubai.png" className="h-12 w-12 rounded-md" />
        </div>
        <div className="w-3/4 h-10 flex flex-col px-3">
          <div className="font-light text-sm text-[#8d99ae] font-roboto">
            Dubai
          </div>
          <div className="font-bold text-lg text-black font-roboto">
            $10,250
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start py-2 space-y-1">
        <div className="h-1 w-3/4 bg-[#eef4ed] rounded-full"></div>
        <div className="h-1 w-1/2 bg-[#eef4ed] rounded-full"></div>
      </div>
    </div>
  );
};

const ItalyCard = () => {
  return (
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
          <div className="font-bold text-lg text-black font-roboto">$4,250</div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start py-2 space-y-1">
        <div className="h-1 w-3/4 bg-[#eef4ed] rounded-full"></div>
        <div className="h-1 w-1/2 bg-[#eef4ed] rounded-full"></div>
      </div>
    </div>
  );
};

const BangalorePaymentCard = () => {
  return (
    <div className="h-full w-50 bg-white flex flex-col px-4 py-2 justify-between items-center shadow-sm rounded-lg mx-auto inset-0">
      <div className="w-full flex flex-col justify-center items-center py-2 space-y-1">
        <div className="h-1 w-1/2 bg-[#e7ecef] rounded-full"></div>
        <div className="h-1 w-3/4 bg-[#e7ecef] rounded-full"></div>
      </div>
      <div className="flex w-full">
        <div className="w-1/4">
          <img src="/bangalore.png" className="h-12 w-12 rounded-md" />
        </div>
        <div className="w-3/4 h-10 flex flex-col px-3">
          <div className="font-light text-sm text-[#8d99ae] font-roboto">
            Bangalore
          </div>
          <div className="font-bold text-lg text-black font-roboto">$1,250</div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start py-2 space-y-1">
        <div className="h-1 w-3/4 bg-[#eef4ed] rounded-full"></div>
        <div className="h-1 w-1/2 bg-[#eef4ed] rounded-full"></div>
      </div>
    </div>
  );
};

const DubaiPaymentCard = () => {
  return (
    <div className="mx-auto inset-0 h-full w-50 bg-white flex flex-col py-2 px-4 justify-between items-center shadow-sm rounded-lg">
      <div className="w-full flex flex-col justify-center items-center py-2 space-y-1">
        <div className="h-1 w-1/2 bg-[#e7ecef] rounded-full"></div>
        <div className="h-1 w-3/4 bg-[#e7ecef] rounded-full"></div>
      </div>
      <div className="flex w-full">
        <div className="w-1/4">
          <img src="/dubai.png" className="h-12 w-12 rounded-md" />
        </div>
        <div className="w-3/4 h-10 flex flex-col px-3">
          <div className="font-light text-sm text-[#8d99ae] font-roboto">
            Dubai
          </div>
          <div className="font-bold text-lg text-black font-roboto">
            $10,250
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start py-2 space-y-1">
        <div className="h-1 w-3/4 bg-[#eef4ed] rounded-full"></div>
        <div className="h-1 w-1/2 bg-[#eef4ed] rounded-full"></div>
      </div>
    </div>
  );
};

const ItalyPaymentCard = () => {
  return (
    <div className="mx-auto inset-0 h-full w-50 bg-white flex flex-col px-4 py-2 justify-between items-center shadow-sm rounded-lg">
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
          <div className="font-bold text-lg text-black font-roboto">$4,250</div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start py-2 space-y-1">
        <div className="h-1 w-3/4 bg-[#eef4ed] rounded-full"></div>
        <div className="h-1 w-1/2 bg-[#eef4ed] rounded-full"></div>
      </div>
    </div>
  );
};

const BookingConfirmedButton = () => {
  return (
    <div className="h-10 w-40 bg-white px-1 py-2 flex justify-center items-center shadow-sm rounded-lg">
      <div className="relative h-full w-full flex justify-center items-center">
        <div className="animate-loader absolute">
          <LoaderCircleIcon className="animate-spin" color="#d3d3d3" />
        </div>
        <div className="absolute w-full">
          <div className="flex justify-between items-center space-x-1">
            <div className="animate-checktranslate w-1/4 flex justify-center items-center">
              <Check className="text-white bg-green-400 rounded-full p-1 animate-check" />
            </div>
            <span className="text-xs w-3/4 animate-checktext font-semibold">
              Booking confirmed!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FurtherBookings = () => {
  return (
    <div className="grid grid-cols-7 gap-6 w-full opacity-60">
      <div className="flex space-x-1 col-start-1 col-end-6 bg-white px-1 py-2 shadow-sm rounded-lg">
        <div className="w-1/4 flex justify-center items-center">
          <Plane className="text-[#4361ee] bg-[#caf0f8] p-1 rounded-md fill-[#4361ee]" />
        </div>
        <div className="w-3/4 flex flex-col space-y-1">
          <span className="text-xs font-semibold">
            Plane tickets
          </span>
          <div className="h-1 w-full bg-[#e7ecef] rounded-full"></div>
        </div>
      </div>

      <div className="flex space-x-1 col-start-3 col-end-8 bg-white px-1 py-2 shadow-sm rounded-lg">
        <div className="w-1/4 flex justify-center items-center">
          <BedSingle className="text-[#4361ee] bg-[#caf0f8] p-1 rounded-md fill-[#4361ee]" />
        </div>
        <div className="w-3/4 flex flex-col space-y-1">
          <span className="text-xs font-semibold">
            Hotel tickets
          </span>
          <div className="h-1 w-full bg-[#e7ecef] rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
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
              <ItalyCard />
              <DubaiCard />
              <BangaloreCard />
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
            <div className="h-1/2 w-full overflow-hidden flex">
              <ItalyPaymentCard />
              <DubaiPaymentCard />
              <BangalorePaymentCard />
            </div>
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
            <div className="h-1/2 w-full flex flex-col justify-center items-center space-y-4">
              <BookingConfirmedButton />
              <FurtherBookings />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 text-center text-[#66666e]">hou</div>
    </div>
  );
};

export default Onboarding;
