import { FunctionComponent } from "react";
import NavigationBar from "./NavigationBar";

const ShoppingLandingPageFinal: FunctionComponent = () => {
  return (
    <div className="relative bg-pure-white w-[1440px] flex flex-col items-center justify-start text-left text-17xl text-black font-poppins">
      <NavigationBar />
      <div className="self-stretch bg-pure-white flex flex-col pt-0 px-[75px] pb-11 items-center justify-start text-[72.01px] md:pl-10 md:pr-10 md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="self-stretch rounded-[44.26px] bg-whitesmoke-100 flex flex-row pt-[50.9900016784668px] px-10 pb-0.5 items-center justify-center gap-[38px] lg:flex-col">
          <div className="flex flex-col py-0 pr-0 pl-[27.75px] items-start justify-start relative gap-[27px] sm:pl-0 sm:box-border">
            <div className="absolute my-0 mx-[!important] top-[200.96px] right-[102.94px] bg-khaki w-[371.88px] h-[88.17px] [transform:_rotate(-2deg)] [transform-origin:0_0] z-[0] md:max-w-[76%] md:max-h-[15%] md:top-[150] md:left-[15] sm:w-[371px] sm:max-w-[75%] sm:max-h-[15%] sm:top-[105] sm:left-[20]" />
            <div className="absolute my-0 mx-[!important] top-[12.15px] left-[-20.52px] bg-pure-white w-[348.6px] h-[84.12px] [transform:_rotate(-2deg)] [transform-origin:0_0] z-[1] md:max-w-[65%] md:max-h-[15%] md:top-[10] sm:max-w-[60%] sm:max-h-[15%] sm:top-[4] sm:left-[4]" />
            <div className="relative leading-[90.01px] font-black z-[2] md:text-[50px] md:leading-[70px] sm:text-[40px] sm:leading-[50px]">
              <p className="m-0">LET’S</p>
              <p className="m-0">EXPLORE</p>
              <p className="m-0">UNIQUE</p>
              <p className="m-0">CLOTHES.</p>
            </div>
            <div className="relative text-5xl tracking-[-0.05em] text-gray-1200 inline-block w-[454.55px] h-[43.51px] shrink-0 z-[3] md:text-[17px] md:w-full sm:text-sm">
              Live for Influential and Innovative fashion!
            </div>
            <div className="flex flex-row items-center justify-start gap-[25.5px] z-[4]">
              <img
                className="relative w-[142.52px] h-[23.97px] md:w-[100px]"
                alt=""
                src="/vector-9.svg"
              />
              <button className="cursor-pointer [border:none] py-[13px] px-[30px] bg-black rounded-5xs-5 flex flex-row items-start justify-start hover:bg-darkslategray-100 sm:pl-[15px] sm:pr-[15px] sm:box-border">
                <div className="relative text-[22.5px] tracking-[-0.05em] font-medium font-poppins text-pure-white text-left md:text-smi sm:text-mini">
                  Shop Now
                </div>
              </button>
            </div>
          </div>
          <img
            className="relative w-[668.01px] h-auto object-cover max-w-[50%px]"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
      </div>
      <img
        className="self-stretch max-w-full overflow-hidden max-h-full object-cover h-auto"
        alt=""
        src="/brands@2x.png"
      />
      <div className="self-stretch bg-pure-white flex flex-col pt-[52px] px-[78px] pb-[69.05000305175781px] items-center justify-center md:pr-[78px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[76px]">
          <div className="flex flex-row items-start justify-start relative gap-[10px]">
            <img
              className="absolute my-0 mx-[!important] top-[11.92px] left-[162px] w-[139.52px] h-[26.2px] z-[0]"
              alt=""
              src="/leaf.svg"
            />
            <div className="relative tracking-[0.06em] leading-[37.5px] font-black z-[1] md:text-11xl">
              NEW ARRIVALS
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-around gap-[95px] flex-wrap text-5xl text-gray-1100 lg:flex-wrap lg:justify-around">
            <div className="w-[363.04px] h-[606.07px] flex flex-col items-start justify-start gap-[21px] sm:max-w-[95%]">
              <img
                className="self-stretch relative rounded-mini max-w-full overflow-hidden h-[528.06px] shrink-0 object-cover"
                alt=""
                src="/fashionimage@2x.png"
              />
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[5.25px]">
                  <div className="relative tracking-[-0.04em] leading-[37.5px] font-medium inline-block w-[240.78px] h-[27px] shrink-0">{`Hoodies & Sweetshirt`}</div>
                  <div className="relative text-lg tracking-[-0.04em] leading-[37.5px] font-medium text-gray-500 inline-block w-[113.26px] h-[24.75px] shrink-0">
                    Explore Now!
                  </div>
                </div>
                <img
                  className="relative w-[25.13px] h-[16.57px]"
                  alt=""
                  src="/arrow-1.svg"
                />
              </div>
            </div>
            <div className="w-[363.04px] h-[603.82px] flex flex-col items-start justify-start gap-[19.5px] sm:max-w-[95%]">
              <img
                className="self-stretch relative rounded-mini max-w-full overflow-hidden h-[528.06px] shrink-0 object-cover"
                alt=""
                src="/fashionimage1@2x.png"
              />
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[5.25px]">
                  <div className="relative tracking-[-0.04em] leading-[37.5px] font-medium inline-block w-[172.52px] h-[27px] shrink-0">{`Coats & Parkas`}</div>
                  <div className="relative text-lg tracking-[-0.04em] leading-[37.5px] font-medium text-gray-500 inline-block w-[114.76px] h-6 shrink-0">
                    Explore Now!
                  </div>
                </div>
                <img
                  className="relative w-[25.13px] h-[16.57px]"
                  alt=""
                  src="/arrow-2.svg"
                />
              </div>
            </div>
            <div className="w-[367.54px] h-[603.82px] flex flex-col items-start justify-start gap-[18px] sm:max-w-[95%]">
              <img
                className="self-stretch relative rounded-mini max-w-full overflow-hidden h-[528.06px] shrink-0 object-cover"
                alt=""
                src="/fashionimage2@2x.png"
              />
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[5.25px]">
                  <div className="relative tracking-[-0.04em] leading-[37.5px] font-medium inline-block w-[156.77px] h-[27.75px] shrink-0">{`Tees & T-Shirt`}</div>
                  <div className="relative text-lg tracking-[-0.04em] leading-[37.5px] font-medium text-gray-500 inline-block w-[108.01px] h-[24.75px] shrink-0">
                    Explore Now!
                  </div>
                </div>
                <img
                  className="relative w-[25.13px] h-[16.57px]"
                  alt=""
                  src="/arrow-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-pure-white flex flex-col py-10 px-[75px] items-center justify-center sm:pl-5 sm:pr-5 sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[78px] max-w-[1290px]">
          <div className="relative w-[405px] h-[38px] overflow-hidden shrink-0 md:w-[340px]">
            <img
              className="absolute top-[6.8px] left-[240px] w-[142.52px] h-[23.97px] md:left-[190]"
              alt=""
              src="/vector-91.svg"
            />
            <div className="absolute top-[0px] left-[0px] tracking-[0.06em] leading-[37.5px] font-black md:text-11xl">
              Young’s Favourite
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[35px] text-5xl md:flex-col">
            <div className="flex-1 flex flex-col items-start justify-start gap-[21px] md:flex-[unset] md:self-stretch">
              <img
                className="self-stretch relative rounded-mini max-w-full overflow-hidden h-auto shrink-0 object-cover"
                alt=""
                src="/rectangle-50@2x.png"
              />
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[5.25px]">
                  <div className="relative tracking-[-0.04em] leading-[37.5px] font-medium inline-block w-[258.78px] h-[27px] shrink-0 md:text-xl">
                    Trending on instagram
                  </div>
                  <div className="relative text-lg tracking-[-0.04em] leading-[37.5px] font-medium text-gray-500 inline-block w-[109.51px] h-[24.75px] shrink-0 md:text-mini">
                    Explore Now!
                  </div>
                </div>
                <img
                  className="relative w-[25.13px] h-[16.57px]"
                  alt=""
                  src="/arrow-4.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[21px] md:flex-[unset] md:self-stretch">
              <img
                className="self-stretch relative rounded-mini max-w-full overflow-hidden h-auto shrink-0 object-cover"
                alt=""
                src="/rectangle-49@2x.png"
              />
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[5.25px]">
                  <div className="relative tracking-[-0.04em] leading-[37.5px] font-medium inline-block w-[150.02px] h-[26.25px] shrink-0 md:text-xl sm:text-mini">
                    All Under $40
                  </div>
                  <div className="relative text-lg tracking-[-0.04em] leading-[37.5px] font-medium text-gray-500 inline-block w-[107.26px] h-[24.75px] shrink-0">
                    Explore Now!
                  </div>
                </div>
                <img
                  className="relative w-[25.13px] h-[16.57px]"
                  alt=""
                  src="/arrow-5.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-pure-white flex flex-row pt-[71px] px-[164px] pb-[94px] items-center justify-center gap-[176px] lg:flex-col md:flex-col">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[48.76px]">
            <div className="flex flex-col items-start justify-start gap-[30.75px]">
              <div className="relative tracking-[0.06em] leading-[150%] font-black md:text-11xl sm:text-6xl">
                <p className="m-0">{`DOWNLOAD APP &`}</p>
                <p className="m-0">GET THE VOUCHER!</p>
              </div>
              <div className="relative text-lg tracking-[-0.04em] leading-[26.25px] font-medium text-gray-600 inline-block w-[314.29px] h-[45.76px] shrink-0 md:text-sm sm:text-[12px]">
                <p className="m-0">Get 30% off for first transaction using</p>
                <p className="m-0">Rondovision mobile app for now.</p>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[14.25px]">
              <img
                className="rounded-5xs-5 max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-64@2x.png"
              />
              <img
                className="rounded-5xs-5 max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-65@2x.png"
              />
            </div>
          </div>
        </div>
        <img
          className="relative w-[528.19px] h-auto object-cover max-w-[50%px] md:min-w-[400px] md:max-w-[90%] sm:min-w-[350px]"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
      <div className="self-stretch bg-goldenrod flex flex-col py-[111px] px-[341.2900085449219px] items-center justify-center text-center text-[41.25px] text-pure-white lg:pl-[200px] lg:pr-[200px] lg:box-border md:pl-[55px] md:pr-[55px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[18px]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[28px]">
            <div className="self-stretch relative tracking-[0.03em] leading-[52.51px] font-black md:text-[35px] md:leading-[40px] sm:text-11xl sm:leading-[30px]">
              JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </div>
            <div className="self-stretch relative text-5xl tracking-[0.03em] leading-[26.25px] text-snow md:text-mini sm:text-smi sm:leading-[16px]">
              Type your email down below and be young wild generation
            </div>
          </div>
          <div className="rounded-5xs-5 bg-pure-white w-[419.77px] h-[65px] flex flex-row py-2 px-2.5 box-border items-center justify-start gap-[20px] md:w-full">
            <input
              className="[border:none] font-poppins text-lg bg-[transparent] flex-1 relative tracking-[0.03em] leading-[26.25px] text-gray-900 text-left focus:[outline:none] md:text-mini md:w-[calc(100%_-_120px);]"
              type="text"
              placeholder="Add your email here"
            />
            <button className="cursor-pointer [border:none] py-[11px] px-[26px] bg-black rounded-md flex flex-row items-center justify-center sm:pl-2.5 sm:pr-2.5 sm:box-border">
              <div className="relative text-[24.75px] tracking-[0.03em] leading-[26.25px] capitalize font-medium font-poppins text-pure-white text-left md:text-xl">
                SEND
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-col pt-[89px] px-[75px] pb-[110px] items-center justify-start text-lg text-pure-white font-roboto sm:pl-[30px] sm:pr-[30px] sm:box-border">
        <div className="self-stretch flex flex-row items-start justify-between lg:flex-col lg:gap-[50px]">
          <div className="flex flex-col items-start justify-center gap-[24px]">
            <div className="relative text-11xl tracking-[0.03em] font-black font-poppins inline-block w-[144.02px] h-[39.3px] shrink-0">
              FASHION
            </div>
            <div className="relative tracking-[0.02em] leading-[30px] text-gray-400 inline-block w-[311.29px]">
              Complete your style with awesome clothes from us.
            </div>
            <div className="flex flex-row items-start justify-start gap-[10.5px] text-black">
              <img
                className="relative rounded-[11.25px] w-[39px] h-[39px]"
                alt=""
                src="/frame-10.svg"
              />
              <img
                className="relative rounded-[11.25px] w-[39px] h-[39px]"
                alt=""
                src="/frame-11.svg"
              />
              <img
                className="relative rounded-[11.25px] w-[39px] h-[39px]"
                alt=""
                src="/frame-12.svg"
              />
              <div className="relative rounded-[11.25px] bg-khaki w-[39px] h-[39px]">
                <b className="absolute h-[53.85%] w-[44.23%] top-[11.54%] left-[30.77%] tracking-[0.02em] leading-[30px] inline-block">
                  in
                </b>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[141.02px] text-gray-400 md:flex-col md:gap-[50px]">
            <div className="flex flex-col items-start justify-start gap-[25px]">
              <div className="relative tracking-[0.02em] leading-[30px] text-gainsboro-200 inline-block w-[79px] h-[21px] shrink-0">
                Company
              </div>
              <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[50px] h-[21px] shrink-0">
                About
              </div>
              <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[103px] h-[21px] shrink-0">
                Contact us
              </div>
              <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[66px] h-[21px] shrink-0">
                Support
              </div>
              <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[65px] h-[21px] shrink-0">
                Careers
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[25px] text-gray-700">
              <div className="relative tracking-[0.02em] leading-[30px] text-gainsboro-200 inline-block w-[87px] h-[21px] shrink-0">
                Quick Link
              </div>
              <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[125px] h-[21px] shrink-0">
                Share Location
              </div>
              <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[132px] h-[21px] shrink-0">
                Orders Tracking
              </div>
              <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[88px] h-[21px] shrink-0">
                Size Guide
              </div>
              <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[43px] h-[21px] shrink-0">
                FAQs
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px] text-whitesmoke-200">
              <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[45px] h-[21px] shrink-0">
                Legal
              </div>
              <div className="relative tracking-[0.02em] leading-[30px] text-gray-400 inline-block w-[161px] h-[21px] shrink-0">{`Terms & conditions`}</div>
              <div className="relative tracking-[0.02em] leading-[30px] text-gray-800 inline-block w-[116px] h-[21px] shrink-0">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingLandingPageFinal;
