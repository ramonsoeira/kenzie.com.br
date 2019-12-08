import React from "react";

import { Link } from "gatsby";

import Thumbnail from "@components/thumbnail";
import Image from "@images/brand/we-believe.png";

const WeBelieve = () => {
  return (
    <React.Fragment>
      <div class="kz-hero">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 class="kz-hero-title">Nós acreditamos em seu potencial!</h1>

              <div class="kz-hero-content">
                <p>
                  Por isso, você não paga o curso até ser contratado com uma
                  remuneração de R$ 3.000,00/mês. Para garantir o seu sucesso
                  nós damos todo o apoio para a sua colocação no mercado de
                  trabalho através de mentoria de carreira e parcerias que
                  aceleram sua contratação.
                </p>
              </div>

              <Link className="kz-button" to="/">
                Saiba mais
              </Link>
            </div>

            <div className="column">
              <Thumbnail
                src={Image}
                alt="Comece aqui sua carreira em tecnologia!"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeBelieve;
