import React from "react";
import Layout from "@layout/default";
import Card from "@components/card";
import Thumbnail from "@components/thumbnail";

import FirstImage from "@images/curriculum/photo-1.png";
import SecondImage from "@images/curriculum/photo-2.png";
import SecondMobileImage from "@images/curriculum/photo-2-mobile.png";

import HTMLCSS from "@images/skills/html-css.png";
import JavaScript from "@images/skills/javascript.png";
import NodeJS from "@images/skills/nodejs.png";
import Python from "@images/skills/python.png";
import ReactJS from "@images/skills/react.png";

import AgileIcon from "@icons/agile";
import LeadershipIcon from "@icons/leadership";
import RocketIcon from "@icons/rocket";
import SkillIcon from "@icons/skill";

import "@styles/pages/curriculum.scss";

const Curriculum = () => {
  return (
    <Layout className="kz-curriculum">
      <div className="page">
        <div className="container">
          <div className="column">
            <div class="page-head">
              <h3 class="page-head-title">Currículo</h3>

              {/* prettier-ignore */}
              <p class="page-head-text">
                A <span className="is-bold">Kenzie</span> conta com um <span className="is-bold">currículo completo</span> para 
                a atuação de um <span className="is-bold">desenvolvedor full-stack</span> no mercado de tecnologia.
              </p>
            </div>
          </div>
        </div>

        <div className="page-section container">
          <div className="columns is-vcentered">
            <div className="column is-7">
              <Thumbnail src={FirstImage} reverse={true} />
            </div>

            <div className="column is-5">
              {/* prettier-ignore */}
              <h3>Como funciona</h3>

              {/* prettier-ignore */}
              <p>
                Para formarmos o melhor desenvolvedor <span className="is-bold">full-stack</span> nosso currículo
                abrange tecnologias front-end nos <span className="is-bold">6 primeiros meses</span> e back-end
                nos 6 últimos meses. Trimestralmente melhoramos nosso material
                conforme atualizações do mercado e <span className="is-bold">feedback dos alunos</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="page-section container">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <h3>Currículo front-end 6 primeiros meses</h3>

              <ul>
                <li>
                  Imaginar, criar e implementar aplicações usando as mais novas
                  tecnologias, incluindo, HTML5, CSS3, JavaScript (ES6 +) e
                  React.
                </li>

                <li>
                  Aprender a integrar com tecnologias back-end, como bancos de
                  dados e Node.js, bem como ferramentas de desenvolvedor, como
                  Bash, Git e testes automatizados.
                </li>

                <li>
                  Entender como trabalhar e colaborar efetivamente em um projeto
                  de desenvolvimento.
                </li>
              </ul>
            </div>

            <div className="column is-7">
              <div class="columns is-multiline is-justified-between">
                <div class="column">
                  <div className="kz-skill-card">
                    <img src={HTMLCSS} />
                    <p>HTML e CSS</p>
                  </div>
                </div>

                <div class="column">
                  <div className="kz-skill-card">
                    <img src={JavaScript} />
                    <p>JavaScript</p>
                  </div>
                </div>

                <div class="column">
                  <div className="kz-skill-card">
                    <img src={ReactJS} />
                    <p>React</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section container">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <div className="columns is-justified-between">
                <div class="column">
                  <div className="kz-skill-card">
                    <img src={NodeJS} />
                    <p>Node.js</p>
                  </div>
                </div>

                <div class="column">
                  <div className="kz-skill-card">
                    <img src={Python} />
                    <p>Python</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-6 is-offset-1">
              <h3>Currículo back-end 6 últimos meses</h3>

              <ul>
                <li>
                  Aprender Python uma linguagem de programação muito popular e
                  requisitada no mercado, bem como seus frameworks mais comuns -
                  Django e Flask.
                </li>

                <li>
                  Tornar-se adepto à interação com tecnologias como bancos de
                  dados e servidores, e a solução de problemas mais complexos.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="column">
            <h3 class="kz-title">Nosso diferencial</h3>

            <div class="columns">
              <div class="column">
                <Card icon={<AgileIcon />} title="Metodologia ágil">
                  Aprenda os conceitos e vivencie a utilização dessa metodologia
                  utilizada em grandes com cada vez mais frequência em empresas
                  e startups.
                </Card>
              </div>

              <div class="column">
                <Card icon={<SkillIcon />} title="Soft skills">
                  Aprenda e pratique skills que vão além de questões técnicas,
                  como: comunicação eficaz, trabalho em equipe, proatividade e
                  pensamento crítico.
                </Card>
              </div>

              <div class="column">
                <Card icon={<RocketIcon />} title="Ensino baseado em projetos">
                  Pratique diariamente através de projetos a resolução de
                  problemas semelhantes aos encontrados no dia a dia de um
                  desenvolvedor.
                </Card>
              </div>

              <div class="column">
                <Card icon={<LeadershipIcon />} title="Mentoria">
                  Conte com mentores para ajudar você com temas técnicos e no
                  desenvolvimento da sua carreira profissional.
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="column">
            <h3 class="kz-title">Como é o dia-a-dia?</h3>

            <div class="kz-schedule">
              <img class="is-hidden-mobile" src={SecondImage} />
              <img class="is-hidden-desktop" src={SecondMobileImage} />

              <div className="kz-schedule-note">
                <p class="is-bold">1-2 vezes por mês teremos também:</p>

                <ul>
                  <li>- Encontros com mentores</li>
                  <li>- Palestras com especialistas</li>
                  <li>- Prática de soft skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Curriculum;
