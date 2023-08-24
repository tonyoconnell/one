import { FunctionComponent } from "react";

const ProductCard: FunctionComponent = () => {
  return (
    <div className="absolute top-[158.88rem] left-[0rem] w-[120.63rem] h-[57.5rem] overflow-hidden text-left text-[3.44rem] text-black font-volkhov">
      <div className="absolute top-[0rem] left-[0.31rem] w-[120.31rem] h-[57.5rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-floralwhite w-[120.31rem] h-[57.5rem]">
          <b className="absolute top-[4.44rem] left-[18.86rem] leading-[140%] inline-block w-[29.39rem] h-[3.63rem]">
            Products
          </b>
          <div className="absolute top-[10rem] left-[18.86rem] text-[1.13rem] leading-[140%] font-semibold font-roboto text-darkslategray inline-block w-[37.72rem] h-[1.61rem]">
            <p className="m-0">
              We believe scaling startups require a radically different kind of
              agency
            </p>
          </div>
        </div>
        <div className="absolute top-[15.13rem] left-[18.86rem] w-[81.96rem] h-[38rem] text-center text-[2.13rem] text-darkslategray font-outfit">
          <div className="absolute top-[0rem] left-[0rem] w-[36.97rem] h-[38rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[36.97rem] h-[35rem] object-cover"
              alt=""
              src="/mask-group@2x.png"
            />
            <div className="absolute top-[35rem] left-[9.02rem] leading-[140%] font-semibold inline-block w-[17.23rem]">
              Bags
            </div>
          </div>
          <div className="absolute top-[0rem] left-[44.99rem] w-[36.97rem] h-[38rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[36.97rem] h-[35rem] object-cover"
              alt=""
              src="/mask-group1@2x.png"
            />
            <div className="absolute top-[35rem] left-[8.84rem] leading-[140%] font-semibold inline-block w-[18.49rem]">
              Scarves
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
