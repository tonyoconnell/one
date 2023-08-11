import { FunctionComponent, useMemo, type CSSProperties } from "react";

type StylePrimarySmallFalseDaType = {
  button?: string;

  /** Style props */
  stylePrimarySmallFalseDaPosition?: CSSProperties["position"];
  stylePrimarySmallFalseDaPadding?: CSSProperties["padding"];
  stylePrimarySmallFalseDaCursor?: CSSProperties["cursor"];
  stylePrimarySmallFalseDaWidth?: CSSProperties["width"];
  stylePrimarySmallFalseDaOverflow?: CSSProperties["overflow"];
  stylePrimarySmallFalseDaFlexShrink?: CSSProperties["flexShrink"];
  stylePrimarySmallFalseDaBackgroundColor?: CSSProperties["backgroundColor"];
  stylePrimarySmallFalseDaBoxSizing?: CSSProperties["boxSizing"];
  stylePrimarySmallFalseDaFlex?: CSSProperties["flex"];
  buttonDisplay?: CSSProperties["display"];
  buttonColor?: CSSProperties["color"];
  buttonFontSize?: CSSProperties["fontSize"];

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
  const stylePrimarySmallFalseDaStyle: CSSProperties = useMemo(() => {
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

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      display: buttonDisplay,
      color: buttonColor,
      fontSize: buttonFontSize,
    };
  }, [buttonDisplay, buttonColor, buttonFontSize]);

  return (
    <div
      className="relative bg-primary flex flex-row py-3 px-6 items-center justify-center text-left text-base text-white font-text-regular-normal border-[1px] border-solid border-primary"
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
