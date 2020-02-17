import React from "react";
import Slider from "@components/slider";

import Vitto from "@images/partners/vitto.png";
import Esparta from "@images/partners/esparta.svg";
import LarApp from "@images/partners/lar-app.png";
import Bcredi from "@images/partners/bcredi.png";
import BancoBari from "@images/partners/banco-bari.png";
import CPlug from "@images/partners/cplug.png";
import EBANX from "@images/partners/ebanx.png";
import GrupoBarigui from "@images/partners/grupo-barigui.png";
import James from "@images/partners/james.png";
import SocialWave from "@images/partners/social-wave.png";
import VHSYS from "@images/partners/vhsys.png";

import "@styles/partner-list.scss";

const PartnerList = () => {
  return (
    <div class="kz-partner-list">
      <div className="container">
        <Slider>
          <div>
            <a
              href="https://www.ebanx.com/br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="120px" src={EBANX} alt="EBANX" />
            </a>
          </div>

          <div>
            <a
              href="https://www.jamesdelivery.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="120px" src={James} alt="James" />
            </a>
          </div>

          <div>
            <a
              href="https://socialwave.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="120px" src={SocialWave} alt="Social Wave" />
            </a>
          </div>

          <div>
            <a
              href="https://www.bancobari.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="120px" src={BancoBari} alt="Banco Bari" />
            </a>
          </div>

          <div>
            <a
              href="https://www.bcredi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="120px" src={Bcredi} alt="Bcredi" />
            </a>
          </div>

          <div>
            <a
              href="https://www.grupobarigui.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="120px" src={GrupoBarigui} alt="Grupo Barigui" />
            </a>
          </div>

          <div>
            <a
              href="https://www.connectplug.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="120px" src={CPlug} alt="CPlug" />
            </a>
          </div>

          <div>
            <a
              href="https://vhsys.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="120px" src={VHSYS} alt="VHSYS" />
            </a>
          </div>

          <div>
            <a
              href="https://lar.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="120px" src={LarApp} alt="LAR" />
            </a>
          </div>

          <div>
            <a
              href="https://esparta.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="120px" src={Esparta} alt="Esparta" />
            </a>
          </div>

          <div>
            <a
              href="https://sistemavitto.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="120px" src={Vitto} alt="Vitto" />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PartnerList;
