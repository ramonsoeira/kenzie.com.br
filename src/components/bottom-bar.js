import React from "react";
import "@styles/bottom-bar.scss";

const BottomBar = () => {
  return (
    <div class="kz-bottom-bar">
      <div class="container">
        <div class="column has-text-centered">
          <h3 class="kz-bottom-bar-title">
            Preparado para começar uma nova carreira?
          </h3>

          <a href="/" class="kz-button">
            Tenho interesse
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
