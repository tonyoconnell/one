import { FunctionComponent } from "react";
import Footer from "./Footer";

const TermsOfServiceForm: FunctionComponent = () => {
  return (
    <div className="self-stretch h-[5.63rem] flex flex-col items-start justify-start">
      <Footer
        footerPosition="unset"
        footerWidth="unset"
        footerHeight="5.69rem"
        footerAlignSelf="stretch"
        footerFlexShrink="0"
        footerHeight1="5.69rem"
        creditsHeight="unset"
        creditsPadding="2.5rem 0rem"
        creditsJustifyContent="space-between"
        creditsGap="unset"
        oNEAllRightFontSize="0.75rem"
        footerLinksGap="1.5rem"
        privacyPolicyFontSize="0.75rem"
        termsOfServiceFontSize="0.75rem"
      />
    </div>
  );
};

export default TermsOfServiceForm;
