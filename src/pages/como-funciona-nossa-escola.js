import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "@layout/default";
import Thumbnail from "@components/thumbnail";
import BrandSymbol from "@icons/k";
import "@styles/pages/school.scss";

const School = props => {
  return (
    <Layout
      className="kz-school-page"
      title="Como funciona nossa escola | Kenzie Academy Brazil"
    >
      <div className="kz-section">
        <div className="container with-symbol-bg">
          <div className="columns is-justified-between is-gapless">
            <div className="column is-3 has-text-left">
              <div className="kz-left-side">
                <h3>Aulas presenciais na Kenzie</h3>

                <ul>
                  <li>
                    <h4>+ 2.000</h4>
                    <p>Horas de curso</p>
                  </li>

                  <li>
                    <h4>LIVES</h4>
                    <p>Todos os dias</p>
                  </li>

                  <li>
                    <p>No conforto de</p>
                    <h4>Sua casa</h4>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column is-4 is-align-center">
              <div className="kz-center">
                <Thumbnail
                  fluid={props.data.imageOne.childImageSharp.fluid}
                  alt="Grupo de alunos"
                  removeFrame={true}
                />

                <BrandSymbol width="140" height="140" fill="#58a0f3" />
              </div>
            </div>

            <div className="column is-4 has-text-right">
              <div className="kz-right-side">
                <h3>Apresentando o desenvolvimento web, a maneira Kenzie</h3>
                <ul>
                  <li>
                    <h4>Cursos ao vivo</h4>
                    <p>
                      Aprenda a codificar no seu próprio tempo e no conforto de
                      casa.
                    </p>
                  </li>

                  <li>
                    <h4>Soft skills</h4>
                    <p>
                      Aprenda e pratique skills que vão além de questões
                      técnicas, como: comunicação eficaz, trabalho em equipe,
                      proatividade e pensamento crítico.
                    </p>
                  </li>

                  <li>
                    <h4>Soft skills</h4>
                    <p>
                      Conte com mentores para ajudar você com temas técnicos e
                      no desenvolvimento da sua carreira profissional.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="kz-school-footer">
            <Link
              to="/#como-funciona-nossa-escola"
              className="kz-button is-primary is-outlined"
            >
              Voltar
            </Link>

            <button className="kz-button is-primary">Inscrever-se</button>
          </div>
        </div>
      </div>
    </Layout>
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
    imageOne: file(relativePath: { eq: "school/photo-1.png" }) {
      ...fluidImage
    }
  }
`;

export default School;
