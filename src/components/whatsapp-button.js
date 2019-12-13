import React from "react";
import Image from "@images/whatsapp.png";
import "@styles/whatsapp-button.scss";

const WhatsappButton = () => {
  return (
    <a
      data-ga="whatsapp-btn"
      className="kz-whatsapp-button"
      target="_blank"
      href="https://api.whatsapp.com/send?phone=5541992329867"
    >
      <img src={Image} />
    </a>
  );
};

export default WhatsappButton;
