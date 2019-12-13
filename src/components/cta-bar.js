import React from "react";
import "@styles/cta-bar.scss";

const CTABar = ({ onOpenLeadForm }) => {
  return (
    <div className="kz-cta-bar">
      <div className="container">
        <div className="column has-text-centered">
          <h3 className="kz-cta-bar-title">
            Preparado para começar uma nova carreira?
          </h3>

          <button
            data-ga="bottom-bar-cta-btn"
            className="kz-button"
            onClick={onOpenLeadForm}
          >
            Tenho interesse
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTABar;
