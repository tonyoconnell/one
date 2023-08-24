import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFashionLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    // Please sync "Page2" to the project
  }, []);

  return (
    <div className="self-stretch bg-pure-white flex flex-col py-[35px] px-[75px] items-center justify-start lg:pl-[60px] lg:pr-[60px] lg:box-border md:pl-[35px] md:pr-[35px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
      <div className="self-stretch flex flex-row items-center justify-between">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[9.75px]"
          onClick={onFashionLogoClick}
        >
          <img
            className="relative w-[23.45px] h-[21.75px] lg:w-[19px] md:w-[15px]"
            alt=""
            src="/vector.svg"
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-11xl tracking-[0.03em] font-black font-poppins text-black text-left inline-block lg:text-6xl md:text-xl">
            FASHION
          </button>
        </button>
        <div className="flex flex-row items-center justify-start gap-[40.5px] lg:gap-[10px] md:gap-[10px]">
          <div className="flex flex-row items-center justify-start gap-[48.76px]">
            <div className="flex flex-row items-center justify-start gap-[49px] lg:gap-[10px] md:hidden">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base-5 tracking-[0.01em] font-medium font-poppins text-gray-1000 text-left inline-block w-[101.26px] h-[27px] shrink-0 lg:text-smi">
                CATALOGUE
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base-5 tracking-[0.01em] font-medium font-poppins text-gray-1000 text-left inline-block w-[72.01px] h-[24.75px] shrink-0 lg:text-smi">
                FASHION
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base-5 tracking-[0.01em] font-medium font-poppins text-gray-1000 text-left inline-block w-[92.26px] h-[24.75px] shrink-0 lg:text-smi">
                FAVOURITE
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base-5 tracking-[0.01em] font-medium font-poppins text-gray-1000 text-left inline-block w-[77.26px] h-6 shrink-0 lg:text-smi">
                LIFESTYLE
              </button>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-gray-300 relative rounded-[13.32px] w-[74.57px] h-[74.57px] overflow-hidden shrink-0 hidden md:flex md:rounded-[17.68px]">
              <div className="absolute top-[17.76px] left-[16.87px] rounded-[5.77px] bg-pure-white shadow-[0px_1.3316326141357422px_1.78px_0.89px_rgba(0,_0,_0,_0.25)] w-[40.39px] h-[38.62px]" />
              <div className="absolute top-[27.08px] left-[24.86px] box-border w-[24.86px] h-[2.66px] border-t-[2.7px] border-solid border-black" />
              <div className="absolute top-[35.95px] left-[24.86px] box-border w-[24.86px] h-[2.66px] border-t-[2.7px] border-solid border-black" />
              <div className="absolute top-[44.83px] left-[24.86px] box-border w-[24.86px] h-[2.66px] border-t-[2.7px] border-solid border-black" />
            </button>
          </div>
          <button
            className="cursor-pointer [border:none] py-2.5 px-[17px] bg-black rounded-[5.25px] flex flex-row items-center justify-center hover:bg-darkslategray-100"
            onClick={onSignUpClick}
          >
            <div className="relative text-lg tracking-[-0.03em] font-medium font-poppins text-gray-300 text-left lg:text-base md:text-mini sm:text-sm">
              SIGN UP
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
