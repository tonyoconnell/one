import { FunctionComponent } from "react";
import SellFasterContainer from "./SellFasterContainer";

const BenefitSellDiv: FunctionComponent = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row py-[7rem] px-[4rem] items-center justify-start gap-[5rem] bg-[url(/public/benefitsell@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-[1rem] text-primary font-text-regular-normal sm:py-[1.88rem] sm:px-[0.63rem] sm:box-border">
      <img
        className="relative w-[25rem] h-[25rem] object-cover md:hidden"
        alt=""
        src="/iconcart@2x.png"
      />
      <div className="flex-1 h-[30.5rem] flex flex-col items-start justify-start">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[2rem]">
          <SellFasterContainer
            featureDescription="Sell Faster "
            salesGuideDescription="Close more sales in a fraction of the time it takes for customers to switch between email and the web. Guide your customers along a journey - from an ad to a sale and beyond and allow them to browse products, add to cart and pay, all without leaving their favourite messaging app."
            tagline={false}
          />
          <div className="w-[15.81rem] flex flex-col items-start justify-start gap-[1rem] text-left">
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="flex-1 relative h-[1.06rem]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon2@2x.png"
                />
              </div>
              <div className="flex-1 relative leading-[150%]">
                Syndicate your product catalog
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="relative w-[1rem] h-[1.06rem]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon3@2x.png"
                />
              </div>
              <div className="relative leading-[150%]">Accept payments</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="relative w-[1rem] h-[1.06rem]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/icon3@2x.png"
                />
              </div>
              <div className="relative leading-[150%]">
                Recover abandoned carts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSellDiv;
