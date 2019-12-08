import React from "react";

import Topbar from "@components/topbar";
import Header from "@components/header";

import Hero from "@sections/hero";
import TwoThousandHours from "@sections/two-thousand-hours";
import WeBelieveInYourPotential from "@sections/we-believe";

import "@styles/index.scss";

const Index = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Header />

      <Hero />

      <TwoThousandHours />
      <WeBelieveInYourPotential />
    </React.Fragment>
  );
};

export default Index;
