import React from "react";
import { Link } from "gatsby";

import "@styles/box.scss";

const Box = ({ title, image, buttonLabel, buttonTo }) => {
  return (
    <div className="kz-box">
      <p className="kz-box-title" dangerouslySetInnerHTML={{ __html: title }} />

      <div className="kz-box-content">
        <img src={image} alt="" />
        <Link className="kz-button" to={buttonTo}>
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
};

export default Box;
