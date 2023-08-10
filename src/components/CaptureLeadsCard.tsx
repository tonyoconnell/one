import { FunctionComponent } from "react";

const CaptureLeadsCard: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-row py-[7rem] px-[4rem] items-center justify-start gap-[5rem] text-center text-[1rem] text-primary font-text-regular-normal sm:py-[1.88rem] sm:px-[0.63rem] sm:box-border">
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <div className="relative leading-[150%] font-semibold hidden">
              Tagline
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[3rem]">
              <h2 className="m-0 self-stretch relative text-[inherit] leading-[120%] font-bold font-inherit">
                Capture Leads
              </h2>
              <div className="self-stretch relative text-[1.13rem] leading-[150%]">
                Capture emails, phone numbers, gender, location and profile
                pictures ... sometimes, without your audience having to type a
                single word. Engage in personalised conversations and allow your
                audience to self segment themselves with a few taps.
              </div>
            </div>
          </div>
          <div className="w-[14.56rem] flex flex-col items-start justify-start gap-[1rem] text-left">
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <img
                className="relative w-[1rem] h-[1.06rem] object-cover"
                alt=""
                src="/icon1@2x.png"
              />
              <div className="flex-1 relative leading-[150%]">
                Capture contact information
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <img
                className="relative w-[1rem] h-[1.06rem] object-cover"
                alt=""
                src="/icon1@2x.png"
              />
              <div className="relative leading-[150%]">Book appointments</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start">
              <img
                className="relative w-[1rem] h-[1.06rem] object-cover"
                alt=""
                src="/icon1@2x.png"
              />
              <div className="flex-1 relative h-[1.06rem] ml-[-4.25rem]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                  alt=""
                  src="/icon@2x.png"
                />
              </div>
              <div className="flex-1 relative leading-[150%] ml-[-4.25rem]">
                Qualify leads with surveys
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="relative w-[25rem] h-[25rem] object-cover md:hidden"
        alt=""
        src="/iconleads@2x.png"
      />
    </div>
  );
};

export default CaptureLeadsCard;
