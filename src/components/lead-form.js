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

  const appendScript = (src, formId) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => loadScript(formId);
    document.head.appendChild(script);
  };

  const loadScript = () => {
    return global.hbspt.forms.create({
      portalId: "6600573",
      formId: "5eb291f0-d4b8-4229-8583-8745a7dddc56",
      target: `#${form.current.id}`,
      onFormSubmitted: function() {
        if (process.env.NODE_ENV !== "development") {
          //Send conversion event
          windowGlobal.gtag("event", "conversion", {
            send_to: "AW-700277406/tAe6COeChrEBEJ7F9c0C"
          });
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
