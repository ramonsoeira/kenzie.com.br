import React from "react";
import classNames from "classnames";

import Frame from "@images/thumbnail/frame.png";

import "@styles/thumbnail.scss";

const Thumbnail = ({ src, reverse }) => {
  const thumbnailClass = classNames("kz-thumbnail", {
    reverse
  });

  return (
    <div className={thumbnailClass}>
      <img className="kz-thumbnail-frame" src={Frame} />
      <img className="kz-thumbnail-img" src={src} />
    </div>
  );
};

export default Thumbnail;
