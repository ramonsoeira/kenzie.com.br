import React from "react";
import Topbar from "@components/topbar";
import Header from "@components/header";

import "@styles/index.scss";

export default () => {
  return (
    <React.Fragment>
      <Topbar />
      <Header />
    </React.Fragment>
  );
};
