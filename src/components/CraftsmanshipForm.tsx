import { FunctionComponent } from "react";
import ButtonSolidWithIcon from "./ButtonSolidWithIcon";

const CraftsmanshipForm: FunctionComponent = () => {
  return (
    <section className="absolute top-[11.56rem] left-[19.94rem] w-[80.75rem] h-[31.25rem] text-left text-[3.44rem] text-gray-200 font-volkhov">
      <div className="absolute top-[0.75rem] left-[0rem] rounded-13xl bg-papayawhip w-[17.25rem] h-[14.13rem]" />
      <div className="absolute top-[0rem] left-[41.69rem] w-[39.06rem] h-[31.25rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[39.06rem] h-[15.94rem]">
          <b className="absolute top-[0rem] left-[0rem] leading-[120%] capitalize inline-block w-[39.06rem] h-[8.69rem]">{`Original, Tailored Craftsmanship `}</b>
          <div className="absolute top-[10.31rem] left-[0.44rem] text-[1.13rem] tracking-[0.01em] leading-[1.69rem] font-semibold font-roboto text-darkslategray inline-block w-[29.88rem] h-[5.63rem]">
            <p className="m-0">
              Experience a rarity in today's world — unmatched individuality.
              More than just an accessory, each scarf you acquire from us veers
              away from mass production. Our Karen HillTribe artisans mould
              every scarf with you in mind — adapting, creating, and threading
              each piece, just for you. Their stories, their passions, and their
              heritage are intricately woven into yours, composing an exclusive
              accessory that is an icon of style, authenticity, and cultural
              heritage.
            </p>
          </div>
        </div>
        <ButtonSolidWithIcon
          orderOnline="Design Your Scarf"
          iconBasicDown10px="/iconbasicdown10px1.svg"
          showIconBasicDown10px={false}
          buttonSolidWithIconPosition="absolute"
          buttonSolidWithIconBorderRadius="50px"
          buttonSolidWithIconBackgroundColor="#89a965"
          buttonSolidWithIconPadding="0.88rem 1.56rem"
          buttonSolidWithIconTop="27.81rem"
          buttonSolidWithIconLeft="0rem"
          buttonSolidWithIconWidth="10.44rem"
          textWidth="9.06rem"
          textHeight="1.69rem"
          orderOnlineTop="0rem"
          orderOnlineLeft="0rem"
          orderOnlineFontSize="1.13rem"
          orderOnlineLineHeight="1.69rem"
          orderOnlineFontWeight="600"
          orderOnlineFontFamily="Outfit"
          iconBasicDown10pxTop="1.44rem"
          iconBasicDown10pxLeft="8.95rem"
          iconBasicDown10pxWidth="0.63rem"
          iconBasicDown10pxHeight="0.63rem"
        />
      </div>
      <img
        className="absolute top-[4.13rem] left-[4.19rem] w-[32.11rem] h-[25.38rem] object-cover"
        alt=""
        src="/pic@2x.png"
      />
    </section>
  );
};

export default CraftsmanshipForm;
