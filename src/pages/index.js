import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "@layout/default";

//Components
import Card from "@components/card";
import Thumbnail from "@components/thumbnail";
import PartnerList from "@components/partner-list";
import NewsList from "@components/news-list";

//Icon
import TechHandsIcon from "@icons/tech-hands";
import ComputerWithToolsIcon from "@icons/computer-with-tools";
import MethodologyIcon from "@icons/methodology";

import "@styles/pages/home.scss";

const Index = props => {
  return (
    <React.Fragment>
      <Layout
        className="kz-home-page"
        title="Comece aqui sua carreira em tecnologia! | Kenzie Academy Brazil"
      >
        <div className="kz-hero">
          <div className="container">
            <div className="columns is-vcentered reverse-columns-tablet">
              <div className="column">
                <h1 className="kz-hero-title">Comece aqui sua carreira</h1>

                <div className="kz-hero-content">
                  {/* prettier-ignore */}
                  <p className="kz-section-text">
                    Aprenda com os melhores profissionais a se tornar um <span className="is-bold">PROGRAMADOR</span> completo.
                  </p>

                  {/* prettier-ignore */}
                  <p className="kz-section-text">
                    Começamos em 2017 nos Estados Unidos com o propósito de
                    oferecer a oportunidade para pessoas se formarem e ingressarem
                    no mercado de tecnologia <span className="is-bold">rapidamente, 
                    sem mensalidade e com alta qualidade.</span>
                  </p>

                  {/* prettier-ignore */}
                  <p className="kz-section-text">
                    Já formamos <span className="is-bold">centenas de alunos</span> e
                    contamos com uma <span className="is-bold">alta taxa de empregabilidade!</span>
                  </p>
                </div>

                <Link className="kz-button" to="/quem-somos">
                  Saiba mais
                </Link>
              </div>
              <div className="column">
                <Thumbnail
                  fluid={props.data.imageOne.childImageSharp.fluid}
                  removeBg={true}
                  alt="Grupo de alunos"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="kz-section with-blue-bg">
          <div className="container">
            <div className="kz-section-head">
              <h3 className="kz-section-featured-title">
                Curso de programação
              </h3>
              <p className="kz-section-subtitle">
                Mais de 2.000 mil horas de curso
              </p>
            </div>

            <div className="columns is-justified-between">
              <div className="column">
                <Card
                  icon={<TechHandsIcon />}
                  title="O que você vai aprender aqui?"
                  buttonLabel="Saiba mais"
                  buttonTo="/curriculo"
                  align="left"
                >
                  Linguagens de programação modernas e muito utilizadas no
                  mercado. <br />
                  <span className="is-bold">Front-end:</span> HTML, CSS,
                  JavaScript e React. <br />
                  <span className="is-bold">Back-end:</span> Python e Node.jS.
                </Card>
              </div>

              <div className="column">
                <Card
                  icon={<ComputerWithToolsIcon />}
                  title="Aprenda na prática"
                  buttonLabel="Saiba mais"
                  buttonTo="/curriculo"
                >
                  Nossos alunos criam um amplo portfólio de projetos realizados,
                  se preparando para o dia a dia de um programador e facilitando
                  sua entrada no mercado de trabalho.
                </Card>
              </div>

              <div className="column">
                <Card
                  icon={<MethodologyIcon />}
                  title="Metodologia comprovada"
                  buttonLabel="Saiba mais"
                  buttonTo="/curriculo"
                  align="right"
                >
                  A combinação de aulas, ensino baseado em projetos,
                  acompanhamento do nosso time e currículo validado nos Estados
                  Unidos vai acelerar sua carreira para o sucesso.
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="kz-section">
          <div className="columns">
            <div className="column">
              <div className="kz-section-head">
                <h3 className="kz-section-featured-title">
                  Conheça os nossos parceiros que podem dar início a sua
                  carreira de sucesso.
                </h3>
              </div>

              <PartnerList />
            </div>
          </div>
        </div>

        <div className="kz-section">
          <div className="container">
            <div className="columns reverse-columns-tablet is-vcentered">
              <div className="column">
                <h3 className="kz-section-title">
                  Nós acreditamos em seu potencial!
                </h3>

                <div className="kz-hero-content">
                  {/* prettier-ignore */}
                  <p className="kz-section-text">
                    Por isso, você não paga o curso até ser contratado com uma
                    remuneração de <span className="is-bold">R$ 3.000,00/mês</span>. 
                  </p>

                  <p className="kz-section-text">
                    Para garantir o seu sucesso nós damos todo o apoio para a
                    sua colocação no mercado de trabalho através de mentoria de
                    carreira e parcerias que aceleram sua contratação.
                  </p>
                </div>

                <Link className="kz-button" to="/pagamento">
                  Saiba mais
                </Link>
              </div>

              <div className="column is-offset-1">
                <Thumbnail
                  fluid={props.data.imageTwo.childImageSharp.fluid}
                  alt="Grupo de alunos mexendo no computador"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="kz-section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="kz-section-head">
                  <h3 className="kz-section-featured-title">#kenzienamídia</h3>
                </div>

                <NewsList />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "home/photo-1.jpg" }) {
      ...fluidImage
    }

    imageTwo: file(relativePath: { eq: "home/photo-2.jpg" }) {
      ...fluidImage
    }
  }
`;

export default Index;
