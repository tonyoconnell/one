import { FunctionComponent, useMemo, type CSSProperties } from "react";

type ButtonSolidWithIconType = {
  orderOnline?: string;
  iconBasicDown10px?: string;
  showIconBasicDown10px?: boolean;

  /** Style props */
  buttonSolidWithIconPosition?: CSSProperties["position"];
  buttonSolidWithIconBorderRadius?: CSSProperties["borderRadius"];
  buttonSolidWithIconBackgroundColor?: CSSProperties["backgroundColor"];
  buttonSolidWithIconPadding?: CSSProperties["padding"];
  buttonSolidWithIconTop?: CSSProperties["top"];
  buttonSolidWithIconLeft?: CSSProperties["left"];
  buttonSolidWithIconWidth?: CSSProperties["width"];
  textWidth?: CSSProperties["width"];
  textHeight?: CSSProperties["height"];
  orderOnlineTop?: CSSProperties["top"];
  orderOnlineLeft?: CSSProperties["left"];
  orderOnlineFontSize?: CSSProperties["fontSize"];
  orderOnlineLineHeight?: CSSProperties["lineHeight"];
  orderOnlineFontWeight?: CSSProperties["fontWeight"];
  orderOnlineFontFamily?: CSSProperties["fontFamily"];
  iconBasicDown10pxTop?: CSSProperties["top"];
  iconBasicDown10pxLeft?: CSSProperties["left"];
  iconBasicDown10pxWidth?: CSSProperties["width"];
  iconBasicDown10pxHeight?: CSSProperties["height"];
};

const ButtonSolidWithIcon: FunctionComponent<ButtonSolidWithIconType> = ({
  orderOnline,
  iconBasicDown10px,
  showIconBasicDown10px,
  buttonSolidWithIconPosition,
  buttonSolidWithIconBorderRadius,
  buttonSolidWithIconBackgroundColor,
  buttonSolidWithIconPadding,
  buttonSolidWithIconTop,
  buttonSolidWithIconLeft,
  buttonSolidWithIconWidth,
  textWidth,
  textHeight,
  orderOnlineTop,
  orderOnlineLeft,
  orderOnlineFontSize,
  orderOnlineLineHeight,
  orderOnlineFontWeight,
  orderOnlineFontFamily,
  iconBasicDown10pxTop,
  iconBasicDown10pxLeft,
  iconBasicDown10pxWidth,
  iconBasicDown10pxHeight,
}) => {
  const buttonSolidWithIconStyle: CSSProperties = useMemo(() => {
    return {
      position: buttonSolidWithIconPosition,
      borderRadius: buttonSolidWithIconBorderRadius,
      backgroundColor: buttonSolidWithIconBackgroundColor,
      padding: buttonSolidWithIconPadding,
      top: buttonSolidWithIconTop,
      left: buttonSolidWithIconLeft,
      width: buttonSolidWithIconWidth,
    };
  }, [
    buttonSolidWithIconPosition,
    buttonSolidWithIconBorderRadius,
    buttonSolidWithIconBackgroundColor,
    buttonSolidWithIconPadding,
    buttonSolidWithIconTop,
    buttonSolidWithIconLeft,
    buttonSolidWithIconWidth,
  ]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      width: textWidth,
      height: textHeight,
    };
  }, [textWidth, textHeight]);

  const orderOnlineStyle: CSSProperties = useMemo(() => {
    return {
      top: orderOnlineTop,
      left: orderOnlineLeft,
      fontSize: orderOnlineFontSize,
      lineHeight: orderOnlineLineHeight,
      fontWeight: orderOnlineFontWeight,
      fontFamily: orderOnlineFontFamily,
    };
  }, [
    orderOnlineTop,
    orderOnlineLeft,
    orderOnlineFontSize,
    orderOnlineLineHeight,
    orderOnlineFontWeight,
    orderOnlineFontFamily,
  ]);

  const iconBasicDown10pxStyle: CSSProperties = useMemo(() => {
    return {
      top: iconBasicDown10pxTop,
      left: iconBasicDown10pxLeft,
      width: iconBasicDown10pxWidth,
      height: iconBasicDown10pxHeight,
    };
  }, [
    iconBasicDown10pxTop,
    iconBasicDown10pxLeft,
    iconBasicDown10pxWidth,
    iconBasicDown10pxHeight,
  ]);

  return (
    <div
      className="relative rounded-[30px] bg-golden flex flex-col py-3.5 px-[25px] items-center justify-center text-center text-lg text-pure-white font-neue-haas-unica"
      style={buttonSolidWithIconStyle}
    >
      <div className="relative w-[123.15px] h-[27px]" style={textStyle}>
        <div
          className="absolute top-[0px] left-[0px] leading-[27px] font-medium"
          style={orderOnlineStyle}
        >
          {orderOnline}
        </div>
        {showIconBasicDown10px && (
          <img
            className="absolute top-[9px] left-[113.12px] w-[10.03px] h-[10.03px] overflow-hidden"
            alt=""
            src={iconBasicDown10px}
            style={iconBasicDown10pxStyle}
          />
        )}
      </div>
    </div>
  );
};

export default ButtonSolidWithIcon;
