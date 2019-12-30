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
          <a href="https://www.bancobari.com.br/" target="_blank" rel="noopener noreferrer">
            <img width="120px" src={BancoBari} alt="Banco Bari" />
          </a>
        </div>

        <div className="column is-half-mobile has-text-centered">
          <a href="https://www.connectplug.com.br/" target="_blank" rel="noopener noreferrer">
            <img width="120px" src={CPlug} alt="CPlug" />
          </a>
        </div>

        <div className="column is-half-mobile has-text-centered">
          <a href="https://www.jamesdelivery.com.br/" target="_blank" rel="noopener noreferrer">
            <img width="120px" src={James} alt="James" />
          </a>
        </div>

        <div className="column is-half-mobile has-text-centered">
          <a href="https://www.grupobarigui.com.br/" target="_blank" rel="noopener noreferrer">
            <img width="120px" src={GrupoBarigui} alt="Grupo Barigui" />
          </a>
        </div>

        <div className="column is-half-mobile has-text-centered">
          <a href="https://www.ebanx.com/br/" target="_blank" rel="noopener noreferrer">
            <img width="120px" src={EBANX} alt="EBANX" />
          </a>
        </div>

        <div className="column is-half-mobile has-text-centered">
          <a href="https://socialwave.com.br/" target="_blank" rel="noopener noreferrer">
            <img width="120px" src={SocialWave} alt="Social Wave" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnerList;
