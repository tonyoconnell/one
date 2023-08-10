import { FunctionComponent } from "react";

type SellFasterContainerType = {
  featureDescription?: string;
  salesGuideDescription?: string;
  tagline?: boolean;
};

const SellFasterContainer: FunctionComponent<SellFasterContainerType> = ({
  featureDescription,
  salesGuideDescription,
  tagline,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-center text-[1rem] text-primary font-text-medium-normal">
      {!tagline && (
        <div className="relative leading-[150%] font-semibold hidden">
          Tagline
        </div>
      )}
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[3rem]">
        <b className="self-stretch relative leading-[120%]">
          {featureDescription}
        </b>
        <div className="self-stretch relative text-[1.13rem] leading-[150%]">
          {salesGuideDescription}
        </div>
      </div>
    </div>
  );
};

export default SellFasterContainer;
