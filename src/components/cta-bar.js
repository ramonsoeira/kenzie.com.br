import React from "react";
import LeadFormButton from "@components/lead-form-button";

import "@styles/cta-bar.scss";

const CTABar = () => {
  return (
    <div className="kz-cta-bar">
      <div className="container">
        <div className="column has-text-centered">
          <h3 className="kz-cta-bar-title">
            Preparado para começar uma nova carreira?
          </h3>

          <LeadFormButton data-ga="bottom-bar-cta-btn" className="kz-button">
            Tenho interesse
          </LeadFormButton>
        </div>
      </div>
    </div>
  );
};

export default CTABar;
