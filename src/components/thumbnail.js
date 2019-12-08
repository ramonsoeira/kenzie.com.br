import React from "react";
import "@styles/thumbnail.scss";

import Frame from "@images/frame.png";

const Thumbnail = ({ src }) => {
  return (
    <div className="kz-thumbnail">
      <img className="kz-thumbnail-frame" src={Frame} />
      <img src={src} />
    </div>
  );
};

export default Thumbnail;
