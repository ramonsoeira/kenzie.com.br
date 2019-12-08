import React from "react";
import Layout from "@layout/default";

import Hero from "@sections/hero";
import TwoThousandHours from "@sections/two-thousand-hours";
import WeBelieve from "@sections/we-believe";
import SuccessfulCareer from "@sections/successful-career";

const Index = () => {
  return (
    <Layout title="Comece aqui sua carreira em tecnologia!">
      <Hero />

      <TwoThousandHours />
      <WeBelieve />
      <SuccessfulCareer />
    </Layout>
  );
};

export default Index;
