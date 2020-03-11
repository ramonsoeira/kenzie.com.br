import React, { useEffect, useRef, useContext } from "react";
import { LeadFormContext } from "@context/lead-form";

import classNames from "classnames";
import CloseIcon from "@icons/close";
import windowGlobal from "@utils/window";

import "@styles/lead-form.scss";

const LeadForm = () => {
  const [state, dispatch] = useContext(LeadFormContext);
  const form = useRef();

  const leadFormClass = classNames("kz-lead-form", {
    "is-open": state.open
  });

  const closeLeadForm = () => {
    return dispatch({ type: "close" });
  };

  const loadScript = () => {
    return global.hbspt.forms.create({
      portalId: "6600573",
      formId: "27e4657e-0561-4003-bf8e-20c8c5b78450",
      target: `#form`,
      onFormSubmitted: function() {
        if (process.env.NODE_ENV !== "development" && windowGlobal) {
          windowGlobal.dataLayer.push({ event: "hubspot_form_registration" });
        }
      }
    });
  };

  useEffect(() => {
    const appendScript = src => {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.onload = () => loadScript();
      document.head.appendChild(script);
    };

    appendScript("https://js.hsforms.net/forms/v2.js");
  }, []);

  return (
    <div className={leadFormClass} onClick={closeLeadForm} role="dialog">
      <div className="kz-lead-form-overlay">
        <button className="kz-lead-form-close" onClick={closeLeadForm}>
          <CloseIcon />
        </button>

        <div ref={form} id="form" />
      </div>
    </div>
  );
};

export default LeadForm;
