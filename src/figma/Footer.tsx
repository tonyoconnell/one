import { FunctionComponent, useMemo, type CSSProperties } from "react";

type FooterType = {
  /** Style props */
  footerPosition?: CSSProperties["position"];
  footerWidth?: CSSProperties["width"];
  footerHeight?: CSSProperties["height"];
  footerAlignSelf?: CSSProperties["alignSelf"];
  footerFlexShrink?: CSSProperties["flexShrink"];
  footerHeight1?: CSSProperties["height"];
  creditsHeight?: CSSProperties["height"];
  creditsPadding?: CSSProperties["padding"];
  creditsJustifyContent?: CSSProperties["justifyContent"];
  creditsGap?: CSSProperties["gap"];
  oNEAllRightFontSize?: CSSProperties["fontSize"];
  footerLinksGap?: CSSProperties["gap"];
  privacyPolicyFontSize?: CSSProperties["fontSize"];
  termsOfServiceFontSize?: CSSProperties["fontSize"];
};

const Footer: FunctionComponent<FooterType> = ({
  footerPosition,
  footerWidth,
  footerHeight,
  footerAlignSelf,
  footerFlexShrink,
  footerHeight1,
  creditsHeight,
  creditsPadding,
  creditsJustifyContent,
  creditsGap,
  oNEAllRightFontSize,
  footerLinksGap,
  privacyPolicyFontSize,
  termsOfServiceFontSize,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      position: footerPosition,
      width: footerWidth,
      height: footerHeight,
      alignSelf: footerAlignSelf,
      flexShrink: footerFlexShrink,
    };
  }, [
    footerPosition,
    footerWidth,
    footerHeight,
    footerAlignSelf,
    footerFlexShrink,
  ]);

  const footer1Style: CSSProperties = useMemo(() => {
    return {
      height: footerHeight1,
    };
  }, [footerHeight1]);

  const creditsStyle: CSSProperties = useMemo(() => {
    return {
      height: creditsHeight,
      padding: creditsPadding,
      justifyContent: creditsJustifyContent,
      gap: creditsGap,
    };
  }, [creditsHeight, creditsPadding, creditsJustifyContent, creditsGap]);

  const oNEAllRightStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: oNEAllRightFontSize,
    };
  }, [oNEAllRightFontSize]);

  const footerLinksStyle: CSSProperties = useMemo(() => {
    return {
      gap: footerLinksGap,
    };
  }, [footerLinksGap]);

  const privacyPolicyStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: privacyPolicyFontSize,
    };
  }, [privacyPolicyFontSize]);

  const termsOfServiceStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: termsOfServiceFontSize,
    };
  }, [termsOfServiceFontSize]);

  return (
    <div
      className="relative bg-white w-[1368px] h-[91px] overflow-hidden flex flex-col items-center justify-start text-left text-xs text-primary font-text-regular-normal"
      style={footerStyle}
    >
      <div
        className="self-stretch h-[91px] flex flex-col items-center justify-center"
        style={footer1Style}
      >
        <div
          className="self-stretch box-border h-[91px] flex flex-row py-10 px-0 items-center justify-center gap-[32px] border-t-[1px] border-solid border-primary"
          style={creditsStyle}
        >
          <small
            className="relative leading-[150%] sm:text-3xs"
            style={oNEAllRightStyle}
          >
            © 2022 ONE. All right reserved.
          </small>
          <div
            className="flex flex-row items-start justify-start gap-[24px]"
            style={footerLinksStyle}
          >
            <small
              className="relative [text-decoration:underline] leading-[150%] sm:text-3xs"
              style={privacyPolicyStyle}
            >
              Privacy Policy
            </small>
            <small
              className="relative [text-decoration:underline] leading-[150%]"
              style={termsOfServiceStyle}
            >
              Terms of Service
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
