import { FunctionComponent } from "react";
import UniqueCreationsCard from "./UniqueCreationsCard";

const Hero: FunctionComponent = () => {
  return (
    <div className="absolute top-[-0.06rem] left-[0rem] w-[120rem] h-[61.44rem] overflow-hidden">
      <header
        className="absolute top-[0rem] left-[0rem] w-[120rem] h-[7.19rem] overflow-hidden text-center text-[1rem] text-pure-white font-roboto"
        id="Top"
      >
        <div className="absolute top-[0.06rem] left-[0rem] bg-pure-white w-[120rem] h-[53.19rem]" />
        <div className="absolute top-[2.31rem] left-[95.94rem] w-[11.13rem] h-[2.63rem]">
          <img
            className="absolute top-[0rem] left-[0rem] rounded-31xl w-[11.13rem] h-[2.63rem]"
            alt=""
            src="/rectangle-868.svg"
          />
          <b className="absolute top-[0.5rem] left-[1.63rem] leading-[1.63rem] inline-block w-[8.38rem]">
            Design your Scarf
          </b>
        </div>
        <div className="absolute top-[2.81rem] left-[11rem] w-[12.75rem] h-[1.75rem] text-left text-[1.5rem] text-gray-200 font-work-sans">
          <b className="absolute top-[0.06rem] left-[2.25rem] leading-[1.5rem]">
            HILLTRIBE life
          </b>
          <img
            className="absolute top-[0rem] left-[0rem] w-[1.75rem] h-[1.75rem]"
            alt=""
            src="/group-17826.svg"
          />
        </div>
        <b className="absolute top-[38.26%] left-[44.17%] text-[1.13rem] leading-[1.75rem] text-gray-100">
          <span className="[text-decoration:underline]">Stories</span>
          <span className="text-dimgray">{`       Products     Gifts            `}</span>
        </b>
        <div className="absolute top-[7.19rem] left-[0rem] bg-floralwhite w-[63rem] h-[53.75rem]" />
      </header>
      <UniqueCreationsCard />
    </div>
  );
};

export default Hero;
