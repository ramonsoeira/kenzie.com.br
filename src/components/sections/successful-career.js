import React from "react";
import PartnerList from "@components/partner-list";

import "@styles/sections/successful-career.scss";

const SuccessfulCareer = () => {
  return (
    <React.Fragment>
      <div class="kz-successful-career">
        <h3 class="kz-title">
          Conheça os nossos parceiros que podem dar início a sua carreira de
          sucesso.
        </h3>

        <PartnerList />
      </div>
    </React.Fragment>
  );
};

export default SuccessfulCareer;
