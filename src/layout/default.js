import React, { useState } from "react";
import { LeadFormProvider } from "@context/lead-form";

import SEO from "@components/seo";
import WhatsappButton from "@components/whatsapp-button";
import LeadForm from "@components/lead-form";
import Header from "@components/header";
import HeaderMobile from "@components/header-mobile";
import CTABar from "@components/cta-bar";
import Footer from "@components/footer";

import "@styles/index.scss";

export default ({ children, title, description, ...rest }) => {
  return (
    <div {...rest}>
      <LeadFormProvider>
        <SEO title={title} description={description} />
        <WhatsappButton />

        <LeadForm />

        <HeaderMobile />
        <Header />

        {children}

        <CTABar />
        <Footer />
      </LeadFormProvider>
    </div>
  );
};
