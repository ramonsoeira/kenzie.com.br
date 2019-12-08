import React from "react";
import "@styles/cta-bar.scss";

const CTABar = ({ onOpenLeadForm }) => {
  return (
    <div class="kz-cta-bar">
      <div class="container">
        <div class="column has-text-centered">
          <h3 class="kz-cta-bar-title">
            Preparado para começar uma nova carreira?
          </h3>

          <button class="kz-button" onClick={onOpenLeadForm}>
            Tenho interesse
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTABar;
