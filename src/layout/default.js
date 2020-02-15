import React, { useState } from "react";
import useWindowSize from "@utils/use-window-size";
import windowGlobal from "@utils/window";

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
  const windowSize = (windowGlobal && useWindowSize()) || 1024;

  const setClosedLeadForm = () => setOpenLeadForm(false);
  const setOpenedLeadForm = () => setClosedLeadForm(true);

  return (
    <div {...rest}>
      <SEO title={title} description={description} />
      <WhatsappButton />

      <LeadForm isOpen={openLeadForm} onClose={setClosedLeadForm} />

      {windowSize < 1024 ? (
        <HeaderMobile onOpenLeadForm={setOpenedLeadForm} />
      ) : (
        <Header onOpenLeadForm={setOpenedLeadForm} />
      )}

      {children}

      <CTABar onOpenLeadForm={setOpenedLeadForm} />
      <Footer />
    </div>
  );
};
