import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type ONEType = {
  /** Style props */
  oNEOverflow?: Property.Overflow;
  oNEFlexShrink?: Property.FlexShrink;
  oNEWidth?: Property.Width;
  oNEHeight?: Property.Height;
  oNEWidth1?: Property.Width;
  oNETop?: Property.Top;
  oNELeft?: Property.Left;
  oNEIconWidth?: Property.Width;
  oNEIconHeight?: Property.Height;
};

const ONE: FunctionComponent<ONEType> = ({
  oNEOverflow,
  oNEFlexShrink,
  oNEWidth,
  oNEHeight,
  oNEWidth1,
  oNETop,
  oNELeft,
  oNEIconWidth,
  oNEIconHeight,
}) => {
  const oNEStyle: CSS.Properties = useMemo(() => {
    return {
      overflow: oNEOverflow,
      flexShrink: oNEFlexShrink,
      width: oNEWidth,
      height: oNEHeight,
    };
  }, [oNEOverflow, oNEFlexShrink, oNEWidth, oNEHeight]);

  const oNE1Style: CSS.Properties = useMemo(() => {
    return {
      width: oNEWidth1,
      top: oNETop,
      left: oNELeft,
    };
  }, [oNEWidth1, oNETop, oNELeft]);

  const oNEIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: oNEIconWidth,
      height: oNEIconHeight,
    };
  }, [oNEIconWidth, oNEIconHeight]);

  return (
    <div className="relative w-[100px] h-10" style={oNEStyle}>
      <div
        className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start"
        style={oNE1Style}
      >
        <img
          className="relative w-[100px] h-10 object-cover"
          alt=""
          src="/one@2x.png"
          style={oNEIconStyle}
        />
      </div>
    </div>
  );
};

export default ONE;
