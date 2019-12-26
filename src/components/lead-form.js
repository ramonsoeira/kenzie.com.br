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

  const appendScript = src => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.onload = () => loadScript();
    document.head.appendChild(script);
  };

  const loadScript = () => {
    return global.hbspt.forms.create({
      portalId: "6600573",
      formId: "5eb291f0-d4b8-4229-8583-8745a7dddc56",
      target: `#form`,
      onFormSubmitted: function() {
        if (process.env.NODE_ENV !== "development" && windowGlobal) {
          windowGlobal.gtag("event", "conversion", {
            send_to: "AW-700277406/tAe6COeChrEBEJ7F9c0C"
          });

          windowGlobal.gtag("event", "hubspot_form_registration");
        }
      }
    });
  };

  useEffect(() => {
    appendScript("https://js.hsforms.net/forms/v2.js");
  }, []);

  return (
    <div className={leadFormClass} onClick={onClose}>
      <div className="kz-lead-form-overlay">
        <div className="kz-lead-form-close" onClick={onClose}>
          <CloseIcon />
        </div>

        <div ref={form} id="form" />
      </div>
    </div>
  );
};

export default LeadForm;
