import { FunctionComponent, useCallback } from "react";
import Top1 from "../figma/Top1";
import StylePrimarySmallFalseDa from "../figma/StylePrimarySmallFalseDa";
import EcommerceIntegrationsCard from "../figma/EcommerceIntegrationsCard";
import CaptureLeadsCard from "../figma/CaptureLeadsCard";
import BenefitSellDiv from "../figma/BenefitSellDiv";
import BenefitSaver from "../figma/BenefitSaver";
import ElevateYourEcommerceProfitsCon from "../figma/ElevateYourEcommerceProfitsCon";
import TermsOfServiceForm from "../figma/TermsOfServiceForm";

const Home: FunctionComponent = () => {
  const onButtonClick = useCallback(() => {
    window.location.href = "https://app.one.ie/login";
  }, []);

  const onButton1Click = useCallback(() => {
    window.location.href = "https://app.one.ie/register";
  }, []);

  const onButton2Click = useCallback(() => {
    window.location.href = "https://app.one.ie/register";
  }, []);

  const onButtonClick = useCallback(() => {
    window.location.href = "https://app.one.ie/register";
  }, []);

  return (
    <div className="relative w-full h-[347.19rem] flex flex-col items-center justify-start text-center text-[3.5rem] text-primary font-text-regular-normal">
      <div className="self-stretch flex flex-col items-start justify-start border-[1px] border-solid border-white">
        <Top1
          topPosition="unset"
          topWidth="unset"
          topHeight="5.25rem"
          topAlignSelf="stretch"
          topFlexShrink="0"
          topWidth1="unset"
          topHeight1="3.44rem"
          topPadding="0rem 0.63rem"
          topFlex="1"
          topMiddleWidth="unset"
          topMiddleFlex="1"
          logoHeight="3.44rem"
          oNEWidth="6.25rem"
          oNEHeight="2.5rem"
          oNETop="0rem"
          oNELeft="0rem"
          oNEWidth1="6.25rem"
          oNEIconWidth="6.25rem"
          oNEIconHeight="2.5rem"
          actionsGap="1.25rem"
          buttonPadding="0.5rem 0.63rem"
          buttonWidth="3.44rem"
          buttonFontSize="1rem"
          buttonPadding1="0.5rem 1.25rem"
          buttonWidth1="6.38rem"
          buttonFontSize1="1rem"
          onButtonClick={onButtonClick}
          onButton1Click={onButton1Click}
        />
        <div className="self-stretch overflow-hidden flex flex-col py-[2.5rem] px-[8.38rem] items-center justify-center gap-[2.5rem] bg-[url(/public/hero@3x.png)] bg-cover bg-no-repeat bg-[top] md:p-[2.5rem] md:box-border sm:pt-[1.25rem] sm:px-[0.63rem] sm:pb-[6.25rem] sm:box-border">
          <div className="self-stretch flex flex-col p-[2.5rem] items-center justify-center gap-[2.5rem]">
            <h1 className="m-0 self-stretch relative text-[inherit] leading-[120%] font-normal font-inherit md:text-[1.88rem]">
              Elevate Ecommerce by Messaging on Every Channel
            </h1>
            <h2 className="m-0 self-stretch relative text-[2rem] leading-[130%] font-bold font-inherit md:text-[1.25rem]">{`Capture more leads, close more sales & boost profits for your ecommerce store ... surprisingly fast`}</h2>
          </div>
          <div className="self-stretch flex flex-row pt-[1rem] px-[0rem] pb-[0rem] items-center justify-center">
            <StylePrimarySmallFalseDa
              button="Start Now"
              stylePrimarySmallFalseDaPosition="unset"
              stylePrimarySmallFalseDaPadding="0.75rem 1.5rem"
              stylePrimarySmallFalseDaCursor="pointer"
              stylePrimarySmallFalseDaWidth="unset"
              stylePrimarySmallFalseDaOverflow="unset"
              stylePrimarySmallFalseDaFlexShrink="unset"
              stylePrimarySmallFalseDaBackgroundColor="#333"
              stylePrimarySmallFalseDaBoxSizing="border-box"
              stylePrimarySmallFalseDaFlex="1"
              buttonDisplay="inline-block"
              buttonColor="#fff"
              buttonFontSize="1rem"
              onButton1Click={onButton2Click}
            />
          </div>
        </div>
        <div
          className="self-stretch overflow-hidden flex flex-col p-[2.5rem] items-center justify-start gap-[1rem] bg-[url(/public/demo@3x.png)] bg-cover bg-no-repeat bg-[top] text-[3rem] text-black md:py-[1.25rem] md:px-[0.63rem] md:box-border sm:py-[1.25rem] sm:px-[0rem] sm:box-border"
          id="demo"
        >
          <h1 className="m-0 relative text-[inherit] leading-[120%] font-bold font-inherit inline-block w-[85rem] sm:text-[1.88rem]">
            Demo
          </h1>
          <h4 className="m-0 relative text-[1.25rem] leading-[150%] font-normal font-inherit inline-block w-[85rem] sm:text-[1rem]">
            See how you can transform your ecommerce business with AI powered
            messaging
          </h4>
          <video
            className="self-stretch relative h-[45rem] bg-[url(/public/rectangle11@3x.png)] bg-cover bg-no-repeat bg-[top] lg:w-[62.5rem] lg:h-[35.31rem] md:w-[46.25rem] md:h-[26rem] sm:w-[25rem] sm:h-[14.06rem]"
            controls
          >
            <source src="https://d3iahpdq7idyya.cloudfront.net/demo/ONE-demo.mp4" />
          </video>
        </div>
        <EcommerceIntegrationsCard />
        <CaptureLeadsCard />
        <BenefitSellDiv />
        <BenefitSaver />
        <ElevateYourEcommerceProfitsCon />
        <TermsOfServiceForm />
      </div>
    </div>
  );
};

export default Home;
