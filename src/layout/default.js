import React, { useState } from "react";
import SEO from "@components/seo";
import WhatsappButton from "@components/whatsapp-button";
import LeadForm from "@components/lead-form";
import Topbar from "@components/top-bar";
import Header from "@components/header";
import CTABar from "@components/cta-bar";
import Footer from "@components/footer";
import "@styles/index.scss";

export default ({ children, title, description, ...rest }) => {
  const [openLeadForm, setOpenLeadForm] = useState(false);

  return (
    <div {...rest}>
      <SEO title={title} description={description} />
      <WhatsappButton />

      <LeadForm isOpen={openLeadForm} onClose={() => setOpenLeadForm(false)} />
      <Topbar onOpenLeadForm={() => setOpenLeadForm(true)} />
      <Header />

      {children}

      <CTABar onOpenLeadForm={() => setOpenLeadForm(true)} />
      <Footer />
    </div>
  );
};
