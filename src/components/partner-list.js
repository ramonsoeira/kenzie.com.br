import React from "react";

import BancoBari from "@images/partners/banco-bari.png";
import CPlug from "@images/partners/cplug.png";
import EBANX from "@images/partners/ebanx.png";
import GrupoBarigui from "@images/partners/grupo-barigui.png";
import James from "@images/partners/james.png";
import SocialWave from "@images/partners/social-wave.png";

const PartnerList = () => {
  return (
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column has-text-centered">
          <img width="120" src={BancoBari} alt="Banco Bari" />
        </div>

        <div class="column has-text-centered">
          <img width="120" src={CPlug} alt="CPlug" />
        </div>

        <div class="column has-text-centered">
          <img width="120" src={James} alt="James" />
        </div>

        <div class="column has-text-centered">
          <img width="120" src={GrupoBarigui} alt="Grupo Barigui" />
        </div>

        <div class="column has-text-centered">
          <img width="120" src={EBANX} alt="EBANX" />
        </div>

        <div class="column has-text-centered">
          <img width="120" src={SocialWave} alt="Social Wave" />
        </div>
      </div>
    </div>
  );
};

export default PartnerList;
