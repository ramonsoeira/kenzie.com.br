import React from "react";

import Card from "@components/card";
import KnowledgeIcon from "@icons/knowledge";

import "@styles/sections/two-thousand-hours.scss";

const TwoThousandHours = () => {
  return (
    <React.Fragment>
      <div class="kz-two-thousand-hours">
        <div class="container">
          <div class="columns is-justified-between">
            <div class="column">
              <Card
                icon={KnowledgeIcon}
                title="O que você vai aprender aqui?"
                buttonLabel="Saiba mais"
              >
                Linguagens de programação modernas e muito utilizadas no mercado
                Front end: HTML, CSS, JavaScript e React. Back end: Python e
                Node.jS
              </Card>
            </div>

            <div class="column">
              <Card
                icon={KnowledgeIcon}
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
                icon={KnowledgeIcon}
                title="Metodologia comprovada"
                buttonLabel="Saiba mais"
              >
                A combinação de aulas presenciais, ensino baseado em projetos,
                acompanhamento do nosso time e currículo validado nos Estados
                Unidos vai acelerar sua carreira para o sucesso.
              </Card>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TwoThousandHours;
