import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import "@styles/card.scss";

const Card = ({ title, children, icon, buttonTo, buttonLabel, align }) => {
  const hasButtonProp = buttonLabel;

  const cardClass = classNames("kz-card", {
    "is-align-right": align === "right",
    "is-align-left": align === "left"
  });

  return (
    <div className={cardClass}>
      <div>
        <div className="kz-card-icon">{icon}</div>
        <p className="kz-card-title">{title}</p>
        <p className="kz-card-text">{children}</p>
      </div>

      {hasButtonProp && (
        <Link className="kz-button" to={buttonTo}>
          {buttonLabel}
        </Link>
      )}
    </div>
  );
};

export default Card;