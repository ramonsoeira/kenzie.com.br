import React, { useState } from "react";

import SEO from "@components/seo";
import LeadForm from "@components/lead-form";
import Topbar from "@components/top-bar";
import Header from "@components/header";
import CTABar from "@components/cta-bar";
import Footer from "@components/footer";

import "@styles/index.scss";

export default ({ children, title }) => {
  const [openLeadForm, setOpenLeadForm] = useState(false);

  return (
    <React.Fragment>
      <SEO title={title} />
      <LeadForm isOpen={openLeadForm} onClose={() => setOpenLeadForm(false)} />

      <Topbar onOpenLeadForm={() => setOpenLeadForm(true)} />
      <Header />

      {children}

      <CTABar onOpenLeadForm={() => setOpenLeadForm(true)} />
      <Footer />
    </React.Fragment>
  );
};
