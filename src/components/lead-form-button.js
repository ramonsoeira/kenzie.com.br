import React, { useContext } from "react";
import { LeadFormProvider, LeadFormContext } from "@context/lead-form";

const LeadFormButton = ({ children, className = "kz-button", ...props }) => {
  const [_state, dispatch] = useContext(LeadFormContext);

  return (
    <LeadFormProvider>
      <button
        onClick={() => dispatch({ type: "open" })}
        className={className}
        {...props}
      >
        {children}
      </button>
    </LeadFormProvider>
  );
};

export default LeadFormButton;
