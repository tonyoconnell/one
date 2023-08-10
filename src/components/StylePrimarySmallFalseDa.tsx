import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type StylePrimarySmallFalseDaType = {
  button?: string;

  /** Style props */
  stylePrimarySmallFalseDaPosition?: Property.Position;
  stylePrimarySmallFalseDaPadding?: Property.Padding;
  stylePrimarySmallFalseDaCursor?: Property.Cursor;
  stylePrimarySmallFalseDaWidth?: Property.Width;
  stylePrimarySmallFalseDaOverflow?: Property.Overflow;
  stylePrimarySmallFalseDaFlexShrink?: Property.FlexShrink;
  stylePrimarySmallFalseDaBackgroundColor?: Property.BackgroundColor;
  stylePrimarySmallFalseDaBoxSizing?: Property.BoxSizing;
  stylePrimarySmallFalseDaFlex?: Property.Flex;
  buttonDisplay?: Property.Display;
  buttonColor?: Property.Color;
  buttonFontSize?: Property.FontSize;

  /** Action props */
  onButton1Click?: () => void;
};

const StylePrimarySmallFalseDa: FunctionComponent<
  StylePrimarySmallFalseDaType
> = ({
  button,
  stylePrimarySmallFalseDaPosition,
  stylePrimarySmallFalseDaPadding,
  stylePrimarySmallFalseDaCursor,
  stylePrimarySmallFalseDaWidth,
  stylePrimarySmallFalseDaOverflow,
  stylePrimarySmallFalseDaFlexShrink,
  stylePrimarySmallFalseDaBackgroundColor,
  stylePrimarySmallFalseDaBoxSizing,
  stylePrimarySmallFalseDaFlex,
  buttonDisplay,
  buttonColor,
  buttonFontSize,
  onButton1Click,
}) => {
  const stylePrimarySmallFalseDaStyle: CSS.Properties = useMemo(() => {
    return {
      position: stylePrimarySmallFalseDaPosition,
      padding: stylePrimarySmallFalseDaPadding,
      cursor: stylePrimarySmallFalseDaCursor,
      width: stylePrimarySmallFalseDaWidth,
      overflow: stylePrimarySmallFalseDaOverflow,
      flexShrink: stylePrimarySmallFalseDaFlexShrink,
      backgroundColor: stylePrimarySmallFalseDaBackgroundColor,
      boxSizing: stylePrimarySmallFalseDaBoxSizing,
      flex: stylePrimarySmallFalseDaFlex,
    };
  }, [
    stylePrimarySmallFalseDaPosition,
    stylePrimarySmallFalseDaPadding,
    stylePrimarySmallFalseDaCursor,
    stylePrimarySmallFalseDaWidth,
    stylePrimarySmallFalseDaOverflow,
    stylePrimarySmallFalseDaFlexShrink,
    stylePrimarySmallFalseDaBackgroundColor,
    stylePrimarySmallFalseDaBoxSizing,
    stylePrimarySmallFalseDaFlex,
  ]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      display: buttonDisplay,
      color: buttonColor,
      fontSize: buttonFontSize,
    };
  }, [buttonDisplay, buttonColor, buttonFontSize]);

  return (
    <div
      className="relative bg-primary flex flex-row py-3 px-6 items-center justify-center text-left text-base text-white font-text-medium-normal border-[1px] border-solid border-primary"
      style={stylePrimarySmallFalseDaStyle}
      onClick={onButton1Click}
    >
      <div className="relative leading-[150%]" style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default StylePrimarySmallFalseDa;
