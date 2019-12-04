import React from "react";

import Topbar from "@components/topbar";
import Card from "@components/card";
import KnowledgeIcon from "@icons/knowledge";

import "@styles/index.scss";

const Index = () => {
  return (
    <React.Fragment>
      <Topbar />

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
      </div>
    </React.Fragment>
  );
};

export default Index;
