import React from "react";
import "@styles/topbar.scss";

const Topbar = () => {
  return (
    <div class="kz-topbar is-hidden-mobile">
      <p class="kz-topbar-text">
        Sua carreira em tecnologia começa na Kenzie Academy!
      </p>

      <span class="kz-topbar-alert">
        Próxima turma inicia 20 de janeiro de 2020
      </span>
    </div>
  );
};

export default Topbar;
