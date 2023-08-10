import { FunctionComponent, useCallback } from "react";
import StylePrimarySmallFalseDa from "./StylePrimarySmallFalseDa";

const ElevateYourEcommerceProfitsCon: FunctionComponent = () => {
  const onButtonClick = useCallback(() => {
    window.location.href = "https://app.one.ie/register";
  }, []);

  return (
    <div className="self-stretch overflow-hidden flex flex-row py-[7rem] px-[4rem] items-center justify-center bg-[url(/public/calltoaction@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-[3rem] text-primary font-text-regular-normal">
      <div className="flex-1 flex flex-col items-center justify-start gap-[1.5rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <h1 className="m-0 self-stretch relative text-[inherit] leading-[120%] font-bold font-inherit md:text-[1.88rem]">
            Elevate Your Ecommerce Profits
          </h1>
          <div className="self-stretch relative text-[1.13rem] leading-[150%]">{`Get started for free. No credit card needed. `}</div>
        </div>
        <div className="flex flex-row pt-[1rem] px-[0rem] pb-[0rem] items-start justify-start">
          <StylePrimarySmallFalseDa
            button="Get started"
            stylePrimarySmallFalseDaPosition="unset"
            stylePrimarySmallFalseDaPadding="0.75rem 1.5rem"
            stylePrimarySmallFalseDaCursor="pointer"
            stylePrimarySmallFalseDaWidth="unset"
            stylePrimarySmallFalseDaOverflow="unset"
            stylePrimarySmallFalseDaFlexShrink="unset"
            stylePrimarySmallFalseDaBackgroundColor="#333"
            stylePrimarySmallFalseDaBoxSizing="border-box"
            stylePrimarySmallFalseDaFlex="unset"
            buttonDisplay="inline-block"
            buttonColor="#fff"
            buttonFontSize="1rem"
            onButton1Click={onButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ElevateYourEcommerceProfitsCon;
