import React, { useState } from "react";
import SEO from "@components/seo";
import WhatsappButton from "@components/whatsapp-button";
import LeadForm from "@components/lead-form";
import Topbar from "@components/top-bar";
import Header from "@components/header";
import CTABar from "@components/cta-bar";
import Footer from "@components/footer";
import "@styles/index.scss";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: "https://73f769c3630d445398f46ddd664d2fe3@sentry.io/1860386",
    integrations: [
      new Integrations.CaptureConsole({
        levels: ["error"]
      })
    ]
  });
}

export default ({ children, title, description, searchParams, ...rest }) => {
  const [openLeadForm, setOpenLeadForm] = useState(false);

  return (
    <div {...rest}>
      <SEO title={title} description={description} />
      <WhatsappButton />

      <LeadForm isOpen={openLeadForm} onClose={() => setOpenLeadForm(false)} />
      <Topbar onOpenLeadForm={() => setOpenLeadForm(true)} />
      <Header searchParams={searchParams || ""} />

      {children}

      <CTABar onOpenLeadForm={() => setOpenLeadForm(true)} />
      <Footer searchParams={searchParams || ""} />
    </div>
  );
};
