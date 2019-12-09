import React from "react";
import Layout from "@layout/default";
import Card from "@components/card";
import Thumbnail from "@components/thumbnail";

//Images
import FirstImage from "@images/curriculum/photo-1.png";
import SecondImage from "@images/curriculum/photo-2.png";
import SecondMobileImage from "@images/curriculum/photo-2-mobile.png";

import HTMLCSS from "@images/skills/html-css.png";
import JavaScript from "@images/skills/javascript.png";
import NodeJS from "@images/skills/nodejs.png";
import Python from "@images/skills/python.png";
import ReactJS from "@images/skills/react.png";

//Icon
import AgileIcon from "@icons/agile";
import LeadershipIcon from "@icons/leadership";
import RocketIcon from "@icons/rocket";
import SkillIcon from "@icons/skill";

import "@styles/pages/curriculum.scss";

const Curriculum = () => {
  return (
    <Layout>
      <div className="kz-section has-text-centered">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h3 className="kz-section-head-title">Currículo</h3>

              {/* prettier-ignore */}
              <p className="kz-section-text">
              A <span className="is-bold">Kenzie</span> conta com um <span className="is-bold">currículo completo</span> para 
              a atuação de um <span className="is-bold">desenvolvedor full-stack</span> no mercado de tecnologia.
            </p>
            </div>
          </div>
        </div>
      </div>

      <div className="kz-section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <Thumbnail src={FirstImage} reverse={true} />
            </div>

            <div className="column is-5 is-offset-1">
              <h3 className="kz-section-title">Como funciona</h3>

              {/* prettier-ignore */}
              <p className="kz-section-text">
                Para formarmos o melhor desenvolvedor <span className="is-bold">full-stack</span> nosso currículo
                abrange tecnologias front-end nos <span className="is-bold">6 primeiros meses</span> e back-end
                nos 6 últimos meses. Trimestralmente melhoramos nosso material
                conforme atualizações do mercado e <span className="is-bold">feedback dos alunos</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="kz-section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h3 className="kz-section-title">
                Currículo front-end 6 primeiros meses
              </h3>

              <ul className="kz-section-list">
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

            <div className="column">
              <div className="columns is-mobile is-multiline">
                <div className="column is-half-mobile is-one-third-desktop">
                  <div className="kz-skill-card">
                    <img src={HTMLCSS} />
                    <p>HTML e CSS</p>
                  </div>
                </div>

                <div className="column is-half-mobile is-one-third-desktop">
                  <div className="kz-skill-card">
                    <img src={JavaScript} />
                    <p>JavaScript</p>
                  </div>
                </div>

                <div className="column is-one-third-desktop">
                  <div className="kz-skill-card">
                    <img src={ReactJS} />
                    <p>React</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="kz-section">
        <div className="container">
          <div className="columns reverse-columns is-vcentered">
            <div className="column">
              <div className="columns is-mobile is-multiline">
                <div className="column is-6">
                  <div className="kz-skill-card">
                    <img src={NodeJS} />
                    <p>Node.js</p>
                  </div>
                </div>

                <div className="column is-6">
                  <div className="kz-skill-card">
                    <img src={Python} />
                    <p>Python</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <h3 className="kz-section-title">
                Currículo back-end 6 últimos meses
              </h3>

              <ul className="kz-section-list">
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
      </div>

      <div className="kz-section">
        <div className="container is-fullhd">
          <div className="column">
            <h3 className="kz-title">Nosso diferencial</h3>

            <div className="columns is-multiline">
              <div className="column is-half-tablet is-one-quarter-desktop">
                <Card icon={<AgileIcon />} title="Metodologia ágil">
                  Aprenda os conceitos e vivencie a utilização dessa metodologia
                  utilizada em grandes com cada vez mais frequência em empresas
                  e startups.
                </Card>
              </div>

              <div className="column is-half-tablet is-one-quarter-desktop">
                <Card icon={<SkillIcon />} title="Soft skills">
                  Aprenda e pratique skills que vão além de questões técnicas,
                  como: comunicação eficaz, trabalho em equipe, proatividade e
                  pensamento crítico.
                </Card>
              </div>

              <div className="column is-half-tablet is-one-quarter-desktop">
                <Card icon={<RocketIcon />} title="Ensino baseado em projetos">
                  Pratique diariamente através de projetos a resolução de
                  problemas semelhantes aos encontrados no dia a dia de um
                  desenvolvedor.
                </Card>
              </div>

              <div className="column">
                <Card icon={<LeadershipIcon />} title="Mentoria">
                  Conte com mentores para ajudar você com temas técnicos e no
                  desenvolvimento da sua carreira profissional.
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="kz-section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h3 className="kz-section-featured-title">Como é o dia-a-dia?</h3>

              <div className="kz-schedule">
                <img className="is-hidden-mobile" src={SecondImage} />
                <img className="is-hidden-desktop" src={SecondMobileImage} />

                <div className="kz-schedule-note">
                  <p className="is-bold">1-2 vezes por mês teremos também:</p>

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
      </div>
    </Layout>
  );
};

export default Curriculum;
