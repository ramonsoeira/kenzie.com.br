import React from "react";
import "@styles/card.scss";

const Card = ({ title, children, icon, buttonHref, buttonLabel }) => {
  return (
    <div class="kz-card">
      <div class="kz-card-icon">{icon}</div>

      <p class="kz-card-title">{title}</p>
      <p class="kz-card-text">{children}</p>

      <a class="kz-button" href={buttonHref}>
        {buttonLabel}
      </a>
    </div>
  );
};

export default Card;
