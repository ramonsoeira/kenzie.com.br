import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import CloseIcon from "@icons/close";
import windowGlobal from "@utils/window";

import "@styles/lead-form.scss";

const LeadForm = ({ isOpen, onClose }) => {
  const form = useRef();

  const leadFormClass = classNames("kz-lead-form", {
    "is-open": isOpen
  });

  const loadScript = () => {
    return global.hbspt.forms.create({
      portalId: "6600573",
      formId: "5eb291f0-d4b8-4229-8583-8745a7dddc56",
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
    <div className={leadFormClass} onClick={onClose} role="dialog">
      <div className="kz-lead-form-overlay">
        <button className="kz-lead-form-close" onClick={onClose}>
          <CloseIcon />
        </button>

        <div ref={form} id="form" />
      </div>
    </div>
  );
};

export default LeadForm;
