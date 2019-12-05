import React from "react";

import Topbar from "@components/topbar";
import Card from "@components/card";
import PartnerList from "@components/partner-list";
import BottomBar from "@components/bottom-bar";

import KnowledgeIcon from "@icons/knowledge";

import "@styles/index.scss";

const Index = () => {
  return (
    <React.Fragment>
      {/* <Topbar /> */}

      {/* <div class="columns">
        <div class="column">
          <h1>Comece aqui sua carreira em tecnologia!</h1>

          <p>
            Aprenda com os melhores profissionais a se tornar um DESENVOLVEDOR
            DE SOFTWARE completo.
          </p>

          <p>
            Começamos em 2017 nos Estados Unidos com o propósito de oferecer a
            oportunidade para pessoas se formarem e ingressarem no mercado de
            tecnologia rapidamente, sem mensalidade e com alta qualidade.
          </p>

          <p>
            Já formamos centenas de alunos e contamos com uma alta taxa de
            empregabilidade!
          </p>

          <a class="kz-button" href="">
            Saiba mais
          </a>
        </div>
        <div class="column"></div>
      </div> */}
{/* 
      <div class="columns">
        <div class="column">
          <Card
            icon={<KnowledgeIcon />}
            title="Aprenda na prática"
            buttonLabel="Saiba mais"
            buttonHref="/"
          >
            Nossos alunos criam um amplo portfólio de projetos realizados, se
            preparando para o dia a dia de um programador e facilitando sua
            entrada no mercado de trabalho.
          </Card>
        </div>

        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
      </div> */}

      {/* <PartnerList /> */}
      <BottomBar />
    </React.Fragment>
  );
};

export default Index;
