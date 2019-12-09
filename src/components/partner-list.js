import React from "react";

import BancoBari from "@images/partners/banco-bari.png";
import CPlug from "@images/partners/cplug.png";
import EBANX from "@images/partners/ebanx.png";
import GrupoBarigui from "@images/partners/grupo-barigui.png";
import James from "@images/partners/james.png";
import SocialWave from "@images/partners/social-wave.png";

const PartnerList = () => {
  return (
    <div className="container">
      <div className="columns is-mobile is-multiline is-vcentered">
        <div className="column is-half-mobile has-text-centered">
          <img width="120px" src={BancoBari} alt="Banco Bari" />
        </div>

        <div className="column is-half-mobile has-text-centered">
          <img width="120px" src={CPlug} alt="CPlug" />
        </div>

        <div className="column is-half-mobile has-text-centered">
          <img width="120px" src={James} alt="James" />
        </div>

        <div className="column is-half-mobile has-text-centered">
          <img width="120px" src={GrupoBarigui} alt="Grupo Barigui" />
        </div>

        <div className="column is-half-mobile has-text-centered">
          <img width="120px" src={EBANX} alt="EBANX" />
        </div>

        <div className="column is-half-mobile has-text-centered">
          <img width="120px" src={SocialWave} alt="Social Wave" />
        </div>
      </div>
    </div>
  );
};

export default PartnerList;
