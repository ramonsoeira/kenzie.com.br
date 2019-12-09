import React from "react";
import classNames from "classnames";

import Frame from "@images/thumbnail/frame.png";

import "@styles/thumbnail.scss";

const Thumbnail = ({ src, reverse, removeBg }) => {
  const thumbnailClass = classNames("kz-thumbnail", {
    reverse,
    "remove-bg": removeBg
  });

  return (
    <div className={thumbnailClass}>
      <div class="kz-thumbnail-image">
        <img className="kz-thumbnail-frame" src={Frame} />
        <img src={src} />
      </div>
    </div>
  );
};

export default Thumbnail;
