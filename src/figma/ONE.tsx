import { FunctionComponent, useMemo, type CSSProperties } from "react";

type ONEType = {
  /** Style props */
  oNEOverflow?: CSSProperties["overflow"];
  oNEFlexShrink?: CSSProperties["flexShrink"];
  oNEWidth?: CSSProperties["width"];
  oNEHeight?: CSSProperties["height"];
  oNEWidth1?: CSSProperties["width"];
  oNETop?: CSSProperties["top"];
  oNELeft?: CSSProperties["left"];
  oNEIconWidth?: CSSProperties["width"];
  oNEIconHeight?: CSSProperties["height"];
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
  const oNEStyle: CSSProperties = useMemo(() => {
    return {
      overflow: oNEOverflow,
      flexShrink: oNEFlexShrink,
      width: oNEWidth,
      height: oNEHeight,
    };
  }, [oNEOverflow, oNEFlexShrink, oNEWidth, oNEHeight]);

  const oNE1Style: CSSProperties = useMemo(() => {
    return {
      width: oNEWidth1,
      top: oNETop,
      left: oNELeft,
    };
  }, [oNEWidth1, oNETop, oNELeft]);

  const oNEIconStyle: CSSProperties = useMemo(() => {
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
