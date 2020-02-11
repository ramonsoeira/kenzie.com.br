import React from "react";
import Img from "gatsby-image";
import classNames from "classnames";

import Frame from "@images/thumbnail/frame.png";

import "@styles/thumbnail.scss";

const Thumbnail = ({ src, fluid, alt = "", reverse, removeBg }) => {
  const thumbnailClass = classNames("kz-thumbnail", {
    reverse,
    "remove-bg": removeBg
  });

  return (
    <div className={thumbnailClass}>
      <div className="kz-thumbnail-image">
        <img alt="" className="kz-thumbnail-frame" src={Frame} />

        {fluid ? <Img alt={alt} fluid={fluid} /> : <img alt={alt} src={src} />}
      </div>
    </div>
  );
};

export default Thumbnail;
