import { FunctionComponent } from "react";

const UniqueCreationsCard: FunctionComponent = () => {
  return (
    <section
      className="absolute top-[8.81rem] left-[0rem] w-[120rem] h-[52.63rem] overflow-hidden text-left text-[1.13rem] text-pure-white font-roboto"
      id="Hero"
    >
      <div className="absolute top-[9.25rem] left-[10.06rem] w-[45.38rem] h-[32.12rem]">
        <img
          className="absolute top-[-9.25rem] left-[-10.06rem] w-[119.66rem] h-[53.81rem] object-cover"
          alt=""
          src="/background@2x.png"
        />
        <div className="absolute top-[28.38rem] left-[0rem] rounded-31xl bg-darkseagreen w-[11.53rem] h-[3.75rem] text-center">
          <div className="absolute top-[0.97rem] left-[2.48rem] leading-[1.75rem] uppercase font-semibold inline-block w-[6.49rem] h-[1.81rem]">
            Shop now
          </div>
        </div>
        <div className="absolute top-[17.63rem] left-[0rem] leading-[1.75rem] font-semibold text-dimgray inline-block w-[36.06rem] h-[8.88rem]">{`Embark on your journey of discovery to uncover the unknown artistry of Karen Hill Tribe . `}</div>
        <b className="absolute top-[0rem] left-[0rem] text-[4.25rem] leading-[4.88rem] inline-block font-volkhov w-[45.38rem] h-[15.75rem] text-gray-200">
          <span>{`Truly Unique Creations, Crafted Just For `}</span>
          <span className="text-darkseagreen">You!</span>
        </b>
      </div>
    </section>
  );
};

export default UniqueCreationsCard;
