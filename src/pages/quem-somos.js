import React from "react";
import Layout from "@layout/default";

import Thumbnail from "@components/thumbnail";

import FirstImage from "@images/about-us/photo-1.png";
import SecondImage from "@images/about-us/photo-2.png";

import "@styles/pages/about-us.scss";

const Index = props => {
  return (
    <Layout
      title="Quem somos | Kenzie Academy Brazil"
      searchParams={props.location.search}
    >
      <div className="kz-section has-text-centered">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h3 className="kz-section-head-title">Quem somos</h3>

              <div>
                {/* prettier-ignore */}
                <p className="kz-section-text">
                  Começamos em <span className="is-bold">2017</span> nos <span className="is-bold">Estados Unidos</span> com o
                  propósito de oferecer a oportunidade para pessoas se formarem e
                  ingressarem no mercado de <span className="is-bold">tecnologia rapidamente</span>, 
                  sem mensalidade e com <span className="is-bold">alta qualidade.</span>
                </p>
                <br />
                <a
                  data-ga="eua-kenzie-btn"
                  target="_blank"
                  href="https://www.kenzie.academy/"
                  rel="noopener noreferrer"
                  className="kz-button"
                >
                  Conheça o site da Kenzie EUA
                </a>
              </div>

              <iframe
                title="Quem somos"
                data-ga="who-we-are-video"
                width="560"
                height="315"
                className="kz-about-us-iframe"
                src="https://www.youtube.com/embed/aKrv8YsMYaY"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="kz-section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <Thumbnail
                alt="Grupo de alunos conversando entre si"
                src={FirstImage}
                reverse={true}
              />
            </div>

            <div className="column is-5 is-offset-1">
              {/* prettier-ignore */}
              <p className="kz-section-text">
                  Agora iniciamos nosso trabalho no <span className="is-bold">Brasil</span>, trazendo todo a
                  experiência adquirida no mercado americano. Nosso objetivo é
                  fomentar essa área, garantindo que nossos alunos tenham a expertise para atuação 
                  como <span className="is-bold">desenvolvedor full-stack</span> após <span className="is-bold">12 meses de curso</span>.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className="kz-section">
        <div className="container">
          <div className="columns reverse-columns is-vcentered">
            <div className="column is-5">
              {/* prettier-ignore */}
              <p className="kz-section-text">
                  A <span className="is-bold">Kenzie Academy</span> atua a mais de <span className="is-bold">3 anos</span>, 
                  com mais de <span className="is-bold">500 alunos matriculados</span>. Recentemente, levantamos um 
                  fundo de investimento de <span className="is-bold">US$100 milhões</span> para dar oportunidade a 
                  milhares de novos alunos transformarem suas vidas.
                </p>
            </div>

            <div className="column is-7">
              <Thumbnail
                alt="Grupo de alunos em uma aula de programação"
                src={SecondImage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
