import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import ONE from "./ONE";
import StylePrimarySmallFalseDa from "./StylePrimarySmallFalseDa";

type Top1Type = {
  /** Style props */
  topPosition?: Property.Position;
  topWidth?: Property.Width;
  topHeight?: Property.Height;
  topAlignSelf?: Property.AlignSelf;
  topFlexShrink?: Property.FlexShrink;
  topWidth1?: Property.Width;
  topHeight1?: Property.Height;
  topPadding?: Property.Padding;
  topFlex?: Property.Flex;
  topMiddleWidth?: Property.Width;
  topMiddleFlex?: Property.Flex;
  logoHeight?: Property.Height;
  oNEWidth?: Property.Width;
  oNEHeight?: Property.Height;
  oNETop?: Property.Top;
  oNELeft?: Property.Left;
  oNEWidth1?: Property.Width;
  oNEIconWidth?: Property.Width;
  oNEIconHeight?: Property.Height;
  actionsGap?: Property.Gap;
  buttonPadding?: Property.Padding;
  buttonWidth?: Property.Width;
  buttonFontSize?: Property.FontSize;
  buttonPadding1?: Property.Padding;
  buttonWidth1?: Property.Width;
  buttonFontSize1?: Property.FontSize;

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
  const topStyle: CSS.Properties = useMemo(() => {
    return {
      position: topPosition,
      width: topWidth,
      height: topHeight,
      alignSelf: topAlignSelf,
      flexShrink: topFlexShrink,
    };
  }, [topPosition, topWidth, topHeight, topAlignSelf, topFlexShrink]);

  const top1Style: CSS.Properties = useMemo(() => {
    return {
      width: topWidth1,
      height: topHeight1,
      padding: topPadding,
      flex: topFlex,
    };
  }, [topWidth1, topHeight1, topPadding, topFlex]);

  const topMiddleStyle: CSS.Properties = useMemo(() => {
    return {
      width: topMiddleWidth,
      flex: topMiddleFlex,
    };
  }, [topMiddleWidth, topMiddleFlex]);

  const logoStyle: CSS.Properties = useMemo(() => {
    return {
      height: logoHeight,
    };
  }, [logoHeight]);

  const oNEStyle: CSS.Properties = useMemo(() => {
    return {
      width: oNEWidth,
      height: oNEHeight,
    };
  }, [oNEWidth, oNEHeight]);

  const oNE1Style: CSS.Properties = useMemo(() => {
    return {
      top: oNETop,
      left: oNELeft,
      width: oNEWidth1,
    };
  }, [oNETop, oNELeft, oNEWidth1]);

  const oNEIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: oNEIconWidth,
      height: oNEIconHeight,
    };
  }, [oNEIconWidth, oNEIconHeight]);

  const actionsStyle: CSS.Properties = useMemo(() => {
    return {
      gap: actionsGap,
    };
  }, [actionsGap]);

  const stylePrimarySmallFalseDaStyle: CSS.Properties = useMemo(() => {
    return {
      padding: buttonPadding,
      width: buttonWidth,
    };
  }, [buttonPadding, buttonWidth]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: buttonFontSize,
    };
  }, [buttonFontSize]);

  const stylePrimarySmallFalseDaStyle1: CSS.Properties = useMemo(() => {
    return {
      padding: buttonPadding1,
      width: buttonWidth1,
    };
  }, [buttonPadding1, buttonWidth1]);

  const buttonStyle1: CSS.Properties = useMemo(() => {
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
