import React from "react";
import { Link } from "gatsby";
import Layout from "@layout/default";

import WeBelieve from "@sections/we-believe";
import SuccessfulCareer from "@sections/successful-career";

//Components
import Card from "@components/card";
import Thumbnail from "@components/thumbnail";

//Imagens
import FirstImage from "@images/home/photo-1.png";

//Icon
import KnowledgeIcon from "@icons/knowledge";
import CodeIcon from "@icons/code";

import "@styles/pages/home.scss";

const Index = () => {
  return (
    <React.Fragment>
      <Layout
        class="kz-home-page"
        title="Comece aqui sua carreira em tecnologia!"
      >
        <div class="kz-hero">
          <div className="container">
            <div className="columns is-vcentered reverse-columns">
              <div className="column">
                <h1 class="kz-hero-title">Comece aqui sua carreira</h1>

                <div class="kz-hero-content">
                  {/* prettier-ignore */}
                  <p>
                  Aprenda com os melhores profissionais a se tornar um <span class="is-bold">DESENVOLVEDOR DE SOFTWARE</span> completo.
                </p>

                  {/* prettier-ignore */}
                  <p>
                  Começamos em 2017 nos Estados Unidos com o propósito de
                  oferecer a oportunidade para pessoas se formarem e ingressarem
                  no mercado de tecnologia <span class="is-bold">rapidamente, 
                  sem mensalidade e com alta qualidade.</span>
                </p>

                  {/* prettier-ignore */}
                  <p>
                  Já formamos <span class="is-bold">centenas de alunos</span> e
                  contamos com uma <span class="is-bold">alta taxa de empregabilidade!</span>
                </p>
                </div>

                <Link className="kz-button" to="/">
                  Saiba mais
                </Link>
              </div>

              <div className="column">
                <Thumbnail
                  src={FirstImage}
                  removeBg={true}
                  alt="Comece aqui sua carreira em tecnologia!"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="kz-title">Mais de 2.000 horas de aulas</h3>

          <div class="container">
            <div class="columns is-justified-between">
              <div class="column">
                <Card
                  icon={<KnowledgeIcon />}
                  title="O que você vai aprender aqui?"
                  buttonLabel="Saiba mais"
                  align="left"
                >
                  Linguagens de programação modernas e muito utilizadas no
                  mercado Front end: HTML, CSS, JavaScript e React. Back end:
                  Python e Node.jS
                </Card>
              </div>

              <div class="column">
                <Card
                  icon={<CodeIcon />}
                  title="Aprenda na prática"
                  buttonLabel="Saiba mais"
                >
                  Nossos alunos criam um amplo portfólio de projetos realizados,
                  se preparando para o dia a dia de um programador e facilitando
                  sua entrada no mercado de trabalho.
                </Card>
              </div>

              <div class="column">
                <Card
                  icon={<CodeIcon />}
                  title="Metodologia comprovada"
                  buttonLabel="Saiba mais"
                  align="right"
                >
                  A combinação de aulas presenciais, ensino baseado em projetos,
                  acompanhamento do nosso time e currículo validado nos Estados
                  Unidos vai acelerar sua carreira para o sucesso.
                </Card>
              </div>
            </div>
          </div>
        </div>

        <WeBelieve />
        <SuccessfulCareer />
      </Layout>
    </React.Fragment>
  );
};

export default Index;
