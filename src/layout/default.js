import React from "react";

import Topbar from "@components/top-bar";
import Header from "@components/header";
import CTABar from "@components/cta-bar";
import Footer from "@components/footer";

import "@styles/index.scss";

export default ({ children }) => (
  <React.Fragment>
    <Topbar />
    <Header />
    {children}
    <CTABar />
    <Footer />
  </React.Fragment>
);
