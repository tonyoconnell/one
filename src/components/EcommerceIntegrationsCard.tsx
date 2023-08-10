import { FunctionComponent } from "react";

const EcommerceIntegrationsCard: FunctionComponent = () => {
  return (
    <div
      className="self-stretch bg-gray overflow-hidden flex flex-col py-[7rem] pr-[4rem] pl-[0.63rem] items-center justify-start gap-[5rem] text-center text-[1rem] text-primary font-text-regular-normal md:pl-[5rem] md:pr-[5rem] md:box-border sm:pl-[0.63rem] sm:pr-[0.63rem] sm:box-border"
      id="EcommerceIntegrations"
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[1rem]">
        <div className="relative leading-[150%] font-semibold">
          Ecommerce Chat Marketing
        </div>
        <h2 className="m-0 self-stretch relative text-[3rem] leading-[120%] font-bold font-inherit text-white sm:text-[1.88rem]">
          Connect your ecommerce store to every channel seamlessly
        </h2>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[3rem] text-[1.5rem] text-white md:flex-col">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-start gap-[2rem] md:flex-[unset] md:self-stretch">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[15rem] shrink-0 object-cover"
            alt=""
            src="/ecommerce-iconswoo@2x.png"
          />
          <div className="w-[26.46rem] flex flex-col items-center justify-center">
            <div className="self-stretch flex flex-col items-center justify-center gap-[1rem]">
              <b className="self-stretch relative leading-[140%]">{`Shopify `}</b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">
                Connect your Shopify store to send product, collection,
                customer, cart, order and information across all channels as
                messages.
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center gap-[2rem] md:flex-[unset] md:self-stretch">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[15rem] shrink-0 object-cover"
            alt=""
            src="/ecommerce-iconswoo1@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-center gap-[1rem]">
              <b className="self-stretch relative leading-[140%]">
                WooCommerce
              </b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">
                Connect your WooCommerce store to send product, collection,
                customer, cart, order and information across all channels as
                messages.
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center gap-[2rem] md:flex-[unset] md:self-stretch">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[15rem] shrink-0 object-cover"
            alt=""
            src="/ecommerce-iconswoo2@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
              <b className="self-stretch relative leading-[140%]">
                Social Shopping
              </b>
              <div className="self-stretch relative text-[1rem] leading-[150%]">
                Connect your Facebook and Instragram shops to send product,
                collection, customer, cart, order and information across all
                channels as messages.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceIntegrationsCard;
