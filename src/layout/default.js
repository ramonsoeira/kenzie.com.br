import React, { useState } from "react";

import SEO from "@components/seo";
import WhatsappButton from "@components/whatsapp-button";
import LeadForm from "@components/lead-form";
import HeaderMobile from "@components/header-mobile";
import CTABar from "@components/cta-bar";
import Footer from "@components/footer";
import "@styles/index.scss";

export default ({ children, title, description, ...rest }) => {
  const [openLeadForm, setOpenLeadForm] = useState(false);

  const headerProps = {
    onOpenLeadForm: () => setOpenLeadForm(true)
  };

  return (
    <div {...rest}>
      <SEO title={title} description={description} />
      <WhatsappButton />

      <LeadForm isOpen={openLeadForm} onClose={() => setOpenLeadForm(false)} />

      <HeaderMobile {...headerProps} />

      {children}

      <CTABar onOpenLeadForm={() => setOpenLeadForm(true)} />
      <Footer />
    </div>
  );
};
