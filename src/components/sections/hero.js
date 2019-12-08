import React from "react";

import { Link } from "gatsby";
import Thumbnail from "@components/thumbnail";
import "@styles/hero.scss";

import StartCareer from "@images/brand/start-career.png";

const Hero = () => {
  return (
    <React.Fragment>
      <div class="kz-hero">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 class="kz-hero-title">
                Comece aqui sua carreira em tecnologia!
              </h1>

              <div class="kz-hero-content">
                {/* prettier-ignore */}
                <p>
                  Aprenda com os melhores profissionais a se tornar um <span class="has-text-weight-bold">DESENVOLVEDOR
                  DE SOFTWARE</span> completo.
                </p>

                <p>
                  Começamos em 2017 nos Estados Unidos com o propósito de
                  oferecer a oportunidade para pessoas se formarem e ingressarem
                  no mercado de tecnologia rapidamente, sem mensalidade e com
                  alta qualidade.
                </p>

                <p>
                  Já formamos centenas de alunos e contamos com uma alta taxa de
                  empregabilidade!
                </p>
              </div>

              <Link className="kz-button" to="/">
                Saiba mais
              </Link>
            </div>

            <div className="column">
              <Thumbnail
                src={StartCareer}
                alt="Comece aqui sua carreira em tecnologia!"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
