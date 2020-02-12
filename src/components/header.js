import React, { useState } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import Symbol from "@images/brand/symbol.svg";
import CloseIcon from "@icons/close";
import "@styles/header.scss";

const Header = ({ onOpenLeadForm }) => {
  const [isOpen, setOpen] = useState(false);

  const navClass = classNames("kz-header-nav", {
    "is-open": isOpen
  });

  return (
    <div className="kz-header">
      <div class="container">
        <div class="columns is-mobile is-vcentered is-justified-between">
          <div class="column is-narrow">
            <Link className="kz-header-brand" to="/">
              <img width="57" height="57" src={Symbol} alt="Kenzie" />
            </Link>
          </div>

          <div className="column">
            <div className="columns is-mobile is-vcentered reverse-columns">
              <div className="column is-narrow is-hidden-tablet">
                <button
                  className="kz-header-toggle"
                  onClick={() => setOpen(!isOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

              <div className="column is-narrow">
                <ul className={navClass}>
                  <li className="is-hidden-desktop">
                    <CloseIcon
                      width="20px"
                      height="20px"
                      fill="white"
                      onClick={() => setOpen(false)}
                    />
                  </li>

                  <li>
                    <Link to={`/quem-somos/`} title="Quem somos">
                      Quem somos
                    </Link>
                  </li>

                  <li>
                    <Link to={`/curriculo/`} title="Currículo">
                      Currículo
                    </Link>
                  </li>

                  <li>
                    <Link to={`/pagamento/`} title="Pagamento">
                      Pagamento
                    </Link>
                  </li>
                </ul>

                <button onClick={onOpenLeadForm} className="kz-button">
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
