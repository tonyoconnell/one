import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ONE from "./ONE";
import StylePrimarySmallFalseDa from "./StylePrimarySmallFalseDa";

type Top1Type = {
  /** Style props */
  topPosition?: CSSProperties["position"];
  topWidth?: CSSProperties["width"];
  topHeight?: CSSProperties["height"];
  topAlignSelf?: CSSProperties["alignSelf"];
  topFlexShrink?: CSSProperties["flexShrink"];
  topWidth1?: CSSProperties["width"];
  topHeight1?: CSSProperties["height"];
  topPadding?: CSSProperties["padding"];
  topFlex?: CSSProperties["flex"];
  topMiddleWidth?: CSSProperties["width"];
  topMiddleFlex?: CSSProperties["flex"];
  logoHeight?: CSSProperties["height"];
  oNEWidth?: CSSProperties["width"];
  oNEHeight?: CSSProperties["height"];
  oNETop?: CSSProperties["top"];
  oNELeft?: CSSProperties["left"];
  oNEWidth1?: CSSProperties["width"];
  oNEIconWidth?: CSSProperties["width"];
  oNEIconHeight?: CSSProperties["height"];
  actionsGap?: CSSProperties["gap"];
  buttonPadding?: CSSProperties["padding"];
  buttonWidth?: CSSProperties["width"];
  buttonFontSize?: CSSProperties["fontSize"];
  buttonPadding1?: CSSProperties["padding"];
  buttonWidth1?: CSSProperties["width"];
  buttonFontSize1?: CSSProperties["fontSize"];

  /** Action props */
  onButtonClick?: () => void;
  onButton1Click?: () => void;
};

const Top1: FunctionComponent<Top1Type> = ({
  topPosition,
  topWidth,
  topHeight,
  topAlignSelf,
  topFlexShrink,
  topWidth1,
  topHeight1,
  topPadding,
  topFlex,
  topMiddleWidth,
  topMiddleFlex,
  logoHeight,
  oNEWidth,
  oNEHeight,
  oNETop,
  oNELeft,
  oNEWidth1,
  oNEIconWidth,
  oNEIconHeight,
  actionsGap,
  buttonPadding,
  buttonWidth,
  buttonFontSize,
  buttonPadding1,
  buttonWidth1,
  buttonFontSize1,
  onButtonClick,
  onButton1Click,
}) => {
  const topStyle: CSSProperties = useMemo(() => {
    return {
      position: topPosition,
      width: topWidth,
      height: topHeight,
      alignSelf: topAlignSelf,
      flexShrink: topFlexShrink,
    };
  }, [topPosition, topWidth, topHeight, topAlignSelf, topFlexShrink]);

  const top1Style: CSSProperties = useMemo(() => {
    return {
      width: topWidth1,
      height: topHeight1,
      padding: topPadding,
      flex: topFlex,
    };
  }, [topWidth1, topHeight1, topPadding, topFlex]);

  const topMiddleStyle: CSSProperties = useMemo(() => {
    return {
      width: topMiddleWidth,
      flex: topMiddleFlex,
    };
  }, [topMiddleWidth, topMiddleFlex]);

  const logoStyle: CSSProperties = useMemo(() => {
    return {
      height: logoHeight,
    };
  }, [logoHeight]);

  const oNEStyle: CSSProperties = useMemo(() => {
    return {
      width: oNEWidth,
      height: oNEHeight,
    };
  }, [oNEWidth, oNEHeight]);

  const oNE1Style: CSSProperties = useMemo(() => {
    return {
      top: oNETop,
      left: oNELeft,
      width: oNEWidth1,
    };
  }, [oNETop, oNELeft, oNEWidth1]);

  const oNEIconStyle: CSSProperties = useMemo(() => {
    return {
      width: oNEIconWidth,
      height: oNEIconHeight,
    };
  }, [oNEIconWidth, oNEIconHeight]);

  const actionsStyle: CSSProperties = useMemo(() => {
    return {
      gap: actionsGap,
    };
  }, [actionsGap]);

  const stylePrimarySmallFalseDaStyle: CSSProperties = useMemo(() => {
    return {
      padding: buttonPadding,
      width: buttonWidth,
    };
  }, [buttonPadding, buttonWidth]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: buttonFontSize,
    };
  }, [buttonFontSize]);

  const stylePrimarySmallFalseDaStyle1: CSSProperties = useMemo(() => {
    return {
      padding: buttonPadding1,
      width: buttonWidth1,
    };
  }, [buttonPadding1, buttonWidth1]);

  const buttonStyle1: CSSProperties = useMemo(() => {
    return {
      fontSize: buttonFontSize1,
    };
  }, [buttonFontSize1]);

  return (
    <div
      className="relative bg-white box-border w-[1445px] h-[84px] overflow-hidden flex flex-row items-center justify-start border-b-[1px] border-solid border-black sm:p-2.5 sm:box-border"
      style={topStyle}
    >
      <div
        className="w-[313px] h-[55px] flex flex-row py-0 px-2.5 box-border items-center justify-start"
        style={top1Style}
      >
        <div
          className="w-[293px] flex flex-row items-center justify-between"
          style={topMiddleStyle}
        >
          <div
            className="h-[55px] flex flex-col items-start justify-center"
            style={logoStyle}
          >
            <ONE
              oNEOverflow="hidden"
              oNEFlexShrink="0"
              oNEWidth="100px"
              oNEHeight="40px"
              oNEWidth1="100px"
              oNETop="0px"
              oNELeft="0px"
              oNEIconWidth="100px"
              oNEIconHeight="40px"
            />
          </div>
          <div
            className="flex flex-row items-center justify-center gap-[20px]"
            style={actionsStyle}
          >
            <StylePrimarySmallFalseDa
              button="Login"
              stylePrimarySmallFalseDaPosition="unset"
              stylePrimarySmallFalseDaPadding="8px 10px"
              stylePrimarySmallFalseDaCursor="pointer"
              stylePrimarySmallFalseDaWidth="55px"
              stylePrimarySmallFalseDaOverflow="unset"
              stylePrimarySmallFalseDaFlexShrink="unset"
              stylePrimarySmallFalseDaBackgroundColor="transparent"
              stylePrimarySmallFalseDaBoxSizing="border-box"
              stylePrimarySmallFalseDaFlex="unset"
              buttonDisplay="inline-block"
              buttonColor="#333"
              buttonFontSize="16px"
              onButton1Click={onButtonClick}
            />
            <StylePrimarySmallFalseDa
              button="Start"
              stylePrimarySmallFalseDaPosition="unset"
              stylePrimarySmallFalseDaPadding="8px 20px"
              stylePrimarySmallFalseDaCursor="pointer"
              stylePrimarySmallFalseDaWidth="102px"
              stylePrimarySmallFalseDaOverflow="hidden"
              stylePrimarySmallFalseDaFlexShrink="0"
              stylePrimarySmallFalseDaBackgroundColor="#333"
              stylePrimarySmallFalseDaBoxSizing="border-box"
              stylePrimarySmallFalseDaFlex="unset"
              buttonDisplay="inline-block"
              buttonColor="#fff"
              buttonFontSize="16px"
              onButton1Click={onButton1Click}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top1;
