import React from "react";
import { Link } from "gatsby";

import NavLink from "@components/nav-link";
import Symbol from "@images/brand/symbol.svg";
import "@styles/header.scss";

const Header = ({ onOpenLeadForm }) => {
  return (
    <div className="kz-header">
      <div className="container">
        <div className="columns is-gapless is-vcentered is-mobile is-justified-between">
          <div className="column is-narrow">
            <Link className="kz-header-brand" to="/">
              <img src={Symbol} alt="Kenzie" />
            </Link>
          </div>

          <div className="column is-narrow">
            <div className="columns is-vcentered">
              <div className="column is-narrow">
                <ul className="kz-header-nav">
                  <li>
                    <NavLink to={`/quem-somos/`} title="Quem somos">
                      Quem somos
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to={`/curriculo/`} title="Currículo">
                      Currículo
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to={`/pagamento/`} title="Pagamento">
                      Pagamento
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="column is-narrow">
                <button
                  onClick={onOpenLeadForm}
                  className="kz-button with-shadow"
                >
                  Quero participar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
