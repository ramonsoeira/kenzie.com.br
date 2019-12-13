import React from "react";
import "@styles/whatsapp-button.scss";

const WhatsappButton = () => {
  return (
    <a
      data-ga="whatsapp-btn"
      className="kz-whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      href="https://api.whatsapp.com/send?phone=5541992329867"
    >
      Tenho interesse
    </a>
  );
};

export default WhatsappButton;
