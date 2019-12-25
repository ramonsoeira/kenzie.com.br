import React from "react";

import Startupi from "@images/news-channels/startupi.png";
import Forbes from "@images/news-channels/forbes.png";
import GazetaDoPovo from "@images/news-channels/gazeta-do-povo.png";
import Exame from "@images/news-channels/exame.png";
import Tribuna from "@images/news-channels/tribuna.svg";

const NewsList = () => {
  return (
    <div className="container">
      <div className="columns is-mobile is-multiline is-vcentered">
        <div className="column is-half-mobile has-text-centered">
          <a
            href="https://startupi.com.br/2019/12/escola-de-programacao-kenzie-academy-chega-ao-brasil-e-so-cobrara-quando-alunos-conseguirem-remuneracao-de-r-3-mil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="120px" src={Startupi} alt="Startupi" />
          </a>
        </div>

        <div className="column is-half-mobile has-text-centered">
          <a
            href="https://forbes.com.br/colunas/2019/12/exclusivo-kenzie-quer-substituir-universidade-no-brasil-com-cursos-tecnicos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="120px" src={Forbes} alt="Forbes" />
          </a>
        </div>

        <div className="column is-half-mobile has-text-centered">
          <a
            href="https://www.gazetadopovo.com.br/vozes/parana-sa/kenzie-curitiba-programacao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="120px" src={GazetaDoPovo} alt="Gazeta do Povo" />
          </a>
        </div>

        <div className="column is-half-mobile has-text-centered">
          <a
            href="https://www.tribunapr.com.br/noticias/curso-de-programacao-em-curitiba-so-cobra-mensalidade-apos-aluno-ter-salario-de-r-3-mil/?utm_source=facebook&utm_medium=midia-social&utm_campaign=tribuna&fbclid=IwAR3-slXOfFGkwXyIExMg0FnFm-sfxNrxkPFT--3zoWacocmRiHglo7oqMJk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="120px" src={Tribuna} alt="Tribuna" />
          </a>
        </div>

        <div className="column is-half-mobile has-text-centered">
          <a
            href="https://exame.abril.com.br/negocios/releases/kenzie-academy-expande-se-internacionalmente-e-abre-campus-no-brasil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="120px" src={Exame} alt="Exame" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
