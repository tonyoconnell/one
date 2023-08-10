import { FunctionComponent } from "react";
import SellFasterContainer from "./SellFasterContainer";

const BenefitSaver: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-row py-[7rem] px-[4rem] items-center justify-start gap-[5rem] text-left text-[1rem] text-primary font-text-medium-normal sm:pl-[0.63rem] sm:pr-[0.63rem] sm:box-border">
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem]">
          <SellFasterContainer
            featureDescription="Save Time and Money"
            salesGuideDescription={`"When companies take more than five minutes to respond to a lead, their odds of qualifying that lead decreases by 10x." Harvard Business Review. Save time and money by automatically responding to over 80% of customer inquiries. If your AI doesn't understand a question or have an answer a human will be brought into the conversation, seamlessly.`}
            tagline={false}
          />
          <div className="flex flex-col items-start justify-start gap-[1rem]">
            <div className="flex flex-row items-center justify-start gap-[1rem]">
              <div className="relative w-[1rem] h-[1.06rem]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon3@2x.png"
                />
              </div>
              <div className="relative leading-[150%]">
                Answer sales questions instantly
              </div>
              <div className="relative w-[1rem] h-[1.06rem]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon3@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="flex-1 relative h-[1.06rem]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon4@2x.png"
                />
              </div>
              <div className="flex-1 relative leading-[150%]">
                Answer customer service questions instantly
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="relative w-[1rem] h-[1.06rem]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon3@2x.png"
                />
              </div>
              <div className="relative leading-[150%]">
                Bring in humans to the conversation at the right time
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="relative w-[25rem] h-[25rem] object-cover md:hidden"
        alt=""
        src="/iconretarget@2x.png"
      />
    </div>
  );
};

export default BenefitSaver;
