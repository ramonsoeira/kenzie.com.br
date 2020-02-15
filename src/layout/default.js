import React, { useState } from "react";

import windowGlobal from "@utils/window";
import useWindowSize from "@utils/use-window-size";

import SEO from "@components/seo";
import WhatsappButton from "@components/whatsapp-button";
import LeadForm from "@components/lead-form";
import Header from "@components/header";
import HeaderMobile from "@components/header-mobile";
import CTABar from "@components/cta-bar";
import Footer from "@components/footer";
import "@styles/index.scss";

export default ({ children, title, description, ...rest }) => {
  const [openLeadForm, setOpenLeadForm] = useState(false);
  const size = windowGlobal ? useWindowSize() : 1024;
  const showMobileHeader = size < 1024;

  console.log(size);

  const headerProps = {
    onOpenLeadForm: () => setOpenLeadForm(true)
  };

  return (
    <div {...rest}>
      <SEO title={title} description={description} />
      <WhatsappButton />

      <LeadForm isOpen={openLeadForm} onClose={() => setOpenLeadForm(false)} />

      {showMobileHeader ? (
        <HeaderMobile {...headerProps} />
      ) : (
        <Header {...headerProps} />
      )}

      {children}

      <CTABar onOpenLeadForm={() => setOpenLeadForm(true)} />
      <Footer />
    </div>
  );
};
