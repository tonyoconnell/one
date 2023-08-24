import { FunctionComponent } from "react";

const ColorSpectrumContainer: FunctionComponent = () => {
  return (
    <section
      className="absolute top-[62.13rem] left-[0.31rem] bg-floralwhite w-[120rem] h-[56.25rem] text-center text-[3.44rem] text-gray-200 font-volkhov"
      id="Colors"
    >
      <div className="absolute top-[7.69rem] left-[19.5rem] w-[81rem] h-[34.56rem]">
        <div className="absolute top-[0rem] left-[14.5rem] w-[53.94rem] h-[7.69rem]">
          <b className="absolute top-[0rem] left-[0rem] leading-[120%] capitalize inline-block w-[53.94rem] h-[4.7rem]">
            A Spectrum of Natural Colors
          </b>
          <div className="absolute top-[5.84rem] left-[6.44rem] text-[1.13rem] leading-[140%] font-semibold font-roboto text-darkslategray inline-block w-[39.38rem] h-[1.85rem]">
            <p className="m-0">
              Our color palette is derived from the very bosom of nature. From
              vibrant hues to subtle tones, all our colors are obtained from
              completely natural sources.
            </p>
          </div>
        </div>
        <div className="absolute top-[10.06rem] left-[0rem] w-[81rem] h-[24.5rem] text-[1.63rem] text-darkslategray font-poppins">
          <div className="absolute top-[0rem] left-[0rem] w-[50.75rem] h-[24.5rem]">
            <div className="absolute top-[0rem] left-[0rem] w-[50.75rem] h-[24.5rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-pure-white box-border w-[26rem] h-[24.5rem] border-[1px] border-solid border-gainsboro" />
              <div className="absolute top-[11.44rem] left-[2.69rem] w-[20.56rem] h-[9.31rem]">
                <div className="absolute top-[0rem] left-[4.31rem] leading-[1.69rem] font-semibold">
                  Mango Leaves
                </div>
                <div className="absolute top-[2.56rem] left-[0rem] text-inherit leading-[1.69rem] font-semibold font-inherit text-paragraph inline-block w-[20.56rem] h-[6.75rem]">
                  <ul className="m-0 pl-[1.31rem]">
                    Leaves offer us various shades of green, from fresh lime to
                    deep forest hues.
                  </ul>
                </div>
              </div>
              <div className="absolute top-[11.44rem] left-[30.19rem] w-[20.56rem] h-[9.31rem]">
                <div className="absolute top-[0rem] left-[7.38rem] leading-[1.69rem] font-semibold">
                  Mango
                </div>
                <div className="absolute top-[2.56rem] left-[0rem] text-[1rem] leading-[1.69rem] font-dm-sans text-paragraph inline-block w-[20.56rem]">
                  A complete set of tools to enable marketing teams to curate,
                  personalize, contextualize, send, integrate and track
                  campaigns - no coding required.
                </div>
              </div>
            </div>
            <img
              className="absolute top-[1.13rem] left-[8.56rem] w-[8.88rem] h-[8.88rem] object-cover"
              alt=""
              src="/mask-group2@2x.png"
            />
          </div>
          <div className="absolute top-[0rem] left-[27.5rem] rounded-8xs bg-darkseagreen box-border w-[26rem] h-[24.5rem] text-pure-white border-[1px] border-solid border-gainsboro">
            <img
              className="absolute top-[1.13rem] left-[8.56rem] w-[8.88rem] h-[8.88rem] object-cover"
              alt=""
              src="/color-soil@2x.png"
            />
            <div className="absolute top-[11.44rem] left-[2.69rem] w-[20.56rem] h-[5.94rem]">
              <div className="absolute top-[0rem] left-[8.81rem] leading-[1.69rem] font-semibold">
                Soil
              </div>
              <div className="absolute top-[2.56rem] left-[0rem] text-[1rem] leading-[1.69rem] font-semibold font-roboto inline-block w-[20.56rem]">
                Soil helps us create subtle shades of beige and ochre.
              </div>
            </div>
          </div>
          <div className="absolute top-[0rem] left-[55rem] rounded-8xs bg-pure-white box-border w-[26rem] h-[24.5rem] border-[1px] border-solid border-gainsboro">
            <div className="absolute top-[1.13rem] left-[2.69rem] w-[20.56rem] h-[16.25rem]">
              <div className="absolute top-[10.31rem] left-[8.38rem] leading-[1.69rem] font-semibold">
                Bark
              </div>
              <div className="absolute top-[12.88rem] left-[0rem] text-inherit leading-[1.69rem] font-inherit text-paragraph inline-block w-[20.56rem]">
                <ul className="m-0 pl-[1.31rem]">
                  Bark and tree extracts give us earthy browns and rich
                  charcoals.
                </ul>
              </div>
              <img
                className="absolute top-[0rem] left-[5.88rem] w-[8.88rem] h-[8.88rem] object-cover"
                alt=""
                src="/color-bark@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorSpectrumContainer;
